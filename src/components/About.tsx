import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  const experienceItems = [
    {
      year: '2024',
      title: 'Research Analyst',
      company: 'George Mason University',
      description:
        'Analyzed survey data from 1,200+ Pittsburgh pedestrians and cyclists, optimized SQL queries reducing processing time by 40%, and maintained 99% data integrity in deliverables.',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 bg-white dark:bg-gray-800 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute left-0 top-0 w-1/2 h-full z-0 pointer-events-none">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-10 animate-pulse fill-teal-400"
        >
          <path
            fill="currentColor"
            d="M38.5,-64.3C49.7,-58.7,59.5,-49.6,65.6,-38.5C71.6,-27.3,73.9,-13.7,73.3,-0.3C72.7,13.1,69.2,26.2,62.5,38.4C55.9,50.6,46.1,61.9,34.3,66.5C22.5,71.1,8.8,69,-4.5,71.7C-17.9,74.4,-35.8,81.9,-43.6,75.6C-51.3,69.2,-49,49.1,-56.3,34.8C-63.5,20.5,-80.4,12,-84.6,0.3C-88.8,-11.4,-80.3,-25.5,-71.6,-38.8C-63,-52.1,-54.1,-64.6,-42.5,-71.1C-30.9,-77.5,-15.4,-77.9,-1.1,-76.2C13.2,-74.5,26.4,-70,38.5,-64.3Z"
          />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-700 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              About <span className="text-teal-600 dark:text-teal-400">Me</span>
            </h2>
            <div
              className={`w-20 h-1 bg-teal-600 mx-auto rounded transition-all duration-700 delay-200 ${
                isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
            ></div>
          </div>

          {/* About Content */}
          <div
            className={`transition-all duration-1000 max-w-3xl mx-auto text-center md:text-left ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Data Analyst & Full Stack Developer
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate data analyst and developer pursuing my Master's in
              Information Systems at George Mason University. With expertise in
              Python, SQL, and data visualization, I specialize in transforming
              complex data into actionable insights.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My approach combines analytical thinking with technical expertise
              to deliver data-driven solutions that drive business value. I'm
              constantly exploring new technologies and methodologies to enhance
              my analytical and development capabilities.
            </p>

            {/* Info */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Name:</p>
                <p className="text-gray-700 dark:text-gray-300">Rudra Bedekar</p>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Email:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  rudra.bedekar03@gmail.com
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Location:
                </p>
                <p className="text-gray-700 dark:text-gray-300">Fairfax, VA</p>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Education:
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  MS Information Systems
                </p>
              </div>
            </div>

            <a
              href="https://drive.google.com/file/d/1LigA5J-2Q0t9qdIDg1e_OXVvHGm--peh/view?usp=drive_link"
              className="px-8 py-3 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-medium transition-colors duration-300 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>

          {/* Experience */}
          <div className="mt-24">
            <h3
              className={`text-2xl font-bold text-center text-gray-900 dark:text-white mb-12 transition-all duration-700 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              Experience
            </h3>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-px bg-gray-300 dark:bg-gray-600"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {experienceItems.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row md:items-center transition-all duration-700 delay-${
                      index * 200
                    } ${
                      isInView
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                  >
                    {/* Year bubble */}
                    <div className="mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                      <div className="w-16 h-16 rounded-full bg-teal-600 flex items-center justify-center text-white font-medium shadow-lg">
                        {item.year}
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`md:w-1/2 ${
                        index % 2 === 0
                          ? 'md:pr-12 md:text-right'
                          : 'md:pl-12 md:ml-auto'
                      }`}
                    >
                      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                        <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-teal-600 dark:text-teal-400 font-medium mb-3">
                          {item.company}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
