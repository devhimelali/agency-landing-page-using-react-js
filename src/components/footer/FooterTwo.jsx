import FooterSocialLogo from "./FooterSocialLogo.jsx";

export default function FooterTwo({logo, appName, copyRightText, creditTextOne, creditTextTwo, socialLinks}) {
    return (
        <div className="text-center">
            <a href="#"
               className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                <img src={logo} className="h-6 mr-3 sm:h-9" alt={appName}/>
                {appName}
            </a>
            <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
                        © {copyRightText}
                <a href="#" target="_blank"
                   className="text-purple-600 hover:underline dark:text-purple-500">
                            {creditTextOne}
                        </a>
                        and
                        <a href="#"
                           className="text-purple-600 hover:underline dark:text-purple-500">
                            {creditTextTwo}
                        </a>.
                </span>
            <ul className="flex justify-center mt-5 space-x-5">
                {socialLinks.map((item) => (
                    <FooterSocialLogo name={item.name} key={item.id}/>
                ))}
            </ul>
        </div>
    )
}