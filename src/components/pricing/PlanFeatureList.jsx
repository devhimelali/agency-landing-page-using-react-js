import Check from "../icons/Check";

export default function PlanFeatureList({item}) {
    return (
        <li className="flex items-center space-x-3">
            <Check/>
            <span dangerouslySetInnerHTML={{__html: item}}/>
        </li>
    )
}