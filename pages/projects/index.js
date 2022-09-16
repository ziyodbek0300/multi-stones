import React from 'react';
import FourthSection from "./FourthSection";
import ContactsSection from "../_home/ContactsSection";

function Projects() {
    return (
        <div>
            <div className={"py-10 mb-10"}>
                <div>
                    <h1 className={"text-40-48-600 uppercase text-center mb-5"}>Our projects</h1>
                    <p className={"lg:w-3/5 sm:w-4/5 w-full text-center mx-auto mb-12"}>Take a look at some of the commercial and residential projects we helped with</p>
                </div>
                <FourthSection type={"first"}/>
            </div>
            <ContactsSection/>
        </div>
    );
}

export default Projects;
