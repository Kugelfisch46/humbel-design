import React from 'react';
import { motion } from 'framer-motion';

const products = [
    // Using placeholder names for now - user will need to re-upload images
    { id: 1, src: '/images/1-scaled.jpg', alt: 'Coaster Design 1', span: 'col-span-1 row-span-1' },
    { id: 2, src: '/images/221.jpg', alt: 'Art Card 1', span: 'col-span-1 row-span-2' },
    { id: 3, src: '/images/2-scaled.jpg', alt: 'Coaster Design 2', span: 'col-span-1 row-span-1' },
    { id: 4, src: '/images/222.jpg', alt: 'Art Card 2', span: 'col-span-2 row-span-1' },
    { id: 5, src: '/images/e1.jpg', alt: 'Coaster Design 3', span: 'col-span-1 row-span-1' },
];

const ProductShowcase: React.FC = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
            {products.map((product, index) => (
                <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className={`relative rounded-xl overflow-hidden group ${product.span} glass-card border-0`}
                >
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* Placeholder background */}
                    <img
                        src={product.src}
                        alt={product.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 relative z-10"
                        onError={(e) => {
                            // Fallback if image missing
                            (e.target as HTMLImageElement).style.display = 'none';
                        }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-20 pointer-events-none" />
                </motion.div>
            ))}
        </div>
    );
};

export default ProductShowcase;
