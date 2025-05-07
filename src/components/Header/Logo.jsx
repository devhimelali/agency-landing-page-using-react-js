export default function Logo({image, appName}) {
    return (
        <>
            <img src={image} className="h-6 mr-3 sm:h-9"
                 alt="Landwind Logo"/>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{appName}</span>
        </>
    )
}