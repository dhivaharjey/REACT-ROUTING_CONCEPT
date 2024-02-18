import React from "react";

import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import All from "./Components/All";
import Fullstack from "./Components/Fullstack";
import DataScience from "./Components/DataScience";
import CyberSecurity from "./Components/CyberSecurity";
import Career from "./Components/Career";
import Footer from "./Components/Footer";

function App() {
  let data = [
    {
      img: "/fsd1.webp",
      course: "Full Stack Development",
      heading: "Frontend vs Backend Development: Top 7 Differences",
      description:
        "In today’s digital age, web development has become a crucial component of the IT industry.",
      date: "16 February 2024 ",
    },
    {
      img: "/ds1.webp",
      course: "Data Science",
      heading: "Impact of Certification Programs on Hiring Data Scientists",
      description:
        "Data scientists are the creators behind transforming the raw data into edible data insights",
      date: "15 March 2024",
    },
    {
      img: "/cys1.webp",
      course: "Cybersecurity",
      heading: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      description:
        "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
      date: "4 April 2024",
    },
    {
      img: "/career1.webp",
      course: "career",
      heading:
        "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      description:
        "If your New Year resolution consists of building a successful tech career in 2024,",
      date: "19 January 2024",
    },
    {
      img: "/fsd2.webp",
      course: "Full Stack Development",
      heading:
        "Comprehensive List of Project Ideas for Frontend Development [2024]",
      description:
        "During your college days, you must’ve been bombarded with lots of projects and at that point, you will be clueless about why they are forcing us to do projects.",
      date: "16 February 2024",
    },
    {
      img: "/fsd3.webp",
      course: "Full Stack Development",
      heading: "10 Best Frontend Development Frameworks",
      description:
        "Frontend development frameworks are the backbone of user interface development, enabling developers to build seamless,",
      date: "16 February 2024 ",
    },
    {
      img: "/fsd4.webp",
      course: "Full Stack Development",
      heading: "Top 6 Backend Frameworks That You Should Know in 2024",
      description: "If you are looking to ace the field of backend development",
      date: "15 February 2024",
    },
    {
      img: "/fsd5.webp",
      course: "Full Stack Development",
      heading: "Backend Developer Salary in India & USA [2024]",
      description:
        "If you’re into making websites and apps work smoothly behind the scenes, you’re probably curious",
      date: "15 February 2024",
    },
    {
      img: "/fsd6.webp",
      course: "Full Stack Development",
      heading: "What Does a Top Backend Developer Do? The Ultimate Guide",
      description:
        "Backend development plays a vital role in the functioning of websites and web applications",
      date: "15 February 2024",
    },
    {
      img: "/ds2.webp",
      course: "Data Science",
      heading: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      description:
        "Are you someone who’s not interested in coding, but wants to get placed in tech",
      date: "28 November 2023",
    },
    {
      img: "/ds3.webp",
      course: "Data Science",
      heading: "Top Product-Based Companies for Data Science Freshers",
      description:
        "In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
      date: "10 November 2023",
    },
    {
      img: "/ds4.webp",
      course: "Data Science",
      heading:
        "What is the Difference between Data Science and Data Engineering?",
      description:
        "India has been making some serious waves in the world of data.",
      date: "8 November 2023",
    },
    {
      img: "/ds5.png",
      course: "Data Science",
      heading: "Top 10 Data Science Tools in 2024",
      description:
        "Data Science is an in-demand profession and will continue growing in the coming years",
      date: "1 November 2023",
    },
    {
      img: "/ds6.webp",
      course: "Data Science",
      heading: "Best Data Science Books to Learn in 2024",
      description:
        "Today, we’re going to talk about something really cool: data science. ",
      date: "26 October 2023 ",
    },
    {
      img: "/cys2.webp",
      course: "Cybersecurity",
      heading: "What Is Hacking? Types of Hacking & More",
      description:
        "Have you ever wondered what hacking is all about? It’s a big deal in today’s world",
      date: "25 September 2023",
    },
    {
      img: "/cys3.webp",
      course: "Cybersecurity",
      heading: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      description:
        "Cybersecurity & Ethical hacking and have been key in making sure that your data online",
      date: "27 December 2022",
    },
    {
      img: "/cys4.gif",
      course: "Cybersecurity",
      heading:
        "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      description:
        "Look around today, you will witness that we are more reliant on technology and devices",
      date: "20 December 2022",
    },
    {
      img: "/cys5.webp",
      course: "Cybersecurity",
      heading: "8 Different Types of Cybersecurity and Threats Involved",
      description:
        "Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization",
      date: "9 November 2022",
    },
    {
      img: "/cys6.gif",
      course: "Cybersecurity",
      heading:
        "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      description:
        "Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well, it depends on many facets.",
      date: "22 June 2022 ",
    },
    {
      img: "/career2.jpg",
      course: "career",
      heading: "UI/UX Designer Job Description and Roles & Responsibilities",
      description:
        "UI UX is the abbreviated word that’s been rocking the trend over the years,",
      date: "13 December 2023",
    },
    {
      img: "/career3.webp",
      course: "career",
      heading: "Top 5 IT Jobs for Economics Students",
      description:
        "In today’s digital age, the intersection of economics and technology offers exciting career opportunities for students with a background in economics.",
      date: "4 December 2023",
    },
    {
      img: "/career4.webp",
      course: "career",
      heading: "Top IT Jobs for Commerce Students: A Lucrative Career Path",
      description:
        "With the rapid advancement of technology, the demand for IT professionals has soared in recent years.",
      date: "2 December 2023",
    },
    {
      img: "/career5.webp",
      course: "career",
      heading:
        "Automation Test Engineer Resume: 10 Important Things To Consider",
      description:
        "The world is moving towards automating the testing of products in order to increase work efficiency.",
      date: "1 December 2023",
    },
    {
      img: "/career6.webp",
      course: "career",
      heading:
        "Professional Civil Engineer Resume: A Guide To Attract Employers in 2024",
      description:
        "The world is moving towards modernization leading to an increase in the popularity of civil engineering. ",
      date: "1 December 2023",
    },
    {
      img: "/fsd7.webp",
      course: "Full Stack Development",
      heading: "What Does a Top Backend Developer Do? The Ultimate Guide",
      description:
        "Backend development plays a vital role in the functioning of websites and web applications",
      date: "15 February 2024 ",
    },
    {
      img: "/fsd8.webp",
      course: "Full Stack Development",
      heading:
        "What is Frontend Development? Roles, Responsibilities, Skills & Salary",
      description:
        "Frontend development is all about making websites that look good and work well for people who use them.",
      date: "15 February 2024",
    },
    {
      img: "/fsd9.webp",
      course: "Full Stack Development",
      heading:
        "Web Components: A Deep Dive into Reusable and Custom Elements [2024]",
      description:
        "As a full-stack developer, have you ever got bored of using the same HTML, CSS, and JavaScript codes? ",
      date: "22 January 2024",
    },
    {
      img: "/ds7.webp",
      course: "Data Science",
      heading: "Top Product-Based Companies for Data Scientists in 2024",
      description:
        "We all know about the kind of buzz surrounding data science right now, it is The tech career of this decade and that’s saying a lot!",
      date: "5 October 2023 ",
    },
    {
      img: "/ds8.webp",
      course: "Data Science",
      heading: "Useful Python Libraries & Tools for Data Science Beginners",
      description:
        "In a world filled with information, knowing how to understand and use data is super important",
      date: "29 September 2023",
    },
    {
      img: "/ds9.webp",
      course: "Data Science",
      heading: "10 Best Data Science Frameworks in 2024",
      description:
        "Does data scientists fascinate you? If yes, you must definitely know about data science frameworks.",
      date: "5 August 2023 ",
    },
    {
      img: "/cys7.jpg",
      course: "Cybersecurity",
      heading: "Top 7 Cyber Security Attacks in Real Life",
      description:
        "Cyber security attacks are the type of actions that are designed to destroy, steal, modify, or disable information through unauthorized access to computer systems.",
      date: "10 June 2024",
    },
    {
      img: "/cys8.webp",
      course: "Cybersecurity",
      heading:
        "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
      description:
        "There is something fascinating about a lone hacker in black hoodies using a single system and their skills to take down big corporations and their crony capitalism.",
      date: "1 March 2024",
    },
    {
      img: "/cys9.webp",
      course: "Cybersecurity",
      heading: "The Ultimate Cybersecurity Roadmap for Beginners",
      description:
        "Cybersecurity jobs are also one of the most handsomely paying jobs in recent times.",
      date: "1 March 2024",
    },
    {
      img: "/career7.webp",
      course: "career",
      heading: "9 Best Product-Based Companies for Project Management",
      description:
        "In today’s tech-driven world, the demand for project managers is higher than before.",
      date: "1 December 2023",
    },
    {
      img: "/career8.webp",
      course: "career",
      heading: "Top 5 Product-Based Companies That Don’t Require Coding",
      description:
        "Every one of us wants to work in top product-based companies, Right? But, Not everyone has great coding skills.",
      date: "24 November 2023",
    },
    {
      img: "/career9.webp",
      course: "career",
      heading:
        "Blockchain Developer Resume Guide: 11 Hot Tips to Make It Professional",
      description:
        "What if I say that blockchain is going to be the next big thing? And why do I say so? Because of its decentralized and secure approach to data management. ",
      date: "22 November 2023 ",
    },
  ];
  //
  const dataScience = data.filter((item) => item.course === "Data Science");
  const fullStack = data.filter(
    (item) => item.course === "Full Stack Development"
  );
  const cyberSecurity = data.filter((item) => item.course === "Cybersecurity");
  const career = data.filter((item) => item.course === "career");
  return (
    <BrowserRouter>
      <Navbar data={data} />

      <div className="container">
        <div className="row  ">
          <Routes>
            <Route path="/" element={<All data={data} />} />
            <Route
              path="/fullstack"
              element={<Fullstack fullStack={fullStack} />}
            />
            <Route
              path="/datascience"
              element={<DataScience dataScience={dataScience} />}
            />
            <Route
              path="/cybersecurity"
              element={<CyberSecurity cyberSecurity={cyberSecurity} />}
            />
            <Route path="/career" element={<Career career={career} />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
