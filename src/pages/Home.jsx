import React from 'react';
import Announcements from '../component/core/Homepage/Announcements';
import Resources from '../component/core/Homepage/Resources';
import FeaturedCompanies from '../component/core/Homepage/FeaturedCompanies';
import Footer from '../component/common/Footer';
import HomePageImage from '../component/core/Homepage/HomePageImage';
import UpcomingEvents from '../component/core/Homepage/UpcomingEvents';
import ReviewSlider from './ReviewSlider';
const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Home Page Banner */}
      <HomePageImage/>

      {/* Main content: Announcements, Resources, and Featured Companies */}
     
        <section className="space-y-6">
          <Announcements />
        </section>
        <section className="space-y-6">
          <UpcomingEvents />
        </section>
      {/* review slider*/}
      <section className="space-y-6">
          <ReviewSlider/>
        </section>
        {/* Resources */}
        <section className="space-y-6">
          <Resources />
        </section>

        {/* Featured Companies */}
        <section className="space-y-6">
          <FeaturedCompanies />
        </section>
        <section className="space-y-6">
          <Footer />
        </section>
      
   
    </div>
  );
};

export default Home;
