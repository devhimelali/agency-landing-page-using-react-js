import heroInfo from '../data/hero'
import FigmaLogo from "./icons/FigmaLogo";
import GithubLogo from "./icons/GithubLogo";
import Button from "./common/Button";
import SectionHeading from "./common/SectionHeading";
import SectionImage from "./common/SectionImage";

export default function Hero() {
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div
                    className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <SectionHeading heading={heroInfo.heading} description={heroInfo.subHeading}/>
                        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                            <Button icon={GithubLogo}>
                                View on GitHub
                            </Button>
                            <Button icon={FigmaLogo}>
                                Get Figma file
                            </Button>
                        </div>
                    </div>
                    <SectionImage image={heroInfo.image}/>
                </div>
            </section>
        </>
    )
}