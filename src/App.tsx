
import Layout from './components/Layout';
import Hero from './components/Hero';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import { motion } from 'framer-motion';

function App() {
  return (
    <Layout>
      <div className="h-screen w-full flex flex-col items-center justify-center p-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl glass-panel rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl max-h-[85vh] md:max-h-[800px]"
        >
          {/* Left Content Section */}
          <div className="p-6 md:p-8 flex-1 flex flex-col justify-center relative overflow-y-auto md:overflow-hidden">
            <div className="relative z-10">
              <Hero />
              <div className="mt-6 hidden md:block">
                <ContactInfo />
              </div>
            </div>
            {/* Subtle decorative circle behind text */}
            <div className="absolute -top-20 -left-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>

          {/* Right/Bottom Action Section */}
          <div className="bg-white/50 backdrop-blur-xl border-t md:border-t-0 md:border-l border-white/50 p-6 md:p-8 flex flex-col justify-center items-center md:items-stretch min-w-[320px]">
            <div className="md:hidden mb-6 w-full">
              <ContactInfo />
            </div>
            <ContactForm />
          </div>
        </motion.div>

        <footer className="mt-4 text-white/80 text-xs font-medium text-shadow-sm absolute bottom-2">
          &copy; {new Date().getFullYear()} humbel.design. All rights reserved.
        </footer>
      </div>
    </Layout>
  );
}

export default App;

