import Server from "./icons/Server";
import Users from "./icons/Users";
import Map from "./icons/Map";
import Cart from "./icons/Cart";

const iconMap = {
    Server: <Server/>,
    Users: <Users/>,
    Map: <Map/>,
    Cart: <Cart/>,
};

export default function FeatureCardIcon({icon}) {
    return iconMap[icon] || null;
}