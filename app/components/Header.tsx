'use client'
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const [hash, setHash] = useState<string>(typeof window !== "undefined" ? window.location.hash : "");

    useEffect(() => {
        const onHashChange = () => setHash(window.location.hash);
        window.addEventListener("hashchange", onHashChange);
        return () => window.removeEventListener("hashchange", onHashChange);
    }, []);

    function toggleNav() {
        setNavOpen((prev) => !prev);
    }

    // Helper to check if link is active
    const isActive = (href: string) => {
        // if (href === "/") return window.location.pathname === "/";
        return hash === href;
    };

    return (
        <header className="header flex w-full sticky top-0 z-50 bg-transparent">
            <nav className="dark:bg-white border-gray-200 bg-gray-900 bg-opacity-80 backdrop-blur-lg p-4 rounded-3xl flex justify-between w-full shadow-2xl transition-all duration-300">
                <a href="/" className="flex md:items-center sm:items-start items-center sm:space-x-3 sm:rtl:space-x-reverse sm:flex-row flex-col h-auto k2d group">
                    <Image alt="Goldeng" className="sm:h-12 h-6 sm:w-16 w-8 transition-transform duration-300 group-hover:scale-110" src={'/small-logo.png'} width={100} height={100} />
                    <span className="md:self-center mt-2 md:mt-0 sm:text-2xl font-bold whitespace-nowrap dark:text-white text-md tracking-widest group-hover:text-blue-600 transition-colors duration-300">GOLDENG</span>
                </a>
                <div className="flex flex-row-reverse justify-end md:mx-auto self-end h-full relative">
                    <button
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-blue-600 transition-colors duration-200"
                        aria-controls="navbar-default"
                        aria-expanded={navOpen}
                        onClick={toggleNav}
                        id="nav-toggle"
                    >
                        <span className="sr-only">Open main menu</span>
                        {/* Animated Hamburger */}
                        <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                            <span className={`block h-0.5 w-6 bg-current rounded transition-all duration-300 ${navOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                            <span className={`block h-0.5 w-6 bg-current rounded my-1 transition-all duration-300 ${navOpen ? "opacity-0" : ""}`}></span>
                            <span className={`block h-0.5 w-6 bg-current rounded transition-all duration-300 ${navOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                        </div>
                    </button>
                    <div
                        className={`${navOpen ? "block animate-fade-in" : "hidden"} w-max md:block md:w-auto absolute md:static top-14 right-0 bg-gray-900 bg-opacity-95 md:bg-transparent rounded-xl shadow-xl md:shadow-none transition-all duration-300`}
                        id="navbar-default"
                    >
                        <ul className="font-medium flex flex-col gap-2 md:gap-0 p-4 md:py-4 md:px-3 mt-0 md:flex-row md:space-x-8 rtl:space-x-reverse text-center border border-gray-100 dark:border-gray-700 rounded-xl md:border-0">
                            <li>
                                <a
                                    href="/"
                                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 transition-colors duration-200
                                        ${isActive("") 
                                            ? "text-white bg-blue-700 md:text-blue-700 md:dark:text-blue-500"
                                            : "text-gray-900 dark:text-white hover:bg-blue-600 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700"
                                        }`}
                                    aria-current={isActive("") ? "page" : undefined}
                                >Home</a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 transition-colors duration-200
                                        ${isActive("#about") 
                                            ? "text-white bg-blue-700 md:text-blue-700 md:dark:text-blue-500"
                                            : "text-gray-900 dark:text-white hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700"
                                        }`}
                                >About</a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 transition-colors duration-200
                                        ${isActive("#projects") 
                                            ? "text-white bg-blue-700 md:text-blue-700 md:dark:text-blue-500"
                                            : "text-gray-900 dark:text-white hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700"
                                        }`}
                                >Projects</a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 transition-colors duration-200
                                        ${isActive("#contact") 
                                            ? "text-white bg-blue-700 md:text-blue-700 md:dark:text-blue-500"
                                            : "text-gray-900 dark:text-white hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700"
                                        }`}
                                >Contact Me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <style jsx global>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-10px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease;
                }
            `}</style>
        </header>
    );
}