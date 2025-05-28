import React from 'react';

const services = [
  {
    id: 1,
    title: 'Web Design',
    description: 'Crafting visually stunning and user-friendly web interfaces that drive engagement and conversion.',
  },
  {
    id: 2,
    title: 'App Development',
    description: 'Building fast, reliable, and scalable mobile applications tailored for modern users.',
  },
  {
    id: 3,
    title: 'SEO Optimization',
    description: 'Enhancing your online presence and visibility through proven SEO strategies.',
  },
];

const Service = () => {
  return (
    <div
      className="min-h-screen flex items-center bg-gradient-to-r from-black via-[#341212] to-red-800 px-4 py-32 relative"
      id="service"
    >
      <div className="container mx-auto px-4 md:px-20 lg:px-32 w-full">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-20 text-white drop-shadow-lg">
          My <span className="text-red-400">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-gradient-to-br from-yellow-500 via-orange-400 to-lime-500 p-12 rounded-3xl shadow-2xl transform transition duration-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              <span className="block text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-6">
                0{index + 1}
              </span>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-xl text-gray-800 leading-relaxed mb-8">
                {service.description}
              </p>
              <a
                href="#"
                className="inline-block text-lg font-semibold text-blue-900 hover:text-white hover:underline transition"
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
