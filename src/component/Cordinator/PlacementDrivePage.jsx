import React from "react";

const recruiters = [
  { logo: 'https://logo.clearbit.com/google.com' },
  { logo: 'https://logo.clearbit.com/amazon.com' },
  { logo: 'https://logo.clearbit.com/microsoft.com' },
  { logo: 'https://logo.clearbit.com/facebook.com' },
  { logo: 'https://logo.clearbit.com/ibm.com' },
  { logo: 'https://logo.clearbit.com/accenture.com' },
  { logo: 'https://logo.clearbit.com/tcs.com' },
  { logo: 'https://logo.clearbit.com/wipro.com' },
  { logo: 'https://logo.clearbit.com/infosys.com' },
  { logo: 'https://logo.clearbit.com/cognizant.com' },
  { logo: 'https://logo.clearbit.com/capgemini.com' },
  { logo: 'https://logo.clearbit.com/oracle.com' },
  { logo: 'https://logo.clearbit.com/sap.com' },
  { logo: 'https://logo.clearbit.com/adobe.com' },
  { logo: 'https://logo.clearbit.com/intel.com' },
  { logo: 'https://logo.clearbit.com/dell.com' },
  { logo: 'https://logo.clearbit.com/salesforce.com' },
  { logo: 'https://logo.clearbit.com/vmware.com' },
  { logo: 'https://logo.clearbit.com/cisco.com' },
  { logo: 'https://logo.clearbit.com/hcltech.com' },
  { logo: 'https://logo.clearbit.com/paypal.com' },
  { logo: 'https://logo.clearbit.com/stripe.com' },
  { logo: 'https://logo.clearbit.com/atlassian.com' },
  { logo: 'https://logo.clearbit.com/spotify.com' },
  { logo: 'https://logo.clearbit.com/twitter.com' },
];

const companies = [
  {
    name: "Google",
    jobTitle: "Software Engineer",
    ctc: "20 LPA",
    procedure: "Online Assessment, Technical Interview, HR Interview",
    description: "Join Google and be part of an innovative team that shapes the future of technology.",
  },
  {
    name: "Amazon",
    jobTitle: "Data Scientist",
    ctc: "16 LPA",
    procedure: "Aptitude Test, Technical Screening, Interview with Hiring Manager",
    description: "Work with large datasets and cutting-edge technologies at Amazon, a global leader in e-commerce and technology.",
  },
  {
    name: "Microsoft",
    jobTitle: "Product Manager",
    ctc: "18 LPA",
    procedure: "Online Test, Managerial Interview, Final HR Round",
    description: "Collaborate with teams to build world-class products that help millions around the globe.",
  },
  {
    name: "Adobe",
    jobTitle: "Software Engineer",
    ctc: "15 LPA",
    procedure: "Coding Test, Technical Interview, HR Interview",
    description: "Join Adobe to create the world's best design software and innovate across industries.",
  },
  {
    name: "Facebook",
    jobTitle: "Software Engineer",
    ctc: "22 LPA",
    procedure: "Technical Round, Problem-Solving Test, Interview with Senior Engineer",
    description: "Be a part of Facebook's mission to bring people together across the globe.",
  },
  {
    name: "IBM",
    jobTitle: "Cloud Architect",
    ctc: "25 LPA",
    procedure: "Coding Challenge, Technical Round, HR Interview",
    description: "Work with IBM's cutting-edge cloud solutions that power the future of technology.",
  },
  {
    name: "Accenture",
    jobTitle: "Cyber Security Analyst",
    ctc: "17 LPA",
    procedure: "Technical Interview, Case Study, HR Interview",
    description: "Join Accenture to safeguard the digital future of businesses worldwide.",
  },
  {
    name: "Capgemini",
    jobTitle: "IT Consultant",
    ctc: "14 LPA",
    procedure: "Aptitude Test, Technical Screening, HR Round",
    description: "Help businesses drive transformation and innovation at Capgemini.",
  },
  {
    name: "Cognizant",
    jobTitle: "Business Analyst",
    ctc: "16 LPA",
    procedure: "Online Test, Technical Round, HR Interview",
    description: "Make a difference with Cognizant's tech-driven solutions for global clients.",
  },
];

const PlacementDrivePage = () => {
  return (
    <div className="bg-gray-100 p-6 font-serif w-full">
      {/* Page Header */}
      <section className=" text-blue-950 py-6 text-center rounded-md w">
        <h1 className="text-4xl font-bold">Placement Drive 2024</h1>
        <p className="text-xl mt-2">Get ready to start your professional journey with top tech companies!</p>
      </section>

      {/* Eligibility Criteria */}
      <section className="mt-8 px-6 py-4 shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">Eligibility Criteria</h2>
        <p className="text-lg text-gray-750">
          All students with a minimum CGPA of 6.0 are eligible to participate in the placement drive. Specific requirements for individual companies will be listed below.
        </p>
      </section>

      {/* Participating Companies */}
      <section className="mt-8 px-6 py-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Participating Companies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {companies.map((company, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-center mb-4">
                <img
                  src={recruiters[index]?.logo}
                  alt={company.name}
                  className="w-32 h-32 object-contain mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{company.name}</h3>
                <p className="text-lg text-gray-700 mt-2">{company.jobTitle}</p>
                <p className="text-sm text-gray-500 mt-2">CTC: {company.ctc}</p>
              </div>
              <p className="text-gray-600 mt-4">{company.description}</p>
              <p className="font-semibold mt-4">Recruitment Process:</p>
              <ul className="list-disc pl-5 text-gray-600">
                {company.procedure.split(", ").map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PlacementDrivePage;