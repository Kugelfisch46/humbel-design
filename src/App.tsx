
import Layout from './components/Layout';
import Hero from './components/Hero';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import { motion } from 'framer-motion';

function App() {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl glass-panel rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
        >
          {/* Left Content Section */}
          <div className="p-8 md:p-12 lg:p-16 flex-1 flex flex-col justify-center relative overflow-hidden">
            <div className="relative z-10">
              <Hero />
              <div className="mt-12 hidden md:block">
                <ContactInfo />
              </div>
            </div>
            {/* Subtle decorative circle behind text */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>

          {/* Right/Bottom Action Section */}
          <div className="bg-white/50 backdrop-blur-xl border-t md:border-t-0 md:border-l border-white/50 p-8 md:p-12 flex flex-col justify-center items-center md:items-stretch">
            <div className="md:hidden mb-8 w-full">
              <ContactInfo />
            </div>
            <ContactForm />
          </div>
        </motion.div>

        <footer className="mt-8 text-white/80 text-sm font-medium text-shadow-sm">
          &copy; {new Date().getFullYear()} humbel.design. All rights reserved.
        </footer>
      </div>
    </Layout>
  );
}

export default App;

