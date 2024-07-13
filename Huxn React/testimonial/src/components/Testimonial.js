import React, { useState } from "react";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life.",
      author: "Huxn",
    },
    {
      quote: "This product highly recommend to everyone",
      author: "Vishwa",
    },
    {
      quote: "This is the best product I ever used",
      author: "Kumar",
    },
  ];
  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonial.length - 1) % testimonial.length
    );
  };
  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonial.length);
  };
  return (
    <div className="mx-auto my-0 text-center font-sans rounded-xl p-10 shadow shadow-[rgb(0,0,0,0.1)]">
      <p className="text-2xl italic mb-2.5 text-[#666]">
        {testimonial[currentIndex].quote}
      </p>
      <p className="text-lg font-bold mb-5 text-[#333]">
        - {testimonial[currentIndex].author}
      </p>
      <nav className="flex justify-between">
        <button
          type="button"
          className="px-5 py-2.5 bg-[#42c9d5] hover:bg-[#58b5bd] text-white text-base rounded"
          onClick={handlePrevClick}
        >
          Prev
        </button>
        <button
          type="button"
          className="px-5 py-2.5 bg-[#42c9d5] hover:bg-[#58b5bd] text-white text-base rounded"
          onClick={handleNextClick}
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default Testimonial;
