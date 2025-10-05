
const TestimonialCard = ({ quote, name, title, initials, bandScore, improvement }) => {
  return (
    <div className="
      bg-white rounded-xl p-8 shadow-md relative
      transition-all duration-300 ease-in-out
      hover:shadow-lg hover:-translate-y-1 hover:border-red-500 border border-transparent
    ">
      {/* Quotation Mark (Top Right) */}
      <span className="absolute top-4 right-6 text-5xl font-extrabold text-pink-100 select-none">
        &rdquo;
      </span>

      {/* Stars */}
      <div className="text-yellow-400 text-xl mb-4">
        {Array(5).fill('⭐')} {/* 5 full stars */}
      </div>

      {/* Quote */}
      <p className="text-gray-700 leading-relaxed mb-6 italic">
        "{quote}"
      </p>

      {/* Footer (User Info & Scores) */}
      <div className="flex justify-between items-center mt-auto">
        {/* User Info */}
        <div className="flex items-center">
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">
            {initials}
          </div>
          <div>
            <p className="font-semibold text-gray-800">{name}</p>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>

        {/* Scores */}
        <div className="flex flex-col items-end space-y-1 flex-shrink-0">
          <span className="bg-red-600 text-white font-bold text-xs px-3 py-1 rounded">
            Band {bandScore}
          </span>
          <span className="text-green-600 font-medium text-xs">
            {improvement} improvement
          </span>
        </div>
      </div>
    </div>
  );
};

// --- Reusable Stats Component ---
const StatItem = ({ count, label }) => {
    return (
        <div className="flex flex-col items-center text-center p-4">
            <p className="text-4xl md:text-5xl font-extrabold text-red-700 mb-1">
                {count}
            </p>
            <p className="text-sm uppercase tracking-wider text-gray-700 font-medium">
                {label}
            </p>
        </div>
    );
}

// --- Main Success Stories Section ---
const Testimonials = () => {
  const testimonials = [
    {
      quote: "IELTS Excellence transformed my preparation journey. Their AI-powered feedback system helped me identify my weak areas and improve systematically. I achieved band 8.5 in just 3 months!",
      name: "Sarah Johnson",
      title: "University Student",
      initials: "SJ",
      bandScore: "8.5",
      improvement: "+2.0",
    },
    {
      quote: "The mock tests were incredibly realistic and the speaking practice sessions gave me the confidence I needed. The instructors provided personalized feedback that made all the difference.",
      name: "Ahmed Hassan",
      title: "Software Engineer",
      initials: "AH",
      bandScore: "7.5",
      improvement: "+1.5",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Success Stories
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our students who achieved their dream IELTS scores and transformed their futures.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16 md:mb-24">
          {testimonials.map((story, index) => (
            <TestimonialCard
              key={index}
              quote={story.quote}
              name={story.name}
              title={story.title}
              initials={story.initials}
              bandScore={story.bandScore}
              improvement={story.improvement}
            />
          ))}
        </div>

        {/* Key Statistics (Bottom Row) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem count="10,000+" label="Students Trained" />
            <StatItem count="98%" label="Success Rate" />
            <StatItem count="7.5+" label="Average Band Score" />
            <StatItem count="4.9/5" label="Student Rating" />
        </div>

      </div>
    </section>
  );
};

export default Testimonials;