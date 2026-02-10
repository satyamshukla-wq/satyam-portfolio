import React from "react";
import CourseraLogo from "../../assets/coursera-logo.jpg";
import NptelLogo from "../../assets/nptel-logo.png";

const certificates = [
  {
    id: 1,
    name: "GenAI Powered Data Analytics Job Simulation",
    platform: "TATA(Forage)",
    logo: NptelLogo,
    url:"https://drive.google.com/file/d/1kGjdzxztKXVCK6DQHrdcvw352q7SbXwL/view?usp=sharing"
     ,
  },
  {
    id: 2,
    name: "Technology Job Simulation",
    platform: "Deloitte.",
    logo: NptelLogo,
    url:"https://drive.google.com/file/d/1dcKQ7lqxybJJ9N-qABck1p3v200rkThN/view?usp=sharing",
  },
  {
    id: 3,
    name: "Data Science Job Simulation",
    platform: "Forage",
    logo: CourseraLogo,
    url: "https://drive.google.com/file/d/17r65ZI0d4g8q2Y8WcQYgPB19t-7KJsO2/view?usp=sharing",
  },
  {
    id: 4,
    name: "Crash Course on Python",
    platform: "Coursera",
    logo: CourseraLogo,
    url: "https://coursera.org/share/76cd0f08cf90e3414eef192c79e565f6",
  },
  {
    id: 5,
    name: "Introduction to Web Development with HTML, CSS, JavaScript",
    platform: "Coursera",
    logo: CourseraLogo,
    url: "....................................",
  },
  {
    id: 6,
    name: "Database Structures and Management with MySQL",
    platform: "Coursera",
    logo: CourseraLogo,
    url: "https://coursera.org/share/ea376bdf62d0561f15b9c9b4fe73ce91",
  },
  {
    id: 7,
    name: "Database Structures and Management with MySQL",
    platform: "Coursera",
    logo: CourseraLogo,
    url: "https://coursera.org/share/ff89b81ef3dd6a418dc43d895f3b3aba",
  },
  {
    id: 8,
    name: "Introduction to NoSQL Databases",
    platform: "Coursera",
    logo: CourseraLogo,
    url: "https://coursera.org/share/a938002cb10378fb0bca29a144aeb786",
  },

   {
    id: 9,
    name: "Java FullStack Developer",
    platform: "Coursera",
    logo: CourseraLogo,
    url: "https://coursera.org/share/b4ceb96f5d8f0bef2c229f678042eeb1",
  },

   {
    id: 10,
    name: "AWS Fundamentals",
    platform: "Coursera",
    logo: CourseraLogo,
    url: "https://coursera.org/share/04700a97dc4506317c98ba62a944647f",
  },
];

const Certification = () => {
  return (
    <section
      id="certifications"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-black clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATIONS</h2>
        <div className="w-32 h-1 bg-orange-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Here are some of the certifications I've earned.
        </p>
      </div>

      {/* Certificates List */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-[#111112] border border-white rounded-xl p-6 shadow-[0_0_32px_8px_rgba(251,146,60,0.15)] hover:scale-105 transition-transform duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <img
                  src={cert.logo}
                  alt={cert.platform}
                  className="w-6 h-6 object-contain"
                />
                <h3 className="text-lg font-semibold text-white">
                  {cert.platform}: {cert.name}
                </h3>
              </div>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-orange-400 underline hover:text-orange-300 transition duration-200"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
