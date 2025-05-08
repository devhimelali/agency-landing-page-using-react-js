export default function SectionImage({image, altText="hero image"}) {
    return(
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={image} alt={altText}/>
        </div>
    )
}