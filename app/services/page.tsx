export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      icon: "🌐",
    },
    {
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: "📱",
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and migration services.",
      icon: "☁️",
    },
    {
      title: "Consulting",
      description: "Expert technology consulting to guide your digital transformation.",
      icon: "💼",
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience.",
      icon: "🎨",
    },
    {
      title: "Support & Maintenance",
      description: "Ongoing support and maintenance to keep your systems running smoothly.",
      icon: "🔧",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comprehensive solutions tailored to meet your business needs
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-gray-200 dark:border-gray-700"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

