"use client";

import React, { useRef, useState } from "react";
import { app, db, storage } from "../lib/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { collection, addDoc, serverTimestamp, doc, setDoc } from "firebase/firestore";

// Placeholder user and business name
type Note = {
  id: string;
  url: string;
  transcript: string;
  createdAt: Date;
};

const uid = "demoUserId"; // TODO: Replace with real user ID from auth
const clientBusinessName = "DemoBusiness"; // TODO: Replace with real business name

export default function VoiceRecorder() {
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [transcribing, setTranscribing] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Start recording
  const startRecording = async () => {
    setError(null);
    setAudioChunks([]);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
      const chunks: Blob[] = [];
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };
      recorder.onstop = () => {
        setAudioChunks(chunks);
        handleSave(chunks);
      };
      setMediaRecorder(recorder);
      recorder.start();
      setRecording(true);
    } catch (err) {
      setError("Microphone access denied or not available.");
    }
  };

  // Stop recording
  const stopRecording = () => {
    if (mediaRecorder && recording) {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  // Save audio and transcript
  const handleSave = async (chunks: Blob[]) => {
    setLoading(true);
    setTranscribing(true);
    setError(null);
    try {
      const blob = new Blob(chunks, { type: "audio/webm" });
      const timestamp = Date.now();
      const noteId = `${timestamp}_${clientBusinessName}`;
      const storagePath = `storyVault/${uid}/${noteId}.webm`;
      const storageRef = ref(storage, storagePath);
      await uploadBytes(storageRef, blob);
      const url = await getDownloadURL(storageRef);

      // Placeholder: Call transcription API here
      // Replace with actual API call to Deepgram/Whisper
      const transcript = "[Transcription placeholder: integrate Deepgram/Whisper API here]";

      // Save metadata + transcript to Firestore
      const noteDoc = doc(db, `storyVault/${uid}/${noteId}`);
      await setDoc(noteDoc, {
        url,
        transcript,
        createdAt: serverTimestamp(),
      });

      setNotes((prev) => [
        {
          id: noteId,
          url,
          transcript,
          createdAt: new Date(),
        },
        ...prev,
      ]);
    } catch (err) {
      setError("Failed to save note. Please try again.");
    } finally {
      setLoading(false);
      setTranscribing(false);
    }
  };

  // Copy transcript
  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };

  // Edit transcript in UI only (not persisted)
  const handleTranscriptChange = (id: string, value: string) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, transcript: value } : note
      )
    );
  };

  return (
    <div className="max-w-lg mx-auto p-4 space-y-8">
      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={recording ? stopRecording : startRecording}
          className={`px-6 py-3 rounded-full text-white font-semibold focus:outline-none transition-all duration-200 ${
            recording ? "bg-red-500 animate-pulse" : "bg-primary hover:bg-blue-600"
          }`}
          disabled={loading}
        >
          {recording ? "Stop Recording" : "Start Recording"}
        </button>
        {recording && (
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
            <span className="text-red-500 font-medium">Recording...</span>
          </div>
        )}
        {error && <div className="text-red-600 text-sm">{error}</div>}
      </div>
      <div className="space-y-6">
        {notes.length === 0 && (
          <div className="text-center text-gray-400">No voice notes yet.</div>
        )}
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-white rounded-lg shadow p-4 flex flex-col space-y-3 border border-gray-100"
          >
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>
                {new Date(note.createdAt).toLocaleString()}
              </span>
              <span className="font-mono text-gray-400">{note.id}</span>
            </div>
            <audio
              ref={audioRef}
              controls
              src={note.url}
              className="w-full"
            />
            <div className="flex items-center space-x-2">
              <textarea
                className="w-full border rounded p-2 text-sm focus:ring focus:ring-primary/30"
                value={note.transcript}
                onChange={(e) => handleTranscriptChange(note.id, e.target.value)}
                rows={2}
              />
              <button
                onClick={() => handleCopy(note.transcript)}
                className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200 text-xs"
                title="Copy transcript"
              >
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>
      {loading && (
        <div className="flex items-center justify-center text-primary">
          Saving note...
        </div>
      )}
      {transcribing && (
        <div className="flex items-center justify-center text-primary">
          Transcribing audio...
        </div>
      )}
    </div>
  );
} 