import React from 'react';
import Header from '../component/common/Header';
import Footer from '../component/common/Footer';
import About from '../component/core/Homepage/About';

const AboutUs = () => (
    <div className="bg-gray-100">
      

     

        {/* Main content: Announcements, Resources, and Featured Companies */}
        <section className="space-y-6">
            <About />
        </section>

        {/* Footer */}
        <section className="space-y-6">
            <Footer />
        </section>
    </div>
);

export default AboutUs;
