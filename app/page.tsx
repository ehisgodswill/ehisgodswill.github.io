'use client'
import Image from "next/image";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from "next/link";

gsap.registerPlugin(useGSAP);

export default function Home() {
    const container = useRef(null);
    useGSAP(
        () => {
            const dotPulse = gsap.timeline({ repeat: -1 });
            const bubblePulse = gsap.timeline({ repeat: -1 });
            const crossSpin = gsap.timeline({ repeat: -1 });
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
            crossSpin.to(".cross-spin", { rotate: 360, duration: 5, ease: "linear" });
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

    return (<main className="" ref={container} >
        <div className="app-container flex items-center" id="hero" fade-content='true'>

            <div className="container flex p-2 px-4 font-bold flex-col gap-4 tracking-wider max-w-7xl mx-auto">
                <h1 className="sm:text-8xl text-6xl drop-shadow-xl ml-4 xl:ml-0 k2d glow">Godswill</h1>
                <h1 className="sm:text-8xl text-6xl  drop-shadow-xl ml-4 xl:ml-0 k2d glow">Ehis</h1>
                <div className="relative mt-8 ml-4 xl:ml-0">
                    <p className="font-thin text-4xl  drop-shadow max-w-md mt-4 border-l pl-4 relative">full-stack web developer<br /></p>
                    <div className="absolute w-1 h-1 bg-white rounded-full bottom-0 -left-0.5"></div>
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
        <div className="app-container" id="about">
            <div className="container mt-24 h-fit mx-8 md:mx-auto">
                <h1 className="k2d font-bold mx-auto w-56 text-5xl tracking-wider about_heading">About</h1>
                <h1 className="k2d font-bold flex relative items-center mx-auto w-56 text-5xl about_heading tracking-wider">Me <svg className="h-12 origin-left scale-x-150 scale-y-60 about_heading absolute right-0 fill-secondary glow-el-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg></h1>
                <div className="relative">
                    <div className="flex drop-shadow-xl rounded-full overflow-hidden aspect-square w-1/2 max-w-xl">
                        {/* <Image id="abt-img" src="https://images.unsplash.com/photo-1610438250910-01cb769c1334?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDkwOTcxOTd8&ixlib=rb-4.0.3&q=1" alt="" width={100} height={100} /> */}
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
        <div className="app-container overflow-hidden" id="skills" fade-content='true'>
            <div className="container flex flex-col h-fit mx-auto ">
                <h1 className="text-5xl text-center font-bold  k2d mx-auto mt-16 skill_items">Skills</h1>
                <table>
                    <thead>

                        <tr className="flex gap-4 my-8 mx-auto skill_items text-xs sm:text-base">
                            <th className="ml-4"><button className="border nav-border px-2 hover:bg-black rounded-full">Web developer</button></th>
                            <th><button className="border nav-border px-2 hover:bg-black rounded-full">Audio Engineer</button></th>
                            <th><button className="border nav-border px-2 hover:bg-black rounded-full">Electrical Engineer</button></th>
                            <th className="mr-4"><button className="border nav-border px-2 hover:bg-black rounded-full">Software Developer</button></th>
                        </tr></thead>
                    <tbody className="grid grid-cols-2 max-w-5xl w-full space-x-8 mx-auto ">
                        {/* <div className="flex justify-center flex-col skill_items gap-4">

                            <div className="flex justify-center gap-4">
                                <p>Skill 1</p>
                                <ul className="flex gap-2 items-center">
                                    <li className="w-4 h-4 second-grad rounded-full"></li>
                                    <li className="w-4 h-4 second-grad rounded-full"></li>
                                    <li className="w-4 h-4 second-grad rounded-full"></li>
                                    <li className="w-4 h-4 second-grad opacity-40 rounded-full"></li>
                                    <li className="w-4 h-4 second-grad opacity-40 rounded-full"></li>
                                </ul>
                            </div>

                            <div className="flex justify-center gap-4">
                                <p>Skill 1</p>
                                <ul className="flex gap-2 items-center">
                                    <li className="w-4 h-4 second-grad rounded-full"></li>
                                    <li className="w-4 h-4 second-grad rounded-full"></li>
                                    <li className="w-4 h-4 second-grad rounded-full"></li>
                                    <li className="w-4 h-4 second-grad opacity-40 rounded-full"></li>
                                    <li className="w-4 h-4 second-grad opacity-40 rounded-full"></li>
                                </ul>
                            </div>

                            <div className="flex justify-center gap-4">
                                <p>Skill 1</p>
                                <ul className="flex gap-2 items-center">
                                    <li className="w-4 h-4 second-grad rounded-full">hh</li>
                                    <li className="w-4 h-4 second-grad rounded-full"></li>
                                    <li className="w-4 h-4 second-grad rounded-full"></li>
                                    <li className="w-4 h-4 second-grad opacity-40 rounded-full"></li>
                                    <li className="w-4 h-4 second-grad opacity-40 rounded-full"></li>
                                </ul>
                            </div>

                            <div className="flex justify-center gap-4">
                                <p>Skill 1</p>
                                <ul className="flex gap-2 items-center">
                                    <li className="w-4 h-4 second-grad rounded-full"></li>
                                    <li className="w-4 h-4 second-grad rounded-full"></li>
                                    <li className="w-4 h-4 second-grad rounded-full"></li>
                                    <li className="w-4 h-4 second-grad opacity-40 rounded-full"></li>
                                    <li className="w-4 h-4 second-grad opacity-40 rounded-full"></li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex text-sm sm:text-base justify-center flex-col skill_items gap-4">

                            <div className="flex justify-center gap-4">
                                <p>Skill 1</p>
                                <ul className="flex gap-2 items-center">
                                    <li className="w-4 h-4 second-grad rounded-full"></li>
                                    <li className="w-4 h-4 second-grad rounded-full"></li>
                                    <li className="w-4 h-4 second-grad rounded-full"></li>
                                    <li className="w-4 h-4 second-grad opacity-40 rounded-full"></li>
                                    <li className="w-4 h-4 second-grad opacity-40 rounded-full"></li>
                                </ul>
                            </div>

                            <div className="flex justify-center gap-4">
                                <p>Skill 1</p>
                                <ul className="flex gap-2 items-center">
                                    <li className="w-4 h-4 second-grad rounded-full"></li>
                                    <li className="w-4 h-4 second-grad rounded-full"></li>
                                    <li className="w-4 h-4 second-grad rounded-full"></li>
                                    <li className="w-4 h-4 second-grad opacity-40 rounded-full"></li>
                                    <li className="w-4 h-4 second-grad opacity-40 rounded-full"></li>
                                </ul>
                            </div>

                            <div className="flex justify-center gap-4">
                                <p>Skill 1</p>
                                <ul className="flex gap-2 items-center">
                                    <li className="w-4 h-4 second-grad rounded-full"></li>
                                    <li className="w-4 h-4 second-grad rounded-full"></li>
                                    <li className="w-4 h-4 second-grad rounded-full"></li>
                                    <li className="w-4 h-4 second-grad opacity-40 rounded-full"></li>
                                    <li className="w-4 h-4 second-grad opacity-40 rounded-full"></li>
                                </ul>
                            </div>

                            <div className="flex justify-center gap-4">
                                <p>Skill 1</p>
                                <ul className="flex gap-2 items-center">
                                    <li className="w-4 h-4 second-grad rounded-full"></li>
                                    <li className="w-4 h-4 second-grad rounded-full"></li>
                                    <li className="w-4 h-4 second-grad rounded-full"></li>
                                    <li className="w-4 h-4 second-grad opacity-40 rounded-full"></li>
                                    <li className="w-4 h-4 second-grad opacity-40 rounded-full"></li>
                                </ul>
                            </div>
                        </div> */}
                    </tbody>

                </table>
                <div className="absolute h-48 polka_dots left-1/8 top-1/4 -z-10 rotate-90 aspect-video"></div>
                <div className="absolute h-64 polka_dots right-48 opacity-50 bottom-1/4 -z-10 aspect-video"></div>
                <div className="circle h-1/3 skill_circle aspect-square rounded-full absolute right-8 top-2/4 -z-10"></div>

            </div>
        </div>
        <div className="app-container overflow-hidden" id="projects">
            <div className="container flex flex-col h-fit mx-auto">
                <h1 className="text-5xl font-bold tracking-wider k2d ml-auto mt-16 mr-16 project_items">My Projects</h1>

                <div className="container project_container relative max-w-4xl pt-4 flex flex-col gap-16 md:gap-24 px-4 sm:px-0 sm:mx-auto">
                    <div className="absolute project_placeholder hidden sm:block -left-5 w-2 h-full border-l border-white">
                        <div className="absolute -left-1 -bottom-1 aspect-square w-2 bg-white glow-el rounded-full"></div>
                    </div>

                    <div className="flex items-center gap-4 project_items">
                        <div className="aspect-video h-48 bg-slate-600 rounded-xl">
                        </div>
                        <div>
                            <h1 className="k2d font-bold tracking-wider text-xl glow">Project Title</h1>
                            <p>2019-2020</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 project_items">
                        <div className="w-full">
                            <h1 className="ml-auto w-fit k2d font-bold tracking-wider text-xl glow">Project Title</h1>
                            <p className="ml-auto w-fit">2019-2020</p>
                        </div>
                        <div className="aspect-square h-48 bg-slate-600 rounded-xl"></div>
                    </div>

                    <div className="flex pl-6 items-center gap-4 project_items">
                        <div className="aspect-video h-48 bg-slate-600 rounded-xl">
                        </div>
                        <div>
                            <h1 className="k2d font-bold tracking-wider text-xl glow">Project Title</h1>
                            <p>2019-2020</p>
                        </div>
                    </div>

                </div>
                {/* 
                    <svg className="hidden md:block cross-spin glow-el -z-10 project_items absolute -right-24 top-1/3" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">

                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                            <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-469.000000, -1041.000000)" fill="#ffffff">
                                <path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross" sketch:type="MSShapeGroup">
                                </path>
                            </g>
                        </g>
                    </svg>
                    <svg className="hidden sm:block cross-spin glow-el -z-10 project_items absolute left-1/8 top-2/3" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">

                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                            <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-469.000000, -1041.000000)" fill="#ffffff">
                                <path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross" sketch:type="MSShapeGroup">
                                </path>
                            </g>
                        </g>
                    </svg> */}
                <div className="absolute h-48 polka_dots left-1/8 top-1/4 -z-10 rotate-90 aspect-video"></div>
                <div className="absolute h-64 polka_dots right-48 opacity-50 bottom-1/4 -z-10 aspect-video"></div>
            </div>
        </div>
        <div className="app-container relative" id="contact">
            <div className="container mx-auto mt-16">
                <h1 className="k2d font-bold w-fit mx-auto text-5xl tracking-wider contact_load">Contact Me</h1>
                <div className="flex flex-col mt-8 gap-8 max-w-xl mx-4 md:mx-auto">
                    <div className="contact_load">
                        <p className="ml-4 mb-2">Name</p>
                        <input className="px-4 py-2 w-full rounded-3xl bg-orange-500 text-white bg-opacity-10" type="text" name="name" placeholder="Enter your Name" id="" />
                    </div>
                    <div className="contact_load">
                        <p className="ml-4 mb-2">Email address</p>
                        <input className="px-4 py-2 w-full  rounded-3xl bg-orange-500 text-white bg-opacity-10" type="email" name="email" placeholder="Enter your Email address" id="" />
                    </div>
                    <div className="contact_load">
                        <p className="ml-4 mb-2">Message</p>
                        <textarea className="px-4 py-2 w-full h-36 rounded-3xl bg-orange-500 text-white bg-opacity-10" name="email" placeholder="Enter your Message here" id=""></textarea>
                    </div>
                    <button className="bg-secondary contact_load mx-auto rounded-xl py-2 px-4 w-3/5">Send Message</button>
                </div>
            </div>

            <div className="flex justify-center text-xs items-center absolute -bottom-10 opacity-15 border-t w-full h-16">
                {/* <p>Design by Rohan Patil: https://www.figma.com/community/file/1335196687351078757/my-personal-portfolio</p> */}
            </div>
            <div className="absolute h-1/3 polka_dots -z-10 -right-16 bottom-1/4 -z-5 rotate-90 aspect-video"></div>
            <div className="absolute h-1/3 polka_dots -z-10 -left-8 top-16 -z-5 hidden md:block aspect-video"></div>
        </div>

    </main>)
}