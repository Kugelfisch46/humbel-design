import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        // Check if we are running the form logic (Netlify handles the post automatically if configured, 
        // but in SPA we often do a fetch)
        const form = e.currentTarget;
        const formData = new FormData(form);

        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData as any).toString()
        })
            .then(() => setStatus('success'))
            .catch((error) => {
                console.error(error);
                setStatus('error');
            });
    };

    return (
        <div className="w-full max-w-sm relative">
            <h3 className="text-xl font-bold mb-6 text-dark uppercase tracking-widest text-sm">Kontaktformular</h3>

            <AnimatePresence mode='wait'>
                {status === 'success' ? (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center justify-center p-8 text-center text-green-600 bg-white/30 rounded-xl"
                    >
                        <CheckCircle size={48} className="mb-2" />
                        <p className="font-medium">Nachricht gesendet!</p>
                        <button onClick={() => setStatus('idle')} className="mt-4 text-sm text-gray-500 underline">Neue Nachricht</button>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        name="contact"
                        method="post"
                        data-netlify="true"
                        onSubmit={handleSubmit}
                        className="space-y-4"
                    >
                        <input type="hidden" name="form-name" value="contact" />

                        <div>
                            <input type="text" id="name" name="name" required
                                className="w-full px-4 py-3 rounded-lg bg-white/40 border border-white/40 focus:bg-white/60 focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all placeholder:text-gray-500"
                                placeholder="Name"
                            />
                        </div>

                        <div>
                            <input type="email" id="email" name="email" required
                                className="w-full px-4 py-3 rounded-lg bg-white/40 border border-white/40 focus:bg-white/60 focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all placeholder:text-gray-500"
                                placeholder="Email"
                            />
                        </div>

                        <div>
                            <textarea id="message" name="message" required rows={4}
                                className="w-full px-4 py-3 rounded-lg bg-white/40 border border-white/40 focus:bg-white/60 focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all resize-none placeholder:text-gray-500"
                                placeholder="Nachricht..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full py-3 bg-dark text-white rounded-lg font-bold shadow-lg hover:shadow-xl hover:bg-black transition-all flex items-center justify-center gap-2 group disabled:opacity-70 uppercase tracking-widest text-xs"
                        >
                            {status === 'submitting' ? 'Senden...' : (
                                <>
                                    Senden <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                        {status === 'error' && <p className="text-red-500 text-sm text-center">Fehler beim Senden. Bitte versuchen Sie es erneut.</p>}
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ContactForm;
