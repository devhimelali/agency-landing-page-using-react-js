import SectionHeading from "./common/SectionHeading.jsx";
import FeatureList from "./FeatureList.jsx";

export default function Service({sectionTitle, features, shortDescription, image, leftCLassName, rightCLassName}) {
    return (
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">

            <div className={`text-gray-500 sm:text-lg dark:text-gray-400 ${leftCLassName}`}>
                <SectionHeading {...sectionTitle}/>

                <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                    {features.map((item) => (
                        <FeatureList key={item.id} item={item}/>
                    ))}
                </ul>

                <p className="mb-8 font-light lg:text-xl">
                    {shortDescription}
                </p>
            </div>
            <img className={`hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex ${rightCLassName}`} src={image}
                 alt="dashboard feature image"/>
        </div>
    )
}