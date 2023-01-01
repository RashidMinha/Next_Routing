import React from "react";

const About = () => {
  return (
    <div className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
              We're on a mission to <span className="text-blue-600">redefine</span> the web.
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Founded in 2023, NextRoute has been at the forefront of digital innovation. We believe that technology should be accessible, beautiful, and incredibly fast.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-500 mb-10">
              Our team of engineers and designers work tirelessly to build tools that empower developers and businesses to create exceptional experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-4xl font-bold text-blue-600 mb-2">10M+</h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Users Worldwide</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-blue-600 mb-2">99.9%</h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Uptime Guarantee</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-tr from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-[4rem] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Our Team"
                className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal opacity-80"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl max-w-xs border border-gray-100 dark:border-gray-700">
              <p className="text-gray-900 dark:text-white font-bold italic mb-4">
                "NextRoute has transformed the way we handle our frontend architecture."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full" />
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Alex Johnson</p>
                  <p className="text-xs text-gray-500">CTO at TechFlow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
