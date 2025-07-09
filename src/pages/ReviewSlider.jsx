import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Review slider content
  const reviews = [
    {
      text: "The Training and Placement Cell in Bhopal was a transformative experience for me. From the first day of joining, I received comprehensive guidance on resume building, skill enhancement, and career paths. The mentors were incredibly supportive, providing feedback that truly helped me identify and improve my weaknesses. Through this process, I secured an internship that directly led to my current role in a prestigious tech firm. I'm thankful to the team for their commitment to student success and their efforts to help every student achieve their dreams.",
      name: "Rahul Verma",
      role: "Software Engineer",
      company: "Google",
      image: "https://tse1.mm.bing.net/th?id=OIP.bysCjyPD6sPcGaVmErAsHgHaHx&pid=Api&P=0&h=180"
    },
    {
      text: "Joining the Training and Placement Cell was one of the best decisions I made during my college years. The Cell organized numerous mock interviews and workshops that helped me gain the confidence to excel in high-pressure situations. Beyond technical skills, they emphasized soft skills and personal branding, which made a significant difference in my approach to interviews. With their support, I landed an amazing opportunity in a multinational company, and I'm now well on my way to a rewarding career. I cannot thank them enough!",
      name: "Sneha Patel",
      role: "Product Manager",
      company: "Amazon",
      image: "https://www.aquasafemine.com/wp-content/uploads/2018/06/dummy-woman-570x570.png"
    },
    {
      text: "As someone who was initially uncertain about my career direction, the Training and Placement Cell's guidance was invaluable. They conducted sessions on various career options and helped me align my interests with potential job roles. The practice sessions were thorough, and I received personal feedback that helped me refine my skills. Thanks to their support, I not only got my dream job but also feel more prepared for future challenges. This experience has set a strong foundation for my career, and I'm deeply grateful.",
      name: "Amit Sharma",
      role: "Data Analyst",
      company: "Microsoft",
      image: "https://statinfer.com/wp-content/uploads/dummy-user.png"
    }
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(goToNext, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (

    <section className="bg-gray-100 py-1 px-6 lg:px-12 text-center">
        <br></br>
         <h1 className="text-4xl font-bold mb-4 py-5">
        Inspiring Stories from Our Students
      </h1>
      {/* Review Slider */}
      <div className="relative flex flex-col items-center bg-blue-950 text-white p-8 w-full max-w-full mx-auto rounded-b-[50px] shadow-lg">
        <img
          src={reviews[currentIndex].image}
          alt={reviews[currentIndex].name}
          className="rounded-full h-20 w-20 mb-4"
        />
        <h2 className="text-xl font-semibold">{reviews[currentIndex].name}</h2>
        <p className="text-gray-200">{reviews[currentIndex].role} at {reviews[currentIndex].company}</p>

        <p className="text-lg font-bold mt-6 mb-4">{reviews[currentIndex].text}</p>

        {/* Navigation Buttons */}
        <button onClick={goToPrevious} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl">
          <FaChevronLeft />
        </button>
        <button onClick={goToNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl">
          <FaChevronRight />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;
