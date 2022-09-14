import React, {useState} from 'react';
import Image from "next/image";
import Image1 from '../../public/colors/flooring.png';
import Image2 from '../../public/colors/wall cladding.png';
import Image3 from '../../public/colors/countertops.png';
import Image4 from '../../public/colors/custom.png';
import Button from "../../components/Button";
import Link from "next/link";
import Logo from "../../public/logo dark.svg";
import Menu from "../../public/menu.svg";
import {useRouter} from "next/router";

function SecondSection(props) {

    return (
        <div>
            <div className={"mt-28"}>
                <div className={"container"}>
                    <h2 className={"text-center text-40-48-600 mb-4"}>Applications</h2>
                    <p className={"mx-auto lg:w-2/5 text-center"}>Check out our wide range of stone applications for your home or office.</p>
                </div>
                <div className={"pt-14"}>
                    <div className="lg:flex-row flex-col flex gap-3 container">
                        <div className={"lg:w-[70%]"}>
                            <Image src={Image1} layout={"responsive"} alt={"flooring"}/>
                        </div>
                        <div className={"lg:w-[30%] ex-shadow p-14"}>
                            <h3 className={"text-24-30-600 mb-4"}>Flooring</h3>
                            <ul className={"list-disc"}>
                                <li className={"ml-5 mb-2"}>Indoor & Outdoor Areas</li>
                                <li className={"ml-5 mb-2"}>Stairs</li>
                                <li className={"ml-5 mb-2"}>Pool Surrounds</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={"pt-14"}>
                    <div className="lg:flex-row flex-col-reverse flex gap-3 container">
                        <div className={"lg:w-[30%] ex-shadow p-14"}>
                            <h3 className={"text-24-30-600 mb-4"}>Wall cladding</h3>
                            <ul className={"list-disc"}>
                                <li className={"ml-5 mb-2"}>Indoor & Outdoor</li>
                                <li className={"ml-5 mb-2"}>Shower Walls</li>
                                <li className={"ml-5 mb-2"}>Bathtub Surrounds</li>
                                <li className={"ml-5 mb-2"}>Fireplace Surrounds</li>
                                <li className={"ml-5 mb-2"}>Wainscot</li>
                                <li className={"ml-5 mb-2"}>Kitchen Hood Wraps</li>
                                <li className={"ml-5 mb-2"}>TV Niches</li>
                                <li className={"ml-5 mb-2"}>Accent Walls</li>
                            </ul>
                        </div>
                        <div className={"lg:w-[70%]"}>
                            <Image src={Image2} layout={"responsive"} alt={"flooring"}/>
                        </div>
                    </div>
                </div>
                <div className={"pt-14"}>
                    <div className="lg:flex-row flex-col flex gap-3 container">
                        <div className={"lg:w-[70%]"}>
                            <Image src={Image3} layout={"responsive"} alt={"flooring"}/>
                        </div>
                        <div className={"lg:w-[30%] ex-shadow p-14"}>
                            <h3 className={"text-24-30-600 mb-4"}>Countertops</h3>
                            <ul className={"list-disc"}>
                                <li className={"ml-5 mb-2"}>Kitchen Countertops</li>
                                <li className={"ml-5 mb-2"}>Kitchen Backsplashes</li>
                                <li className={"ml-5 mb-2"}>Kitchen Hood Wraps</li>
                                <li className={"ml-5 mb-2"}>Kitchen Islands</li>
                                <li className={"ml-5 mb-2"}>Bathroom Vanities</li>
                                <li className={"ml-5 mb-2"}>Integrated Sinks</li>
                                <li className={"ml-5 mb-2"}>Outdoor Kitchens</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={"pt-14"}>
                    <div className="lg:flex-row flex-col-reverse flex gap-3 container">
                        <div className={"lg:w-[30%] ex-shadow p-14"}>
                            <h3 className={"text-24-30-600 mb-4"}>Custom</h3>
                            <ul className={"list-disc"}>
                                <li className={"ml-5 mb-2"}>Desks</li>
                                <li className={"ml-5 mb-2"}>Tables</li>
                                <li className={"ml-5 mb-2"}>Recreational Vehicle (RV) Interiors</li>
                                <li className={"ml-5 mb-2"}>Boat Interiors</li>
                                <li className={"ml-5 mb-2"}>Retail Display Stands</li>
                            </ul>
                            <Button text={"Contact us"} classes={"bg-zinc-950 text-white w-[100%!important] mt-10"}
                                    isF={false} link={'/contacts'}/>
                        </div>
                        <div className={"lg:w-[70%]"}>
                            <Image src={Image4} layout={"responsive"} alt={"flooring"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SecondSection;
