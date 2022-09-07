import React from 'react';
import Link from "next/link";

function SecondSection() {
    return (
        <div className={"container"}>
            <div className={"flex justify-between items-center py-14 pt-0"}>
                <h2 className={"text-40-48-600 uppercase"}>Products</h2>
                <p className={"text-16-20-500 uppercase text-gray-650 cursor-pointer"}>
                    <Link href={"/products"}>show more</Link>
                </p>
            </div>
            <div className={"grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7 pb-28"}>
                <div data-aos="fade-up" data-aos-duration={"600"} className={"relative pb-0 mb-0 h-96 exBg"}>
                    <div className={"bg-tanerofka s opacity-0 absolute h-1/2 bottom-0 w-full z-40"}></div>
                    <div className={"absolute s opacity-0 z-40 bottom-0 p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Some Text</h3>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration={"800"} className={"relative pb-0 mb-0 h-96 exBg"}>
                    <div className={"bg-tanerofka s opacity-0 absolute h-1/2 bottom-0 w-full z-40"}></div>
                    <div className={"absolute s opacity-0 z-40 bottom-0 p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Some Text</h3>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration={"900"} className={"relative pb-0 mb-0 h-96 exBg"}>
                    <div className={"bg-tanerofka s opacity-0 absolute h-1/2 bottom-0 w-full z-40"}></div>
                    <div className={"absolute s opacity-0 z-40 bottom-0 p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Some Text</h3>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration={"600"} className={"md:block relative hidden pb-0 mb-0 h-96 exBg"}>
                    <div className={"bg-tanerofka s opacity-0 absolute h-1/2 bottom-0 w-full z-40"}></div>
                    <div className={"absolute s opacity-0 z-40 bottom-0 p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Some Text</h3>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration={"800"} className={"md:block relative hidden pb-0 mb-0 h-96 exBg"}>
                    <div className={"bg-tanerofka s opacity-0 absolute h-1/2 bottom-0 w-full z-40"}></div>
                    <div className={"absolute s opacity-0 z-40 bottom-0 p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Some Text</h3>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration={"900"} className={"md:block relative hidden pb-0 mb-0 h-96 exBg"}>
                    <div className={"bg-tanerofka s opacity-0 absolute h-1/2 bottom-0 w-full z-40"}></div>
                    <div className={"absolute s opacity-0 z-40 bottom-0 p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Some Text</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SecondSection;
