import React from 'react';
import Header from '../component/common/Header';
import Footer from '../component/common/Footer';
import RecruiterInfoPage from '../component/core/Homepage/RecruiterInfoPage';

const ForRecruiters = () => (
    <div className="bg-gray-100">
        {/* Header */}
   

        {/* Main content: Recruiter-specific information */}
        <section className="space-y-6">
            <RecruiterInfoPage />
        </section>

        {/* Footer */}
        <section className="space-y-6">
            <Footer />
        </section>
    </div>
);

export default ForRecruiters;
