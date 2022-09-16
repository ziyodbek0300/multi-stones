import React from 'react';
import ContactsSection from "../_home/ContactsSection";
import FifthSection from "../_home/FifthSection/FifthSection";
import Image from "next/image";
import Qwerty from '../../public/qwerty.png';

function AboutUs() {
    return (
        <div>
            <div className={"container"}>
                <div className={"my-5 mb-10"}>
                    <Image src={Qwerty} alt={"stone"} />
                </div>
                <div className={"my-5 mb-14"}>
                    <h1 className={"text-center text-40-48-600 uppercase mb-5"}>About us</h1>
                    <p className={"text-gray-650 mb-4"}>
                        Our extensive experience in the field of construction and design allows us to provide our customers with the best solutions for the implementation of their projects.
                        We serve the state of Florida and we have a central shop in Orlando.
                    We offer the best prices and highest quality product for any Florida city.
                    </p>

                    <p className={"text-gray-650 mb-4"}>
                        In recent years, Multi Stone Masters has grown even more, carrying out large-scale projects,
                        commercial
                        and residential, across the state of Florida. And with all this development, we ended up opening
                        our
                        new facilities in 2019, with more than 11,000 square feet of covered manufacturing area,
                        delivery
                        docks and public parking.
                    </p>

                    <p className={"text-gray-650 mb-4"}>
                        Recently, in 2020, to complement all this growth and development, we started the development of our Stones Marketplace software for mobile devices across various platforms. 
                        This is to digitize our process of selling and buying natural stones, and to make it easier for our customers to find the perfect stone for their projects. 
                        Our in-house app helps us with our entire
                        process,
                        allowing us to monitor from start to finish. From selection of material to the date of delivery
                        and
                        even the uploading photos of the final installation. We have recently transferred to a fully
                        digital system on our backend upgrading our laser templating to streamline production through our fully automated CNC and
                        waterjet machines.
                    </p>

                    <p className={"text-gray-650 mb-4"}>
                        We are proud to say that we are one of the few companies in the state of Florida that has
                        everything
                        under one roof. From the selection of material, to the manufacturing, to the installation.

                    </p>

                    <p className={"text-gray-650 mb-4"}>
                        Our company is always looking for improvement and works hand in hand, to produce harmonious and
                        remarkably wonderful work!
                    </p>
                </div>
            </div>
            <div className={"my-12"}>
                <FifthSection/>
            </div>
            <ContactsSection/>
        </div>
    );
}

export default AboutUs;
