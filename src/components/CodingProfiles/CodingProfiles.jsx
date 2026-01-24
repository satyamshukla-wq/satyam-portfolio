import React from "react";
import LeetCodeLogo from "../../assets/platform_logo/leetcode-logo.png";
import GfgLogo from "../../assets/platform_logo/gfg-logo.jpg";
import CodolioLogo from "../../assets/platform_logo/codolio-logo.png";
import GitHubLogo from "../../assets/platform_logo/GitHub-logo.png";

const codingProfiles = [
  {
    id: 1,
    name: "LeetCode",
    url: "https://leetcode.com/u/_pawwan_/",
    logo: LeetCodeLogo,
  },
  {
    id: 2,
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/user/_pawwan_/",
    logo: GfgLogo,
  },
  {
    id: 3,
    name: "Codolio",
    url: "https://codolio.com/profile/_pawwan_",
    logo: CodolioLogo,
  },
  {
    id: 4,
    name: "GitHub",
    url: "https://github.com/Pawan-Pandey1",
    logo: GitHubLogo,
  },
];

const CodingProfiles = () => {
  return (
    <section
      id="coding-profiles"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CODING PROFILES</h2>
        <div className="w-32 h-1 bg-orange-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Click on the platforms to view my competitive coding profiles.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {codingProfiles.map((profile) => (
          <a
            key={profile.id}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111112] border border-white rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-[0_0_32px_8px_rgba(251,146,60,0.18)] hover:scale-105 transition-transform duration-300 group"
          >
            <img
              src={profile.logo}
              alt={profile.name}
              className="w-20 h-20 object-contain mb-4 transition-transform duration-500 group-hover:-translate-y-2 opacity-90"
            />
            <h3 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors duration-300">
              {profile.name}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CodingProfiles;
