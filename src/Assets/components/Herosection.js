import Carousel from 'react-bootstrap/Carousel';
import image1 from '../images/Group 51.png';
import image2 from '../images/Group 52.png';
 
function HeroSec() {
        return (
                <>
                 
                <div className='container-fluid bg-dark p-0'>
                        <Carousel data-bs-theme="dark" className=' left-background right-background'>
                                <Carousel.Item>
                                        <img
                                                className="d-block ms-auto "
                                                src={image1}
                                                alt="First slide"
                                        />
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img
                                                className="d-block ms-auto "
                                                src={image2}
                                                alt="Second slide"
                                        />
                                </Carousel.Item>
                        </Carousel> 
                </div>
                </>
        );
}

export default HeroSec;