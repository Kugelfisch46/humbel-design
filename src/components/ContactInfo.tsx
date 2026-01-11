import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo: React.FC = () => {
    return (
        <div className="max-w-sm">
            <h2 className="text-xl font-bold mb-6 text-dark uppercase tracking-widest text-sm">Kontakt</h2>
            <div className="space-y-4">
                <a href="tel:+41562494465" className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors group">
                    <div className="p-2 bg-white/50 rounded-full group-hover:bg-primary/10 transition-colors">
                        <Phone size={20} className="text-primary" />
                    </div>
                    <span>+41 56 249 44 65</span>
                </a>

                <a href="mailto:info@humbel.design" className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors group">
                    <div className="p-2 bg-white/50 rounded-full group-hover:bg-primary/10 transition-colors">
                        <Mail size={20} className="text-primary" />
                    </div>
                    <span>info@humbel.design</span>
                </a>

                <div className="flex items-start gap-3 text-gray-700 group">
                    <div className="p-2 bg-white/50 rounded-full mt-1">
                        <MapPin size={20} className="text-primary" />
                    </div>
                    <address className="not-italic">
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
