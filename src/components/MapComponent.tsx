"use client";

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { ExternalLink } from 'lucide-react';

// Fix for default marker icon in Leaflet with Next.js/Webpack
const defaultIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

interface Point {
    id: number;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    type_name?: string;
    contact_info?: string;
    schedule?: string;
    website?: string;
}

interface MapComponentProps {
    points: Point[];
}

const MapComponent: React.FC<MapComponentProps> = ({ points }) => {
    // Center of Lisbon
    const position: [number, number] = [38.7223, -9.1393];

    return (
        <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {points.map((point) => (
                <Marker
                    key={point.id}
                    position={[Number(point.latitude), Number(point.longitude)]}
                    icon={defaultIcon}
                >
                    <Popup>
                        <div className="min-w-[200px]">
                            <h3 className="font-bold text-lg mb-1">{point.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">{point.address}</p>

                            {point.type_name && (
                                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">
                                    {point.type_name}
                                </span>
                            )}

                            <div className="space-y-1 text-sm text-gray-700">
                                {point.schedule && <p><strong>Horário:</strong> {point.schedule}</p>}
                                {point.contact_info && <p><strong>Contato:</strong> {point.contact_info}</p>}
                            </div>

                            {point.website && (
                                <a
                                    href={point.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 block text-blue-600 hover:underline text-sm flex items-center gap-1"
                                >
                                    Visitar site oficial <ExternalLink size={12} />
                                </a>
                            )}
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapComponent;
