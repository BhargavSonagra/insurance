
import '../index.css'
import HeroSlider from './HeroSlider'
import OurInsurance from './OurInsurance'
import LatestNews from './LatestNews'
import Partners from './Partners'
import Map from './Map'
import Data from './Pages'

window.scrollTo({ top: 0, behavior: 'smooth' });

const Home = () => {

    return (
        <div>
            <HeroSlider />

            <div className="text-center p-3 shadow-lg p-3 mb-5 rounded">
                <h1 className="section-title pt-5">Welcome to <strong className='text-primary '> EverSafe Insurance</strong></h1>
                <small className="section-subtitle px-5 ">Loking for reliable insurance? You've come to the right place.At , we believe in securing your future. Our range of insurance products are designed to offer protection and peace of mind for you and your loved ones.We're glad you found us! Here, we make insurance simple, affordable, and tailored to your life.Protect what matters most with confidence. Our insurance solutions are crafted to meet your unique needs, ensuring you have the right coverage when it counts </small>
              
            </div>
            <OurInsurance />
            {/* <LatestNews /> */}
            <Partners />
            {/* <Map /> */}
        </div>
    )
}

export default Home