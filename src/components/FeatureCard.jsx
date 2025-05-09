import FeatureCardIcon from "./FeatureCardIcon";

export default function FeatureCard({title, description, icon}) {
    return (
        <div>
            <FeatureCardIcon icon={icon}/>
            <h3 className="mb-2 text-2xl font-bold dark:text-white">
                {title}
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
                {description}
            </p>
        </div>
    )
}