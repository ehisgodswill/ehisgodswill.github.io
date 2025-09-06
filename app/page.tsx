'use client'
import Image from "next/image";
import { useRef } from 'react';
import gsap from 'gsap';
import _ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import Link from "next/link";
import { FiX } from "react-icons/fi";
import { FaArrowRightLong, FaPhp } from "react-icons/fa6";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiMysql, SiTypescript, SiExpress, SiExpo, } from "react-icons/si";
import { GiCircuitry, GiHeadphones, GiMechanicalArm, GiSolarSystem, GiSoundWaves } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";
import { LiaMixcloud } from "react-icons/lia";
import eduplus from "@/app/images/eduplus.png";
import portfolio from "@/app/images/portfolio.png";
import bloomzon from "@/app/images/bloomzon.png";
import cmanager from "@/app/images/cmanager.png";
import senda from "@/app/images/senda.png";
import ContactForm from "./components/ContactForm";


gsap.registerPlugin(useGSAP, _ScrollTrigger);
// Skill categories data
const skillCategories = [
    {
        title: "Web Developer",
        skills: [
            { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: 5 },
            { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 4 },
            { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 5 },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-400" />, level: 4 },
            { name: "React", icon: <FaReact className="text-sky-400" />, level: 4 },
            { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 3 },
            { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" />, level: 4 },
        ],
    },
    {
        title: "Software Developer",
        skills: [
            { name: "Expo", icon: <SiExpo className="text-black dark:text-white" />, level: 3 },
            { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 4 },
            { name: "Express.js", icon: <SiExpress className="text-gray-500" />, level: 4 },
            { name: "PHP", icon: <FaPhp className="text-indigo-400" />, level: 4 },
            { name: "Python", icon: <FaPython className="text-yellow-300" />, level: 3 },
            { name: "MySQL", icon: <SiMysql className="text-blue-400" />, level: 4 },
            { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, level: 3 },
        ],
    },
    {
        title: "Audio Engineer",
        skills: [
            { name: "Mixing", icon: <LiaMixcloud className="text-teal-400" />, level: 5 },
            { name: "Mastering", icon: <GiHeadphones className="text-teal-300" />, level: 4 },
            { name: "Live Sound", icon: <GiSoundWaves className="text-teal-200" />, level: 4 },
        ],
    },
    {
        title: "Electrical Engineer",
        skills: [
            { name: "Circuit Design", icon: <FcElectronics className="text-green-400" />, level: 4 },
            { name: "PCB Layout", icon: <GiCircuitry className="text-green-400" />, level: 3 },
            { name: "Embedded Systems", icon: <GiMechanicalArm className="text-green-400" />, level: 3 },
        ],
    },
];

// Project data
const projects = [
    {
        title: "Bloomzon Pharmacy",
        year: "2024-2025",
        description: "A full-stack pharmaceutical e-commerce mobile application built with expo-native with payment integration.",
        icon: <FiX />,
        image: bloomzon,
    },
    {
        title: "Portfolio Website",
        year: "2023-2024",
        description: "A personal portfolio built with Next.js, GSAP, and Tailwind CSS.",
        icon: <FiX />,
        image: portfolio,
    },
    {
        title: "Senda",
        year: "2023-2024",
        description: "C-Manager is a SMS and Email messaging application for businesses of all sizes for management people, that Provide immediate, real- time engagement for your audience through timely notifications and personalized updates",
        icon: <FiX />,
        image: senda,
    },
    {
        title: "C-manager",
        year: "2023-2025",
        description: "C-Manager is a cloud base business management application for businesses of all sizes for management people, business processes, business products and finances.",
        icon: <FiX />,
        image: cmanager,
    },
    {
        title: "Eduplus",
        year: "2022-2023",
        description: "Sight-eduplus is an all-in-one education management platform for institutions, students, tutors etc. Sight-eduplus is packed with features such as computer based test (CBT), live/virtual class, institution management, result management, payment management, question bank and question generator, event management and more",
        icon: <FiX />,
        image: eduplus,
    },
    // {
    //     title: "E-commerce Platform",
    //     year: "2022-2023",
    //     description: "A full-stack e-commerce web application with payment integration.",
    //     icon: <FiX />,
    //     image: "",
    // },
    // {
    //     title: "Blog Platform",
    //     year: "2021-2022",
    //     description: "A modern blog platform with markdown support and user authentication.",
    //     icon: <FiX />,
    //     image: "",
    // },
    // {
    //     title: "Audio Visualizer",
    //     year: "2020-2021",
    //     description: "A web-based audio visualizer using Web Audio API and Canvas.",
    //     icon: <FiX />,
    //     image: "",
    // },
];

export default function Home() {
    const container = useRef(null);
    useGSAP(
        () => {
            const dotPulse = gsap.timeline({ repeat: -1 });
            const bubblePulse = gsap.timeline({ repeat: -1 });
            // const crossSpin = gsap.timeline({ repeat: -1 });
            const mainTimeline = gsap.timeline();

            // BG Dot Pulse
            dotPulse.to(".bg-dot", {
                scale: 1.1,
                opacity: 0.25,
                duration: 3,
                ease: "linear"
            });
            dotPulse.to(".bg-dot", {
                scale: 0.9,
                opacity: 0.15,
                duration: 3,
                yoyo: true,
                repeat: -1,
                ease: "linear"
            });
            bubblePulse.to(".circle", { scale: 0.9, duration: 2 });
            bubblePulse.to(".circle", {
                scale: 1,
                duration: 2,
                yoyo: true,
                repeat: -1,
                ease: "power1.inOut"
            });

            // Hero Animations
            mainTimeline.to(".hero-circle", {
                scrollTrigger: {
                    trigger: ".app-container:nth-child(1)",
                    start: "50% center",
                    end: "bottom start",
                    toggleActions: "play none none reverse",
                    snap: {
                        snapTo: 'labels',
                        duration: { min: 0.2, max: 3 },
                        delay: 0.2
                    },
                    once: true
                },
                bottom: -250,
                scale: 0,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
            });

            // About Animations
            mainTimeline.from(".about_heading", {
                scrollTrigger: {
                    trigger: ".app-container:nth-child(2)",
                    start: "start center",
                    end: "30% center",
                    toggleActions: "play none none reverse",
                    scrub: true
                },
                x: -50,
                opacity: 0,
                stagger: 0.1,
                ease: "bounce",
                duration: 1
            });
            mainTimeline.from(".about_bounce", {
                scrollTrigger: {
                    trigger: ".app-container:nth-child(2)",
                    start: "start center",
                    end: "40% center",
                    toggleActions: "play none none reverse",
                    scrub: true
                },
                scale: 0.2,
                opacity: 0,
                stagger: 0.1,
                ease: "elastic",
                duration: 2
            });

            // Skills Animations
            mainTimeline.from(".skill_items", {
                scrollTrigger: {
                    trigger: ".app-container:nth-child(3)",
                    start: "top center",
                    end: "25% 50%",
                    toggleActions: "play none none reverse",
                    scrub: true
                },
                y: 100,
                scale: 0.7,
                opacity: 0,
                stagger: 0.5,
                duration: 1
            });

            mainTimeline.from(".skill_circle", {
                scrollTrigger: {
                    trigger: ".app-container:nth-child(3)",
                    start: "10% center",
                    end: "85% 50%",
                    toggleActions: "play none none reverse",
                    scrub: true
                },
                scale: 0,
                top: 300,
                opacity: 0,
                ease: "elastic",
                duration: 2
            });

            // Project Animations
            // crossSpin.to(".cross-spin", { rotate: 360, duration: 5, ease: "linear" });
            mainTimeline.from(".project_items", {
                scrollTrigger: {
                    trigger: ".app-container:nth-child(4)",
                    start: "top center",
                    end: "25% 50%",
                    toggleActions: "play none none reverse",
                    scrub: true
                },
                y: 100,
                opacity: 0,
                stagger: 0.5,
                duration: 1
            });
            mainTimeline.from(".project_placeholder", {
                scrollTrigger: {
                    trigger: ".project_container",
                    start: "top center",
                    end: "bottom 50%",
                    toggleActions: "play none none reverse",
                    scrub: true
                },
                height: 0,
                duration: 1,
                ease: "linear"
            });

            // Contact Animations
            mainTimeline.from(".contact_load", {
                scrollTrigger: {
                    trigger: ".app-container:nth-child(5)",
                    start: "top center",
                    end: "30% 50%",
                    toggleActions: "play none none reverse",
                    scrub: true
                },
                y: -100,
                opacity: 0,
                duration: 1,
                stagger: 0.25,
                ease: "linear"
            });
        },
        { scope: container }
    );

    return (
        <main className="" ref={container}>
            {/* Hero Section */}
            <div className="app-container flex items-center" id="hero" fade-content='true'>

                <div className="container flex p-2 px-4 font-bold flex-col gap-4 tracking-wider max-w-7xl mx-auto">
                    <h1 className="sm:text-8xl text-6xl drop-shadow-xl ml-4 xl:ml-0 k2d glow">Godswill</h1>
                    <h1 className="sm:text-8xl text-6xl  drop-shadow-xl ml-4 xl:ml-0 k2d glow">Ehis</h1>
                    <div className="relative mt-8 ml-4 xl:ml-0">
                        <p className="font-thin text-4xl drop-shadow max-w-md mt-4 border-l pl-4 relative dark:border-gray-600">
                            full-stack web developer<br />
                        </p>
                        <div className="absolute w-1 h-1 bg-black dark:bg-white rounded-full bottom-0 -left-0.5"></div>
                    </div>
                </div>
                <div className="absolute right-4 z-10 hidden md:block">
                    <div className="flex flex-col gap-4">
                        {/* <Image className="w-10 mx-auto drop-shadow hover:drop-shadow-xl aspect-square hover:scale-105 transition-transform cursor-pointer" draggable="false" src="/images/codepen.svg" alt="" />
                        <Image className="w-14 mx-auto drop-shadow hover:drop-shadow-xl aspect-square hover:scale-105 transition-transform cursor-pointer" draggable="false" src="/images/linkedin.svg" alt="" />
                        <Image className="w-10 mx-auto drop-shadow hover:drop-shadow-xl aspect-square hover:scale-105 transition-transform cursor-pointer" draggable="false" src="/images/university.svg" alt="" /> */}
                    </div>
                </div>

                <div className="absolute -z-10 left-0 top-0 w-full h-full overflow-hidden">
                    <div className="absolute h-1/2 polka_dots -left-16 top-1/4 -z-5 rotate-90 aspect-video"></div>
                    <div className="absolute -z-10 bg-dot blur-3xl -left-96 top-1/3 h-2/3 aspect-square bg-white rounded-full opacity-5"></div>
                    <div className="absolute -z-10 bg-dot blur-3xl -right-64 -top-64 h-1/2 aspect-square primary-grad rounded-full opacity-40"></div>
                    <div className="absolute -z-10 bg-dot blur-3xl -right-64 top-1/3 h-1/2 aspect-square second-grad opacity-40 rounded-full"></div>
                    <div className="absolute -z-10 bg-dot blur-3xl -right-64 -bottom-64 h-1/2 aspect-square third-grad opacity-40 rounded-full"></div>
                    <div className="hidden md:block hero-circle circle h-1/2 aspect-square absolute -bottom-5 right-10 rounded-full"></div>
                    <div className="hidden sm:block circle h-24 aspect-square absolute bottom-1/2 right-10 rounded-full"></div>
                </div>
            </div>
            {/* About Section */}
            <div className="app-container" id="about">
                <div className="container mt-24 h-fit mx-8 md:mx-auto">
                    <h1 className="k2d font-bold mx-auto w-56 text-5xl tracking-wider about_heading">About</h1>
                    <h1 className="k2d font-bold flex relative items-center mx-auto w-56 text-5xl about_heading tracking-wider">Me
                        <FaArrowRightLong className="h-12 origin-left scale-x-150 scale-y-60 about_heading absolute right-0 fill-secondary glow-el-secondary" />
                    </h1>
                    <div className="absolute">
                        <div className="flex drop-shadow-xl rounded-full overflow-hidden aspect-square max-w-xl">
                            <Image id="abt-img" src="https://images.unsplash.com/photo-1610438250910-01cb769c1334?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDkwOTcxOTd8&ixlib=rb-4.0.3&q=1" alt="" width={735} height={490} />
                        </div>
                        <div className="circle w-20 left-4 about_bounce bottom-4 aspect-square absolute rounded-full"></div>
                    </div>
                    <div className="w-full md:w-1/3 about_bounce top-1/3 p-4 drop-shadow-xl absolute right-0 md:right-1/4 rounded-xl min-h-48 backdrop-blur">
                        <p className="tracking-wide mb-5">
                            A frontend focused full-stack webdeveloper providing an engaging digital experience building Websites and Web applications
                        </p>
                        <Link href='#contact' className="bg-secondary px-4 py-1 rounded-full font-bold k2d tracking-wider ml-8 mt-12">Contact Me</Link>
                    </div>

                    <div className="absolute h-48 polka_dots bottom-16 right-24 -z-10 aspect-video"></div>
                </div>
            </div>
            {/* Skills Section */}
            <div className="app-container overflow-hidden" id="skills" fade-content="true">
                <div className="container flex flex-col h-fit mx-auto py-16">
                    <h1 className="text-5xl text-center font-bold k2d mx-auto mb-12 skill_items">
                        Skills
                    </h1>
                    <div className="grid md:grid-cols-2 gap-8">
                        {skillCategories.map((category, idx) => (
                            <div key={idx} className="bg-gray-900/60 rounded-2xl shadow-lg p-6 backdrop-blur-md border border-gray-800">
                                <h2 className="text-xl font-semibold mb-6 text-secondary">
                                    {category.title}
                                </h2>
                                <div className="space-y-4">
                                    {category.skills.map((skill, i) => (
                                        <div key={i} className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">{skill.icon}</span>
                                                <span>{skill.name}</span>
                                            </div>
                                            <ul className="flex gap-2 items-center">
                                                {[...Array(5)].map((_, j) => (
                                                    <li key={j} className={`w-3 h-3 rounded-full ${j < skill.level ? "second-grad" : "bg-gray-600 opacity-40"}`}></li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Decorations */}
                    <div className="absolute h-48 polka_dots left-1/8 top-1/4 -z-10 rotate-90 aspect-video"></div>
                    <div className="absolute h-64 polka_dots right-48 opacity-50 bottom-1/4 -z-10 aspect-video"></div>
                    <div className="circle h-1/3 skill_circle aspect-square rounded-full absolute right-8 top-2/4 -z-10"></div>
                </div>
            </div>
            {/* Projects Section */}
            <div className="app-container overflow-hidden" id="projects">
                <div className="container flex flex-col h-fit mx-auto">
                    <h1 className="text-5xl font-bold tracking-wider k2d ml-auto mt-16 mr-16 project_items">My Projects</h1>
                    <div className="container project_container relative max-w-4xl pt-4 flex flex-col gap-16 md:gap-24 px-4 sm:px-0 sm:mx-auto">
                        <div className="absolute project_placeholder hidden sm:block -left-5 w-2 h-full border-l border-white">
                            <div className="absolute -left-1 -bottom-1 aspect-square w-2 bg-white glow-el rounded-full"></div>
                        </div>
                        {projects.map((project, idx) => (
                            <div key={idx} className="flex items-center gap-4 project_items">
                                {/* <div className="aspect-video h-48 bg-slate-600 rounded-xl flex items-center justify-center">
                                    <span className="text-5xl text-white">{project.icon}</span>
                                </div> */}
                                <div className="aspect-video h-48 bg-slate-600 rounded-xl flex items-center justify-center overflow-hidden min-w-fit">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={320}
                                        height={180}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div>
                                    <h1 className="k2d font-bold tracking-wider text-xl glow">{project.title}</h1>
                                    <p>{project.year}</p>
                                    <p className="mt-2 text-sm">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Decorations */}
                    <div className="absolute h-48 polka_dots left-1/8 top-1/4 -z-10 rotate-90 aspect-video"></div>
                    <div className="absolute h-64 polka_dots right-48 opacity-50 bottom-1/4 -z-10 aspect-video"></div>
                </div>
            </div>
            {/* Contact Section */}
            <ContactForm />

        </main>
    );
}