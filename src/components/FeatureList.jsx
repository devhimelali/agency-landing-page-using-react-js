import Check from "./icons/Check";

export default function FeatureList({item}) {
    return (
        <li className="flex space-x-3">
            <Check/>
            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                {item.title}
            </span>
        </li>
    )
}