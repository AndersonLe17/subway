import banner1 from "../../img/banner1.jpg";
import banner2 from "../../img/banner2.jpg";
import banner3 from "../../img/banner3.jpg";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";


function CarouselLogin() {
  return (
    <Carousel controls={false} fade>
      <Carousel.Item>
        <Image src={banner2} alt="banner2" fluid className="vh-100 w-100" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={banner1} alt="banner1" fluid className="vh-100 w-100" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={banner3} alt="banner3" fluid className="vh-100 w-100" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselLogin;
