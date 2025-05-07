// import menus from '../../data/header.js'
import NavLink from "./NavLink";

export default function Navbar({ menus}) {
    return (
        <>
            <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
                 id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    {menus.map((item) => (<NavLink {...item} key={item.id} />))}
                </ul>
            </div>
        </>
    )
}