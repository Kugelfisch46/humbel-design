import React, { useState, useRef } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    // Helper to encode data for Netlify
    const encode = (data: Record<string, string>) => {
        return Object.keys(data)
            .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const recaptchaValue = recaptchaRef.current?.getValue();
        if (!recaptchaValue) {
            alert("Bitte bestätigen Sie, dass Sie kein Roboter sind.");
            return;
        }

        setStatus('submitting');

        const formData = new FormData(e.currentTarget);
        // data-netlify="true" in the tag needs this explicit encoding in React
        const data = Object.fromEntries(formData.entries()) as Record<string, string>;

        try {
            await fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({
                    "form-name": "contact",
                    "g-recaptcha-response": recaptchaValue,
                    ...data
                })
            });
            setStatus('success');
            recaptchaRef.current?.reset();
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div className="w-full relative mt-8 md:mt-0">
            <h2 className="text-lg font-bold mb-6 text-dark uppercase tracking-widest text-xs md:hidden">Kontaktformular</h2>


            <AnimatePresence mode='wait'>
                {status === 'success' ? (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center justify-center p-8 text-center text-green-700 bg-white/40 rounded-xl"
                    >
                        <CheckCircle size={40} className="mb-2" />
                        <p className="font-light tracking-wide">Nachricht gesendet</p>
                        <button onClick={() => setStatus('idle')} className="mt-4 text-xs text-gray-500 uppercase tracking-widest hover:text-dark transition-colors">Neues Formular</button>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        name="contact"
                        method="post"
                        data-netlify="true"
                        data-netlify-recaptcha="true"
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <input type="hidden" name="form-name" value="contact" />

                        <div className="group">
                            <input type="text" id="name" name="name" required
                                className="w-full py-2 bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none transition-colors placeholder:text-gray-400 text-dark font-light"
                                placeholder="Name"
                            />
                        </div>

                        <div className="group">
                            <input type="email" id="email" name="email" required
                                className="w-full py-2 bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none transition-colors placeholder:text-gray-400 text-dark font-light"
                                placeholder="Email"
                            />
                        </div>

                        <div className="group">
                            <textarea id="message" name="message" required rows={3}
                                className="w-full py-2 bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none transition-colors resize-none placeholder:text-gray-400 text-dark font-light"
                                placeholder="Nachricht"
                            ></textarea>
                        </div>

                        <div className="pt-2">
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6LdAvUIUAAAAAHjrjmjtNTkWyTgv3HKChCKGJGmC"}
                                className="mb-4"
                            />

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full py-3 border border-dark/20 hover:border-dark text-dark rounded-none uppercase tracking-[0.2em] text-xs font-medium hover:bg-dark hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-50"
                            >
                                {status === 'submitting' ? 'Senden...' : (
                                    <>
                                        Senden <Send size={12} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </div>
                        {status === 'error' && <p className="text-red-500 text-xs text-center mt-2">Fehler beim Senden.</p>}
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ContactForm;
