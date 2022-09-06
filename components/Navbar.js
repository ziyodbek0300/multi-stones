import Image from "next/image";
import Logo from '../public/logo.svg';
import Search from '../public/search.svg';
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect, useState} from "react";
import Menu from "../public/menu.svg";

function Navbar() {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, []);

    return (<div className={"md:px-[1.6rem] py-[1rem] backdrop-blur-xl bg-white/90 sticky top-0 z-50"}>
        <div className={"flex justify-between items-center mx-auto container"}>
            <div className={"w-1/5"}>
                <Image src={Logo} alt={'Logo'}/>
            </div>
            <div className={"w-3/5"}>
                <ul className={!open ? "p-0 md:flex hidden m-0 justify-center" : "md:static absolute top-full w-full md:backdrop-blur-0 backdrop-blur-2xl md:bg-transparent bg-white/100 left-0 md:gap-0 gap-8 flex md:flex-row flex-col py-5 md:flex m-0 justify-center"}>
                    <li className={'mx-5'}>
                        <Link onClick={() => setOpen(false)} href={"/"}>Home</Link>
                    </li>
                    <li className={'mx-5'}>
                        <Link onClick={() => setOpen(false)} href={"/products"}>Products</Link>
                    </li>
                    <li className={'mx-5'}>
                        <Link onClick={() => setOpen(false)} href={"/about-us"}>About us</Link>
                    </li>
                    <li className={'mx-5'}>
                        <Link onClick={() => setOpen(false)} href={"/projects"}>Projects</Link>
                    </li>
                    <li className={'mx-5'}>
                        <Link onClick={() => setOpen(false)} href={"/contacts"}>Contacts</Link>
                    </li>
                </ul>
            </div>
            <div className={"w-1/5 md:block hidden text-right"}>
                <Image src={Search} alt={'Logo'}/>
            </div>
            <div onClick={toggle} className={"w-1/5 md:hidden block text-right"}>
                <Image src={Menu} alt={'Menu'}/>
            </div>
        </div>
    </div>);
}

export default Navbar;
