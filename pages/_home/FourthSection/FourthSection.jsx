import React, {useEffect} from 'react';
import Image from "next/image";
import Stone1 from '../../../public/images2/2.png';
import Stone2 from '../../../public/images2/5.png';
import Stone3 from '../../../public/images2/1.png';
import Stone4 from '../../../public/images2/3.png';
import Stone6 from '../../../public/images2/4.png';
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

function FourthSection() {

    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, []);

    return (
        <div className={"container"}>
            <div className={"flex justify-between items-center lg:py-14 py-7"}>
                <h2 className={"text-40-48-600 uppercase"} data-aos="fade-up" data-aos-duration={"600"}>Projects</h2>
                <p className={"text-16-20-500 uppercase text-gray-650"}>
                    <Link href={"/project"} data-aos="fade-up" data-aos-duration={"600"}>show more</Link>
                </p>
            </div>
            <div className={"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 pb-28"}>
                <div data-aos="fade-up" data-aos-duration={"600"} className={"relative mx-auto row-start-1 row-end-3 card-projects overflow-hidden"}>
                    <Image src={Stone3} className={"hover:brightness-50 transition-opacity image"} style={{transition: '.3s ease-in-out'}} alt={"stone-dark"}/>
                    <div className={"absolute pr-text z-40 -top-full h-full w-full flex justify-center items-center p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Grand Mir Hotel Restaurant</h3>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration={"800"} className={"relative mx-auto card-projects overflow-hidden"}>
                    <Image src={Stone1} className={"hover:brightness-50 transition-opacity image"} style={{transition: '.3s ease-in-out'}} alt={"stone-dark"}/>
                    <div className={"absolute pr-text z-40 -top-full h-full w-full flex justify-center items-center p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Fountains for multiple locations of Hyatt Regency</h3>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration={"900"} className={"relative mx-auto card-projects overflow-hidden"}>
                    <Image src={Stone4} className={"hover:brightness-50 transition-opacity image"} style={{transition: '.3s ease-in-out'}} alt={"stone-dark"}/>
                    <div className={"absolute pr-text z-40 -top-full h-full w-full flex justify-center items-center p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>The Hub apartment complex</h3>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration={"800"} className={"relative mx-auto card-projects overflow-hidden"}>
                    <Image src={Stone6} className={"hover:brightness-50 transition-opacity image"} style={{transition: '.3s ease-in-out'}} alt={"stone-dark"}/>
                    <div className={"absolute pr-text z-40 -top-full h-full w-full flex justify-center items-center p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Anonymous customer</h3>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration={"900"} className={"relative mx-auto card-projects overflow-hidden"}>
                    <Image src={Stone2} className={"hover:brightness-50 transition-opacity image"} style={{transition: '.3s ease-in-out'}} alt={"stone-dark"}/>
                    <div className={"absolute pr-text z-40 -top-full h-full w-full flex justify-center items-center p-6"}>
                         <h3 className={"text-white text-24-30-600 mb-2"}>IQ Luxury apartment complex</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FourthSection;
