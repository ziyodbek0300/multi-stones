import React from 'react';
import Image from "next/image";
import AboutUs from '../../../public/images2/about-us.png';
import Button from "../../../components/Button";

function ThirdSection() {
    return (
        <div className={"flex lg:flex-row flex-col container items-center"}>
            <div className={"w-full lg:pb-20 pb-8 text-center"}>
                <Image src={AboutUs} className={"w-full"} alt={"about-us"}/>
            </div>
            <div className={"w-full lg:pl-20 lg:pb-20 pb-10"}>
                <h2 className={"text-40-48-600 uppercase mb-4"}>About Us</h2>
                <p className={"text-gray-650 mb-3"}>Taking more than 28 years of experience and knowledge from many areas of the stone industry into your
                    home and business.</p>
                <p className={"text-gray-650 mb-10"}>We are a family business, founded by Lenny, Rafael and Gabriel we want you to feel part of our
                    family. Request your quote with us and make your ideas come true! </p>
                <div className={"grid grid-cols-2 lg:w-[80%] mb-10"}>
                    <div className={"mb-5"}>
                        <h4 className={"text-40-48-600 mb-2"}>200+</h4>
                        <p className={"text-16-22-400"}>Commercial</p>
                    </div>
                    <div className={"mb-5"}>
                        <h4 className={"text-40-48-600 mb-2"}>35+</h4>
                        <p className={"text-16-22-400"}>Health Care</p>
                    </div>
                    <div className={"mb-5"}>
                        <h4 className={"text-40-48-600 mb-2"}>52+</h4>
                        <p className={"text-16-22-400"}>Hospitality</p>
                    </div>
                    <div className={"mb-5"}>
                        <h4 className={"text-40-48-600 mb-2"}>5000+</h4>
                        <p className={"text-16-22-400"}>Residential</p>
                    </div>
                </div>
                <Button isF={true} classes={"bg-zinc-950 text-center text-white"} text={"Learn more"} />
            </div>
        </div>
    );
}

export default ThirdSection;
