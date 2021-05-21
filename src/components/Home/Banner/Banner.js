
import bannerImage from '../../../images/bannerImage.jpg'
// import './Banner.css'
const Banner = () => {
    return (
        // <section className='banner'>

        // testing bare and mmirror
        //testing mirror
            <section  className=""> 
            {/* <section  className="container-fluid">  */}
            <div className="row container-fluid">
                <div className="col-md-5 col-sm-12 col-12">
                    <h1>NEED A <span className='color'>CAR? </span>  </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat expedita cum ut animi accusamus recusandae voluptatem et nesciunt temporibus omnis.</p>
                    <button className="btn bgColor btn-warning "> Pick Car  </button>
                </div>
                <div className="col-md-7 col-sm-12 col-12">
                    <img src={bannerImage} alt="" className='w-100' />
                </div>
            </div>
             <div className="svg">
                 <svg  viewBox="0 0 1440 320">
                <path fill="#fb9e00" fill-opacity="1" d="M0,256L48,224C96,192,192,128,288,122.7C384,117,480,171,576,170.7C672,171,768,117,864,112C960,107,1056,149,1152,160C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
             </div>
            </section>
           
           
           
            // </section>
            

        
    );
};

export default Banner;