import "@/styles/globals.css";
import NavigationBar from "@/components/NavigationBar";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <NavigationBar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

const Footer = () => (
  <footer className="bg-gray-50 border-t border-gray-100 py-12 dark:bg-gray-900 dark:border-gray-800">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p className="text-gray-500 dark:text-gray-400">
        © 2023 NextRoute Inc. All rights reserved.
      </p>
    </div>
  </footer>
);
