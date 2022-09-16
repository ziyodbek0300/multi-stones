import React, {useEffect} from 'react';
import Image from "next/image";
import Stone1 from '../../public/stones/Rectangle.png';
import Stone2 from '../../public/stones/Rectangle 8-1.png';
import Stone3 from '../../public/stones/Rectangle 8-2.png';
import Stone4 from '../../public/stones/Rectangle 8.png';
import Stone5 from '../../public/stones/Rectangle 88.png';
import Stone6 from '../../public/stones/Rectangle 888.png';
import AOS from "aos";
import "aos/dist/aos.css";
import {useRouter} from "next/router";

function FirstSection() {
    const router = useRouter();

    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, []);

    return (<div className={"container"} id={"products"}>
        <div className={"flex justify-between items-center py-14"}>
            <h2 className={"text-40-48-600 uppercase"}>Colors</h2>
            <p className={"text-16-20-500 uppercase text-gray-650"}></p>
        </div>
        <div className={"grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 pb-28"}>
            <div onClick={() => router.push('/products/marble')} data-aos="fade-up" data-aos-duration={"600"} className={"relative pb-0 mb-0 h-[400px] py-20 exBg"}>
                <div className={"bg-tanerofka s opacity-0 absolute h-1/2 bottom-0 w-full z-40"}></div>
                <div className={"absolute s opacity-0 z-40 bottom-0 p-6"}>
                    <h3 className={"text-white text-24-30-600 mb-2"}>Marble</h3>
                </div>
            </div>
            <div onClick={() => router.push('/products/quartz')} data-aos="fade-up" data-aos-duration={"600"} className={"relative pb-0 mb-0 h-[400px] exBg"}>
                <div className={"bg-tanerofka s opacity-0 absolute h-1/2 bottom-0 w-full z-40"}></div>
                <div className={"absolute s opacity-0 z-40 bottom-0 p-6"}>
                    <h3 className={"text-white text-24-30-600 mb-2"}>Quartz</h3>
                </div>
            </div>
            <div onClick={() => router.push('/products/porcelain')} data-aos="fade-up" data-aos-duration={"600"} className={"relative pb-0 mb-0 h-[400px] exBg"}>
                <div className={"bg-tanerofka s opacity-0 absolute h-1/2 bottom-0 w-full z-40"}></div>
                <div className={"absolute s opacity-0 z-40 bottom-0 p-6"}>
                    <h3 className={"text-white text-24-30-600 mb-2"}>Porcelain</h3>
                </div>
            </div>
            <div onClick={() => router.push('/products/granite')} data-aos="fade-up" data-aos-duration={"600"} className={"relative pb-0 mb-0 h-[400px] exBg"}>
                <div className={"bg-tanerofka s opacity-0 absolute h-1/2 bottom-0 w-full z-40"}></div>
                <div className={"absolute s opacity-0 z-40 bottom-0 p-6"}>
                    <h3 className={"text-white text-24-30-600 mb-2"}>Granite</h3>
                </div>
            </div>
            <div onClick={() => router.push('/products/grey_quartz')} data-aos="fade-up" data-aos-duration={"600"} className={"relative pb-0 mb-0 h-[400px] exBg"}>
                <div className={"bg-tanerofka s opacity-0 absolute h-1/2 bottom-0 w-full z-40"}></div>
                <div className={"absolute s opacity-0 z-40 bottom-0 p-6"}>
                    <h3 className={"text-white text-24-30-600 mb-2"}>Grey quartz</h3>
                </div>
            </div>
            <div onClick={() => router.push('/products/onyx')} data-aos="fade-up" data-aos-duration={"600"} className={"relative pb-0 mb-0 h-[400px] exBg"}>
                <div className={"bg-tanerofka s opacity-0 absolute h-1/2 bottom-0 w-full z-40"}></div>
                <div className={"absolute s opacity-0 z-40 bottom-0 p-6"}>
                    <h3 className={"text-white text-24-30-600 mb-2"}>Onyx</h3>
                </div>
            </div>
            {/* <div data-aos="fade-up" data-aos-duration={"600"} className={"relative pb-0 mb-0 h-[400px] exBg"}>
                <div className={"bg-tanerofka s opacity-0 absolute h-1/2 bottom-0 w-full z-40"}></div>
                <div className={"absolute s opacity-0 z-40 bottom-0 p-6"}>
                    <h3 className={"text-white text-24-30-600 mb-2"}>Some Text</h3>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration={"600"} className={"relative pb-0 mb-0 h-[400px] exBg"}>
                <div className={"bg-tanerofka s opacity-0 absolute h-1/2 bottom-0 w-full z-40"}></div>
                <div className={"absolute s opacity-0 z-40 bottom-0 p-6"}>
                    <h3 className={"text-white text-24-30-600 mb-2"}>Some Text</h3>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration={"600"} className={"relative pb-0 mb-0 h-[400px] exBg"}>
                <div className={"bg-tanerofka s opacity-0 absolute h-1/2 bottom-0 w-full z-40"}></div>
                <div className={"absolute s opacity-0 z-40 bottom-0 p-6"}>
                    <h3 className={"text-white text-24-30-600 mb-2"}>Some Text</h3>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration={"600"} className={"relative pb-0 mb-0 h-[400px] exBg"}>
                <div className={"bg-tanerofka s opacity-0 absolute h-1/2 bottom-0 w-full z-40"}></div>
                <div className={"absolute s opacity-0 z-40 bottom-0 p-6"}>
                    <h3 className={"text-white text-24-30-600 mb-2"}>Some Text</h3>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration={"600"} className={"relative pb-0 mb-0 h-[400px] exBg"}>
                <div className={"bg-tanerofka s opacity-0 absolute h-1/2 bottom-0 w-full z-40"}></div>
                <div className={"absolute s opacity-0 z-40 bottom-0 p-6"}>
                    <h3 className={"text-white text-24-30-600 mb-2"}>Some Text</h3>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration={"600"} className={"relative pb-0 mb-0 h-[400px] exBg"}>
                <div className={"bg-tanerofka s opacity-0 absolute h-1/2 bottom-0 w-full z-40"}></div>
                <div className={"absolute s opacity-0 z-40 bottom-0 p-6"}>
                    <h3 className={"text-white text-24-30-600 mb-2"}>Some Text</h3>
                </div>
            </div> */}
        </div>
    </div>);
}

export default FirstSection;
