export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About ZeninX
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Learn more about our mission to help you master your habits and ascend the ranks
          </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            At ZeninX, we believe that building better habits shouldn't feel like a chore. Our mission 
            is to transform the way people approach personal development by making habit tracking engaging, 
            motivating, and fun through gamification.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            We're committed to helping you build consistency, track your progress, and achieve your wellness 
            goals through our unique ranking system that turns daily habits into an exciting journey from 
            Iron to Radiant.
          </p>
        </div>
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p>
            To become the most engaging and effective habit tracking platform, helping millions of people 
            build better lives through gamified wellness and consistent daily actions. We envision a world 
            where personal growth feels rewarding and achievable for everyone.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Our Values
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Gamification</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Making habit building fun and engaging through game mechanics
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Consistency</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Helping you build lasting habits through daily tracking
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">💪</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Growth</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Empowering personal development and self-improvement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

