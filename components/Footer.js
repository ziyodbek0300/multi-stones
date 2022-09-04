import React from 'react';
import Image from "next/image";
import Logo from '../public/logo-white.svg';
import Instagram from '../public/instagram.svg';
import Facebook from '../public/facebook.svg';
import Twitter from '../public/twitter.svg';
import Location from '../public/map-pin.svg';
import Email from '../public/mail.svg';
import Phone from '../public/phone.svg';

function Footer() {
    return (<div className={"bg-zinc-950 text-gray-350"}>
        <div className={"pt-12 pb-16"}>
            <div className={"flex justify-between gap-20 container"}>
                <div className={"w-full"}>
                    <div className={"mb-4"}>
                        <Image src={Logo} alt={"Logo"}/>
                    </div>
                    <p className={"text-16-22-400"}>We are a family business with over 28 years of experience in the
                        stone countertop industry.</p>
                </div>
                <div className={"w-full"}>
                    <p className={"text-white text-16-22-600 mb-4"}>About us</p>
                    <ul className={"text-16-22-400 text-white opacity-80"}>
                        <li className={"mb-3"}>Products</li>
                        <li className={"mb-3"}>Projects</li>
                        <li className={"mb-3"}>Partners</li>
                    </ul>
                </div>
                <div className={"w-full"}>
                    <p className={"text-white text-16-22-600 mb-4"}>Stones</p>
                    <ul className={"text-16-22-400 text-white opacity-80"}>
                        <li className={"mb-3"}>Marble</li>
                        <li className={"mb-3"}>Quartz</li>
                        <li className={"mb-3"}>Onyx</li>
                    </ul>
                </div>
                <div className={"w-full"}>
                    <p className={"text-white text-16-22-600 mb-4"}>Contacts</p>
                    <ul className={"text-16-22-400 text-white opacity-80"}>
                        <li className={"footer-side mb-3"}>
                            <span>8010 Sunport Dr., Ste 122, Orlando, Florida, 32809</span>
                        </li>
                        <li className={"footer-side mb-3"}>
                            <span>contact@comston.io</span>
                        </li>
                        <li className={"footer-side mb-3"}>
                            <span>+1 (407) 683-5894</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={'border-t border-[#636363] py-8'}>
            <div className={"container flex justify-between items-center"}>
                <p className={"text-16-22-400"}>Copyright © {new Date().getFullYear()} Ribeiro Stones – All Rights
                    Reserved.</p>
                <div>
                    <Image src={Instagram} alt={"Instagram"}/>
                    <Image src={Facebook} alt={"FaceBook"}/>
                    <Image src={Twitter} alt={"Twitter"}/>
                </div>
            </div>
        </div>
    </div>);
}

export default Footer;
