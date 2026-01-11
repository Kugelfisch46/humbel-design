import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-primary relative overflow-x-hidden font-sans text-dark selection:bg-secondary selection:text-white">
            {/* Full Screen Background Image */}
            <div className="fixed inset-0 z-0">
                <img
                    src="/images/221.jpg"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                {/* Overlay for readability - Gradient from top (clearer) to bottom (more opaque) */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-white/20 to-white/60 backdrop-blur-[2px]"></div>
            </div>

            <main className="relative z-10 container mx-auto px-4 py-8 md:py-12 flex flex-col min-h-screen">
                {children}
            </main>
        </div>
    );
};

export default Layout;
