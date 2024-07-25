'use client'
import Image from "next/image";

export default function Header() {
    function toggleNav() {
        const navbutton = document.getElementById('nav-toggle');
        if (!navbutton) return
        const value = navbutton.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
        navbutton && navbutton.setAttribute('aria-expanded', value)
    }
    return (<header className="header flex">
        <nav className="dark:bg-white border-gray-200 bg-gray-900 p-4 rounded-3xl flex justify-between w-full shadow-xl">
            <a href="/" className="flex md:items-center sm:items-start items-center sm:space-x-3 sm:rtl:space-x-reverse  sm:flex-row flex-col h-auto k2d">
                <Image alt="Goldeng" className="sm:h-12 h-6 sm:w-16 w-8" src={'/small-logo.png'} width={100} height={100} />
                <span className="md:self-center mt-2 md:mt-0 sm:text-2xl font-bold whitespace-nowrap dark:text-white .text-md">GOLDENG</span>
            </a>
            <div className=" flex flex-row-reverse justify-end md:mx-auto self-end h-full relative">
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={toggleNav} id='nav-toggle'>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:py-4 md:px-3 mt-0 md:flex-row md:space-x-8 rtl:space-x-reverse text-center border border-gray-100 dark:border-gray-700 rounded-xl md:border-0 ">
                        <li>
                            <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                        </li>
                        <li>
                            <a href="#projects" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
                        </li>
                        {/* <li>
                            <a href="#pricing" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                        </li> */}
                        <li>
                            <a href="#contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>)
}