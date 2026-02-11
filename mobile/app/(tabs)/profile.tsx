import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../context/AuthContext';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
    const { user, logout, isAuthenticated } = useAuth();

    const handleLogout = async () => {
        await logout();
        router.replace('/');
    };

    if (!isAuthenticated || !user) {
        return (
            <SafeAreaView className="flex-1 bg-white justify-center items-center p-6">
                <Ionicons name="lock-closed-outline" size={80} color="#e5e7eb" />
                <Text className="text-2xl font-bold text-gray-800 mt-6 mb-2">Acesso Reservado</Text>
                <Text className="text-gray-500 text-center mb-8">
                    Faça login para aceder ao seu perfil e gerir as suas preferências.
                </Text>

                <Pressable
                    onPress={() => router.push('/auth')}
                    className="bg-green-600 w-full p-4 rounded-xl items-center"
                >
                    <Text className="text-white font-bold text-lg">Entrar / Registar</Text>
                </Pressable>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <View className="bg-white p-6 mb-4 items-center border-b border-gray-200">
                <View className="w-24 h-24 bg-green-100 rounded-full items-center justify-center mb-4">
                    <Text className="text-3xl font-bold text-green-700">{user.name.charAt(0).toUpperCase()}</Text>
                </View>
                <Text className="text-2xl font-bold text-gray-800">{user.name}</Text>
                <Text className="text-gray-500">{user.email}</Text>
            </View>

            <View className="bg-white px-4 border-y border-gray-200">
                <Pressable className="flex-row items-center py-4 border-b border-gray-100">
                    <Ionicons name="notifications-outline" size={24} color="#4b5563" />
                    <Text className="flex-1 ml-4 text-gray-700 text-base">Notificações</Text>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                </Pressable>
                <Pressable className="flex-row items-center py-4 border-b border-gray-100">
                    <Ionicons name="settings-outline" size={24} color="#4b5563" />
                    <Text className="flex-1 ml-4 text-gray-700 text-base">Definições</Text>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                </Pressable>
                <Pressable className="flex-row items-center py-4">
                    <Ionicons name="help-circle-outline" size={24} color="#4b5563" />
                    <Text className="flex-1 ml-4 text-gray-700 text-base">Ajuda</Text>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                </Pressable>
            </View>

            <View className="mt-8 px-4">
                <Pressable
                    onPress={handleLogout}
                    className="flex-row items-center justify-center gap-2 bg-red-50 p-4 rounded-xl border border-red-100 active:bg-red-100"
                >
                    <Ionicons name="log-out-outline" size={24} color="#dc2626" />
                    <Text className="text-red-600 font-bold text-lg">Sair</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}
