import React, { useState, useEffect } from 'react';
import '../../styles/Testimonial.css';

const testimonials = [
  {
    avatar: "Images/avaters/avatar-1.jpeg",
    name: "David Niph",
    role: "Local shop owner",
    text: "Running a small show can be a whirlwind!  Between booking vendors, promoting the event, and ensuring everything runs smoothly on the day, it's easy to feel overwhelmed. That's why hearing positive feedback from past show attendees is so rewarding.  Here's what some of our happy attendees had to say about [Show Name].."
  }, 
  {
    avatar: "Images/avaters/avatar-2.jpeg",
    name: "Saira Nazim",
    role: "Local shop owner",
    text: "At [Your Show Name], we strive to create a memorable experience for both vendors and attendees. Here are some testimonials that showcase the impact of our [Specific Service - e.g., efficient setup process, diverse vendor selection, family-friendly atmosphere]:.."
  },
  {
    avatar: "Images/avaters/avatar-3.jpeg",
    name: "Saira Hakim",
    role: "Local shop owner",
    text: "We understand that choosing the right show for your needs is important.  Here's what some of our past vendors had to say about their experience at [Show Name]: These testimonials come from real people who participated in our show, and we're confident they reflect the positive atmosphere and successful outcomes we aim to deliver for everyone involved."
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-section mt-150 mb-150">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 offset-lg-1 text-center">
            <div className="testimonial-sliders">
              {testimonials.map((testimonial, index) => (
                <div
                  className={`single-testimonial-slider ${index === currentIndex ? 'active' : ''}`}
                  key={index}
                >
                  <div className="client-avater">
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </div>
                  <div className="client-meta">
                    <h3>{testimonial.name} <span>{testimonial.role}</span></h3>
                    <p className="testimonial-body">
                      "{testimonial.text}"
                    </p>
                    <div className="last-icon">
                      <i className="fas fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
