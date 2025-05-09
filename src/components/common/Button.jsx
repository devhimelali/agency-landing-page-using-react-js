export default function Button({children, href = "#", target = "_blank", icon: Icon, iconPosition = "left", className = "", ...props}) {
    return (
        <>
            <a
                href={href}
                target={target}
                className={`inline-flex items-center ${!Icon ? 'justify-center' : ''} gap-2 font-medium text-sm ${className ? className : 'px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg text-gray-900 border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'}`}
                {...props}
            >
                {Icon && iconPosition === "left" && <Icon/>}
                <span>{children}</span>
                {Icon && iconPosition === "right" && <Icon/>}
            </a>
        </>
    )
}