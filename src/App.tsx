
import Layout from './components/Layout';
import Hero from './components/Hero';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import { motion } from 'framer-motion';

function App() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] w-full max-w-4xl mx-auto">
        <div className="flex flex-col gap-12 w-full">
          <Hero />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col md:flex-row gap-8 items-start justify-center"
          >
            <ContactInfo />
            <ContactForm />
          </motion.div>
        </div>

        <footer className="mt-16 text-gray-800 text-sm font-medium">
          &copy; {new Date().getFullYear()} humbel.design. All rights reserved.
        </footer>
      </div>
    </Layout>
  );
}

export default App;

