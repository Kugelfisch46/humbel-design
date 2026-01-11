import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-primary relative overflow-x-hidden font-sans text-dark selection:bg-secondary selection:text-white">
            {/* Decorative Background Pattern */}
            <div className="fixed inset-0 opacity-10 pointer-events-none z-0">
                {/* We will add the specific pattern image here once identified */}
                <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat opacity-20"></div>
            </div>

            <main className="relative z-10 container mx-auto px-4 py-8 md:py-12 flex flex-col min-h-screen">
                {children}
            </main>
        </div>
    );
};

export default Layout;
