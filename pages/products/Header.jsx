import React from 'react';
import Button from "../../components/Button";
import axios from "axios";
import {toast} from "react-toastify";
import {useRouter} from "next/router";

function Header() {
    const router = useRouter();

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
        try {
            generateETag('event', 'conversion', {'send_to': 'AW-10982841403/eHEdCM7JsuEDELu4g_Uo'});
        } catch (e) {
            console.log("phone tracking", e)
        }
    }

    return (<div className={"flex py-24 items-center"}>
        <div className={"container"}>
            <div className={"lg:flex items-center justify-between"}>
                <div className={"lg:w-full w-[70%] lg:m-0 m-auto lg:text-left text-center"}>
                    <h1 className={"text-50-60-600 text-white mb-5"}>Our products</h1>
                    <p className={"text-16-22-400 mb-10 text-white text-16-22-400"}>
                        Our years of experience combined with quality partnerships we established with suppliers will
                        ensure you get satisfied with the product and service you receive.
                    </p>
                    <Button text={"Select color"} classes={"bg-white text-zinc-950"} isF={false}
                            link={"products/#products"}
                            type={"button"}/>
                </div>
                <div className={"lg:w-full py-10 flex lg:justify-end justify-center"}>
                    <div className={"w-[80%] lg:pl-14 p-14 py-10 bg-white"}>
                        <div id={"contact"}></div>
                        <form onSubmit={handleSubmit}>
                            <h2 className={"text-24-30-600 capitalize mb-4"} data-aos="fade-up"
                                data-aos-duration={"600"}>Get a free quote</h2>
                            <p data-aos="fade-up" data-aos-duration={"700"} className={"text-gray-650 mb-5"}>
                                Please complete the information below then we can contact you for your Free Estimate
                            </p>
                            <div className={"flex flex-col lg:w-[80%] mb-5"}>
                                <div className={"mb-4 lg:w-72"}>
                                    <label htmlFor="name"
                                           className={"mb-2 block"}>Name</label>
                                    <input type="text" id={"name"} required
                                           className={"border border-gray-350 p-3 w-full"}
                                           placeholder={"Your Name"}/>
                                </div>
                                <div className={"mb-4 lg:w-72"}>
                                    <label htmlFor="name" id={"email"}
                                           className={"mb-2 block"}>Email</label>
                                    <input pattern={"^([a-z0-9_\\.-]+)@([\\da-z\\.-]+)\\.([a-z\\.]{2,6})$"}
                                           type="email" id={"email"}
                                           required className={"border border-gray-350 p-3 w-full"}
                                           placeholder={"someone@example.com"}/>
                                </div>
                                <div className={"mb-4 lg:w-72"}>
                                    <label htmlFor="phone"
                                           className={"mb-2 block"}>Number</label>
                                    <input pattern={"^(?:\\d{10,12}|\\+\\d{10,12}|\\w+@\\w+\\.\\w{2,4})$"}
                                           type="phone" id={"phone"}
                                           required className={"border border-gray-350 p-3 w-full"}
                                           placeholder={"+1 555 555 5555"}/>
                                </div>
                                <div className={"mb-4 lg:w-72 flex items-start"}>
                                    <input type="checkbox" id={"check"}
                                           className={"lg:mt-2 mt-1"} placeholder={"Your Name"}/>
                                    <label htmlFor="check"
                                           className={"ml-2 p-0 m-0"}>I accept the Terms of Use & Privacy
                                        Policy.</label>
                                </div>
                            </div>
                            <div>
                                <Button isF={true} classes={"bg-zinc-950 text-center text-white"} type={"submit"}
                                        text={"Contact us"}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Header;
