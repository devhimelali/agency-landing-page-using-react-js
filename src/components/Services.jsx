import serviceInfo from '../data/service'
import Service from "./Service";

export default function Services() {
    return (
        <section className="bg-gray-50 dark:bg-gray-800">
            <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                {serviceInfo.map((item) => (<Service {...item} key={item.id}/>))}
            </div>
        </section>
    )
}