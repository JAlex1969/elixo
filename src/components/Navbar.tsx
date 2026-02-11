"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Recycle, User, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const { user, logout, isAuthenticated } = useAuth();

    const navLinks = [
        { href: '/', label: 'Início' },
        { href: '/mapa', label: 'Mapa de Recolha' },
        { href: '/educacao', label: 'Educação Ambiental' },
        { href: '/classificacao', label: 'Tipos de Resíduos' },
        { href: '/contato', label: 'Contato' },
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                            <Recycle className="h-8 w-8 text-green-600" />
                            <span className="font-bold text-xl text-gray-800">E-Lixo Zero Lisboa</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`${pathname === link.href
                                        ? 'text-green-600 border-b-2 border-green-600'
                                        : 'text-gray-500 hover:text-green-600 hover:border-b-2 hover:border-green-300'
                                    } px-1 pt-1 text-sm font-medium transition duration-150 ease-in-out h-full flex items-center`}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {isAuthenticated && user ? (
                            <div className="flex items-center gap-4 ml-4">
                                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                                        <User size={16} />
                                    </div>
                                    <span>{user.name}</span>
                                </div>
                                <button
                                    onClick={logout}
                                    className="px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-50 transition flex items-center gap-1"
                                >
                                    <LogOut size={16} />
                                    Sair
                                </button>
                            </div>
                        ) : (
                            <Link
                                href="/auth"
                                className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition"
                            >
                                Entrar
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`${pathname === link.href
                                        ? 'bg-green-50 border-l-4 border-green-500 text-green-700'
                                        : 'border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                                    } block pl-3 pr-4 py-2 text-base font-medium transition duration-150 ease-in-out`}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {isAuthenticated && user ? (
                            <div className="border-t border-gray-200 mt-2 pt-2">
                                <div className="px-4 py-2 flex items-center gap-2">
                                    <User size={16} className="text-gray-500" />
                                    <span className="text-gray-800 font-medium">{user.name}</span>
                                </div>
                                <button
                                    onClick={() => {
                                        logout();
                                        setIsOpen(false);
                                    }}
                                    className="w-full text-left px-4 py-2 text-red-600 font-medium hover:bg-red-50 flex items-center gap-2"
                                >
                                    <LogOut size={16} /> Sair
                                </button>
                            </div>
                        ) : (
                            <Link
                                href="/auth"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 text-base font-medium"
                            >
                                Entrar / Registar
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
