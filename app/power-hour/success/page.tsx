export default function PowerHourSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
            ✅
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Payment Successful!
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Your Power Hour session is confirmed. Check your email for details.
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Next Steps:</h2>
          <ol className="text-left space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
              Check your email for payment confirmation
            </li>
            <li className="flex items-start">
              <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
              Book your 60-minute Zoom call using the calendar link
            </li>
            <li className="flex items-start">
              <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
              Come prepared with your biggest brand challenges
            </li>
          </ol>
        </div>

        <div className="space-y-4">
          <a
            href="https://cal.com/stephanie-westrosemedia/power-hour"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            📅 Book Your Power Hour Call
          </a>
          
          <p className="text-sm text-gray-500 mt-4">
            Questions? Email stephanie@westrosemedia.com
          </p>
        </div>
      </div>
    </div>
  );
}


