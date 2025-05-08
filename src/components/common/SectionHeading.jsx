export default function SectionHeading({heading, subHeading, description, className}) {
    return (
        <>
            {subHeading && (
                <p className="text-lg font-medium text-purple-600 dark:text-purple-500">
                    {subHeading}
                </p>
            )}
            <h1
                className={`mb-4 font-extrabold tracking-tight text-gray-900 dark:text-white ${className ? className : 'text-3xl'}`}
                dangerouslySetInnerHTML={{__html: heading}}
            />
            <p
                className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
                dangerouslySetInnerHTML={{__html: description}}
            />
        </>
    )
}