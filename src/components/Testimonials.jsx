import React from "react";
import TestimonialImage from "../assets/Sancy.jpg";

const testimonials = [
  {
    id: 1,
    name: "Sancy Suraj",
    role: "The Umonics Method",
    feedback:
      "Christian consistently demonstrated outstanding performance and commitment during his internship with us. His proactive attitude and dedication to excellence made him a true asset to our team.",
    image: TestimonialImage,
  },
];

const Testimonials = () => {
  return (
    <div
      className="min-h-screen flex items-center bg-gradient-to-r from-black via-[#341212] to-red-800 px-6 py-20"
      id="testimonials"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-white">
          Testimo<span className="text-primary">nial</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#1e1e1e] rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.02] border border-gray-700"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-1">{testimonial.name}</h3>
              <p className="text-primary text-sm italic mb-3">{testimonial.role}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
