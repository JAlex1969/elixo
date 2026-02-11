import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ActivityIndicator, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { useAuth } from '../context/AuthContext';
import API_URL from '../constants/api';
import { Ionicons } from '@expo/vector-icons';

export default function AuthScreen() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();

    const handleSubmit = async () => {
        if (!formData.email || !formData.password || (!isLogin && !formData.name)) {
            Alert.alert('Erro', 'Por favor preencha todos os campos.');
            return;
        }

        setLoading(true);
        const endpoint = isLogin ? '/auth/login' : '/auth/register';

        try {
            console.log(`Sending request to: ${API_URL}${endpoint}`);
            const response = await fetch(`${API_URL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                if (isLogin) {
                    await login(data.user);
                    router.replace('/(tabs)'); // Go back to tabs
                } else {
                    Alert.alert('Sucesso', data.message);
                    setIsLogin(true); // Switch to login
                }
            } else {
                Alert.alert('Erro', data.message || 'Ocorreu um erro.');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Erro de Conexão', 'Não foi possível conectar ao servidor. Verifique se o servidor está rodando e se o IP está correto.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1 bg-white"
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 24 }}>
                <View className="items-center mb-8">
                    <Ionicons name={isLogin ? "person-circle" : "person-add"} size={80} color="#16a34a" />
                    <Text className="text-3xl font-bold text-gray-800 mt-4">{isLogin ? 'Bem-vindo' : 'Criar Conta'}</Text>
                    <Text className="text-gray-500 mt-2 text-center">
                        {isLogin ? 'Entre para gerir as suas notificações.' : 'Junte-se à comunidade E-Lixo Zero.'}
                    </Text>
                </View>

                <View className="space-y-4">
                    {!isLogin && (
                        <View>
                            <Text className="text-gray-700 font-medium mb-1">Nome</Text>
                            <TextInput
                                className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-base"
                                placeholder="Seu nome"
                                value={formData.name}
                                onChangeText={(text) => setFormData({ ...formData, name: text })}
                            />
                        </View>
                    )}

                    <View>
                        <Text className="text-gray-700 font-medium mb-1">Email</Text>
                        <TextInput
                            className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-base"
                            placeholder="exemplo@email.com"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={formData.email}
                            onChangeText={(text) => setFormData({ ...formData, email: text })}
                        />
                    </View>

                    <View>
                        <Text className="text-gray-700 font-medium mb-1">Palavra-passe</Text>
                        <TextInput
                            className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-base"
                            placeholder="******"
                            secureTextEntry
                            value={formData.password}
                            onChangeText={(text) => setFormData({ ...formData, password: text })}
                        />
                    </View>

                    <Pressable
                        onPress={handleSubmit}
                        disabled={loading}
                        className={`w-full bg-green-600 p-4 rounded-xl items-center mt-6 active:bg-green-700 ${loading ? 'opacity-70' : ''}`}
                    >
                        {loading ? (
                            <ActivityIndicator color="white" />
                        ) : (
                            <Text className="text-white font-bold text-lg">{isLogin ? 'Entrar' : 'Registar'}</Text>
                        )}
                    </Pressable>

                    <Pressable onPress={() => setIsLogin(!isLogin)} className="mt-4 p-2 items-center">
                        <Text className="text-green-600 font-medium">
                            {isLogin ? 'Não tem conta? Registe-se' : 'Já tem conta? Entre aqui'}
                        </Text>
                    </Pressable>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
