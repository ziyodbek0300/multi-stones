import Image from "next/image";
import Logo from '../public/logo dark.svg';
import LogoWhite from '../public/logo-white.svg';
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect, useState} from "react";
import Menu from "../public/menu.svg";
import {useRouter} from "next/router";

function NavbarLight() {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, []);

    return (<div className={"md:px-[1.6rem] bg-zinc-950/20 sticky top-0 z-50"}>
        <div className={"flex justify-between items-center mx-auto container"}>
            <Link href={"/"}>
                <div className={"w-2/5"}>
                    <Image src={router.asPath === '/products' ? LogoWhite : Logo} alt={'Logo'} height={"88"}/>
                </div>
            </Link>
            <div className={router.asPath === '/products' ? "text-white w-3/5" : "w-3/5"}>
                <ul className={!open ? "p-0 md:flex hidden m-0 justify-end" : "md:static absolute top-full w-full md:backdrop-blur-0 backdrop-blur-2xl md:bg-transparent bg-white/100 left-0 md:gap-0 gap-8 flex md:flex-row flex-col py-5 md:flex m-0 justify-end"}>
                    <li onClick={() => setOpen(false)} className={router.asPath === '/' ? 'font-bold mx-5' : 'mx-5'}>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li onClick={() => setOpen(false)}
                        className={router.asPath === '/products' ? 'font-bold mx-5' : 'mx-5'}>
                        <Link href={"/products"}>Products</Link>
                    </li>
                    <li onClick={() => setOpen(false)}
                        className={router.asPath === '/about-us' ? 'font-bold mx-5' : 'mx-5'}>
                        <Link href={"/about-us"}>About us</Link>
                    </li>
                    <li onClick={() => setOpen(false)}
                        className={router.asPath === '/projects' ? 'font-bold mx-5' : 'mx-5'}>
                        <Link href={"/projects"}>Projects</Link>
                    </li>
                    <li onClick={() => setOpen(false)}
                        className={router.asPath === '/contacts' ? 'font-bold ml-5 text-end' : 'ml-5 text-end'}>
                        <Link href={"/contacts"}>Contact us</Link>
                    </li>
                </ul>
            </div>
            {/*<div className={"w-1/5 md:block hidden text-right"}>*/}
            {/*    <Image src={Search} alt={'Logo'}/>*/}
            {/*</div>*/}
            <div onClick={toggle} className={"w-1/5 md:hidden block text-right"}>
                <Image src={Menu} alt={'Menu'}/>
            </div>
        </div>
    </div>);
}

export default NavbarLight;
