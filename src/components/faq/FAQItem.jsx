import UpArrow from "../icons/UpArrow";
import DownArrow from "../icons/DownArrow";

export default function FAQItem({question, answer, isOpen}) {
    return (
        <>
            <h3 id="accordion-flush-heading-1">
                <button type="button"
                        className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                        data-accordion-target="#accordion-flush-body-1" aria-expanded="true"
                        aria-controls="accordion-flush-body-1">
                    <span>
                        {question}
                    </span>
                    {isOpen ? <UpArrow/> : <DownArrow/>}
                </button>
            </h3>
            <div id="accordion-flush-body-1" className={`${isOpen ? '' : 'hidden'}`}
                 aria-labelledby="accordion-flush-heading-1">
                <div className="py-5 border-b border-gray-200 dark:border-gray-700"
                     dangerouslySetInnerHTML={{__html: answer}}/>
            </div>
        </>
    )
}