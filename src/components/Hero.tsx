import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Hero: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="flex flex-col justify-center h-full">
            {createPortal(
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
                            onClick={() => setSelectedImage(null)}
                        >
                            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
                                <X size={32} />
                            </button>
                            <motion.img
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                src={selectedImage}
                                alt="Full size"
                                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="mb-8">
                    <img src="/images/logo_home-black.png" alt="humbel" className="h-16 w-auto object-contain" />
                </div>

                <div className="mb-6">
                    <p className="text-base md:text-lg font-light leading-relaxed text-gray-800 mb-3">
                        humbel.info wird überarbeitet - ich freue mich über Ihr Interesse an Untersetzern aus Aluminium oder Edelstahl sowie an Karten mit Wort- und Zahlenkunst - Karten zum Jahreswechsel, Trauerkarten, Gratulationskarten zu runden und halbrunden Geburtstagen, Karten für besondere Gelegenheiten.
                    </p>
                    <p className="text-base md:text-lg font-light leading-relaxed text-gray-800 mb-3">
                        Teilen Sie mir mittels Kontaktformular Ihre Wünsche mit.
                    </p>
                    <p className="text-base md:text-lg font-medium leading-relaxed text-gray-800">
                        bis bald und herzlich<br />
                        stephan humbel
                    </p>

                    <div className="flex gap-4 mt-6">
                        <img
                            src="/images/e1.jpg"
                            alt="Showcase 1"
                            className="w-1/2 rounded-lg shadow-sm object-cover h-32 hover:scale-105 transition-transform duration-500 cursor-zoom-in border border-white/20"
                            onClick={() => setSelectedImage('/images/e1.jpg')}
                        />
                        <img
                            src="/images/e2-scaled.jpg"
                            alt="Showcase 2"
                            className="w-1/2 rounded-lg shadow-sm object-cover h-32 hover:scale-105 transition-transform duration-500 cursor-zoom-in border border-white/20"
                            onClick={() => setSelectedImage('/images/e2-scaled.jpg')}
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
