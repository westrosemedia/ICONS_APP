"use client";
import React, { Component, ErrorInfo, ReactNode } from "react";
import Button from "./Button";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      // This would typically send to Sentry, LogRocket, etc.
      console.log('Error would be logged to external service:', {
        error: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString()
      });
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleReportError = () => {
    if (this.state.error) {
      // In production, this would open a support ticket or error reporting form
      const errorReport = {
        message: this.state.error.message,
        stack: this.state.error.stack,
        componentStack: this.state.errorInfo?.componentStack,
        userAgent: navigator.userAgent,
        url: window.location.href,
        timestamp: new Date().toISOString()
      };
      
      console.log('Error report:', errorReport);
      
      // For now, just show an alert
      alert('Error has been reported. Thank you for your patience.');
    }
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-black/80 rounded-lg shadow-2xl p-8 border border-white/10 text-center">
            <div className="text-6xl mb-6">⚠️</div>
            
            <h1 className="text-3xl font-heading font-bold text-white mb-4">
              Something went wrong
            </h1>
            
            <p className="text-lg font-body text-white/80 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-white/60 cursor-pointer mb-2">
                  Error Details (Development)
                </summary>
                <div className="bg-white/10 p-4 rounded text-xs font-mono text-white/80 overflow-auto">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  {this.state.error.stack && (
                    <div className="mb-2">
                      <strong>Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1">{this.state.error.stack}</pre>
                    </div>
                  )}
                  {this.state.errorInfo?.componentStack && (
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1">{this.state.errorInfo.componentStack}</pre>
                    </div>
                  )}
                </div>
              </details>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                color="accent"
                onClick={this.handleRetry}
                className="w-full sm:w-auto"
              >
                Try Again
              </Button>
              
              <Button
                color="white"
                onClick={() => window.location.href = '/'}
                className="w-full sm:w-auto"
              >
                Go Home
              </Button>
            </div>
            
            <button
              onClick={this.handleReportError}
              className="mt-6 text-white/60 hover:text-white/80 transition-colors duration-200 text-sm font-body"
            >
              Report this error
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 