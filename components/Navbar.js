import Image from "next/image";
import Logo from '../public/logo.svg';
import Search from '../public/search.svg';

function Navbar() {
    return (
        <div className={"p-[1.6rem]"}>
            <div className={"flex justify-between items-center mx-auto container"}>
                <div className={"w-1/5"}>
                    <Image src={Logo} alt={'Logo'} />
                </div>
                <div className={"w-3/5"}>
                    <ul className={"p-0 m-0 flex justify-center"}>
                        <li className={'mx-5'}>Home</li>
                        <li className={'mx-5'}>Products</li>
                        <li className={'mx-5'}>About us</li>
                        <li className={'mx-5'}>Projects</li>
                        <li className={'mx-5'}>Contacts</li>
                    </ul>
                </div>
                <div className={"w-1/5 text-right"}>
                    <Image src={Search} alt={'Logo'} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
