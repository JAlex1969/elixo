"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Search, Filter } from 'lucide-react';

// Dynamically import MapComponent to avoid SSR issues with Leaflet
const MapComponent = dynamic(() => import('@/components/MapComponent'), {
    ssr: false,
    loading: () => <div className="h-full w-full bg-gray-100 animate-pulse flex items-center justify-center">Carregando Mapa...</div>
});

export default function MapPage() {
    const [points, setPoints] = useState([]);
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(true);

    // Fetch points from API
    useEffect(() => {
        async function fetchPoints() {
            try {
                const query = filter ? `?type=${encodeURIComponent(filter)}` : '';
                const res = await fetch(`/api/points${query}`);
                if (res.ok) {
                    const data = await res.json();
                    setPoints(data);
                }
            } catch (error) {
                console.error('Failed to fetch points', error);
            } finally {
                setLoading(false);
            }
        }
        fetchPoints();
    }, [filter]);

    return (
        <div className="flex flex-col h-[calc(100vh-64px)]">
            {/* Sidebar / Filter Bar */}
            <div className="bg-white border-b p-4 flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm z-10">
                <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <Filter className="text-green-600" />
                    Pontos de Recolha
                </h1>

                <div className="relative w-full md:w-96">
                    <input
                        type="text"
                        placeholder="Filtrar por tipo (ex: pilhas, ecocentro)..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                </div>
            </div>

            {/* Map Container */}
            <div className="flex-1 relative z-0">
                <MapComponent points={points} />
            </div>
        </div>
    );
}
