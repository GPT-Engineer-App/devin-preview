import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4">
        We are a leading AI company, dedicated to bringing you the best in artificial intelligence technology. Our team of experts works tirelessly to innovate and improve our solutions.
      </p>
      <img src="/images/about-us.jpg" alt="About Us" className="w-full h-auto mb-4" />
      <p className="text-lg">
        Learn more about our journey and how we are making a difference in the AI industry.
      </p>
    </div>
  );
};

export default About;