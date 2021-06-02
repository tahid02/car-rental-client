import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import Zoom from 'react-reveal/Zoom';
import HeadShake from 'react-reveal/HeadShake';
import Fade from 'react-reveal/Fade';
import './servicePackage.css'
import serviceImage from '../../../images/By my car-cuate.svg'
import ServiceSVG from "./ServiceSVG";
import { servicePackages } from './ServicePackagesData'
import { servicePackageIcons } from './ServicePackagesData'





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
                            className='icon centerIcon mx-3 mb-1'
                            style={styling.iconColor(icon[2], icon[3])}
                            onClick={() => setPackType(icon[1])}>
                                <span className="carIcon">
                                    <FontAwesomeIcon icon={icon[0]} />
                                </span>
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