import React from "react";

const Contact = () => {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
              Let's start a <span className="text-blue-600">conversation</span>.
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
              Have a question or want to work together? Drop us a message and our team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                  📍
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Visit us</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">123 Innovation Drive, Tech City, TC 10101</p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                  📧
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email us</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">hello@nextroute.com</p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                  📞
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Call us</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">+1 (555) 000-1234</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                  <input type="text" className="w-full bg-gray-50 dark:bg-gray-900 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-600 transition-all outline-none" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-gray-50 dark:bg-gray-900 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-600 transition-all outline-none" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <input type="email" className="w-full bg-gray-50 dark:bg-gray-900 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-600 transition-all outline-none" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-gray-50 dark:bg-gray-900 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-600 transition-all outline-none" placeholder="How can we help?"></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
