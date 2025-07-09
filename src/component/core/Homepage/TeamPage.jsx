import React from "react";
import MansiPic from "../../../assets/mansi.jpg";
import RisuPic from "../../../assets/risu.jpg";
import PriyaPic from "../../../assets/Priya.jpeg";
import LuckyPic from "../../../assets/lucky.jpg";
import VickyPic from "../../../assets/vicky.jpg";
import Footer from "../../common/Footer"

import { Github, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export default function EnhancedOurTeamWithContacts() {
  const teamMembers = [
    {
      name: "Risu Gupta",
      role: "Developer",
      photo: RisuPic,
      about:
        "Dedicated software developer pursuing a Master of Computer Applications at NIT Bhopal, with expertise in C++, JavaScript,and SQL. Experienced in full-stack development, demonstrated through projects such as an Online Learning Platform and aTraining and Placement Cell automation system. These projects highlight my ability to design, develop, and deploy scalable solutions while addressing complex technical challenges. I am committed to applying my skills to create innovative and impactful software solutions.",
      skills: ["C++","JavaScript","NodeJS", "ExpressJS", "ReactJS","MongoDB", "HTML", "DOCKER", "Tailwind",
        "CSS", "REST API", "Git", "GitHub", "Postman","postgres","open source"],

      email: "riskmr3275@gmail.com",
      phone: "+91 9798571703",
      resume: "https://example.com/alex-johnson-resume",
      github: "https://github.com/riskmr3275",
      twitter: "https://twitter.com/RISUGUPTA2",
      facebook: "https://www.linkedin.com/in/risu-gupta-28aa01230/",
      instagram: "https://www.instagram.com/risu_gupta_701/",
    },
    {  
      name: "Priya Tripathi",
      role: "Developer",
      photo: PriyaPic,
      about:
        "Dedicated software developer pursuing a Master of Computer Applications at NIT Bhopal, with expertise in C++, JavaScript,and SQL. Experienced in full-stack development, demonstrated through projects such as an Online Learning Platform and aTraining and Placement Cell automation system. These projects highlight my ability to design, develop, and deploy scalable solutions while addressing complex technical challenges. I am committed to applying my skills to create innovative and impactful software solutions.",
      skills: ["JavaScript", "React", "Node.js", "AWS", "System Architecture"],

      email: "arisugupto@gmail.com",
      phone: "+91 9798571703",
      resume:
        "https://drive.google.com/file/d/1novTIN_yW4pOJz75YEjwqh2KhdO-WBfV/view",
      github: "https://github.com/alexjohnson",
      twitter: "https://twitter.com/alexjohnson",
      facebook: "https://facebook.com/alexjohnson",
      instagram: "https://instagram.com/alexjohnson",
    },
    {
      name: "Lokendra Mahale",
      role: "Developer",
      photo: LuckyPic,
      about:
        "Dedicated software developer pursuing a Master of Computer Applications at NIT Bhopal, with expertise in C++, JavaScript,and SQL. Experienced in full-stack development, demonstrated through projects such as an Online Learning Platform and aTraining and Placement Cell automation system. These projects highlight my ability to design, develop, and deploy scalable solutions while addressing complex technical challenges. I am committed to applying my skills to create innovative and impactful software solutions.",
      skills: ["JavaScript", "React", "Node.js", "AWS", "System Architecture"],

      email: "arisugupto@gmail.com",
      phone: "+91 9798571703",
      resume:
        "https://drive.google.com/file/d/1novTIN_yW4pOJz75YEjwqh2KhdO-WBfV/view",
      github: "https://github.com/alexjohnson",
      twitter: "https://twitter.com/alexjohnson",
      facebook: "https://facebook.com/alexjohnson",
      instagram: "https://instagram.com/alexjohnson",
    },
    {
      name: "Mansi Birla",
      role: "Developer",
      photo: MansiPic,
      about:
        "Dedicated software developer pursuing a Master of Computer Applications at NIT Bhopal, with expertise in C++, JavaScript,and SQL. Experienced in full-stack development, demonstrated through projects such as an Online Learning Platform and aTraining and Placement Cell automation system. These projects highlight my ability to design, develop, and deploy scalable solutions while addressing complex technical challenges. I am committed to applying my skills to create innovative and impactful software solutions.",
      skills: ["JavaScript", "React", "Node.js", "AWS", "System Architecture"],

      email: "arisugupto@gmail.com",
      phone: "+91 9798571703",
      resume:
        "https://drive.google.com/file/d/1novTIN_yW4pOJz75YEjwqh2KhdO-WBfV/view",
      github: "https://github.com/alexjohnson",
      twitter: "https://twitter.com/alexjohnson",
      facebook: "https://facebook.com/alexjohnson",
      instagram: "https://instagram.com/alexjohnson",
    },
    {
      name: "Vicky Verma",
      role: "Developer",
      photo: VickyPic,
      about:
        "Dedicated software developer pursuing a Master of Computer Applications at NIT Bhopal, with expertise in C++, JavaScript,and SQL. Experienced in full-stack development, demonstrated through projects such as an Online Learning Platform and aTraining and Placement Cell automation system. These projects highlight my ability to design, develop, and deploy scalable solutions while addressing complex technical challenges. I am committed to applying my skills to create innovative and impactful software solutions.",
      skills: ["JavaScript", "React", "Node.js", "AWS", "System Architecture"],

      email: "vickyverma1197@gmail.com",
      phone: "+91 6263309690",
      resume:
        "https://drive.google.com/file/d/1novTIN_yW4pOJz75YEjwqh2KhdO-WBfV/view",
      github: "https://github.com/vickyverma1197",
      twitter: "https://twitter.com/VickyVerma4197",
      facebook: "",
      instagram: "https://instagram.com/alexjohnson",
    },
    // other team members...
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-blue-100">
      {" "}
      <header className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        {" "}
        <div className="container mx-auto px-4">
          {" "}
          <h1 className="text-4xl font-bold mb-4">
            Meet Our Developer Team
          </h1>{" "}
          <p className="text-xl mb-6">
            A dedicated team of developers, driven to build innovative and
            reliable software solutions.
          </p>{" "}
          <p className="text-lg">
            {" "}
            Our mission is to leverage cutting-edge technologies to solve
            complex problems and deliver exceptional value to our clients. We
            specialize in web and mobile application development, cloud
            solutions, and data-driven systems.{" "}
          </p>{" "}
        </div>{" "}
      </header>{" "}
      <main className="container mx-auto px-4 py-12">
        {" "}
        <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
          {" "}
          <h2 className="text-3xl font-semibold mb-6 text-teal-800">
            Team Structure & Roles
          </h2>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {" "}
            <div className="flex items-center space-x-4">
              {" "}
              <div className="text-teal-600 w-8 h-8">👨‍💻</div>{" "}
              <div>
                {" "}
                <h3 className="font-semibold text-blue-800">
                  Frontend Developers
                </h3>{" "}
                <p className="text-gray-600">
                  Crafting intuitive user interfaces
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex items-center space-x-4">
              {" "}
              <div className="text-teal-600 w-8 h-8">💾</div>{" "}
              <div>
                {" "}
                <h3 className="font-semibold text-blue-800">
                  Backend Developers
                </h3>{" "}
                <p className="text-gray-600">
                  Building robust server-side solutions
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex items-center space-x-4">
              {" "}
              <div className="text-teal-600 w-8 h-8">🌐</div>{" "}
              <div>
                {" "}
                <h3 className="font-semibold text-blue-800">
                  Full Stack Developers
                </h3>{" "}
                <p className="text-gray-600">Bridging frontend and backend</p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex items-center space-x-4">
              {" "}
              <div className="text-teal-600 w-8 h-8">⚙️</div>{" "}
              <div>
                {" "}
                <h3 className="font-semibold text-blue-800">
                  DevOps Engineers
                </h3>{" "}
                <p className="text-gray-600">
                  Streamlining development and operations
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section>
          {" "}
          <h2 className="text-3xl font-semibold mb-12 text-center text-teal-800">
            Team Member Profiles
          </h2>{" "}
          <div className="space-y-16">
            {" "}
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                {" "}
                <div
                  className={`md:flex ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {" "}
                  <div className="md:w-1/3">
                    {" "}
                    <img
                      className="h-full w-full rounded-full object-cover"
                      src={member.photo}
                      alt={member.name}
                    />{" "}
                  </div>{" "}
                  <div className="p-8 md:w-2/3">
                    {" "}
                    <div className="uppercase tracking-wide text-sm text-teal-600 font-semibold">
                      {member.role}
                    </div>{" "}
                    <h3 className="mt-1 text-4xl font-serif -gray-800">
                      {member.name}
                    </h3>{" "}
                    <p className="mt-2 text-gray-600">{member.about}</p>{" "}
                    <div className="mt-4">
                      {" "}
                      <h4 className="text-lg font-semibold text-blue-800">
                        Skills & Expertise
                      </h4>{" "}
                      <div className="mt-2 flex flex-wrap gap-2">
                        {" "}
                        {member.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-teal-100 text-teal-800 text-sm rounded-full"
                          >
                            {" "}
                            {skill}{" "}
                          </span>
                        ))}{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="mt-4">
                      {" "}
                      <h4 className="text-lg font-semibold text-blue-800"></h4>{" "}
                    </div>{" "}
                    <div className="mt-6 flex flex-col md:flex-row md:space-x-12">
                      {" "}
                      <div>
                        {" "}
                        <h4 className="text-lg font-semibold text-blue-800">
                          Contact Information
                        </h4>{" "}
                        <div className="mt-2">
                          {" "}
                          <p className="flex items-center space-x-2">
                            {" "}
                            <span className="text-teal-600">✉️</span>{" "}
                            <a
                              href={`mailto:${member.email}`}
                              className="text-blue-600 hover:underline"
                            >
                              {member.email}
                            </a>{" "}
                          </p>{" "}
                          <p className="flex items-center space-x-2 mt-2">
                            {" "}
                            <span className="text-teal-600">📞</span>{" "}
                            <a
                              href={`tel:${member.phone}`}
                              className="text-blue-600 hover:underline"
                            >
                              {member.phone}
                            </a>{" "}
                          </p>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <h4 className="text-lg font-semibold text-blue-800">
                          Professional Links
                        </h4>{" "}
                        <div className="flex items-center space-x-4 mt-2">
                          {" "}
                          <a
                            href={member.resume}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            {" "}
                            <resume />
                            <span className="sr-only">Resume</span>{" "}
                          </a>{" "}
                          <a
                            href={member.github}
                            className="text-gray-600 hover:text-gray-800"
                          >
                            {" "}
                            <Github />
                            <span className="sr-only">github</span>{" "}
                          </a>{" "}
                          <a
                            href={member.twitter}
                            className="text-gray-600 hover:text-gray-800"
                          >
                            {" "}
                            <Twitter />
                            <span className="sr-only">twitter</span>{" "}
                          </a>{" "}
                          <a
                            href={member.facebook}
                            className="text-gray-600 hover:text-gray-800"
                          >
                            {" "}
                            <Linkedin />
                            <span className="sr-only">Facebook</span>{" "}
                          </a>{" "}
                          <a
                            href={member.instagram}
                            className="text-gray-600 hover:text-gray-800"
                          >
                            {" "}
                            <Instagram />
                            <span className="sr-only">Instagram</span>{" "}
                          </a>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </section>{" "}
      </main>
     <Footer/>
    </div>
  );
}
