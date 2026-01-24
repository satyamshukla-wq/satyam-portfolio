import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-orange-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Education Items */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle (Logo) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-orange-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Education Card */}
            <div
              className={`w-full sm:w-[38%] p-6 rounded-xl border border-white bg-[#111112] backdrop-blur-md shadow-[0_0_32px_8px_rgba(251,146,60,0.18)] ${
                index % 2 === 0 ? "sm:mr-16" : "sm:ml-16"
              } mt-8 sm:mt-0 min-h-[300px] hover:scale-105 transition-transform duration-300`}
            >
              {/* Card Content */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-orange-400">
                    {edu.school}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {edu.date}
                  </p>
                </div>
              </div>
              
              {/* Education-specific fields */}
              <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
              <p className="mt-2 text-gray-400">{edu.desc}</p>
              
              {/* Optional: Add skills if needed */}
              {edu.skills && (
                <div className="mt-4">
                  <h5 className="font-medium text-white">Key Subjects:</h5>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {edu.skills.map((skill, index) => (
                      <li
                        key={index}
                        className="bg-orange-500 text-gray-300 px-3 py-1 text-xs rounded-lg border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
