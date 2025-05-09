export default function FooterNavLink({text, href}) {
    return (
        <li className="mb-4">
            <a href={href} className=" hover:underline">{text}</a>
        </li>
    )
}