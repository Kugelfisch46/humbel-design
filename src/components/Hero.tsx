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

                <div className="mb-8">
                    <p className="text-lg md:text-xl font-light leading-relaxed text-gray-800 mb-4">
                        humbel.info wird überarbeitet - ich freue mich über Ihr Interesse an Untersetzern aus Aluminium oder Edelstahl sowie an Karten mit Wort- und Zahlenkunst - Karten zum Jahreswechsel, Trauerkarten, Gratulationskarten zu runden und halbrunden Geburtstagen, Karten für besondere Gelegenheiten.
                    </p>
                    <p className="text-lg md:text-xl font-light leading-relaxed text-gray-800 mb-4">
                        Teilen Sie mir mittels Kontaktformular Ihre Wünsche mit.
                    </p>
                    <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-800">
                        bis bald und herzlich<br />
                        stephan humbel
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
