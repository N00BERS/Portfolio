import React from "react";
import TestimonialImage from "../assets/Sancy.jpg"; // Replace with your actual image file

const testimonials = [
  {
    id: 1,
    name: "Sancy Suraj",
    role: "The Umonics Method",
    feedback:
      "I am pleased to provide this testimonial for Christian Rama, who recently completed his internship with us at The Umonics Method. During his time here, Christian consistently demonstrated outstanding performance and commitment to his role. His proactive attitude and dedication to excellence made him a true asset to our team.",
    image: TestimonialImage,
  },
];

const Testimonials = () => {
  return (
    <div
      className="min-h-screen flex items-center bg-gradient-to-r from-black via-[#341212] to-red-800 px-8 py-32 relative"
      id="testimonials"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-20 text-white">
          Testimo<span className="text-primary">nial</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#1e1e1e] rounded-xl p-8 shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.03] border border-gray-700"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-white mb-1">{testimonial.name}</h3>
              <p className="text-primary text-lg italic mb-4">{testimonial.role}</p>
              <p className="text-gray-300 text-base leading-relaxed">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
