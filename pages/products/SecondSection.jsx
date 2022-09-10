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
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    return (
        <div>
            <div
                className={"md:px-[1.6rem] backdrop-blur-xl bg-white/90 sticky top-0 z-50"} data-aos={"fade-up"}
                data-aos-duration={"1000"}>
                <div className={"flex justify-between items-center mx-auto container"}>
                    <Link href={"/"}>
                        <div className={"w-2/5"}>
                            <Image src={Logo} alt={'Logo'} height={"88"}/>
                        </div>
                    </Link>
                    <div className={"w-3/5"}>
                        <ul className={!open ? "p-0 md:flex hidden m-0 justify-end" : "md:static absolute top-full w-full md:backdrop-blur-0 backdrop-blur-2xl md:bg-transparent bg-white/100 left-0 md:gap-0 gap-8 flex md:flex-row flex-col py-5 md:flex m-0 justify-end"}>
                            <li onClick={() => setOpen(false)}
                                className={router.asPath === '/' ? 'font-bold mx-5' : 'mx-5'}>
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li onClick={() => setOpen(false)}
                                className={router.asPath === '/products' ? 'font-bold mx-5' : 'mx-5'}>
                                <Link href={"/products"}>Products</Link>
                            </li>
                            <li onClick={() => setOpen(false)}
                                className={router.asPath === '/about-us' ? 'font-bold mx-5' : 'mx-5'}>
                                <Link href={"/about-us"}>About us</Link>
                            </li>
                            <li onClick={() => setOpen(false)}
                                className={router.asPath === '/projects' ? 'font-bold mx-5' : 'mx-5'}>
                                <Link href={"/projects"}>Projects</Link>
                            </li>
                            <li onClick={() => setOpen(false)}
                                className={router.asPath === '/contacts' ? 'font-bold ml-5 text-end' : 'ml-5 text-end'}>
                                <Link href={"/contacts"}>Contact us</Link>
                            </li>
                        </ul>
                    </div>
                    {/*<div className={"w-1/5 md:block hidden text-right"}>*/}
                    {/*    <Image src={Search} alt={'Logo'}/>*/}
                    {/*</div>*/}
                    <div onClick={toggle} className={"w-1/5 md:hidden block text-right"}>
                        <Image src={Menu} alt={'Menu'}/>
                    </div>
                </div>
            </div>
            <div className={"mt-28"}>
                <div className={"container"}>
                    <h2 className={"text-center text-40-48-600 mb-4"}>Applications</h2>
                    <p className={"mx-auto lg:w-2/5 text-center"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas congue sed id pretium duis libero.
                        Sed orci non id.</p>
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
