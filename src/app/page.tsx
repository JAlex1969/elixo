import Link from 'next/link';
import { MapPin, BookOpen, Truck, BatteryCharging } from 'lucide-react';
import Card from '@/components/Card';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-green-900 to-green-700 text-white py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="relative max-w-7xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        Lisboa Mais Verde, <span className="text-green-300">Resíduo Zero</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-green-100 font-light">
                        O seu guia inteligente para a reciclagem de equipamentos elétricos e eletrónicos em Lisboa.
                        Junte-se a nós para um futuro sustentável.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/mapa"
                            className="px-8 py-4 bg-white text-green-800 rounded-full font-bold text-lg hover:bg-green-50 transition transform hover:-translate-y-1 shadow-lg"
                        >
                            Encontrar Ponto de Recolha
                        </Link>
                        <Link
                            href="/educacao"
                            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition transform hover:-translate-y-1"
                        >
                            Saber Mais
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Como podemos ajudar?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Facilitamos o processo de descarte correto dos seus equipamentos antigos, conectando-o aos locais certos e informando sobre a importância da reciclagem.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center group">
                            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                                <MapPin className="text-green-600 group-hover:text-white" size={28} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Mapa Interativo</h3>
                            <p className="text-gray-500 text-sm">Localize rapidamente o ponto de recolha mais próximo de si em Lisboa.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center group">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                                <BatteryCharging className="text-blue-600 group-hover:text-white" size={28} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">O Que Reciclar?</h3>
                            <p className="text-gray-500 text-sm">Saiba quais os tipos de equipamentos que podem e devem ser reciclados.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center group">
                            <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors">
                                <BookOpen className="text-orange-600 group-hover:text-white" size={28} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Educação</h3>
                            <p className="text-gray-500 text-sm">Entenda o impacto ambiental do lixo eletrónico e os benefícios da reciclagem.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center group">
                            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors">
                                <Truck className="text-purple-600 group-hover:text-white" size={28} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Recolha CML</h3>
                            <p className="text-gray-500 text-sm">Informações sobre o serviço de recolha de monstros da Câmara Municipal.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Info Stats Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-green-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sabia que...?</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-bold text-xs mt-1">1</span>
                                    <p className="text-gray-700">Portugal recolheu cerca de 63 mil toneladas de REEE em 2017, mas ainda há muito a fazer para atingir as metas europeias.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-bold text-xs mt-1">2</span>
                                    <p className="text-gray-700">O lixo eletrónico contém materiais tóxicos como mercúrio e chumbo, que podem contaminar solos e águas se descartados incorretamente.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-bold text-xs mt-1">3</span>
                                    <p className="text-gray-700">Reciclar permite recuperar metais preciosos como ouro, prata e cobre, promovendo a economia circular.</p>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <Link href="/educacao" className="text-green-700 font-bold hover:text-green-800 hover:underline">
                                    Ler mais estatísticas &rarr;
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 w-full relative h-[300px] rounded-2xl overflow-hidden shadow-lg">
                            {/* Abstract tech/nature image placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white text-4xl font-bold opacity-90">
                                <Recycle size={120} className="animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function Recycle(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
            <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
            <path d="m14 16-3 3 3 3" />
            <path d="M8.293 13.596 7.196 9.5 3.1 7c-.835-.43-1.16-.602-1.1-1.2a1.08 1.08 0 0 1 1.1-1.2h16.2c.415 0 .825.2.98.6a1.03 1.03 0 0 1-.22.9L16.5 10l-1.5 6" />
            <path d="m17 7 3-3-3-3" />
        </svg>
    )
}
