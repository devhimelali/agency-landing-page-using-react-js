export default function SectionHeading({heading, subHeading, description, className = ""}) {
    return (
        <>
            {subHeading && (
                <p className="text-lg font-medium text-purple-600 dark:text-purple-500">
                    {subHeading}
                </p>
            )}
            <h1
                className={`max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white ${className}`}
                dangerouslySetInnerHTML={{ __html: heading }}
            />
            <p
                className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
                dangerouslySetInnerHTML={{ __html: description }}
            />
        </>
    )
}