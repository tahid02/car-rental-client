import { faCar, faCarAlt, faCarSide, faShuttleVan, faTaxi, faTruckPickup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import Zoom from 'react-reveal/Zoom';
import HeadShake from 'react-reveal/HeadShake';
import Fade from 'react-reveal/Fade';
import './servicePackage.css'
import serviceImage from '../../../images/By my car-cuate.svg'
import ServiceSVG from "./ServiceSVG";

const servicePackageIcons = [
    [faCar, 'Sedan', '#FFFF00', 'rgba(76,175,80,.3)'],
    [faCarAlt, 'MiniVan', '#FF00FF', 'rgba(255, 0, 255,.3)'],
    [faCarSide, 'HatchBack', '#00FFFF', 'rgba(255, 0, 255,.3)'],
    [faShuttleVan, 'StationWagon', '#800000', 'rgba(255, 0, 255,.3)'],
    [faTruckPickup, 'PickUp', '#00FF00', 'rgba(255, 0, 255,.3)'],
    [faTaxi, 'CrossOver', '#00008b', 'rgba(255, 0, 255,.3)']
]


const servicePackages = [
    {
        packageType: 'Sedan',
        packagePrice: 280,
        image: "https://i.ibb.co/VgycG28/By-my-car-cuate-2.png",
        color: '#FFFF00',//yellow
        packageDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et qui, mollitia magnam possimus nam esse vero consectetur quis corporis libero dolor provident, eaque architecto sit obcaecati ratione aperiam voluptas! Eveniet!'

    },
    {
        packageType: 'MiniVan',
        packagePrice: 320,
        color: '#FF00FF',//magenta
        image: "https://i.ibb.co/j5yshdt/By-my-car-cuate-1.png",
        packageDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et qui, mollitia magnam possimus nam esse vero consectetur quis corporis libero dolor provident, eaque architecto sit obcaecati ratione aperiam voluptas! Eveniet!'

    },
    {
        packageType: 'HatchBack',
        packagePrice: 410,
        color: '#00FFFF',//cyan
        image: "https://i.ibb.co/g7p7qhz/By-my-car-cuate-2.png",
        packageDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et qui, mollitia magnam possimus nam esse vero consectetur quis corporis libero dolor provident, eaque architecto sit obcaecati ratione aperiam voluptas! Eveniet!'

    },
    {
        packageType: 'StationWagon',
        packagePrice: 380,
        image: "https://i.ibb.co/8Ktz2BM/By-my-car-cuate-3.png",
        color: '#800000',//maroon
        packageDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et qui, mollitia magnam possimus nam esse vero consectetur quis corporis libero dolor provident, eaque architecto sit obcaecati ratione aperiam voluptas! Eveniet!'

    },
    {
        packageType: 'PickUp',
        packagePrice: 195,
        image: "https://i.ibb.co/wLwJMYT/By-my-car-cuate-4.png",
        color: '#00FF00',//green
        packageDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et qui, mollitia magnam possimus nam esse vero consectetur quis corporis libero dolor provident, eaque architecto sit obcaecati ratione aperiam voluptas! Eveniet!'

    },
    {
        packageType: 'CrossOver',
        packagePrice: 330,
        image: "https://i.ibb.co/6gf9V7M/By-my-car-cuate-red.png",
        color: '#00008b',//darkBlue
        packageDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et qui, mollitia magnam possimus nam esse vero consectetur quis corporis libero dolor provident, eaque architecto sit obcaecati ratione aperiam voluptas! Eveniet!'

    }
]



const ServicePackage = () => {

    const [packType, setPackType] = useState('Sedan');

    const filtPackage = servicePackages.filter(pack => pack.packageType === packType)
    console.log('package type', filtPackage)
    console.log('type', packType);

    const styling = {
        iconColor: (hexCode, borderColor) => (
            {

                border: `.4rem solid ${borderColor}`,
                '&:focus': {
                    backgroundColor: hexCode
                }
            }
        )

    }

    return (
        <div className=''>

            <div className="text-center">
                <p className=''>best pricing plan</p>              
                <h1>Services Packages </h1>
            </div>

            <div className="package_icons d-flex flex-wrap justify-content-evenly">
                {
                    servicePackageIcons.map(icon => {
                        return <button
                            className='icon mx-3 '
                            style={styling.iconColor(icon[2], icon[3])}
                            onClick={() => setPackType(icon[1])}>

                            <FontAwesomeIcon icon={icon[0]} />

                        </button>
                    })
                }

            </div>

            <Fade spy={filtPackage}>
                <div className=" mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4 col-sm-12 col-12 p-0 centerItem">


                            <div className="container-fluid card-body py-0 ps-5 packageText">
                                $<h1 className='d-inline'>{filtPackage[0].packagePrice} </h1>
                                <h4 className="card-title">{packType}</h4>
                                <p className="card-text">{filtPackage[0].packageDescription} </p>
                            </div>

                        </div>
                        <div className="col-md-8 col-sm-12 col-12 centerItem pe-5 packageText">
                            <span className="big_circle">
                                <span className="child_circle" style={{ backgroundColor: filtPackage[0].color }}></span>
                            </span>
                            <ServiceSVG color={filtPackage[0].color} />

                        </div>

                    </div>

                </div>
            </Fade>
        </div>
    );
};

export default ServicePackage;