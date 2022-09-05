import Image from "next/image";
import Logo from '../public/logo.svg';
import Search from '../public/search.svg';
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

function Navbar() {

    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, []);

    return (<div className={"p-[1.6rem]"}>
            <div className={"flex justify-between items-center mx-auto container"} data-aos="fade-down"
                 data-aos-duration={"600"}>
                <div className={"w-1/5"}>
                    <Image src={Logo} alt={'Logo'}/>
                </div>
                <div className={"w-3/5"}>
                    <ul className={"p-0 m-0 flex justify-center"}>
                        <li className={'mx-5'}>
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li className={'mx-5'}>
                            <Link href={"/products"}>Products</Link>
                        </li>
                        <li className={'mx-5'}>
                            <Link href={"/about-us"}>About us</Link>
                        </li>
                        <li className={'mx-5'}>
                            <Link href={"/projects"}>Projects</Link>
                        </li>
                        <li className={'mx-5'}>
                            <Link href={"/contacts"}>Contacts</Link>
                        </li>
                    </ul>
                </div>
                <div className={"w-1/5 text-right"}>
                    <Image src={Search} alt={'Logo'}/>
                </div>
            </div>
        </div>);
}

export default Navbar;
