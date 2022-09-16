import React, {useEffect} from 'react';
import Button from "../../../components/Button";
import axios from 'axios';
import {toast} from "react-toastify";
import {useRouter} from "next/router";
import 'react-toastify/dist/ReactToastify.css';
import AOS from "aos";
import "aos/dist/aos.css";

function ContactsSection() {
    const router = useRouter();

    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        

        const chatIds = [10435088226, 631087023, 1152682790];
        let text = `👨: ${e.target[0].value}\n📥: ${e.target[1].value}\n📞: ${e.target[2].value}`;
        axios.get(`https://api.telegram.org/bot5505978412:AAEi0r9cSKG7Q73y70YocVvVfc3Dhd_TfMs/sendMessage?chat_id=${chatIds[0]}&text=${encodeURIComponent(text)}`)
        axios.get(`https://api.telegram.org/bot5505978412:AAEi0r9cSKG7Q73y70YocVvVfc3Dhd_TfMs/sendMessage?chat_id=${chatIds[1]}&text=${encodeURIComponent(text)}`)
        axios.get(`https://api.telegram.org/bot5505978412:AAEi0r9cSKG7Q73y70YocVvVfc3Dhd_TfMs/sendMessage?chat_id=${chatIds[2]}&text=${encodeURIComponent(text)}`).then(res => {
            toast("Your information sent!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setTimeout(() => {
                toast("We will contact you very soon!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                router.push("/final-page");
            }, 1000)

        })


    }

    return (<div className={"py-8"}>
        <div className={"lg:flex container items-center"}>
            <div data-aos="fade-up" data-aos-duration={"600"} className={"w-full pb-20"}>
                <iframe
                    color={"yellow"}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9705614433083!2d-81.37772828459082!3d28.450303799055202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77cfcf51958df%3A0xa3980848743cd73e!2s8010%20Sunport%20Dr%20STE%20122%2C%20Orlando%2C%20FL%2032809%2C%20USA!5e0!3m2!1sen!2s!4v1662306167505!5m2!1sen!2s"
                    width="100%"
                    height="600"
                    style={{border: 0}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className={"w-full lg:pl-20 pb-20"}>
                <div id={"contact"}></div>
                <form onSubmit={handleSubmit}>
                    <h2 className={"text-40-48-600 uppercase mb-4"} data-aos="fade-up" data-aos-duration={"600"}>Contact us</h2>
                    <p data-aos="fade-up" data-aos-duration={"700"} className={"text-gray-650 mb-3"}>You can also reach out to us here online by filling out the
                        contact
                        form below provided. Rest assured that our friendly staff will be in touch with you in no
                        time.</p>
                    <div className={"flex flex-col lg:w-[80%] mb-10"}>
                        <div className={"mb-4 lg:w-72"}>
                            <label data-aos="fade-up" data-aos-duration={"600"} htmlFor="name" className={"mb-2 block"}>Name</label>
                            <input data-aos="fade-up" data-aos-duration={"600"} type="text" id={"name"} required className={"border border-gray-350 p-3 w-full"}
                                   placeholder={"Your Name"}/>
                        </div>
                        <div className={"mb-4 lg:w-72"}>
                            <label data-aos="fade-up" data-aos-duration={"600"} htmlFor="name" id={"email"} className={"mb-2 block"}>Email</label>
                            <input data-aos="fade-up" data-aos-duration={"600"} type="email" id={"email"} required className={"border border-gray-350 p-3 w-full"}
                                   placeholder={"someone@example.com"}/>
                        </div>
                        <div className={"mb-4 lg:w-72"}>
                            <label data-aos="fade-up" data-aos-duration={"600"} htmlFor="phone" className={"mb-2 block"}>Number</label>
                            <input data-aos="fade-up" data-aos-duration={"600"} type="phone" id={"phone"} required className={"border border-gray-350 p-3 w-full"}
                                   placeholder={"+1 555 555 5555"}/>
                        </div>
                        <div className={"mb-4 lg:w-72 flex items-start"}>
                            <input data-aos="fade-up" data-aos-duration={"600"} type="checkbox" id={"check"} className={"lg:mt-2 mt-1"} placeholder={"Your Name"}/>
                            <label data-aos="fade-up" data-aos-duration={"600"} htmlFor="check" className={"ml-2 p-0 m-0"}>I accept the Terms of Use & Privacy
                                Policy.</label>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration={"900"}>
                        <Button isF={true} classes={"bg-zinc-950 text-center text-white"} type={"submit"}
                                text={"Contact us"}/>
                    </div>
                </form>
            </div>
        </div>
    </div>);
}

export default ContactsSection;
