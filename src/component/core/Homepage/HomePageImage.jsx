import React, { useEffect, useState } from 'react';

function HomePageImage() {
  const [visibleText, setVisibleText] = useState(''); // Start with an empty string

  const fullText =
    '  Welcome to the central hub for students and recruiters. Explore resources, placement statistics, and upcoming events.';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setVisibleText(fullText.slice(0, index + 1)); // Use slice to avoid undefined
        index++;
      } else {
        clearInterval(interval); // Stop the interval once the text is fully displayed
      }
    }, 100); // Adjust the speed of the animation by changing the interval (in milliseconds)

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [fullText]); // Add fullText as a dependency to ensure proper handling

  return (
    <section className="relative w-full h-auto bg-blue-950">
      {/* Background Image */}
      <div className="w-full h-auto">
        <img
          src="./public/hh2.jpg"
          alt="Home Page Banner"
          className="w-full h-auto object-cover"
          style={{ maxHeight: '500px' }} // Set a maximum height to ensure good visibility
        />
      </div>

      {/* Text Below the Image */}
      <div className="text-center text-white mt-6  font-serif px-4">
        <p className="text-xl md:text-2xl">
          {visibleText} {/* Display the animated text */}
        </p>
      </div>
    </section>
  );
}

export default HomePageImage;