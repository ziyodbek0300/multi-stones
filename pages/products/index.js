import React from 'react';
import Image from "next/image";
import Logo from '../../public/logo dark.svg';
import LogoWhite from '../../public/logo-white.svg';
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect, useState} from "react";
import Menu from "../../public/menu.svg";
import {useRouter} from "next/router";
import FirstSection from "./FirstSection";
import Header from "./Header";
import NavbarLight from "../../components/NavbarLight";
import SecondSection from "./SecondSection";

function Products() {

    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, []);

    return (<>
        <div className={"some-bg"}>
            <NavbarLight/>
            <Header/>
        </div>
        <SecondSection/>
        <FirstSection/>
    </>);
}

export default Products;
