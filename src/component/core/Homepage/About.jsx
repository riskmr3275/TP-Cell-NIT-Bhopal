import React from "react";

const primaryColor = "#003366"; // Dark Blue
const secondaryColor = "#FFFFFF"; // White
const accentColor = "#FFCC00"; // Gold
const backgroundColor = "#F4F4F4"; // Light Gray
const textColor = "#333333"; // Dark Gray

export default function AboutUs() {
  return (
    <>
      <div className="min-h-screen" style={{ backgroundColor: backgroundColor, color: textColor }}>
        {/* About MANIT Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold font-serif text-center" style={{ color: primaryColor, marginBottom: '4rem' }}>
              About MANIT Bhopal
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
              Maulana Azad National Institute of Technology (MANIT), Bhopal is a prestigious public technical university offering cutting-edge engineering programs with state-of-the-art infrastructure. Established in 1960, the institution is committed to providing world-class education and fostering innovation in the field of technology and research.
            </p>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section id="vision-mission" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center" style={{ color: primaryColor, marginBottom: '4rem' }}>
              Our Vision & Mission
            </h2>
            <div className="flex flex-col md:flex-row justify-around gap-16 md:gap-0">
              {/* Vision */}
              <div className="text-center transform transition-all duration-500 hover:scale-105 hover:bg-gray-200 p-6 rounded-lg">
                <h3 className="text-3xl font-semibold" style={{ color: primaryColor, marginBottom: '1rem' }}>
                  Vision
                </h3>
                <p className="text-lg text-gray-600 max-w-md mx-auto">
                  To be a leading institution in the country for imparting quality education, fostering innovation, and contributing to the development of global citizens through excellence in teaching, research, and entrepreneurship.
                </p>
              </div>
              {/* Mission */}
              <div className="text-center transform transition-all duration-500 hover:scale-105 hover:bg-gray-200 p-6 rounded-lg">
                <h3 className="text-3xl font-semibold" style={{ color: primaryColor, marginBottom: '1rem' }}>
                  Mission
                </h3>
                <p className="text-lg text-gray-600 max-w-md mx-auto">
                  To provide an academically stimulating environment that nurtures creativity, problem-solving abilities, and the skills necessary to excel in the dynamic world of technology and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold font-serif text-center" style={{ color: primaryColor, marginBottom: '4rem' }}>
              Our Services
            </h2>
            <div className="flex flex-col md:flex-row justify-around items-center gap-16 md:gap-0">
              {/* Service 1 */}
              <div className="text-center transform transition-all duration-500 hover:scale-105 hover:bg-gray-200 p-6 rounded-lg">
                <h3 className="text-3xl font-semibold" style={{ color: primaryColor, marginBottom: '1rem' }}>
                  Skill Development
                </h3>
                <p className="text-lg text-gray-600 max-w-md mx-auto">
                  Enhance your technical and soft skills through our comprehensive training programs.
                </p>
              </div>
              {/* Service 2 */}
              <div className="text-center transform transition-all duration-500 hover:scale-105 hover:bg-gray-200 p-6 rounded-lg">
                <h3 className="text-3xl font-semibold" style={{ color: primaryColor, marginBottom: '1rem' }}>
                  Career Counseling
                </h3>
                <p className="text-lg text-gray-600 max-w-md mx-auto">
                  Receive personalized guidance to identify your strengths and explore the best career paths.
                </p>
              </div>
              {/* Service 3 */}
              <div className="text-center transform transition-all duration-500 hover:scale-105 hover:bg-gray-200 p-6 rounded-lg">
                <h3 className="text-3xl font-semibold" style={{ color: primaryColor, marginBottom: '1rem' }}>
                  Placement Assistance
                </h3>
                <p className="text-lg text-gray-600 max-w-md mx-auto">
                  We connect you with top companies and provide support throughout the recruitment process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center" style={{ color: primaryColor, marginBottom: '4rem' }}>
              Our Achievements
            </h2>
            <div className="flex justify-center items-center gap-12">
              {/* Achievement 1 */}
              <div className="text-center transform transition-all duration-500 hover:scale-105 hover:bg-gray-200 p-6 rounded-lg">
                <h3 className="text-6xl font-semibold" style={{ color: primaryColor }}>95%</h3>
                <p className="text-xl text-gray-600 mt-2">Placement Rate</p>
              </div>
              {/* Achievement 2 */}
              <div className="text-center transform transition-all duration-500 hover:scale-105 hover:bg-gray-200 p-6 rounded-lg">
                <h3 className="text-6xl font-semibold" style={{ color: primaryColor }}>10+</h3>
                <p className="text-xl text-gray-600 mt-2">Years of Experience</p>
              </div>
              {/* Achievement 3 */}
              <div className="text-center transform transition-all duration-500 hover:scale-105 hover:bg-gray-200 p-6 rounded-lg">
                <h3 className="text-6xl font-semibold" style={{ color: primaryColor }}>500+</h3>
                <p className="text-xl text-gray-600 mt-2">Students Placed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Student Life Section */}
        <section id="student-life" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center" style={{ color: primaryColor, marginBottom: '4rem' }}>
              Student Life at MANIT
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
              At MANIT, student life is vibrant and full of opportunities for growth. From cultural festivals to technical workshops, there is always something happening. Our students engage in extracurricular activities that shape their overall development, preparing them for the challenges ahead.
            </p>
          </div>
        </section>

        {/* Alumni Section */}
        <section id="alumni" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center" style={{ color: primaryColor, marginBottom: '4rem' }}>
              Our Alumni
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
              Our alumni are the pride of MANIT, excelling in diverse fields globally. They contribute to the growth of the institution and mentor students, helping them succeed in their career paths. Join the vast alumni network that offers lifelong connections and professional opportunities.
            </p>
          </div>
        </section>

      </div>
    </>
  );
}
