export default function NotFound() {
    return (
      <main className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">404</h1>
          <p className="text-lg text-gray-600 mb-6">Page Not Found</p>
          <a href="/" className="text-primary underline">Go Home</a>
        </div>
      </main>
    );
  }