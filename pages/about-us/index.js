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
                        Founded by Lenny, Rafael and Gabriel, our family business has extensive experience in the stone
                        countertops market. Working wisely within the entire process, our experience spans from the
                        manufacture, installation, distribution of stones and administration of large projects. Always
                        striving for the highest standard of service and impeccable results!
                    </p>

                    <p className={"text-gray-650 mb-4"}>
                        In recent years, Ribeiro Stones has grown even more, carrying out large-scale projects,
                        commercial
                        and residential, across the state of Florida. And with all this development, we ended up opening
                        our
                        new facilities in 2019, with more than 11,000 square feet of covered manufacturing area,
                        delivery
                        docks and private parking.
                    </p>

                    <p className={"text-gray-650 mb-4"}>
                        Recently, in 2020, to complement all this growth and development, we launched the Stone APP,
                        which
                        is available in the Apple and Google Play store. Our in-house app helps us with our entire
                        process,
                        allowing us to monitor from start to finish. From selection of material to the date of delivery
                        and
                        even the uploading photos of the final installation. We have recently transferred to a fully
                        digital
                        system upgrading our laser templating to streamline production through our fully automated CNC’s
                    </p>

                    <p className={"text-gray-650 mb-4"}>
                        We are very proud to be a family business. And we believe that this has a big influence on who
                        we
                        are and how we work. After all, everyone on our team is a family, and we hope that this unity
                        and
                        the love for our craft will be evident to all of our customers.
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
