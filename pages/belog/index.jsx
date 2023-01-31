import React from "react";
import { blogPosts } from "@/data/content";

const Belog = () => {
  return (
    <div className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Insights, updates, and stories from the NextRoute team.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative h-64 mb-6 overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                  {post.date}
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                Read More 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Belog;
 // Update at 2023-01-09 16:03:28
 // Update at 2023-01-25 12:22:12
 // Update at 2023-01-31 12:50:40
