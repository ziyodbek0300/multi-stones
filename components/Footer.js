import React from 'react';
import Image from "next/image";
import Logo from '../public/logo-white.svg';
import Instagram from '../public/instagram.svg';
import Facebook from '../public/facebook.svg';
import Twitter from '../public/twitter.svg';
import Link from "next/link";
import * as gtag from '../lib/gtag'

const handleEmailClick = () => {
    console.log("Email Clicked")
    try {
        var callback = function () {
            if (typeof (url) != 'undefined') {
                window.location = url;
            } else if (url === 'http://www.multistonemasters.com' || url === 'https://www.multistonemasters.com' || url === 'http://multistonemasters.com' || url === 'https://multistonemasters.com') {
                window.location = url;
            }
        };
        gtag.event('conversion', {
            'send_to': 'AW-10982841403/QaAkCMvJsuEDELu4g_Uo',
            'event_callback': callback
        });
    } catch (e) {
        console.log("Gtag", e)
    }
    return false;
}



const handlePhoneClick = () => {
    console.log("Phone Clicked")
    try {
        gtag.event('config', 'AW-10982841403/dNeFCK_q_OADELu4g_Uo', {
            'phone_conversion_number': '(332) 322-2244'
        });
    } catch (e) {
        console.log("phone tracking", e)
    }
}



function Footer() {
    return (<div className={"bg-zinc-950 text-gray-350"}>
        <div className={"pt-12 pb-16"}>
            <div className={"flex lg:flex-row flex-col justify-between lg:gap-20 gap-7 container"}>
                <div className={"w-full"}>
                    <div className={"mb-4"}>
                        <Link href={"/"}><Image src={Logo} alt={"Logo"}/></Link>
                    </div>
                    <p className={"text-16-22-400"}>Put our expert stone masters to work for you</p>
                </div>
                <div className={"w-full"}>
                    <p className={"text-white text-16-22-600 mb-4"}>About us</p>
                    <ul className={"text-16-22-400 text-white opacity-80"}>
                        <li className={"mb-3"}>
                            <Link href={"/products"}>Products</Link>
                        </li>
                        <li className={"mb-3"}>
                            <Link href={"/projects"}>Projects</Link>
                        </li>
                        <li className={"mb-3"}>
                            <Link href={"#partners"}>Partners</Link>
                        </li>
                    </ul>
                </div>
                <div className={"w-full"}>
                    <p className={"text-white text-16-22-600 mb-4"}>Stones</p>
                    <ul className={"text-16-22-400 text-white opacity-80"}>
                        <li className={"mb-3"}>
                            <Link href={"/products/marble"}>Marble</Link>
                        </li>
                        <li className={"mb-3"}>
                            <Link href={"/products/quartz"}>Quartz</Link>
                        </li>
                        <li className={"mb-3"}>
                            <Link href={"/products/onyx"}>Onyx</Link>
                        </li>
                        <li className={"mb-3"}>
                            <Link href={"/products/granite"}>Granite</Link>
                        </li>
                        <li className={"mb-3"}>
                            <Link href={"/products/porcelain"}>Porcelain</Link>
                        </li>
                    </ul>
                </div>
                <div className={"w-full"}>
                    <p className={"text-white text-16-22-600 mb-4"}>Contact Us</p>
                    <ul className={"text-16-22-400 text-white opacity-80"}>
                        <li className={"footer-side mb-3"}>
                            <a href={"https://www.google.com/maps/place/8010+Sunport+Dr+STE+122,+Orlando,+FL+32809,+USA/@28.4503038,-81.3777283,17z/data=!3m1!4b1!4m5!3m4!1s0x88e77cfcf51958df:0xa3980848743cd73e!8m2!3d28.4502991!4d-81.3755396"}
                               target={"_"}>8010 Sunport Dr., Ste 122, Orlando, Florida, 32809</a>
                        </li>
                        <li className={"footer-side mb-3"}>
                            <a href={"mailto:sales@multistonemasters.com"} onClick={handleEmailClick}>sales@multistonemasters.com</a>
                        </li>
                        <li className={"footer-side mb-3"}>
                            <a href="tel:3323222244" onClick={handlePhoneClick}>(332) 322-2244</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={'border-t border-[#636363] py-8'}>
            <div
                className={"container flex lg:flex-row flex-col-reverse gap-3 lg:text-left text-center justify-between items-center"}>
                <p className={"text-16-22-400"}>Copyright © {new Date().getFullYear()} Multi Stone Masters – All Rights
                    Reserved.</p>
                {/* <div className={"flex gap-5"}>
                    <a href={"https://instagram.com"} target={"_"}><Image src={Instagram} alt={"Instagram"}/></a>
                    <a href={"https://facebook.com"} target={"_"}><Image src={Facebook} alt={"FaceBook"}/></a>
                    <a href={"https://twitter.com"} target={"_"}><Image src={Twitter} alt={"Twitter"}/></a>
                </div> */}
            </div>
        </div>
    </div>);
}

export default Footer;
