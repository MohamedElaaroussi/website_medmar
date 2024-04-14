import React from 'react'
import p1 from './images/LOGO/123.png';
import p2 from './images/LOGO/CAFE.png';
import p3 from './images/LOGO/CITADIL.png';
import p4 from './images/LOGO/DLIM.png';
import p5 from './images/LOGO/F.png';
import p6 from './images/LOGO/FII3-01.png';
import p7 from './images/LOGO/Logo-OFPPT.png';
import p8 from './images/LOGO/MASSAR.png';
import p9 from './images/LOGO/My Patiss Logo.png';
import p10 from './images/LOGO//NDH.jpg';

const images = {
    Client1: p1,
    Client2: p2,
    Client3: p3,
    Client4: p4,
    Client5: p5,
    Client6: p6,
    Client7: p7,
    Client8: p8,
    Client9: p9,
    Client10: p10,
};
const MenuIcons = ({ children }) => {
    const imageSource = images[children];

    switch (children) {
        case "Client1":
            return (
                <img className="d-block  px-3 mb-3"
                    style={{ width: "10rem" }}
                    src={imageSource} alt="image" />
            )
            break;
        case "Client2":
            return (
                <img className="d-block  px-3 mb-3"
                    style={{ width: "10rem" }}
                    src={imageSource} alt="image" />
            )
            break;
        case "Client3":
            return (
                <img className="d-block  px-3 mb-3"
                    style={{ width: "10rem" }}
                    src={imageSource} alt="image" />
            )
            break;
        case "Client4":
            return (
                <img className="d-block  px-3 mb-3"
                    style={{ width: "10rem" }}
                    src={imageSource} alt="image" />
            )
            break;
        case "Client4":
            return (
                <img className="d-block  px-3 mb-3"
                    style={{ width: "10rem" }}
                    src={imageSource} alt="image" />
            )
            break;
        case "Client5":
            return (
                <img className="d-block  px-3 mb-3"
                    style={{ width: "10rem" }}
                    src={imageSource} alt="image" />
            )
            break;
        case "Client6":
            return (
                <img className="d-block  px-3 mb-3"
                    style={{ width: "10rem" }}
                    src={imageSource} alt="image" />
            )
            break;
        case "Client7":
            return (
                <img className="d-block  px-3 mb-3"
                    style={{ width: "10rem" }}
                    src={imageSource} alt="image" />
            )
            break;
            case "Client8":
            return (
                <img className="d-block  px-3 mb-3"
                    style={{ width: "10rem" }}
                    src={imageSource} alt="image" />
            )
            break;
            case "Client9":
            return (
                <img className="d-block  px-3 mb-3"
                    style={{ width: "10rem" }}
                    src={imageSource} alt="image" />
            )
            break;
            case "Client10":
            return (
                <img className="d-block  px-3 mb-3"
                    style={{ width: "10rem" }}
                    src={imageSource} alt="image" />
            )
            break;
    }
}

export default MenuIcons