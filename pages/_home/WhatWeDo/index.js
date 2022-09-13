import React from 'react';
import Image from "next/image";
import Image1 from "/whatwedo/image 21.png";
import Image2 from "/whatwedo/image 21-1.png";
import Image3 from "/whatwedo/image 21-2.png";
import Button from "../../../components/Button";

function WhatWeDo(props) {
    return (
        <div>
            <div className={"container"}>
                <h2 className={"uppercase text-40-48-600 mb-14 mt-4"}>What we do</h2>
                <div className={"flex lg:flex-row flex-col gap-10 py-8"}>
                    <div className={"w-full"}>
                        <Image layout={"responsive"} src={Image1} alt={"Home1"}/>
                    </div>
                    <div className={"w-full flex items-center justify-center"}>
                        <div className={"lg:w-[70%]"}>
                            <h2 className={"uppercase text-40-48-600 mb-5"}>Fabrication</h2>
                            <p className={"text-16-22-400 mb-10"}>
                                Our fabrication facilities feature automated cutting, shaping, and polishing machinery
                                enabling us to fabricate porcelain projects efficiently. Our fabrication teams
                                meticulously
                                build each project in-house while finalizing detailed cuts onsite.
                            </p>
                            <Button text={"Learn more"} classes={"text-white bg-zinc-950"} isF={false}
                                    link={"/products"}/>
                        </div>
                    </div>
                </div>
                <div className={"flex lg:flex-row flex-col-reverse gap-10 py-8"}>
                    <div className={"w-full flex items-center justify-center"}>
                        <div className={"lg:w-[70%]"}>
                            <h2 className={"uppercase text-40-48-600 mb-5"}>Installation</h2>
                            <p className={"text-16-22-400 mb-10"}>
                                Our team includes crews who specialize in specific areas, such as countertops, walls,
                                floors, and exterior cladding to make sure your project is staffed optimally.
                            </p>
                            <Button text={"Learn more"} classes={"text-white bg-zinc-950"} isF={false}
                                    link={"/products"}/>
                        </div>
                    </div>
                    <div className={"w-full"}>
                        <Image layout={"responsive"} src={Image2} alt={"Home1"}/>
                    </div>
                </div>
                <div className={"flex lg:flex-row flex-col gap-10 py-8"}>
                    <div className={"w-full"}>
                        <Image layout={"responsive"} src={Image3} alt={"Home1"}/>
                    </div>
                    <div className={"w-full flex items-center justify-center"}>
                        <div className={"lg:w-[70%]"}>
                            <h2 className={"uppercase text-40-48-600 mb-5"}>Material</h2>
                            <p className={"text-16-22-400 mb-10"}>
                                We currently stock 15 porcelain colors. If one location doesn’t have your selection, we
                                can work with one of our other locations for your desired material. We also partnered
                                with 17 porcelain manufacturers to provide an additional extensive color selection.
                            </p>
                            <Button text={"Learn more"} classes={"text-white bg-zinc-950"} isF={false}
                                    link={"/products"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatWeDo;
