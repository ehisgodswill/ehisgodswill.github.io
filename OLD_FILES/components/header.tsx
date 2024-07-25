"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    
 /* const [scroll, setScroll] = useState(0);

  const onSCroll = () => setScroll(window.scrollY);
  useEffect(()=>{
    onSCroll();
    window.addEventListener('scroll', onSCroll, {passive: true});
    return ()=> window.removeEventListener('scroll', onSCroll);

  }, [])
  // useEffect(()=>{
  //   console.log(scroll)
    
  // },[scroll])*/
    const [scroll, setScroll] = useState('');

    useEffect(()=>{
        if (window.scrollY > 17){
            window.addEventListener('scroll', ()=>setScroll('scroll'), true);
            window.removeEventListener('scroll', ()=>setScroll('scroll'), true);
        }
    },[])
    return (
        <header className={"header "+scroll}>
            <div className="logo"><Image src={'/mainlogo.png'} alt="logo" width={2175} height={560} /></div>
            <div className="navbar">
                <ul>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/portfolio'}>Portfolio</Link></li>
                    <li><Link href={'/about'}>About&nbsp;Me</Link></li>
                    <li><Link href={'/testimonial'}>Testimonial</Link></li>
                </ul>
                <a className="contact" ><Link href={'/contact-me'}>Get&nbsp;in&nbsp;touch</Link></a>
            </div>
            <style jsx>            
{`
.header{
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 6px 5%;
    gap: 7%;
    position: fixed;
    z-index: 1;
}
.logo{
    width: 170px;
    border-radius: 5px;
    overflow: hidden;
}
.navbar{
    display: flex;
    width: 100%;
    gap: 5%;
}
.contact{
    border:2px solid transparent;
    border-radius: 5px;
    color: var(--background);
    background-color: var(--gold);
    padding: 5px;
    font-weight: 700;
}
.contact:hover{
    border:2px solid rgb(var(--foreground-rgb));
    color: rgb(var(--foreground-rgb));
}
.navbar > ul{
    display: flex;
    width: 100%;
    gap: 3%;
}
.navbar > ul> li {
    font-size: 17px;
    text-align: center;
    padding: 5px 0;
    color: var(--gold);
    text-shadow:  #2b2a2a -1px -0px 0px;
}
.navbar > ul> li:hover{
  color: rgb(var(--foreground-rgb));
}
.headeer + .scroll{
    background-color: rgb(var(--background-end-rgb));
    box-shadow: rgb(var(--foreground-rgb)) -2px -4px 50px 0px;
    position: fixed;
    z-index: 10
}

`}
            </style>
        </header>
    )
}
