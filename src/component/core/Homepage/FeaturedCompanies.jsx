import React from 'react';

const RecruiterCard = ({ logo }) => {
  return (
    <div className="min-w-[150px] mr-12">
      <img src={logo} alt="Company Logo" className="w-30 h-30 object-contain rounded-md mx-2" />
    </div>
  );
};

const FeaturedCompanies = () => {
  const recruiters = [
    {
      logo: 'https://logo.clearbit.com/google.com',
    },
    {
      logo: 'https://logo.clearbit.com/amazon.com',
    },
    {
      logo: 'https://logo.clearbit.com/microsoft.com',
    },
    {
      logo: 'https://logo.clearbit.com/facebook.com',
    },
    {
      logo: 'https://logo.clearbit.com/ibm.com',
    },
    {
      logo: 'https://logo.clearbit.com/accenture.com',
    },
    {
      logo: 'https://logo.clearbit.com/tcs.com',
    },
    {
      logo: 'https://logo.clearbit.com/wipro.com',
    },
    {
      logo: 'https://logo.clearbit.com/infosys.com',
    },
    {
      logo: 'https://logo.clearbit.com/cognizant.com',
    },
    {
      logo: 'https://logo.clearbit.com/capgemini.com',
    },
    {
      logo: 'https://logo.clearbit.com/oracle.com',
    },
    {
      logo: 'https://logo.clearbit.com/sap.com',
    },
    {
      logo: 'https://logo.clearbit.com/adobe.com',
    },
    {
      logo: 'https://logo.clearbit.com/intel.com',
    },
    {
      logo: 'https://logo.clearbit.com/dell.com',
    },
    {
      logo: 'https://logo.clearbit.com/salesforce.com',
    },
    {
      logo: 'https://logo.clearbit.com/vmware.com',
    },
    {
      logo: 'https://logo.clearbit.com/cisco.com',
    },
    {
      logo: 'https://logo.clearbit.com/hcltech.com',
    },
    {
      logo: 'https://logo.clearbit.com/paypal.com',
    },
    {
      logo: 'https://logo.clearbit.com/stripe.com',
    },
    {
      logo: 'https://logo.clearbit.com/atlassian.com',
    },
    {
      logo: 'https://logo.clearbit.com/spotify.com',
    },
    {
      logo: 'https://logo.clearbit.com/twitter.com',
    },
  ];

  // Inline keyframes and animation styling
  const marqueeAnimation = {
    display: 'flex',
    whiteSpace: 'nowrap',
    animation: 'marquee 25s linear infinite',
  };

  const keyframesStyle = `
    @keyframes marquee {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `;

  return (
    <section className=" py-12 px-6 lg:px-12 text-center">
      <h1 className="text-4xl font-bold mt-4 mb-4">
        Top Recruiters on Campus
      </h1>
      <p className="text-lg text-gray-600 mt-4 mb-20">
        Check out the top IT companies that have recruited from our campus.
      </p>

      {/* Floating recruiters section */}
      <style>{keyframesStyle}</style>
      <div className="relative overflow-hidden w-full">
        <div style={marqueeAnimation}>
          {recruiters.concat(recruiters).map((recruiter, index) => (
            <RecruiterCard key={index} {...recruiter} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompanies;