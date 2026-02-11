import { ScrollView, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function LearnScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="p-6">
                <Text className="text-3xl font-extrabold text-green-800 mb-6">Educação Ambiental</Text>

                {/* Definition */}
                <View className="mb-8">
                    <Text className="text-xl font-bold text-gray-800 mb-2">O que é Lixo Eletrónico?</Text>
                    <Text className="text-gray-600 text-base leading-6">
                        O Resíduo de Equipamentos Elétricos e Eletrónicos (REEE) é qualquer equipamento que chegou ao fim da sua vida útil, desde frigoríficos e máquinas de lavar até telemóveis e pilhas.
                    </Text>
                </View>

                {/* Why Recycle */}
                <View className="mb-8">
                    <Text className="text-xl font-bold text-gray-800 mb-4">Por que Reciclar?</Text>

                    <InfoItem
                        icon="skull-outline"
                        color="text-red-600"
                        title="Toxicidade"
                        desc="Evita a contaminação de solos e águas com mercúrio e chumbo."
                    />
                    <InfoItem
                        icon="refresh-outline"
                        color="text-green-600"
                        title="Economia Circular"
                        desc="Recupera materiais valiosos como ouro, cobre e metais raros."
                    />
                    <InfoItem
                        icon="earth-outline"
                        color="text-blue-600"
                        title="Recursos"
                        desc="Reduz a necessidade de mineração de novos materiais."
                    />
                </View>

                {/* Categories */}
                <View className="mb-8">
                    <Text className="text-xl font-bold text-gray-800 mb-4">Categorias de Descarte</Text>

                    <CategoryCard
                        title="Grandes Eletrodomésticos"
                        desc="Frigoríficos, Fogões. Entregar em Centros de Receção."
                        color="bg-blue-50"
                    />
                    <CategoryCard
                        title="Pequenos Eletrodomésticos"
                        desc="Torradeiras, Secadores. Ponto Eletrão."
                        color="bg-green-50"
                    />
                    <CategoryCard
                        title="Informática"
                        desc="Computadores, Tablets. Doar se possível (Entrajuda)."
                        color="bg-purple-50"
                    />
                    <CategoryCard
                        title="Pilhas e Baterias"
                        desc="Sempre no Pilhão! Altamente tóxicas."
                        color="bg-red-50"
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const InfoItem = ({ icon, title, desc, color }: any) => (
    <View className="flex-row gap-4 mb-4">
        <View className="mt-1">
            <Ionicons name={icon} size={24} className={color} style={{ color: color === 'text-red-600' ? '#dc2626' : (color === 'text-green-600' ? '#16a34a' : '#2563eb') }} />
            {/* NativeWind color classes for icons can be tricky, inline style backup */}
        </View>
        <View className="flex-1">
            <Text className="font-bold text-gray-800">{title}</Text>
            <Text className="text-gray-600">{desc}</Text>
        </View>
    </View>
);

const CategoryCard = ({ title, desc, color }: any) => (
    <View className={`p-4 rounded-xl mb-3 border border-gray-100 ${color}`}>
        <Text className="font-bold text-gray-800 mb-1">{title}</Text>
        <Text className="text-gray-600">{desc}</Text>
    </View>
);
