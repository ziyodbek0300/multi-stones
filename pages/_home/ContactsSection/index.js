import React from 'react';
import Button from "../../../components/Button";

function ContactsSection() {
    return (<div className={"py-8"}>
        <div className={"flex container items-center"}>
            <div className={"w-full pb-20"}>
                <iframe
                    color={"yellow"}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9705614433083!2d-81.37772828459082!3d28.450303799055202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77cfcf51958df%3A0xa3980848743cd73e!2s8010%20Sunport%20Dr%20STE%20122%2C%20Orlando%2C%20FL%2032809%2C%20USA!5e0!3m2!1sen!2s!4v1662306167505!5m2!1sen!2s"
                    width="100%"
                    height="550"
                    style={{border: 0}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className={"w-full pl-20 pb-20"}>
                <h2 className={"text-40-48-600 uppercase mb-4"}>Contacts</h2>
                <p className={"text-gray-650 mb-3"}>You can also reach out to us here online by filling out the contact
                    form below provided. Rest assured that our friendly staff will be in touch with you in no time.</p>
                <div className={"flex flex-col lg:w-[80%] mb-10"}>
                    <div className={"mb-4 w-72"}>
                        <label htmlFor="name" className={"mb-2 block"}>Name</label>
                        <input type="text" id={"name"} required className={"border border-gray-350 p-3 w-full"}
                               placeholder={"Your Name"}/>
                    </div>
                    <div className={"mb-4 w-72"}>
                        <label htmlFor="name" id={"email"} className={"mb-2 block"}>Email</label>
                        <input type="email" id={"email"} required className={"border border-gray-350 p-3 w-full"}
                               placeholder={"someone@example.com"}/>
                    </div>
                    <div className={"mb-4 w-72"}>
                        <label htmlFor="phone" className={"mb-2 block"}>Number</label>
                        <input type="phone" id={"phone"} required className={"border border-gray-350 p-3 w-full"}
                               placeholder={"+1 555 555 5555"}/>
                    </div>
                    <div className={"mb-4 w-72 flex items-start"}>
                        <input type="checkbox" id={"check"} className={"mt-2"} placeholder={"Your Name"}/>
                        <label htmlFor="check" className={"ml-2 p-0 m-0"}>I accept the Terms of Use & Privacy Policy.</label>
                    </div>
                </div>
                <Button isF={true} classes={"bg-zinc-950 text-center text-white"} text={"Contact us"}/>
            </div>
        </div>
    </div>);
}

export default ContactsSection;
