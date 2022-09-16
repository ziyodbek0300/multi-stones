import React, {useEffect} from 'react';
import Image from "next/image";
import AboutUs from '../../../public/images2/about-us.png';
import Button from "../../../components/Button";
import AOS from "aos";
import "aos/dist/aos.css";

function ThirdSection() {

    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, []);

    return (
        <div className={"flex lg:flex-row flex-col container items-center"}>
            <div data-aos="fade-up" data-aos-duration={"600"} className={"w-full lg:pb-20 pb-8 text-center"}>
                <Image src={AboutUs} className={"w-full"} alt={"about-us"}/>
            </div>
            <div className={"w-full lg:pl-20 lg:pb-20 pb-10"}>
                <h2 className={"text-40-48-600 uppercase mb-4"} data-aos="fade-up" data-aos-duration={"600"}>About Us</h2>
                <p className={"text-gray-650 mb-3"} data-aos="fade-up" data-aos-duration={"600"}>Taking more than 28 years of experience and knowledge from many areas of the stone industry into your
                    home and business.</p>
                <p className={"text-gray-650 mb-10"} data-aos="fade-up" data-aos-duration={"600"}>Our average master has over 8 years of real world experience. </p>
                <div className={"grid grid-cols-2 lg:w-[80%] mb-10"}>
                    <div className={"mb-5"} data-aos="fade-up" data-aos-duration={"600"}>
                        <h4 className={"text-40-48-600 mb-2"}>200+</h4>
                        <p className={"text-16-22-400"}>Commercial projects</p>
                    </div>
                    <div className={"mb-5"} data-aos="fade-up" data-aos-duration={"600"}>
                        <h4 className={"text-40-48-600 mb-2"}>35+</h4>
                        <p className={"text-16-22-400"}>Health Care projects</p>
                    </div>
                    <div className={"mb-5"} data-aos="fade-up" data-aos-duration={"600"}>
                        <h4 className={"text-40-48-600 mb-2"}>52+</h4>
                        <p className={"text-16-22-400"}>Projects in Hospitality</p>
                    </div>
                    <div className={"mb-5"} data-aos="fade-up" data-aos-duration={"600"}>
                        <h4 className={"text-40-48-600 mb-2"}>1000+</h4>
                        <p className={"text-16-22-400"}>Residential projects</p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration={"600"}>
                    <Button isF={false} link={'/about-us'} classes={"bg-zinc-950 text-center text-white"} text={"Learn more"} />
                </div>
            </div>
        </div>
    );
}

export default ThirdSection;
