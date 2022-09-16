import React from 'react';
import Image from "next/image";
import Stone3 from "../../public/projects/1.png";
import Stone1 from "../../public/projects/2.png";
import Stone4 from "../../public/projects/3.png";
import Stone6 from "../../public/projects/4.png";
import Stone2 from "../../public/projects/5.png";
import Stone7 from "../../public/projects/6.png";
import Stone9 from "../../public/projects/9.png";
import Stone8 from "../../public/projects/8.png";
import Stone5 from "../../public/projects/7.png";
function FourthSection({type}) {
    return (
        <div className={"container"}>
            <div className={"lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-5 pb-4"}>
                <div className={type === "first" ? "relative row-start-1 row-end-3 card-projects overflow-hidden" : "relative row-start-1 row-end-3 lg:col-start-3 lg:col-end-4 card-projects overflow-hidden"}>
                    <Image src={Stone3} className={"hover:brightness-50 transition-opacity image"} style={{transition: '.3s ease-in-out'}} alt={"stone-dark"}/>
                    <div className={"absolute pr-text z-40 -top-full h-full w-full flex justify-center items-center p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Large area flooring</h3>
                    </div>
                </div>
                <div className={"relative card-projects overflow-hidden"}>
                    <Image src={Stone1} className={"hover:brightness-50 transition-opacity image"} style={{transition: '.3s ease-in-out'}} alt={"stone-dark"}/>
                    <div className={"absolute pr-text z-40 -top-full h-full w-full flex justify-center items-center p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Penthouse countertop</h3>
                    </div>
                </div>
                <div className={"relative card-projects overflow-hidden"}>
                    <Image src={Stone4} className={"hover:brightness-50 transition-opacity image"} style={{transition: '.3s ease-in-out'}} alt={"stone-dark"}/>
                    <div className={"absolute pr-text z-40 -top-full h-full w-full flex justify-center items-center p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Bathroom Marbles</h3>
                    </div>
                </div>
                <div className={"relative card-projects overflow-hidden"}>
                    <Image src={Stone6} className={"hover:brightness-50 transition-opacity image"} style={{transition: '.3s ease-in-out'}} alt={"stone-dark"}/>
                    <div className={"absolute pr-text z-40 -top-full h-full w-full flex justify-center items-center p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Kitchen countertops</h3>
                    </div>
                </div>
                <div className={"relative card-projects overflow-hidden"}>
                    <Image src={Stone2} className={"hover:brightness-50 transition-opacity image"} style={{transition: '.3s ease-in-out'}} alt={"stone-dark"}/>
                    <div className={"absolute pr-text z-40 -top-full h-full w-full flex justify-center items-center p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Bar area countertop</h3>
                    </div>
                </div>
            </div>
            <div className={"lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-5 pb-4"}>
                <div className={"relative row-start-1 row-end-3 col-start-3 col-end-4 card-projects overflow-hidden"}>
                    <Image src={Stone9} className={"hover:brightness-50 transition-opacity image"} style={{transition: '.3s ease-in-out'}} alt={"stone-dark"}/>
                    <div className={"absolute pr-text z-40 -top-full h-full w-full flex justify-center items-center p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Kitchen countertops</h3>
                    </div>
                </div>
                <div className={"relative col-start-1 col-end-3 card-projects overflow-hidden"}>
                    <Image src={Stone7} className={"hover:brightness-50 transition-opacity image"} style={{transition: '.3s ease-in-out'}} alt={"stone-dark"}/>
                    <div className={"absolute pr-text z-40 -top-full h-full w-full flex justify-center items-center p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Kitchen countertop</h3>
                    </div>
                </div>
                <div className={"relative card-projects overflow-hidden"}>
                    <Image src={Stone8} className={"hover:brightness-50 transition-opacity image"} style={{transition: '.3s ease-in-out'}} alt={"stone-dark"}/>
                    <div className={"absolute pr-text z-40 -top-full h-full w-full flex justify-center items-center p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Kitchen countertop</h3>
                    </div>
                </div>
                <div className={"relative card-projects overflow-hidden"}>
                    <Image src={Stone5} className={"hover:brightness-50 transition-opacity image"} style={{transition: '.3s ease-in-out'}} alt={"stone-dark"}/>
                    <div className={"absolute pr-text z-40 -top-full h-full w-full flex justify-center items-center p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Kitchen countertop</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FourthSection;
