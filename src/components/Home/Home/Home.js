import Footer from "../../Shared/Footer/Footer"
import Banner from "../Banner/Banner"
import OurServices from "../OurServices/OurServices"
import Testimonial from "../Testimonial/Testimonial";
import WhyUs from "../WhyUs/WhyUs"

const Home = () => {
    return (
        <main className="">
            <Banner />
            <OurServices />
            <WhyUs />
            <Testimonial />
            <Footer />
        </main>
    );
};

export default Home;