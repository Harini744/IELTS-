
import React from 'react';

// Reusable Feature Card Component
const FeatureCard = ({ icon, title, description, iconBgColor, iconTextColor }) => {
  return (
    <div className="
      bg-white rounded-lg shadow-md p-6 flex flex-col items-start text-left
      transition-all duration-300 ease-in-out
      hover:shadow-lg hover:-translate-y-2 hover:border-red-500 border border-transparent
    ">
      {/* Icon */}
      <div className={`
        ${iconBgColor} ${iconTextColor}
        rounded-full p-3 mb-4
        flex items-center justify-center
        text-2xl sm:text-3xl lg:text-4xl // Responsive icon size
      `}>
        {/* Placeholder for actual icons (e.g., Font Awesome, React Icons) */}
        {/* For now, using emojis for visual representation. Replace with SVG/Icon component */}
        {icon === 'microphone' && '🎤'}
        {icon === 'document' && '📄'}
        {icon === 'brain' && '🧠'}
        {icon === 'book' && '📚'}
        {/* In a real app, you would use:
        <YourIconComponent name={icon} className="w-8 h-8" />
        or directly embed SVGs like:
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" ...>...</svg>
        */}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

// Main Section Component
const Features= () => {
  const features = [
    {
      icon: 'microphone',
      title: 'Speaking Practice',
      description: 'Interactive speaking sessions with real-time feedback and pronunciation analysis.',
      iconBgColor: 'bg-blue-50', // light blue
      iconTextColor: 'text-blue-600', // blue icon
    },
    {
      icon: 'document',
      title: 'Mock Tests',
      description: 'Comprehensive practice tests that simulate the actual IELTS exam experience.',
      iconBgColor: 'bg-green-50', // light green
      iconTextColor: 'text-green-600', // green icon
    },
    {
      icon: 'brain',
      title: 'AI Band Score',
      description: 'Advanced AI technology provides instant band score predictions and improvement tips.',
      iconBgColor: 'bg-purple-50', // light purple
      iconTextColor: 'text-purple-600', // purple icon
    },
    {
      icon: 'book',
      title: 'Grammar Boost',
      description: 'Targeted grammar lessons and exercises designed to enhance your writing and speaking.',
      iconBgColor: 'bg-orange-50', // light orange
      iconTextColor: 'text-orange-600', // orange icon
    },
  ];

  return (
    <section  id="#courses" className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-red-600 leading-tight">
            Why Choose IELTS Excellence?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach combines cutting-edge technology with proven
            teaching methods to help you achieve your target IELTS score faster than ever.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8
        ">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconBgColor={feature.iconBgColor}
              iconTextColor={feature.iconTextColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;