import {footerInfo, footerInfo2} from '../../data/footer.js'
import FooterNavbar from "./FooterNavbar";
import FooterTwo from "./FooterTwo";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-800">
            <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                    {footerInfo.map((menu) => (
                        <FooterNavbar {...menu} key={menu.id}/>
                    ))}
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <FooterTwo {...footerInfo2}/>
            </div>
        </footer>
    )
}