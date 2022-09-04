import React from 'react';
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import FourthSection from "./FourthSection/FourthSection";
import FifthSection from "./FifthSection/FifthSection";
import SixthSection from "./SixthSection/SixthSection";
import ContactsSection from "./ContactsSection";

function HomePage() {
    return (<div>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
        <FifthSection/>
        <SixthSection/>
        <ContactsSection/>
    </div>);
}

export default HomePage;
