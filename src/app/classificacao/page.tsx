import { Monitor, Battery, Cpu, Box, Lamp } from 'lucide-react';

export default function ClassificationPage() {
    const categories = [
        {
            id: 1,
            title: "Grandes Equipamentos",
            icon: <Box size={40} />,
            examples: "Frigoríficos, Máquinas de lavar, Fogões, Ar condicionados.",
            instruction: "Devem ser entregues em centros de receção ou recolhidos por agendamento (CM Lisboa). Não abandonar na rua.",
            color: "bg-blue-100 text-blue-700"
        },
        {
            id: 2,
            title: "Pequenos Equipamentos",
            icon: <Monitor size={40} />,
            examples: "Torradeiras, Secadores, Aspiradores, Ferros de engomar.",
            instruction: "Podem ser depositados no Ponto Eletrão (em supermercados e lojas de eletrónica) ou ecocentros.",
            color: "bg-green-100 text-green-700"
        },
        {
            id: 3,
            title: "Informática e Telecom",
            icon: <Cpu size={40} />,
            examples: "Telemóveis, Computadores, Impressoras, Routers.",
            instruction: "Se ainda funcionam, considere doar (Entrajuda). Caso contrário, Ponto Eletrão ou lojas que aceitam retomas.",
            color: "bg-purple-100 text-purple-700"
        },
        {
            id: 4,
            title: "Pilhas e Baterias",
            icon: <Battery size={40} />,
            examples: "Pilhas AA/AAA, Baterias de portáteis, Baterias de carros.",
            instruction: "Extremamente tóxicas. Usar sempre o pilhão (vermelho) disponível em supermercados e ecopontos.",
            color: "bg-red-100 text-red-700"
        },
        {
            id: 5,
            title: "Lâmpadas",
            icon: <Lamp size={40} />,
            examples: "Lâmpadas fluorescentes, economizadoras, LEDs.",
            instruction: "Não colocar no lixo comum ou vidro! Entregar nos locais de venda ou ecocentros dedicados.",
            color: "bg-yellow-100 text-yellow-700"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Guia de Classificação</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Saiba identificar e separar corretamente os seus resíduos eletrónicos para encaminhá-los ao destino certo.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((cat) => (
                    <div key={cat.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div className={`p-8 flex items-center justify-center ${cat.color}`}>
                            {cat.icon}
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">{cat.title}</h3>

                            <div className="mb-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Exemplos</span>
                                <p className="text-gray-700 mt-1">{cat.examples}</p>
                            </div>

                            <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Como descartar</span>
                                <p className="text-gray-900 font-medium mt-1 bg-gray-50 p-3 rounded-lg border border-gray-200 text-sm">
                                    {cat.instruction}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
