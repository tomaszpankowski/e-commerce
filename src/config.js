import AboutPage from "./views/about";
import CartPage from "./views/cart";
import ComingsoonPage from "./views/comingsoon";
import ContactPage from "./views/contact";
import ErrorPage from "./views/404";
import FurniturePage from "./views/furniture";
import HomePage from "./views/home";
import PrivacyPage from "./views/privacy";

const pageConfig = {
    about:{
        pageClass:"minh-footer-adj"
    },
    cart:{
        pageClass:"minh-footer-adj"
    },
    comingsoon:{
        pageClass:"comingsoon-s1 d-flex align-items-center minh-footer-adj",
        title:"Coming soon!",
        text:"We are not ready yet, but starting soon, please come back later."
    },
    contact:{
        pageClass:"minh-footer-adj"
    },
    error:{
        pageClass:"error-s1 d-flex align-items-center minh-footer-adj py-5",
        title:"Error",
        text:"Page not found.",
        returnNav:{
            link:"/",
            title:"back to Home"
        }
    },
    furniture:{
        pageClass:"minh-footer-adj"
    },
    home:{
        pageClass:"minh-footer-adj"
    },
    privacy:{
        pageClass:"privacy-s1 d-flex align-items-center minh-footer-adj py-5",
        returnNav:{
            link:"/",
            title:"back to Home"
        }
    }
};

const paths=[
    {
        menuItem: true,
        name: "Home",
        path: "/",
        element: <HomePage config={pageConfig.home}/>
    },
    {
        menuItem: true,
        name: "Furniture",
        path: "/furniture",
        element: <FurniturePage config={pageConfig.furniture}/>
    },
    {
        menuItem: true,
        name: "About",
        path: "/about",
        element: <AboutPage config={pageConfig.about}/>
    },
    {
        menuItem: true,
        name: "Contact",
        path: "/Contact",
        element: <ContactPage config={pageConfig.contact}/>
    },
    {
        menuItem: true,
        name: <span className="fa fa-shopping-cart"></span>,
        path: "/cart",
        element: <CartPage config={pageConfig.cart}/>
    },
    {
        menuItem: false,
        name: "Comingsoon",
        path: "/comingsoon",
        element: <ComingsoonPage config={pageConfig.comingsoon}/>
    },
    {
        menuItem: false,
        name: "Privacy",
        path: "/privacy",
        element: <PrivacyPage config={pageConfig.privacy}/>
    },
    {
        menuItem: false,
        name: "Error",
        path: "*",
        element: <ErrorPage config={pageConfig.error}/>
    }
];

export {
    paths
};