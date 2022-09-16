import React from "react";
import {useRouter} from "next/router";
import Contacts from "../contacts";
import Image from "next/image";
import Marble from "../../public/stones/marble/01.png";
import Marble1 from "../../public/stones/marble/02.png";
import Marble2 from "../../public/stones/marble/03.png";
import Quartz from "../../public/stones/quartz/01.png";
import Quartz1 from "../../public/stones/quartz/02.png";
import Quartz2 from "../../public/stones/quartz/03.png";
import Onyx from "../../public/stones/onyx/01.png";
import Onyx1 from "../../public/stones/onyx/02.png";
import Onyx2 from "../../public/stones/onyx/03.png";

function ProductDetail() {
    const router = useRouter();
    const name = router.query.id;

    const stones = {
        marble: {
            title: "Marble",
            text1:
                "Our inventory is always changing. Contact your location about specific colors and finishes.",
            size: "60x126",
            finishes: "polished",
            style: "solid",
            color: "black",
            installation: "included",
            description:
                "Premium Grade Nero Marquina Venato Black Marble Polished used for Wall and Floor and Countertops. This is perfect for any interior/exterior projects such as kitchen backsplash, bathroom flooring, shower surround, countertop, dining room, hall, lobby, corridor, balcony, terrace, spa, pool, etc. Our large selection of coordinating products is available and includes hexagon, herringbone, basketweave mosaics, subway tiles, moldings, borders, and more.",
            images: {
                big: Marble,
                "01": Marble,
                "02": Marble1,
                "03": Marble2,
            },
        },
        granite: {
            title: "Granite",
            text1:
                "Our inventory is always changing. Contact your location about specific colors and finishes.",
            size: "60x126",
            finishes: "polished",
            style: "solid",
            color: "black",
            installation: "included",
            description:
                "This granite is a beautiful material that is incredibly versatile, pairing with both modern and traditional designs, it is perfect for creating a feature within your interior design. It will lift your home to a new design level.",
            images: {
                big: "../../public/stones/Granite/01.png",
                "01": "../../public/stones/Granite/01.png",
                "02": "../../public/stones/Granite/02.png",
                "03": "../../public/stones/Granite/03.png",
            },
        },
        porcelain: {
            title: "Porcelain",
            text1:
                "Our inventory is always changing. Contact your location about specific colors and finishes.",
            size: "60x126",
            finishes: "polished",
            style: "solid",
            color: "blue",
            installation: "included",
            description:
                "This granite is a beautiful material that is incredibly versatile, pairing with both modern and traditional designs, it is perfect for creating a feature within your interior design. It will lift your home to a new design level.",
            images: {
                big: "../../public/stones/porcelain/01.png",
                "01": "../../public/stones/porcelain/01.png",
                "02": "../../public/stones/porcelain/02.png",
                "03": "../../public/stones/porcelain/03.png",
            },
        },
        onyx: {
            title: "Onyx",
            text1:
                "Our inventory is always changing. Contact your location about specific colors and finishes.",
            size: "60x126",
            finishes: "polished",
            style: "solid",
            color: "white",
            installation: "included",
            description:
                "This granite is a beautiful material that is incredibly versatile, pairing with both modern and traditional designs, it is perfect for creating a feature within your interior design. It will lift your home to a new design level.",
            images: {
                big: Onyx,
                "01": Onyx,
                "02": Onyx1,
                "03": Onyx2,
            },
        },
        grey_quartz: {
            title: "Grey Quartz",
            text1:
                "Our inventory is always changing. Contact your location about specific colors and finishes.",
            size: "60x126",
            finishes: "polished",
            style: "solid",
            color: "grey",
            installation: "included",
            description:
                "This granite is a beautiful material that is incredibly versatile, pairing with both modern and traditional designs, it is perfect for creating a feature within your interior design. It will lift your home to a new design level.",
            images: {
                big: "../../public/stones/quartz/01.png",
                "01": "../../public/stones/quartz/01.png",
                "02": "../../public/stones/quartz/02.png",
                "03": "../../public/stones/quartz/03.png",
            },
        },
        quartz: {
            title: "Quartz",
            text1:
                "Our inventory is always changing. Contact your location about specific colors and finishes.",
            size: "60x126",
            finishes: "polished",
            style: "solid",
            color: "grey",
            installation: "included",
            description:
                "This granite is a beautiful material that is incredibly versatile, pairing with both modern and traditional designs, it is perfect for creating a feature within your interior design. It will lift your home to a new design level.",
            images: {
                big: Quartz,
                "01": Quartz,
                "02": Quartz1,
                "03": Quartz2,
            },
        },
    };

    return (
        <div>
            <div className={"my-12"}>
                <div className={"container"}>
                    <div className={"flex lg:flex-row flex-col gap-10 mb-7"}>
                        <div className={"w-full"}>
                            <Image src={stones[name]?.images.big} layout={"responsive"} alt={"Marble"}/>
                        </div>
                        <div className={"w-full"}>
                            <h3 className={"mb-4 text-24-30-600"}>{stones[name]?.title}</h3>
                            <p className={"text-16-22-400 text-gray-650 mb-2"}>
                                {stones[name]?.text1}
                            </p>
                            <div className={"flex items-end mb-4"}>
                                <p className={"text-16-20-400"}>Size</p>
                                <div
                                    className={"border-b border-dotted border-gray-650 w-full"}
                                ></div>
                                <p className={"text-16-20-600"}>{stones[name]?.size}</p>
                            </div>
                            <div className={"flex items-end mb-4"}>
                                <p className={"text-16-20-400"}>Finishes</p>
                                <div
                                    className={"border-b border-dotted border-gray-650 w-full"}
                                ></div>
                                <p className={"text-16-20-600 text-right"}>
                                    {stones[name]?.finishes}
                                </p>
                            </div>
                            <div className={"flex items-end mb-4 capitalize"}>
                                <p className={"text-16-20-400"}>Style</p>
                                <div
                                    className={"border-b border-dotted border-gray-650 w-full"}
                                ></div>
                                <p className={"text-16-20-600"}>{stones[name]?.style}</p>
                            </div>
                            <div className={"flex items-end mb-4 capitalize"}>
                                <p className={"text-16-20-400"}>Color</p>
                                <div
                                    className={"border-b border-dotted border-gray-650 w-full"}
                                ></div>
                                <p className={"text-16-20-600"}>{stones[name]?.color}</p>
                            </div>
                            <div className={"flex items-end mb-5 capitalize"}>
                                <p className={"text-16-20-400"}>Installation</p>
                                <div
                                    className={"border-b border-dotted border-gray-650 w-full"}
                                ></div>
                                <p className={"text-16-20-600 text-green-450"}>
                                    {stones[name]?.installation}
                                </p>
                            </div>
                            <div className={"flex items-end gap-3 capitalize"}>
                                <div>
                                    <Image src={stones[name]?.images["01"]} alt={"image 0"}/>
                                </div>
                                <div>
                                    <Image src={stones[name]?.images["02"]} alt={"image 1"}/>
                                </div>
                                <div>
                                    <Image src={stones[name]?.images["03"]} alt={"image 2"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"mb-24"}>
                        <p className={"text-24-30-600 mb-4"}>Description</p>
                        <p className={"text-16-20-400 text-gray-650"}>
                            {stones[name]?.description}
                        </p>
                    </div>
                </div>
            </div>
            <Contacts/>
        </div>
    );
}

export default ProductDetail;
