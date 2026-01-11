import React, { useState } from 'react';
import { Send, CheckCircle, XCircle } from 'lucide-react';
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
        <div className="glass-card p-6 rounded-2xl w-full max-w-sm mt-8 relative overflow-hidden">
            <h3 className="text-xl font-bold mb-4 text-dark">Kontaktformular</h3>

            <AnimatePresence mode='wait'>
                {status === 'success' ? (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center justify-center p-8 text-center text-green-600"
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
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input type="text" id="name" name="name" required
                                className="w-full px-4 py-2 rounded-lg bg-white/50 border border-t-white/60 border-l-white/60 border-r-gray-200 border-b-gray-200 focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
                                placeholder="Ihr Name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" id="email" name="email" required
                                className="w-full px-4 py-2 rounded-lg bg-white/50 border border-t-white/60 border-l-white/60 border-r-gray-200 border-b-gray-200 focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
                                placeholder="ihre@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
                            <textarea id="message" name="message" required rows={4}
                                className="w-full px-4 py-2 rounded-lg bg-white/50 border border-t-white/60 border-l-white/60 border-r-gray-200 border-b-gray-200 focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all resize-none"
                                placeholder="Ihre Nachricht..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full py-3 bg-primary text-white rounded-lg font-bold shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
                        >
                            {status === 'submitting' ? 'Senden...' : (
                                <>
                                    Senden <Send size={18} className="group-hover:translate-x-1 transition-transform" />
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
