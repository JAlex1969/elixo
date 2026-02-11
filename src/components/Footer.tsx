import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-10 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Column 1: About */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-green-400">E-Lixo Zero Lisboa</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Um projeto escolar da EPBJC para promover a recolha responsável de resíduos eletrónicos (REEE) em Lisboa.
                            Incentivamos a reciclagem para um futuro mais sustentável.
                        </p>
                    </div>

                    {/* Column 2: Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-green-400">Links Úteis</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/mapa" className="hover:text-green-300 transition">Encontrar Pontos de Recolha</Link></li>
                            <li><Link href="/educacao" className="hover:text-green-300 transition">Por que Reciclar?</Link></li>
                            <li><Link href="/classificacao" className="hover:text-green-300 transition">Guia de Classificação</Link></li>
                            <li><Link href="/contato" className="hover:text-green-300 transition">Fale Conosco</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Partners/Sources */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-green-400">Parceiros & Fontes</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <a href="https://informacoeseservicos.lisboa.pt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-green-300 transition">
                                    Câmara Municipal de Lisboa <ExternalLink size={14} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.valorsul.pt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-green-300 transition">
                                    Valorsul <ExternalLink size={14} />
                                </a>
                            </li>
                            <li>
                                <a href="https://electrao.pt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-green-300 transition">
                                    Electrão <ExternalLink size={14} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.entrajuda.pt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-green-300 transition">
                                    Entrajuda <ExternalLink size={14} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} E-Lixo Zero Lisboa. Projeto Escolar EPBJC - 12º Ano TGPSI.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
