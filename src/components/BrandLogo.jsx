import Airbnb from "./icons/Airbnb";
import Google from "./icons/Google";
import Microsoft from "./icons/Microsoft";
import Spotify from "./icons/Spotify";
import Mailchimp from "./icons/Mailchimp";
import Mashable from "./icons/Mashable";

const iconMap = {
    Airbnb: <Airbnb/>,
    Google: <Google/>,
    Microsoft: <Microsoft/>,
    Spotify: <Spotify/>,
    Mailchimp: <Mailchimp/>,
    Mashable: <Mashable/>,
};

export default function BrandLogo({name}) {
    return iconMap[name] || null;
}