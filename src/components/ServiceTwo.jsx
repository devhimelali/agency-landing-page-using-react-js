import serviceTwoInfo from "../data/service2"
import SectionHeading from "./common/SectionHeading";
import Button from "./common/Button";
import LeftArrow from "./icons/LeftArrow";
import FeatureCard from "./FeatureCard";

export default function ServiceTwo() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div
                className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
                <div className="col-span-2 mb-8">
                    <SectionHeading subHeading={serviceTwoInfo.subHeading} heading={serviceTwoInfo.heading}
                                    description={serviceTwoInfo.description}/>
                    <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
                        {serviceTwoInfo.buttons.map((item) => (
                            <div key={item.id}>
                                <Button icon={LeftArrow} iconPosition={item.iconPosition} className={item.className}>
                                    {item.text}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                    {serviceTwoInfo.features.map((item) => (
                        <FeatureCard {...item} key={item.id}/>
                    ))}
                </div>
            </div>
        </section>
    )
}