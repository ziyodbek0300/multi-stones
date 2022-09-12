import React from 'react';
import {useRouter} from "next/router";
import Contacts from "../contacts";
import Image from "next/image";
import Marble from "../../public/stones/marble/01.png";
import Marble1 from "../../public/stones/marble/02.png";
import Marble2 from "../../public/stones/marble/03.png";

function ProductDetail() {
    const router = useRouter();
    const name = router.query.id;

    const stones = {
        "marble": {
            title: "Marble",
            text1: "Our inventory is always changing. Contact your location about specific colors and finishes.",
            size: "60x126",
            finishes: "polished",
            style: "solid",
            color: "black",
            installation: "included",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices morbi morbi praesent non gravida facilisis lacus a. Odio elit cursus quis sed pellentesque at nam aliquam viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices morbi morbi praesent non gravida facilisis lacus a. Odio elit cursus quis sed pellentesque at nam aliquam viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices morbi morbi praesent non gravida facilisis lacus a. Odio elit cursus quis sed pellentesque at nam aliquam viverra.",
            images: {
                big: "../../public/stones/marble/01.png",
                "01": "../../public/stones/marble/01.png",
                "02": "../../public/stones/marble/02.png",
                "03": "../../public/stones/marble/03.png",
            }
        }
    }

    return (<div>
        <div className={"my-12"}>
            <div className={"container"}>
                <div className={"flex lg:flex-row flex-col gap-10 mb-7"}>
                    <div className={"w-full"}>
                        <Image src={Marble} layout={"responsive"} alt={"Marble"}/>
                    </div>
                    <div className={"w-full"}>
                        <h3 className={"mb-4 text-24-30-600"}>{stones[name].title}</h3>
                        <p className={"text-16-22-400 text-gray-650 mb-2"}>{stones[name].text1}</p>
                        <div className={"flex items-end mb-4"}>
                            <p className={"text-16-20-400"}>Size</p>
                            <div className={"border-b border-dotted border-gray-650 w-full"}></div>
                            <p className={"text-16-20-600"}>{stones[name].size}</p>
                        </div>
                        <div className={"flex items-end mb-4"}>
                            <p className={"text-16-20-400"}>Finishes</p>
                            <div className={"border-b border-dotted border-gray-650 w-full"}></div>
                            <p className={"text-16-20-600 text-right"}>{stones[name].finishes}</p>
                        </div>
                        <div className={"flex items-end mb-4 capitalize"}>
                            <p className={"text-16-20-400"}>Style</p>
                            <div className={"border-b border-dotted border-gray-650 w-full"}></div>
                            <p className={"text-16-20-600"}>{stones[name].style}</p>
                        </div>
                        <div className={"flex items-end mb-4 capitalize"}>
                            <p className={"text-16-20-400"}>Color</p>
                            <div className={"border-b border-dotted border-gray-650 w-full"}></div>
                            <p className={"text-16-20-600"}>{stones[name].color}</p>
                        </div>
                        <div className={"flex items-end mb-5 capitalize"}>
                            <p className={"text-16-20-400"}>Installation</p>
                            <div className={"border-b border-dotted border-gray-650 w-full"}></div>
                            <p className={"text-16-20-600 text-green-450"}>{stones[name].installation}</p>
                        </div>
                        <div className={"flex items-end gap-3 capitalize"}>
                            <div>
                                <Image src={Marble} alt={"image 0"}/>
                            </div>
                            <div>
                                <Image src={Marble1} alt={"image 1"}/>
                            </div>
                            <div>
                                <Image src={Marble2} alt={"image 2"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"mb-24"}>
                    <p className={"text-24-30-600 mb-4"}>Description</p>
                    <p className={"text-16-20-400 text-gray-650"}>{stones[name].description}</p>
                </div>
            </div>
        </div>
        <Contacts/>
    </div>)
}

export default ProductDetail;
