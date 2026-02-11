import { Image, ScrollView, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        {/* Header / Hero */}
        <View className="bg-green-700 p-6 rounded-b-[30px] shadow-lg">
          <View className="flex-row items-center justify-between mb-6">
            <View className="flex-row items-center gap-2">
              <Ionicons name="leaf" size={24} color="white" />
              <Text className="text-white text-xl font-bold">E-Lixo Zero</Text>
            </View>
            <Link href="/profile" asChild>
              <Pressable className="bg-green-600 p-2 rounded-full">
                <Ionicons name="person-outline" size={20} color="white" />
              </Pressable>
            </Link>
          </View>

          <Text className="text-white text-3xl font-extrabold mb-2">
            Lisboa Mais <Text className="text-green-300">Verde</Text>
          </Text>
          <Text className="text-green-100 text-base mb-6">
            Encontre o ponto de recolha mais próximo e recicle seus eletrónicos hoje.
          </Text>

          <View className="flex-row gap-3">
            <Pressable
              onPress={() => router.push('/map')}
              className="bg-white px-6 py-3 rounded-full flex-1 items-center active:bg-gray-100"
            >
              <Text className="text-green-800 font-bold">Ver Mapa</Text>
            </Pressable>
            <Pressable
              onPress={() => router.push('/learn')}
              className="bg-green-800 border border-green-600 px-6 py-3 rounded-full flex-1 items-center active:bg-green-900"
            >
              <Text className="text-white font-bold">Saber Mais</Text>
            </Pressable>
          </View>
        </View>

        {/* Feature Grid */}
        <View className="p-6">
          <Text className="text-lg font-bold text-gray-800 mb-4">Serviços</Text>

          <View className="flex-row gap-4 mb-4">
            <FeatureCard
              icon="map-outline"
              title="Mapa"
              color="bg-green-100"
              iconColor="#16a34a"
              onPress={() => router.push('/map')}
            />
            <FeatureCard
              icon="battery-charging-outline"
              title="Tipos"
              color="bg-blue-100"
              iconColor="#2563eb"
              onPress={() => router.push('/learn')}
            />
          </View>

          <View className="flex-row gap-4">
            <FeatureCard
              icon="stats-chart-outline"
              title="Dados"
              color="bg-orange-100"
              iconColor="#ea580c"
              onPress={() => router.push('/learn')}
            />
            <FeatureCard
              icon="bookmark-outline"
              title="Guia"
              color="bg-purple-100"
              iconColor="#9333ea"
              onPress={() => router.push('/learn')}
            />
          </View>
        </View>

        {/* Fact Card */}
        <View className="mx-6 mb-8 bg-green-50 p-6 rounded-2xl border border-green-100">
          <View className="flex-row items-center gap-2 mb-2">
            <Ionicons name="bulb-outline" size={20} color="#15803d" />
            <Text className="font-bold text-green-800">Sabia que?</Text>
          </View>
          <Text className="text-green-900 leading-relaxed">
            O lixo eletrónico é o fluxo de resíduos que mais cresce no mundo, mas contém materiais preciosos como ouro e cobre.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const FeatureCard = ({ icon, title, color, iconColor, onPress }: any) => (
  <Pressable
    onPress={onPress}
    className="flex-1 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 items-center justify-center active:bg-gray-50"
  >
    <View className={`p-3 rounded-full mb-2 ${color}`}>
      <Ionicons name={icon} size={24} color={iconColor} />
    </View>
    <Text className="font-semibold text-gray-700">{title}</Text>
  </Pressable>
);
