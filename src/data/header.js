import siteLogo from '../assets/logo.svg'

const headerInfo = {
    logo: {
        image: siteLogo,
        appName: 'Learn with Sumit'
    },
    menus: [
        {
            id: 1,
            name: 'Home',
            isActive: true
        },
        {
            id: 2,
            name: 'Company',
            isActive: false
        },
        {
            id: 3,
            name: 'Marketplace',
            isActive: false
        },
        {
            id: 4,
            name: 'Features',
            isActive: false
        },
        {
            id: 5,
            name: 'Team',
            isActive: false
        },
        {
            id: 6,
            name: 'Contact',
            isActive: false
        }
    ]
};

export default headerInfo;