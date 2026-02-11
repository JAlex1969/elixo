import { AlertTriangle, TrendingUp, Globe, HeartPulse } from 'lucide-react';

export default function EducationPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="bg-green-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-green-900 mb-4">Lixo Eletrónico: O Desafio Invisível</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Aprenda sobre o impacto dos Resíduos de Equipamentos Elétricos e Eletrónicos (REEE) e porque é urgente agir agora.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Definition Section */}
                <section className="mb-20">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">O que é o Lixo Eletrónico?</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                O lixo eletrónico, ou REEE, refere-se a todos os equipamentos elétricos e eletrónicos que chegaram ao fim da sua vida útil. Isto inclui desde grandes eletrodomésticos, como frigoríficos, até pequenos gadgets como telemóveis e cabos.
                            </p>
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <p className="font-semibold text-yellow-800">
                                    Sabia que este é o fluxo de resíduos que mais cresce no mundo?
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <img src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=300&h=300" className="rounded-lg shadow-lg hover:scale-105 transition" alt="Telemóveis antigos" />
                            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=300&h=300" className="rounded-lg shadow-lg translate-y-8 hover:scale-105 transition" alt="Motherboards e Chips" />
                        </div>
                    </div>
                </section>

                {/* Why it matters - Icon Grid */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Por que devemos reciclar?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 border border-gray-100 rounded-xl hover:shadow-lg transition">
                            <AlertTriangle className="mx-auto text-red-500 w-16 h-16 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Toxicidade</h3>
                            <p className="text-gray-600">Evita a libertação de mercúrio e outras substâncias perigosas no solo.</p>
                        </div>
                        <div className="text-center p-6 border border-gray-100 rounded-xl hover:shadow-lg transition">
                            <TrendingUp className="mx-auto text-green-500 w-16 h-16 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Economia Circular</h3>
                            <p className="text-gray-600">Reintroduz materiais valiosos na cadeia produtiva.</p>
                        </div>
                        <div className="text-center p-6 border border-gray-100 rounded-xl hover:shadow-lg transition">
                            <Globe className="mx-auto text-blue-500 w-16 h-16 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Recursos Naturais</h3>
                            <p className="text-gray-600">Reduz a necessidade de mineração de novos metais.</p>
                        </div>
                        <div className="text-center p-6 border border-gray-100 rounded-xl hover:shadow-lg transition">
                            <HeartPulse className="mx-auto text-pink-500 w-16 h-16 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Saúde Pública</h3>
                            <p className="text-gray-600">Protege a saúde das comunidades contra contaminações.</p>
                        </div>
                    </div>
                </section>

                {/* Stats Section with Sources */}
                <section className="bg-gray-900 text-white rounded-3xl p-10 md:p-16 text-center">
                    <h2 className="text-3xl font-bold mb-8">Dados e Estatísticas Relevantes</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div>
                            <div className="text-5xl font-extrabold text-green-400 mb-2">53.6 Mt</div>
                            <p className="text-gray-400">Total de lixo eletrónico gerado globalmente em 2019.</p>
                        </div>
                        <div>
                            <div className="text-5xl font-extrabold text-green-400 mb-2">17.4%</div>
                            <p className="text-gray-400">Apenas essa percentagem foi reciclada formalmente.</p>
                        </div>
                        <div>
                            <div className="text-5xl font-extrabold text-green-400 mb-2">63.000 t</div>
                            <p className="text-gray-400">REEE recolhidos em Portugal (2017).</p>
                        </div>
                    </div>

                    <div className="text-sm text-gray-500 flex flex-col gap-2">
                        <p className="font-semibold text-gray-400">Fontes Oficiais:</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="https://ec.europa.eu/eurostat" target="_blank" className="hover:text-white underline">Eurostat</a>
                            <a href="https://apambiente.pt/" target="_blank" className="hover:text-white underline">Agência Portuguesa do Ambiente</a>
                            <a href="https://Globalewaste.org" target="_blank" className="hover:text-white underline">Global E-waste Monitor</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
