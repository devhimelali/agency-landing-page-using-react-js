import Facebook from '../icons/Facebook'
import Twitter from '../icons/Twitter'
import Instagram from '../icons/Instagram'
import Github from '../icons/Github'
import Dribbble from '../icons/Dribbble'


const iconMap = {
    Facebook: <Facebook/>,
    Twitter: <Twitter/>,
    Instagram: <Instagram/>,
    Github: <Github/>,
    Dribbble: <Dribbble/>,
};

export default function FooterSocialLogo({name}) {
    return (
        <li>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                {iconMap[name] || null}
            </a>
        </li>
    )
}