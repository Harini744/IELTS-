import React from 'react';

const Hero = () => {
  return (
    <div   id= "#home" className="min-h-screen bg-white " >
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center relative">

          {/* Left Column: Text */}
          <div className="order-2 md:order-1">
            <div className="flex items-center space-x-2 text-sm font-semibold text-red-600 bg-red-50 border border-red-200 rounded-full px-3 py-1 w-max mb-6">
              <span className="text-lg">⭐</span>
              <span>Trusted by 10,000+ Students</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Master Your <span className="text-red-600">IELTS Score</span> with Expert Training
            </h1>

            <p className="text-lg text-gray-700 mb-10 max-w-lg">
              Join thousands of successful students who achieved their dream IELTS scores with our proven methodology and personalized approach.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="flex items-center justify-center px-8 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 hover:scale-105 transition duration-300">
                Start Your Journey <span className="ml-2">→</span>
              </button>
              <button className="px-8 py-3 bg-white text-gray-800 font-semibold border border-gray-300 rounded-lg hover:bg-gray-50 hover:scale-105 transition duration-300">
                View Our Courses
              </button>
            </div>
          </div>

          {/* Right Column: Image & Badge */}
          <div className="order-1 md:order-2 flex justify-center items-center relative">
            <div className="relative w-full max-w-lg">
              <img
                src="https://images.pexels.com/photos/5212687/pexels-photo-5212687.jpeg"
                alt="Students in an IELTS class"
                className="w-full h-80 md:h-96 object-cover rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105"
              />

              {/* Success Story Badge */}
              <div className="absolute -bottom-6 left-4 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-3 w-4/5 sm:w-2/3 md:w-3/4 max-w-xs">
                <div className="text-xl p-2 bg-red-500 text-white rounded-full">⭐</div>
                <div>
                  <p className="font-bold text-lg leading-none">Band 8.5 Achieved!</p>
                  <p className="text-sm text-gray-500">Sarah's Success Story</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Hero;
