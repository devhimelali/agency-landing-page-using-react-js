import CheckCircle from "./icons/CheckCircle";

export default function FeatureList({item}) {
    return (
        <li className="flex space-x-3">
            <CheckCircle/>
            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                {item.title}
            </span>
        </li>
    )
}