"use client";
import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        // Load saved theme
        const stored = localStorage.getItem("theme") || "light";
        setTheme(stored);
        document.documentElement.classList.toggle("dark", stored === "dark");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? (
                <LuSun className="w-5 h-5 text-yellow-400" />
            ) : (
                <LuMoon className="w-5 h-5 text-gray-800" />
            )}
        </button>
    );
}
