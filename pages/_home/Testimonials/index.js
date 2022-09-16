import React, {useState} from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import Image from "next/image";
import ArrowRight from '../../../public/leftArr.svg';
import ArrowLeft from '../../../public/rightAr.svg';
import Quote from '../../../public/quote.svg';
import Pro1 from '../../../public/pro1.png';
import Pro2 from '../../../public/pro2.png';
import Pro3 from '../../../public/pro3.png';

function Testimonials() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <div>
            <div className={"container"}>
                <h2 className={"text-40-48-600 uppercase"}>Testimonials</h2>
                <div className={"relative"}>
                    <ReactSimplyCarousel
                        containerProps={{
                            style: {
                                width: "100%"
                            }
                        }}
                        activeSlideIndex={activeSlideIndex}
                        onRequestChange={setActiveSlideIndex}
                        itemsToShow={3}
                        itemsToScroll={1}
                        forwardBtnProps={{
                            //here you can also pass className, or any other button element attributes
                            style: {
                                alignSelf: 'center',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                fontSize: '20px',
                                height: 30,
                                lineHeight: 1,
                                textAlign: 'center',
                                width: 30,
                            },
                            children: <div className={"absolute -top-7 right-0 active:opacity-50"}><Image
                                src={ArrowRight} alt={"arrow right"}/></div>,
                        }}
                        backwardBtnProps={{
                            //here you can also pass className, or any other button element attributes
                            style: {
                                alignSelf: 'center',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                fontSize: '20px',
                                height: 30,
                                lineHeight: 1,
                                textAlign: 'center',
                                width: 30,
                            },
                            children: <div className={"absolute -top-7 right-12 active:opacity-50"}><Image
                                src={ArrowLeft} alt={"arrow right"}/></div>,
                        }}
                        responsiveProps={[
                            {
                                itemsToShow: 3,
                                itemsToScroll: 1,
                                minWidth: 768,
                                // maxWidth: 1200,
                            },
                            {
                                itemsToShow: 3,
                                itemsToScroll: 1,
                                minWidth: 1200,
                                // maxWidth: 1200,
                            },
                        ]}
                        speed={400}
                        easing="linear"
                    >
                        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
                        <div style={{width: 400, height: 400, padding: '2rem 0', paddingRight: "3rem"}}>
                            <div className={"mb-10"}>
                                <Image src={Quote} alt={"quote symbol"}/>
                            </div>
                            <p className={"mb-10"}>
                                Thanks to Multi Stone Masters for your marvelous service! The entire team was so
                                professional taking the measures, making the appointments, working even faster than the
                                estimate from start to the end was a five stars and beyond service! Thanks again!!
                            </p>
                            <div className={"flex items-center gap-4"}>
                                <div>
                                    <Image src={Pro1} alt={"Avatar"}/>
                                </div>
                                <div>
                                    <p className={"text-18-20-500 mb-2"}>Killian Abraham</p>
                                    <p className={"uppercase text-gray-650 text-16-22-400"}>Client</p>
                                </div>
                            </div>
                        </div>
                        <div style={{width: 400, height: 400, padding: '2rem 0', paddingRight: "3rem"}}>
                            <div className={"mb-10"}>
                                <Image src={Quote} alt={"quote symbol"}/>
                            </div>
                            <p className={"mb-10"}>
                                These guys are pros, they did an excellent job on our counter installation. Precision
                                alignment and leveling, invisible seams, clean work area and they were done in just a
                                couple hours; they even sealed the stone for us. Definitely recommend for a perfect job.
                            </p>
                            <div className={"flex items-center gap-4"}>
                                <div>
                                    <Image src={Pro2} alt={"Avatar"}/>
                                </div>
                                <div>
                                    <p className={"text-18-20-500 mb-2"}>Leslie Madison</p>
                                    <p className={"uppercase text-gray-650 text-16-22-400"}>Client</p>
                                </div>
                            </div>
                        </div>
                        <div style={{width: 400, height: 400, padding: '2rem 0', paddingRight: "3rem"}}>
                            <div className={"mb-10"}>
                                <Image src={Quote} alt={"quote symbol"}/>
                            </div>
                            <p className={"mb-10"}>
                                MSM guy are the most honest and amazing fabricators to work with. Their quality
                                is top notch and service is impeccable. I highly recommend them for any of your
                                stone needs.
                            </p>
                            <div className={"flex items-center gap-4"}>
                                <div>
                                    <Image src={Pro3} alt={"Avatar"}/>
                                </div>
                                <div>
                                    <p className={"text-18-20-500 mb-2"}>Jorge Luis</p>
                                    <p className={"uppercase text-gray-650 text-16-22-400"}>Client</p>
                                </div>
                            </div>
                        </div>
                        {/* <div style={{width: 400, height: 400, padding: '2rem 0', paddingRight: "3rem"}}>
                            <div className={"mb-10"}>
                                <Image src={Quote} alt={"quote symbol"}/>
                            </div>
                            <p className={"mb-10"}>
                                Ribeiro Stones are the most honest and amazing fabricators to work with. Their quality
                                is top notch. They help my business every time I am designing a kitchen. They are loyal
                                to their customers and recommend them for all of your fabrication needs. Their staff are
                                wonderful.
                            </p>
                            <div className={"flex items-center gap-4"}>
                                <div>
                                    <Image src={Pro3} alt={"Avatar"}/>
                                </div>
                                <div>
                                    <p className={"text-18-20-500 mb-2"}>Jorge Luis</p>
                                    <p className={"uppercase text-gray-650 text-16-22-400"}>Client</p>
                                </div>
                            </div>
                        </div>
 */}





                    </ReactSimplyCarousel>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
