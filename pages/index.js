import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={inter.className}>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
              Build Faster with <span className="text-blue-600">NextRoute</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
              The modern routing solution for your Next.js applications. Experience seamless navigation and premium UI out of the box.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/product" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-500/20">
                Explore Products
              </Link>
              <Link href="/about" className="bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 opacity-10 dark:opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400 rounded-full blur-[120px]" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Lightning Fast", desc: "Optimized for speed and performance from day one.", icon: "⚡" },
              { title: "Fully Responsive", desc: "Looks great on every device, from mobile to desktop.", icon: "📱" },
              { title: "Modern Stack", desc: "Built with Next.js, Tailwind CSS, and React.", icon: "🚀" },
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
 // Update at 2023-01-10 16:39:02
 // Update at 2023-01-23 15:04:31
 // Update at 2023-02-13 15:58:37
 // Update at 2023-02-21 12:37:27
 // Update at 2023-02-24 15:57:19
 // Update at 2023-02-27 15:49:05
 // Update at 2023-03-14 11:33:00
 // Update at 2023-03-14 17:51:26
 // Update at 2023-04-18 13:01:55
 // Update at 2023-04-19 09:50:26
 // Update at 2023-04-28 17:22:18
 // Update at 2023-08-03 13:36:28
 // Update at 2023-10-09 16:00:44
 // Update at 2023-10-25 14:01:14
 // Update at 2023-11-22 11:06:09
 // Update at 2023-11-24 12:52:08
 // Update at 2023-11-29 16:07:13
