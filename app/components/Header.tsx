'use client';
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const [hash, setHash] = useState<string>("");

    // Initialize hash only on client
    useEffect(() => {
        setHash(window.location.hash);
        const onHashChange = () => setHash(window.location.hash);
        window.addEventListener("hashchange", onHashChange);
        return () => window.removeEventListener("hashchange", onHashChange);
    }, []);

    const toggleNav = useCallback(() => setNavOpen((prev) => !prev), []);

    const isActive = (href: string) => hash === href;

    const navLinks = [
        { href: "/", label: "Home", match: "" },
        { href: "/#about", label: "About", match: "/#about" },
        { href: "/#projects", label: "Projects", match: "/#projects" },
        { href: "#contact", label: "Contact Me", match: "#contact" },
    ];

    const baseLinkClasses =
        "block py-2 px-3 rounded md:bg-transparent md:p-0 transition-colors duration-200";
    const inactiveClasses =
        "text-gray-900 dark:text-white hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700";
    const activeClasses =
        "text-white bg-blue-700 md:text-blue-700 md:dark:text-blue-500";

    return (
        <header className="header flex w-full fixed top-0 z-50 bg-transparent">
            <nav className="flex w-full justify-between rounded-3xl border-gray-200 bg-gray-900 bg-opacity-80 p-4 shadow-2xl backdrop-blur-lg transition-all duration-300 dark:bg-white">
                {/* Logo */}
                <a
                    href="/"
                    className="group flex h-auto flex-col items-center sm:flex-row sm:space-x-3 sm:rtl:space-x-reverse md:items-center"
                >
                    <Image
                        alt="Goldeng"
                        src="/small-logo.png"
                        width={100}
                        height={100}
                        className="h-6 w-8 transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-16"
                    />
                    <span className="k2d mt-2 whitespace-nowrap text-md font-bold tracking-widest text-white transition-colors duration-300 group-hover:text-blue-600 dark:text-white sm:mt-0 sm:text-2xl md:self-center">
                        GOLDENG
                    </span>
                </a>

                {/* Menu toggle (mobile) */}
                <div className="relative flex flex-row-reverse self-end justify-end md:mx-auto">
                    <button
                        type="button"
                        id="nav-toggle"
                        aria-controls="navbar-default"
                        aria-expanded={navOpen}
                        onClick={toggleNav}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 transition-colors duration-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-blue-600 md:hidden"
                    >
                        <span className="sr-only">Open main menu</span>
                        <div className="relative flex h-6 w-6 flex-col items-center justify-center">
                            <span
                                className={`block h-0.5 w-6 rounded bg-current transition-all duration-300 ${navOpen ? "translate-y-2 rotate-45" : ""
                                    }`}
                            />
                            <span
                                className={`my-1 block h-0.5 w-6 rounded bg-current transition-all duration-300 ${navOpen ? "opacity-0" : ""
                                    }`}
                            />
                            <span
                                className={`block h-0.5 w-6 rounded bg-current transition-all duration-300 ${navOpen ? "-translate-y-2 -rotate-45" : ""
                                    }`}
                            />
                        </div>
                    </button>

                    {/* Nav links */}
                    <div
                        id="navbar-default"
                        className={`${navOpen ? "block animate-fade-in" : "hidden"} absolute right-0 top-14 w-max rounded-xl bg-gray-900 bg-opacity-95 shadow-xl transition-all duration-300 md:static md:block md:w-auto md:rounded-none md:bg-transparent md:shadow-none`}
                    >
                        <ul className="mt-0 flex flex-col gap-2 rounded-xl border border-gray-100 p-4 text-center font-medium dark:border-gray-700 md:flex-row md:space-x-8 md:border-0 md:px-3 md:py-4 md:gap-0 rtl:space-x-reverse">
                            {navLinks.map(({ href, label, match }) => (
                                <li key={href}>
                                    <a
                                        href={href}
                                        aria-current={isActive(match) ? "page" : undefined}
                                        className={`${baseLinkClasses} ${isActive(match)
                                                ? activeClasses
                                                : inactiveClasses
                                            }`}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            <style jsx global>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease;
                }
            `}</style>
        </header>
    );
}
