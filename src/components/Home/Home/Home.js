import Footer from "../../Shared/Footer/Footer"
import Navigationbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner"
import OurServices from "../OurServices/OurServices"
import ServicePackage from "../ServicePackage/ServicePackage";
import Testimonial from "../Testimonial/Testimonial";
import WhyUs from "../WhyUs/WhyUs"

const Home = () => {
    return (
        <main className="">
            <Navigationbar />
            <Banner />
            <OurServices />
            <WhyUs />
            <ServicePackage />
            <Testimonial />
            <Footer />
        </main>
    );
};

export default Home;