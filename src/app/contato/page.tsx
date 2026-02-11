"use client";

import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Entre em Contacto</h1>
                    <p className="text-lg text-gray-600">
                        Tem dúvidas sobre onde reciclar ou sugestões para o nosso projeto? Envie-nos uma mensagem.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    {/* Contact Info Sidebar */}
                    <div className="bg-green-700 text-white p-10 md:w-1/3 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold mb-6">Informações</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <MapPin className="mt-1 flex-shrink-0" />
                                    <span>Escola Profissional Bento de Jesus Caraça<br />Lisboa, Portugal</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <Mail className="flex-shrink-0" />
                                    <span>projeto@elixozero.pt</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <Phone className="flex-shrink-0" />
                                    <span>+351 21 000 0000</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-10">
                            <p className="text-green-200 text-sm">
                                Projeto desenvolvido no âmbito do curso TGPSI - 12º Ano.
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="p-10 md:w-2/3">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Envie uma mensagem</h3>

                        {status === 'success' && (
                            <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6 flex items-center">
                                Mensagem enviada com sucesso! Entraremos em contacto em breve.
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
                                Ocorreu um erro ao enviar. Por favor tente novamente.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition transform active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? 'A enviar...' : (
                                    <>Enviar Mensagem <Send size={18} /></>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
