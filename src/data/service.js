import FeatureImageOne from '../assets/features/feature-1.png'
import FeatureImageTwo from '../assets/features/feature-2.png'

const serviceInfo = [
    {
        id: 1,
        sectionTitle:{
            heading: "Work with tools you already use",
            description: "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
        },
        features: [
            {
                id: 1,
                title: "Continuous integration and deployment"
            },
            {
                id: 2,
                title: "Development workflow"
            },
            {
                id: 3,
                title: "Knowledge management"
            }
        ],
        shortDescription: "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.",
        image: FeatureImageOne,
        leftCLassName: "order-1",
        rightCLassName: "order-2",
    },
    {
        id: 2,
        sectionTitle:{
            heading: "We invest in the world’s potential",
            description: "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
        },
        features: [
            {
                id: 1,
                title: "Dynamic reports and dashboards"
            },
            {
                id: 2,
                title: "Templates for everyone"
            },
            {
                id: 3,
                title: "Development workflow"
            },
            {
                id: 4,
                title: "Limitless business automation"
            },
            {
                id: 5,
                title: "Knowledge management"
            }
        ],
        shortDescription: "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.",
        image: FeatureImageTwo,
        leftCLassName: "order-2",
        rightCLassName: "order-1",
    }
];

export default serviceInfo