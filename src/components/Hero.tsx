import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <div className="flex flex-col justify-center h-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-6xl md:text-8xl font-bold text-dark mb-2 tracking-tighter">
                    humbel
                </h1>
                <div className="h-1 w-24 bg-primary mb-8 rounded-full"></div>

                <div className="glass-card p-8 rounded-2xl max-w-lg mb-8 bg-white/40 border-white/30">
                    <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-800">
                        Diese Seite wird momentan überarbeitet.
                    </p>
                    <p className="mt-4 text-gray-600">
                        Wir sind bald zurück mit neuen Untersetzern und Karten.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
