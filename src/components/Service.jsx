import React from 'react';

const services = [
  {
    id: 1,
    title: 'Web Design',
    description: 'Crafting visually stunning and user-friendly interfaces.',
  },
  {
    id: 2,
    title: 'App Development',
    description: 'Building fast, scalable mobile applications.',
  },
  {
    id: 3,
    title: 'SEO Optimization',
    description: 'Boosting visibility through proven SEO strategies.',
  },
];

const Service = () => {
  return (
    <div
      className="min-h-screen flex items-center bg-gradient-to-r from-black via-[#341212] to-red-800 px-4 py-20"
      id="service"
    >
      <div className="container mx-auto px-4 md:px-12 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-white">
          My <span className="text-red-400">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-gradient-to-br from-yellow-500 via-orange-400 to-lime-500 p-8 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105"
            >
              <span className="block text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-4">
                0{index + 1}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-base text-gray-800 mb-6 leading-relaxed">
                {service.description}
              </p>
              <a
                href="#"
                className="inline-block text-sm font-medium text-blue-900 hover:text-white hover:underline transition"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
