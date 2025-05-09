import FooterNavLink from "./FooterNavLink";

export default function FooterNavbar({heading, links}) {
    return (
        <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{heading}</h3>
            <ul className="text-gray-500 dark:text-gray-400">
                {links.map((link) => (
                    <FooterNavLink {...link} key={link.id}/>
                ))}
            </ul>
        </div>
    )
}