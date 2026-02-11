import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React from "react";

interface CardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    imageUrl?: string;
    linkUrl?: string;
    linkText?: string;
    className?: string;
}

const Card: React.FC<CardProps> = ({
    title,
    description,
    icon,
    imageUrl,
    linkUrl,
    linkText = "Saiba mais",
    className = ""
}) => {
    return (
        <div className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full ${className}`}>
            {imageUrl && (
                <div className="h-48 w-full overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                </div>
            )}

            <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                    {icon && <div className="text-green-600 p-2 bg-green-50 rounded-lg">{icon}</div>}
                    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                </div>

                <p className="text-gray-600 mb-6 flex-1">{description}</p>

                {linkUrl && (
                    <Link
                        href={linkUrl}
                        className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors mt-auto group"
                    >
                        {linkText} <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Card;
