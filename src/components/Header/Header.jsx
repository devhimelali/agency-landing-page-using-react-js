import Logo from "./Logo";
import Navbar from "./Navbar";
import Button from "../common/Button";
import headerInfo from '../../data/header'

export default function Header() {
    return (
        <>
            <header className="fixed w-full">
                <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
                    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                        <a href="#" className="flex items-center">
                            <Logo {...headerInfo.logo}/>
                        </a>
                        <div className="flex items-center lg:order-2">
                            <Button className={'text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800'}>
                                Download
                            </Button>
                        </div>
                        <Navbar menus={headerInfo.menus}/>
                    </div>
                </nav>
            </header>
        </>
    )
}