"use client";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bar, Pie, Line } from "recharts";
import { Bell, LogOut, Plus, FileText } from "lucide-react";
import Button from "../common/Button";
import Card from "../common/Card";
import Table from "../common/Table";
import DropdownMenu from "../common/DropdownMenu";
import ChartContainer from "../common/ChartContainer"; // Importing ChartContainer
import { useSelector } from "react-redux";
import axios from "axios";

const recentActivities = [
  {
    type: "Student Registration",
    description: "New student John Doe registered",
    date: "2024-03-01",
    time: "10:30 AM",
  },
  {
    type: "Job Listing Added",
    description: "New job posted by TechCorp",
    date: "2024-03-01",
    time: "11:45 AM",
  },
  {
    type: "Application Status Changed",
    description: 'Application for Jane Smith updated to "Interviewed"',
    date: "2024-03-02",
    time: "09:15 AM",
  },
];

// const upcomingInterviews = [
//   {
//     candidateName: "Alice Johnson",
//     jobTitle: "Software Engineer",
//     date: "2024-03-05",
//     time: "02:00 PM",
//     type: "Interview",
//     status: "Scheduled",
//   },
//   {
//     candidateName: "Bob Williams",
//     jobTitle: "Data Analyst",
//     date: "2024-03-06",
//     time: "10:30 AM",
//     type: "Test",
//     status: "Pending",
//   },
// ];

const applicationData = [
  { name: "Week 1", applications: 50 },
  { name: "Week 2", applications: 75 },
  { name: "Week 3", applications: 60 },
  { name: "Week 4", applications: 90 },
];

const jobDistributionData = [
  { name: "Software Engineer", value: 40 },
  { name: "Data Analyst", value: 30 },
  { name: "Product Manager", value: 20 },
  { name: "UX Designer", value: 10 },
];

const placementTrendData = [
  { name: "Jan", placements: 10 },
  { name: "Feb", placements: 15 },
  { name: "Mar", placements: 20 },
  { name: "Apr", placements: 25 },
];

export default function CoordinatorOverview() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Mock data for demonstration purposes
  const [upcomingInterviews, setUpcomingInterviews] = useState([]);
  const [activeNavItem, setActiveNavItem] = useState("Overview");
  const navigate = useNavigate();
  const [stuCount, setStuCount] = useState(0);
  const [conmapnyCount, setCompanyCount] = useState(0);
  const [jobCount, setJobCount] = useState(0);
  const [totalApplications, setTotalApplications] = useState(0);
  const keyMetrics = {
    totalStudents: stuCount,
    totalCompanies: conmapnyCount,
    totalJobOpenings: jobCount,
    totalApplications: totalApplications,
  };
  const [showAll, setShowAll] = useState(false);

  // Only show the first 6 rows if showAll is false
  const interviewsToShow = showAll
    ? upcomingInterviews
    : upcomingInterviews.slice(0, 4);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/auth/getAllUser"
        );

        setStuCount(response.data.count); // assuming `response.data` is an array of users
        const response1 = await axios.get(
          "http://localhost:4000/api/v1/companies/getAllComapny"
        );
        setCompanyCount(response1.data.count); // assuming `response.data` is an array of users
        const response3 = await axios.get(
          "http://localhost:4000/api/v1/jobposting/getJob"
        );
        setJobCount(response3.data.count); // assuming `response.data` is an array of users

        const response4 = await axios.get(
          "http://localhost:4000/api/v1/applications/getAllAplication"
        );
        setTotalApplications(response4.data.count);

        // fetch dta for interview
        const response5 = await axios.get(
          "http://localhost:4000/api/v1/applications/getAllInterviewSchedule"
        );
        setUpcomingInterviews(response5.data.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  console.log(upcomingInterviews);

  return (
    <div className="min-h-screen  bg-white w-full mt-5">
      <main className=" flex flex-col  h-screen   w-full space-y-6">
        {/* Key Metrics Section */}
        <section className="mb-8 grid gap-4 md:grid-cols-3 lg:grid-cols-4 p-5 ">
          {Object.entries(keyMetrics).map(([key, value]) => (
            <Card key={key}>
              <Card.Header className="flex flex-row items-center justify-between ">
                <Card.Title className="text-sm font-medium">
                  {key.split(/(?=[A-Z])/).join(" ")}
                </Card.Title>
              </Card.Header>
              <Card.Content>
                <div className="text-2xl font-bold">{value}</div>
              </Card.Content>
            </Card>
          ))}
        </section>

        {/* Recent Activities Section */}
        <section className=" w-full p-5">
          <h2 className="mb-4 text-2xl font-semibold">Recent Activities</h2>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.Head>Activity Type</Table.Head>
                <Table.Head>Description</Table.Head>
                <Table.Head>Date</Table.Head>
                <Table.Head>Time</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {recentActivities.map((activity, index) => (
                <Table.Row key={index}>
                  <Table.Cell>{activity.type}</Table.Cell>
                  <Table.Cell>{activity.description}</Table.Cell>
                  <Table.Cell>{activity.date}</Table.Cell>
                  <Table.Cell>{activity.time}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <Button className="mt-4">View All Activities</Button>
        </section>

        {/* Upcoming Interviews Section */}
        <section className="p-5">
          <h2 className="mb-4 text-2xl font-semibold">
            Upcoming Interviews and Tests
          </h2>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.Head>Company Name</Table.Head>
                <Table.Head>Job Title</Table.Head>
                <Table.Head>Date</Table.Head>
                <Table.Head>Time</Table.Head>
                <Table.Head>Type</Table.Head>
                <Table.Head>SPOC Name</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {interviewsToShow.map((interview, index) => {
                const interviewDate = new Date(interview.date);
                const round = interview.rounds;
                let textRound;
                if (round === 1) textRound = "Online Test";
                else if (round === 2) textRound = "Technical Round";
                else if (round === 3) textRound = "HR Round";
                else textRound = "4th Round";

                return (
                  <Table.Row key={index}>
                    <Table.Cell>{interview.company_name}</Table.Cell>
                    <Table.Cell>{interview.job_title}</Table.Cell>
                    <Table.Cell>
                      {interviewDate.toLocaleDateString("en-GB")}
                    </Table.Cell>
                    <Table.Cell>10:00 AM</Table.Cell>
                    <Table.Cell>{textRound}</Table.Cell>
                    <Table.Cell>{interview.SPOC}</Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
          <div className="flex justify-between items-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-4 bg-blue-950 p-2 rounded-md px-5 text-white"
            >
              {showAll ? "Show Less" : "View All"}
            </button>
            <div>
      <Button
        onClick={openModal}
      >
      Schedule New
      </Button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50 w-full">
          <div className="bg-gray-800  w-[50%] p-6 rounded-lg text-white relative ">
            <button
              onClick={closeModal}
              className="absolute top-2 right-6 text-white hover:text-gray-100 text-xl"
            >
             Cancel
            </button>
            <h2 className="text-2xl font-semibold text-center mb-2">Company Details</h2>
            <p className="text-gray-400 text-center mb-6">Please fill in the company information below.</p>
            <form className="flex flex-col space-y-4">
              <div>
                <label className="block mb-1 font-medium">Company ID</label>
                <input
                  type="text"
                  placeholder="Enter company ID"
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Company Name</label>
                <input
                  type="text"
                  placeholder="Enter company name"
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Industry</label>
                <input
                  type="text"
                  placeholder="Enter industry"
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">HR ID</label>
                <input
                  type="text"
                  placeholder="Enter HR ID"
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Website</label>
                <input
                  type="url"
                  placeholder="https://example.com"
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Address</label>
                <textarea
                  placeholder="Enter company address"
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 h-24"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-4 min-w-min p-2 rounded bg-blue-800 hover:bg-blue-700 text-white font-semibold"
              >
                Schedule
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
          </div>
        </section>

        

        {/* Charts Section */}
        <section className="mb-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <Card.Header>
              <Card.Title>Applications Over Time</Card.Title>
            </Card.Header>
            <Card.Content>
              <ChartContainer title="Applications Over Time">
                <Bar data={applicationData} dataKey="applications" />
              </ChartContainer>
            </Card.Content>
          </Card>

          <Card>
            <Card.Header>
              <Card.Title>Job Application Distribution</Card.Title>
            </Card.Header>
            <Card.Content>
              <ChartContainer title="Job Application Distribution">
                <Pie
                  data={jobDistributionData}
                  dataKey="value"
                  nameKey="name"
                />
              </ChartContainer>
            </Card.Content>
          </Card>

          <Card>
            <Card.Header>
              <Card.Title>Placement Trends</Card.Title>
            </Card.Header>
            <Card.Content>
              <ChartContainer title="Placement Trends">
                <Line data={placementTrendData} dataKey="placements" />
              </ChartContainer>
            </Card.Content>
          </Card>
        </section>
      </main>
    </div>
  );
}
