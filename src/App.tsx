import Layout from './components/Layout';
import Hero from './components/Hero';
import ContactInfo from './components/ContactInfo';
import ProductShowcase from './components/ProductShowcase';
import ContactForm from './components/ContactForm';
import { motion } from 'framer-motion';

function App() {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start min-h-[calc(100vh-100px)]">
        {/* Left Column: Content */}
        <div className="flex flex-col h-full justify-between">
          <div className="mb-12 lg:mb-0">
            <Hero />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col md:flex-row gap-8 mt-12 items-start"
            >
              <ContactInfo />
              <ContactForm />
            </motion.div>
          </div>

          <footer className="mt-12 text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} humbel.design. All rights reserved.
          </footer>
        </div>

        {/* Right Column: Visuals */}
        <div className="relative hidden lg:block h-full">
          <div className="sticky top-8">
            <ProductShowcase />
          </div>
        </div>

        {/* Mobile Showcase (visible only on small screens) */}
        <div className="lg:hidden mt-8">
          <ProductShowcase />
        </div>
      </div>
    </Layout>
  );
}

export default App;
