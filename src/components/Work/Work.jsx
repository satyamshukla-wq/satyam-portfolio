import React, { useState } from "react";
import { projects } from "../../constants";

// Helper to render description with orange accents
function renderDescription(description) {
  const lines = description.split('\n');
  let isTechSection = false;
  return lines.map((line, index) => {
    const trimmed = line.trim();

    // Tech Stack Heading
    if (trimmed.startsWith('💡 Tech Stack & Tools Used')) {
      isTechSection = true;
      return (
        <h4
          key={index}
          className="font-bold mt-4 mb-2 text-orange-300 text-base flex items-center"
        >
          <span className="mr-2">💡</span>
          Tech Stack &amp; Tools Used
        </h4>
      );
    }

    // End tech section on blank line
    if (isTechSection && trimmed === "") {
      isTechSection = false;
      return <br key={index} />;
    }

    // Tech Stack Items: normal weight, white
    if (isTechSection && trimmed.startsWith('- ')) {
      return (
        <div key={index} className="ml-4 text-white">
          {trimmed}
        </div>
      );
    }

    // Section Headings (other than tech stack)
    if (
      trimmed.startsWith('🔐') ||
      trimmed.startsWith('🗂️') ||
      trimmed.startsWith('📤') ||
      trimmed.startsWith('🖼️')
    ) {
      return (
        <h4 key={index} className="font-bold mt-4 mb-2 text-orange-300 text-base">
          {trimmed}
        </h4>
      );
    }

    // General list items
    if (trimmed.startsWith('- ')) {
      return (
        <div key={index} className="ml-4 text-white">
          {trimmed}
        </div>
      );
    }

    // Paragraphs
    if (trimmed !== "") {
      return (
        <p key={index} className="mb-1 text-white">
          {trimmed}
        </p>
      );
    }
    return null;
  });
}

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [descriptionProject, setDescriptionProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % selectedProject.images.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-orange-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-white bg-[#111112] backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden hover:shadow-orange-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div
              onClick={() => handleOpenModal(project)}
              className="p-4 cursor-pointer"
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>

              {/* Show Description Button */}
              <button
                onClick={() => setDescriptionProject(project)}
                className="bg-orange-600 hover:bg-orange-700 text-white text-sm px-4 py-2 rounded-full transition mb-4 shadow-md hover:scale-105"
              >
                Show Description
              </button>

              {/* Technologies Heading */}
              <h4 className="text-orange-300 text-sm font-semibold mb-2">
                🛠 Technologies Used
              </h4>

              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#332009] text-xs font-semibold text-orange-400 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal - FIXED VERSION */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-[#111112] rounded-xl shadow-2xl w-[95%] max-w-4xl max-h-[90vh] overflow-hidden relative flex flex-col">

            {/* Fixed Header with Close Button */}
            <div className="flex justify-between items-center p-4 border-b border-gray-700 bg-[#111112] relative z-10">
              <h3 className="text-xl font-bold text-white truncate">
                {selectedProject.title}
              </h3>
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-orange-500 transition-colors duration-200 p-1 hover:bg-gray-800 rounded-full"
              >
                ×
              </button>
            </div>

            {/* Image Container - FIXED */}
            <div className="flex-1 flex flex-col overflow-hidden">
              <div className="relative flex-1 flex items-center justify-center bg-[#0a0a0a] p-4">

                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white p-3 rounded-full hover:bg-orange-500 z-20 transition-colors duration-200"
                    >
                      ❮
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white p-3 rounded-full hover:bg-orange-500 z-20 transition-colors duration-200"
                    >
                      ❯
                    </button>
                  </>
                )}

                {/* Image with Proper Sizing */}
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                  className="max-w-full max-h-[50vh] object-contain rounded-lg shadow-2xl"
                />

                {/* Image Dots Navigation */}
                {selectedProject.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black bg-opacity-50 px-3 py-2 rounded-full">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                          index === currentImageIndex
                            ? "bg-orange-500"
                            : "bg-gray-400 hover:bg-gray-300"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Project Information Section - Always Visible */}
              <div className="p-6 bg-[#111112] border-t border-gray-700 max-h-[35vh] overflow-y-auto">

                {/* Show Description Button in Modal */}
                <button
                  onClick={() => setDescriptionProject(selectedProject)}
                  className="bg-orange-600 hover:bg-orange-700 text-white text-sm px-4 py-2 rounded-full transition mb-4 shadow-md hover:scale-105"
                >
                  Show Description
                </button>

                {/* Technologies Section */}
                <div className="mb-6">
                  <h4 className="text-orange-300 text-base font-semibold mb-3">
                    🛠 Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#332009] text-xs font-semibold text-orange-400 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-orange-800 text-gray-300 hover:text-white px-6 py-3 rounded-xl text-center font-semibold transition-colors duration-200"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl text-center font-semibold transition-colors duration-200"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Description Modal */}
      {descriptionProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm p-4">
          <div className="relative w-[90%] max-w-2xl max-h-[85vh] bg-gradient-to-br from-[#1f1d2b] to-[#2b263b] rounded-2xl shadow-2xl border border-orange-700 overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-orange-800 bg-black bg-opacity-20">
              <h3 className="text-xl md:text-2xl font-extrabold text-orange-400 tracking-wide">
                {descriptionProject.title}
              </h3>
              <button
                onClick={() => setDescriptionProject(null)}
                className="text-white text-3xl font-bold hover:text-orange-500 transition duration-200"
              >
                ×
              </button>
            </div>
            {/* Scrollable Content */}
            <div className="px-6 py-5 text-gray-300 overflow-y-auto h-[65vh] scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-800">
              <h4 className="text-lg font-semibold text-orange-300 mb-3">
                📄 Project Description
              </h4>
              <div className="leading-relaxed tracking-wide whitespace-pre-wrap text-sm md:text-base">
                {renderDescription(descriptionProject.description)}
              </div>
            </div>
            {/* Footer */}
            <div className="px-6 py-3 border-t border-orange-800 bg-black bg-opacity-20 text-right">
              <button
                onClick={() => setDescriptionProject(null)}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg transition duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;