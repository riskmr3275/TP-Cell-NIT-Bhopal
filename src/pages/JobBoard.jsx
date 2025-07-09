 

import { useState } from "react";
import { Search, MapPin, Building, Calendar, Briefcase, DollarSign, Clock, CheckCircle } from "lucide-react";
import Footer from "../component/common/Footer";
// Input Component
const Input = ({ type = 'text', placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border rounded p-2 ${className}`}
    />
  );
};

// Button Component
const Button = ({ children, onClick, size = 'md', className }) => {
  const sizeClasses = {
    sm: 'text-sm py-1 px-3',
    md: 'text-md py-2 px-4',
    lg: 'text-lg py-3 px-5',
  };

  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white rounded hover:bg-blue-700 transition ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
};

// Card Component
const Card = ({ children, className }) => {
  return (
    <div className={`border rounded shadow-md p-4 ${className}`}>
      {children}
    </div>
  );
};

// CardContent Component
const CardContent = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

// Badge Component
const Badge = ({ children, variant = 'primary' }) => {
  const variantClasses = {
    primary: 'bg-blue-100 text-blue-600',
    secondary: 'bg-gray-100 text-gray-600',
  };

  return (
    <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${variantClasses[variant]}`}>
      {children}
    </span>
  );
};

const jobListings = [
  {
    id: 4,
    title: "Data Scientist",
    company: "DataPro",
    location: "Austin, TX",
    type: "Full-time",
    postedDate: "1 day ago",
    applicationDeadline: "2023-09-01",
    salary: "$90,000 - $130,000",
    skills: ["Python", "Machine Learning", "Data Analysis"],
    description: "We are looking for a skilled Data Scientist to help us analyze complex data sets and drive insights.",
    responsibilities: [
      "Collect, analyze, and interpret complex data sets",
      "Develop predictive models and machine learning algorithms",
      "Collaborate with stakeholders to understand their data needs",
      "Communicate findings and insights to non-technical audiences"
    ],
    qualifications: [
      "Master's degree in Data Science or related field",
      "3+ years of experience in data analysis or related roles",
      "Strong proficiency in Python and data visualization tools",
      "Experience with SQL and NoSQL databases",
      "Familiarity with machine learning frameworks"
    ]
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudWorks",
    location: "Seattle, WA",
    type: "Full-time",
    postedDate: "2 weeks ago",
    applicationDeadline: "2023-08-30",
    salary: "$100,000 - $150,000",
    skills: ["AWS", "Docker", "CI/CD"],
    description: "Join our team as a DevOps Engineer and help us build scalable and reliable infrastructure.",
    responsibilities: [
      "Implement CI/CD pipelines and automate deployment processes",
      "Monitor system performance and troubleshoot issues",
      "Collaborate with development and operations teams",
      "Manage cloud infrastructure using AWS"
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or related field",
      "5+ years of experience in DevOps or related roles",
      "Strong knowledge of containerization and orchestration technologies",
      "Experience with scripting languages like Bash or Python",
      "Familiarity with configuration management tools"
    ]
  },
  {
    id: 6,
    title: "Frontend Developer",
    company: "WebInnovators",
    location: "Chicago, IL",
    type: "Part-time",
    postedDate: "3 days ago",
    applicationDeadline: "2023-08-10",
    salary: "$40 - $60 per hour",
    skills: ["HTML", "CSS", "JavaScript"],
    description: "We're seeking a Frontend Developer to create engaging user interfaces for our web applications.",
    responsibilities: [
      "Develop new user-facing features using HTML, CSS, and JavaScript",
      "Ensure the technical feasibility of UI/UX designs",
      "Optimize applications for maximum speed and scalability",
      "Collaborate with backend developers and web designers"
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or equivalent experience",
      "2+ years of experience in frontend development",
      "Proficient in responsive design techniques",
      "Experience with version control systems (Git)",
      "Familiarity with modern frameworks like Vue.js or Angular"
    ]
  },
  {
    id: 7,
    title: "Backend Developer",
    company: "CodeSolutions",
    location: "Miami, FL",
    type: "Full-time",
    postedDate: "1 month ago",
    applicationDeadline: "2023-09-15",
    salary: "$90,000 - $130,000",
    skills: ["Node.js", "Express", "MongoDB"],
    description: "Join our team as a Backend Developer to design and maintain robust server-side applications.",
    responsibilities: [
      "Build and maintain scalable backend services",
      "Develop APIs for integration with front-end applications",
      "Ensure application security and data protection",
      "Collaborate with frontend developers and designers"
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of experience in backend development",
      "Strong knowledge of server-side languages like Node.js",
      "Experience with NoSQL and SQL databases",
      "Familiarity with RESTful services"
    ]
  },
  {
    id: 8,
    title: "Network Administrator",
    company: "NetSolutions",
    location: "Denver, CO",
    type: "Contract",
    postedDate: "1 week ago",
    applicationDeadline: "2023-08-25",
    salary: "$70,000 - $100,000",
    skills: ["TCP/IP", "Network Security", "Routing"],
    description: "We are seeking a Network Administrator to manage our network infrastructure and ensure reliability.",
    responsibilities: [
      "Install and configure network devices and services",
      "Monitor network performance and troubleshoot issues",
      "Implement security protocols to safeguard data",
      "Collaborate with IT support teams"
    ],
    qualifications: [
      "Bachelor's degree in Information Technology or related field",
      "3+ years of experience in network administration",
      "Strong knowledge of network protocols and technologies",
      "Experience with firewalls and VPNs",
      "Certifications such as CCNA are a plus"
    ]
  },
  {
    id: 9,
    title: "Marketing Specialist",
    company: "MarketMakers",
    location: "Los Angeles, CA",
    type: "Full-time",
    postedDate: "2 days ago",
    applicationDeadline: "2023-08-05",
    salary: "$60,000 - $90,000",
    skills: ["SEO", "Content Marketing", "Social Media"],
    description: "We're looking for a Marketing Specialist to enhance our online presence and drive engagement.",
    responsibilities: [
      "Develop and implement marketing strategies",
      "Manage social media accounts and campaigns",
      "Conduct market research and analyze trends",
      "Collaborate with content creators to produce marketing materials"
    ],
    qualifications: [
      "Bachelor's degree in Marketing or related field",
      "2+ years of experience in digital marketing",
      "Strong analytical skills and attention to detail",
      "Excellent communication and teamwork abilities",
      "Familiarity with marketing automation tools"
    ]
  },
  {
    id: 10,
    title: "Project Coordinator",
    company: "TeamWorks",
    location: "Boston, MA",
    type: "Full-time",
    postedDate: "3 weeks ago",
    applicationDeadline: "2023-09-20",
    salary: "$50,000 - $70,000",
    skills: ["Project Management", "Communication", "Time Management"],
    description: "Join our team as a Project Coordinator to assist with project planning and execution.",
    responsibilities: [
      "Support project managers in daily tasks",
      "Track project progress and prepare reports",
      "Communicate with team members and stakeholders",
      "Assist in resource allocation and scheduling"
    ],
    qualifications: [
      "Bachelor's degree in Business or related field",
      "1+ years of experience in project coordination",
      "Strong organizational and multitasking skills",
      "Excellent verbal and written communication skills",
      "Familiarity with project management software"
    ]
  },
  {
    id: 11,
    title: "Graphic Designer",
    company: "CreativeLabs",
    location: "Philadelphia, PA",
    type: "Part-time",
    postedDate: "4 days ago",
    applicationDeadline: "2023-08-12",
    salary: "$25 - $45 per hour",
    skills: ["Adobe Photoshop", "Illustrator", "Creativity"],
    description: "We're seeking a Graphic Designer to create visually appealing graphics for our marketing materials.",
    responsibilities: [
      "Design marketing collateral, including brochures and social media graphics",
      "Collaborate with marketing and product teams on design projects",
      "Stay updated with design trends and tools",
      "Present design ideas and concepts to stakeholders"
    ],
    qualifications: [
      "Bachelor's degree in Graphic Design or related field",
      "Strong portfolio showcasing design projects",
      "Proficiency in design software like Adobe Creative Suite",
      "Excellent attention to detail and creativity",
      "Ability to work independently and as part of a team"
    ]
  },
  {
    id: 12,
    title: "Cybersecurity Analyst",
    company: "SecureIT",
    location: "Atlanta, GA",
    type: "Full-time",
    postedDate: "1 month ago",
    applicationDeadline: "2023-09-10",
    salary: "$80,000 - $120,000",
    skills: ["Risk Assessment", "Incident Response", "Network Security"],
    description: "Join us as a Cybersecurity Analyst to protect our systems and data from security threats.",
    responsibilities: [
      "Monitor networks for security breaches and vulnerabilities",
      "Conduct risk assessments and audits",
      "Respond to incidents and mitigate threats",
      "Collaborate with IT teams to implement security measures"
    ],
    qualifications: [
      "Bachelor's degree in Cybersecurity or related field",
      "3+ years of experience in cybersecurity roles",
      "Strong understanding of security protocols and technologies",
      "Experience with security information and event management (SIEM) tools",
      "Certifications such as CISSP or CISM are preferred"
    ]
  },
  {
    id: 13,
    title: "Sales Executive",
    company: "SalesForce",
    location: "New York, NY",
    type: "Full-time",
    postedDate: "2 weeks ago",
    applicationDeadline: "2023-08-22",
    salary: "$60,000 - $100,000",
    skills: ["Negotiation", "Customer Relationship Management", "Sales Strategies"],
    description: "We're looking for a Sales Executive to drive sales and build strong client relationships.",
    responsibilities: [
      "Identify and develop new business opportunities",
      "Manage client accounts and ensure customer satisfaction",
      "Conduct sales presentations and product demonstrations",
      "Collaborate with marketing teams to generate leads"
    ],
    qualifications: [
      "Bachelor's degree in Business or related field",
      "2+ years of experience in sales or business development",
      "Excellent negotiation and communication skills",
      "Strong analytical and problem-solving abilities",
      "Proficiency in CRM software"
    ]
  },
  {
    id: 14,
    title: "Human Resources Manager",
    company: "HR Solutions",
    location: "San Diego, CA",
    type: "Full-time",
    postedDate: "1 week ago",
    applicationDeadline: "2023-08-30",
    salary: "$80,000 - $120,000",
    skills: ["Recruitment", "Employee Relations", "HR Policies"],
    description: "We are seeking an experienced HR Manager to lead our HR department and support our team.",
    responsibilities: [
      "Oversee recruitment and onboarding processes",
      "Manage employee relations and resolve conflicts",
      "Develop and implement HR policies and procedures",
      "Ensure compliance with labor laws and regulations"
    ],
    qualifications: [
      "Bachelor's degree in Human Resources or related field",
      "5+ years of experience in HR management",
      "Strong understanding of labor laws and regulations",
      "Excellent communication and interpersonal skills",
      "Experience with HRIS and recruitment software"
    ]
  },
  {
    id: 15,
    title: "Business Analyst",
    company: "BizTech",
    location: "Charlotte, NC",
    type: "Contract",
    postedDate: "2 days ago",
    applicationDeadline: "2023-09-05",
    salary: "$70,000 - $100,000",
    skills: ["Business Analysis", "Stakeholder Management", "Data Modeling"],
    description: "We are looking for a Business Analyst to analyze business needs and help drive project success.",
    responsibilities: [
      "Gather and document business requirements",
      "Conduct data analysis and modeling",
      "Facilitate communication between stakeholders",
      "Support project teams throughout the project lifecycle"
    ],
    qualifications: [
      "Bachelor's degree in Business or related field",
      "3+ years of experience in business analysis",
      "Strong analytical and problem-solving skills",
      "Excellent communication and presentation skills",
      "Familiarity with project management methodologies"
    ]
  },
  {
    id: 16,
    title: "Content Writer",
    company: "ContentCreators",
    location: "Remote",
    type: "Part-time",
    postedDate: "1 week ago",
    applicationDeadline: "2023-09-10",
    salary: "$20 - $40 per hour",
    skills: ["SEO", "Research", "Writing"],
    description: "We're seeking a Content Writer to create engaging and informative articles for our website.",
    responsibilities: [
      "Research and write high-quality articles on various topics",
      "Optimize content for search engines",
      "Collaborate with editors and designers",
      "Edit and proofread content before publication"
    ],
    qualifications: [
      "Bachelor's degree in English, Journalism, or related field",
      "2+ years of experience in content writing",
      "Strong writing and editing skills",
      "Familiarity with SEO best practices",
      "Ability to meet deadlines and work independently"
    ]
  }
];


export default function JobBoard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState(jobListings[0]);

  const filteredJobs = jobListings.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    
    <div>
      <div className="flex flex-col h-screen lg:flex-row gap-12 w-full space-y-6 bg-gradient-to-r">
      {/* Left side - Job details */}
      <div className="w-full lg:w-2/3 p-8 overflow-auto ">
        {selectedJob && (
          <div>
            <h1 className="text-3xl font-bold mb-4">{selectedJob.title}</h1>
            <div className="flex items-center text-gray-600 mb-4">
              <Building size={20} className="mr-2" />
              <span className="text-xl">{selectedJob.company}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin size={20} className="mr-2" />
              <span>{selectedJob.location}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <Briefcase size={20} className="mr-2" />
              <span>{selectedJob.type}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <DollarSign size={20} className="mr-2" />
              <span>{selectedJob.salary}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <Calendar size={20} className="mr-2" />
              <span>Posted {selectedJob.postedDate}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-6">
              <Clock size={20} className="mr-2" />
              <span>Apply by {selectedJob.applicationDeadline}</span>
            </div>
            
            <h2 className="text-2xl font-semibold mb-3">Job Description</h2>
            <p className="mb-6">{selectedJob.description}</p>
            
            <h2 className="text-2xl font-semibold mb-3">Responsibilities</h2>
            <ul className="list-disc pl-5 mb-6">
              {selectedJob.responsibilities.map((resp, index) => (
                <li key={index} className="mb-2">{resp}</li>
              ))}
            </ul>
            
            <h2 className="text-2xl font-semibold mb-3">Qualifications</h2>
            <ul className="list-disc pl-5 mb-6">
              {selectedJob.qualifications.map((qual, index) => (
                <li key={index} className="mb-2">{qual}</li>
              ))}
            </ul>
            
            <h2 className="text-2xl font-semibold mb-3">Required Skills</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedJob.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">{skill}</Badge>
              ))}
            </div>
            
            <Button size="lg" className="max-w-max bg-blue-950">
              
              Apply Now
            </Button>
          </div>
        )}
      </div>

      {/* Right side - Job listings */}
      <div className="w-full lg:w-1/3 bg-slate-200 p-4 shadow-md  ">
        <div className="mb-6  ">
          <Input
            placeholder="Search by title, company, or skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full "
          />
        </div>
        <div className="overflow-auto h-full">
          {filteredJobs.map(job => (
            <Card key={job.id} className="mb-4">
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <div className="flex justify-between text-gray-600 mb-1">
                  <span>{job.company}</span>
                  <span>{job.type}</span>
                </div>
                <div className="flex justify-between text-gray-600 mb-2">
                  <span>{job.location}</span>
                  <span>{job.postedDate}</span>
                </div>
                <Button onClick={() => setSelectedJob(job)} className="w-full bg-blue-900 ">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
      </div>
      
    </div>
    <Footer />
    </div>
  );
}
