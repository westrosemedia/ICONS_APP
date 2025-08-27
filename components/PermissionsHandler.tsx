"use client";
import React, { useState, useEffect } from "react";
import Button from "./Button";

interface PermissionStatus {
  microphone: PermissionState | 'not-supported';
  camera: PermissionState | 'not-supported';
  notifications: PermissionState | 'not-supported';
}

interface PermissionsHandlerProps {
  onPermissionsGranted: () => void;
  onPermissionsDenied: () => void;
}

export default function PermissionsHandler({ onPermissionsGranted, onPermissionsDenied }: PermissionsHandlerProps) {
  const [permissions, setPermissions] = useState<PermissionStatus>({
    microphone: 'not-supported',
    camera: 'not-supported',
    notifications: 'not-supported'
  });
  const [isChecking, setIsChecking] = useState(true);
  const [showPermissionRequests, setShowPermissionRequests] = useState(false);

  useEffect(() => {
    checkPermissions();
  }, []);

  const checkPermissions = async () => {
    setIsChecking(true);
    
    try {
      // Check microphone permission
      let micPermission: PermissionState | 'not-supported' = 'not-supported';
      if (navigator.permissions && navigator.permissions.query) {
        try {
          const micResult = await navigator.permissions.query({ name: 'microphone' as PermissionName });
          micPermission = micResult.state;
        } catch (error) {
          console.log('Microphone permission not supported');
        }
      }

      // Check camera permission
      let camPermission: PermissionState | 'not-supported' = 'not-supported';
      if (navigator.permissions && navigator.permissions.query) {
        try {
          const camResult = await navigator.permissions.query({ name: 'camera' as PermissionName });
          camPermission = camResult.state;
        } catch (error) {
          console.log('Camera permission not supported');
        }
      }

      // Check notification permission
      let notifPermission: PermissionState | 'not-supported' = 'not-supported';
      if ('Notification' in window) {
        notifPermission = Notification.permission === 'default' ? 'prompt' : Notification.permission as PermissionState;
      }

      setPermissions({
        microphone: micPermission,
        camera: camPermission,
        notifications: notifPermission
      });

      // Check if we need to request permissions
      const needsPermissions = (
        micPermission === 'prompt' ||
        camPermission === 'prompt' ||
        notifPermission === 'prompt'
      );

      if (needsPermissions) {
        setShowPermissionRequests(true);
      } else {
        onPermissionsGranted();
      }
    } catch (error) {
      console.error('Error checking permissions:', error);
      onPermissionsGranted(); // Continue anyway
    } finally {
      setIsChecking(false);
    }
  };

  const requestMicrophonePermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(track => track.stop());
      setPermissions(prev => ({ ...prev, microphone: 'granted' }));
    } catch (error) {
      console.error('Microphone permission denied:', error);
      setPermissions(prev => ({ ...prev, microphone: 'denied' }));
    }
  };

  const requestCameraPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach(track => track.stop());
      setPermissions(prev => ({ ...prev, camera: 'granted' }));
    } catch (error) {
      console.error('Camera permission denied:', error);
      setPermissions(prev => ({ ...prev, camera: 'denied' }));
    }
  };

  const requestNotificationPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      setPermissions(prev => ({ ...prev, notifications: permission as PermissionState }));
    } catch (error) {
      console.error('Notification permission denied:', error);
      setPermissions(prev => ({ ...prev, notifications: 'denied' }));
    }
  };

  const handleContinue = () => {
    const hasEssentialPermissions = permissions.microphone !== 'denied' && permissions.camera !== 'denied';
    
    if (hasEssentialPermissions) {
      onPermissionsGranted();
    } else {
      onPermissionsDenied();
    }
  };

  const handleSkip = () => {
    onPermissionsGranted();
  };

  if (isChecking) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-lg font-body">Checking permissions...</p>
        </div>
      </div>
    );
  }

  if (!showPermissionRequests) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 py-12 bg-black/90 rounded-lg shadow-2xl border border-white/10">
        <h2 className="text-4xl font-heading font-bold text-white mb-6 text-center">
          Permissions Required
        </h2>
        
        <p className="text-lg font-body text-white/80 mb-8 text-center">
          To provide the best experience, we need access to certain features on your device.
        </p>

        <div className="space-y-6 mb-8">
          {/* Microphone Permission */}
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">Microphone</h3>
              <p className="text-white/70 font-body">For voice notes in Story Vault</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className={`px-3 py-1 rounded text-sm font-bold ${
                permissions.microphone === 'granted' ? 'bg-green-500 text-white' :
                permissions.microphone === 'denied' ? 'bg-red-500 text-white' :
                'bg-yellow-500 text-black'
              }`}>
                {permissions.microphone === 'granted' ? 'Granted' :
                 permissions.microphone === 'denied' ? 'Denied' : 'Request'}
              </span>
              {permissions.microphone === 'prompt' && (
                <Button
                  color="accent"
                  onClick={requestMicrophonePermission}
                  className="text-sm"
                >
                  Allow
                </Button>
              )}
            </div>
          </div>

          {/* Camera Permission */}
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">Camera</h3>
              <p className="text-white/70 font-body">For photo and video content</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className={`px-3 py-1 rounded text-sm font-bold ${
                permissions.camera === 'granted' ? 'bg-green-500 text-white' :
                permissions.camera === 'denied' ? 'bg-red-500 text-white' :
                'bg-yellow-500 text-black'
              }`}>
                {permissions.camera === 'granted' ? 'Granted' :
                 permissions.camera === 'denied' ? 'Denied' : 'Request'}
              </span>
              {permissions.camera === 'prompt' && (
                <Button
                  color="accent"
                  onClick={requestCameraPermission}
                  className="text-sm"
                >
                  Allow
                </Button>
              )}
            </div>
          </div>

          {/* Notifications Permission */}
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">Notifications</h3>
              <p className="text-white/70 font-body">For updates and reminders</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className={`px-3 py-1 rounded text-sm font-bold ${
                permissions.notifications === 'granted' ? 'bg-green-500 text-white' :
                permissions.notifications === 'denied' ? 'bg-red-500 text-white' :
                'bg-yellow-500 text-black'
              }`}>
                {permissions.notifications === 'granted' ? 'Granted' :
                 permissions.notifications === 'denied' ? 'Denied' : 'Request'}
              </span>
              {permissions.notifications === 'prompt' && (
                <Button
                  color="accent"
                  onClick={requestNotificationPermission}
                  className="text-sm"
                >
                  Allow
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            color="white"
            onClick={handleSkip}
            className="w-full sm:w-auto"
          >
            Skip for Now
          </Button>
          <Button
            color="accent"
            onClick={handleContinue}
            className="w-full sm:w-auto"
          >
            Continue
          </Button>
        </div>

        <p className="text-sm text-white/60 text-center mt-6 font-body">
          You can change these permissions later in your device settings.
        </p>
      </div>
    </div>
  );
} 