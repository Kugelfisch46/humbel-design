import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo: React.FC = () => {
    return (
        <div className="w-full mb-8">
            <h2 className="text-lg font-bold mb-4 text-dark uppercase tracking-widest text-xs">Kontakt</h2>
            <div className="space-y-3 font-light text-sm text-gray-800">
                <a href="tel:+41562494465" className="flex items-center gap-3 hover:text-primary transition-colors group">
                    <Phone size={16} className="text-dark/60 group-hover:text-primary transition-colors" />
                    <span>+41 56 249 44 65</span>
                </a>

                <a href="mailto:info@humbel.design" className="flex items-center gap-3 hover:text-primary transition-colors group">
                    <Mail size={16} className="text-dark/60 group-hover:text-primary transition-colors" />
                    <span>info@humbel.design</span>
                </a>

                <div className="flex items-start gap-3 group">
                    <MapPin size={16} className="text-dark/60 mt-1" />
                    <address className="not-italic leading-relaxed">
                        Humbel Design<br />
                        Stephan Humbel<br />
                        Dorfstrasse 38<br />
                        5444 Rümikon
                    </address>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
