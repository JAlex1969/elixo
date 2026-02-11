import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Image, Platform } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import API_URL from '../../constants/api';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

interface Point {
    id: number;
    name: string;
    address: string;
    latitude: string; // API sends string
    longitude: string;
    type_name?: string;
    contact_info?: string;
    schedule?: string;
}

export default function MapScreen() {
    const [points, setPoints] = useState<Point[]>([]);
    const [loading, setLoading] = useState(true);
    const [permission, setPermission] = useState<boolean | null>(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            setPermission(status === 'granted');
            fetchPoints();
        })();
    }, []);

    const fetchPoints = async () => {
        try {
            const response = await fetch(`${API_URL}/points`);
            const data = await response.json();
            setPoints(data);
        } catch (error) {
            console.error('Error fetching points:', error);
        } finally {
            setLoading(false);
        }
    };

    // Default region: Lisbon
    const initialRegion = {
        latitude: 38.7223,
        longitude: -9.1393,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    return (
        <View className="flex-1">
            {loading ? (
                <View className="flex-1 items-center justify-center">
                    <ActivityIndicator size="large" color="#16a34a" />
                    <Text className="mt-2 text-gray-500">Carregando mapa...</Text>
                </View>
            ) : (
                <MapView
                    style={{ width: '100%', height: '100%' }}
                    initialRegion={initialRegion}
                    showsUserLocation={permission || false}
                    className="flex-1"
                >
                    {points.map((point) => (
                        <Marker
                            key={point.id}
                            coordinate={{
                                latitude: parseFloat(point.latitude),
                                longitude: parseFloat(point.longitude),
                            }}
                            title={point.name}
                            description={point.type_name}
                        >
                            <Ionicons name="location" size={30} color={point.type_name?.includes('Ponto Eletrão') ? '#2563eb' : '#16a34a'} />
                            <Callout>
                                <View className="w-48 p-2">
                                    <Text className="font-bold">{point.name}</Text>
                                    <Text className="text-xs text-gray-500 mb-1">{point.type_name}</Text>
                                    <Text className="text-xs">{point.address}</Text>
                                    {point.schedule && <Text className="text-xs mt-1 text-green-700">{point.schedule}</Text>}
                                </View>
                            </Callout>
                        </Marker>
                    ))}
                </MapView>
            )}

            {/* Search Bar Overlay (Visual only for now) */}
            <View className="absolute top-12 left-4 right-4 bg-white rounded-lg shadow-md p-3 flex-row items-center gap-2">
                <Ionicons name="search" size={20} color="gray" />
                <Text className="text-gray-400">Pesquisar pontos...</Text>
            </View>
        </View>
    );
}
