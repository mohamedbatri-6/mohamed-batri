export default function Home() {
    return (
      <div className="flex items-center rounded-2xl justify-center p-6 bg-green-50">
        <div className="  max-w-md text-center">
          <div className="flex justify-center mb-4">
            {/* icone  */}
            <div className="w-6 h-6 bg-teal-700 rounded-full transform rotate-45"></div>
          </div>
          <h1 className="text-3xl font-semibold p-6 text-gray-900 mb-4">Start building today</h1>
          <p className="text-gray-600 mb-6">
            Powerful and production-ready, our cloud platform has the solutions you need to succeed.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition">
              Get started
            </button>
            <button className="border border-gray-300 px-5 py-2 rounded-full hover:bg-gray-100 transition">
              Try for free
            </button>
          </div>
        </div>
      </div>
    );
  }
  