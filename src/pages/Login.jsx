import banner1 from "../img/banner1.jpg";
import banner2 from "../img/banner2.jpg";
import banner3 from "../img/banner3.jpg";
import logo from "../img/logo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

export default function Login() {
  return (
    <Container className="vh-100" fluid>
      <Row>
        <Col md={7} className="p-0">
          <Carousel controls={false} fade>
            <Carousel.Item>
              <Image
                src={banner2}
                alt="banner2"
                fluid
                className="vh-100 w-100"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={banner1}
                alt="banner1"
                fluid
                className="vh-100 w-100"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={banner3}
                alt="banner3"
                fluid
                className="vh-100 w-100"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col
          md={5}
          className="p-0 d-flex justify-content-center align-items-center"
        >
          <Container className="px-4">
            <div className="w-75 mx-auto">
              <Image src={logo} fluid className="w-100" />
            </div>
            <div className="w-75 mt-3 mx-auto">
              <h1 className="text-center fw-semibold">Login Account</h1>

              <Form className="mt-4">
                <FloatingLabel
                  controlId="fltEmail"
                  label="Dirección de correo electrónico*"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="username@subwayperu.com"
                  />
                </FloatingLabel>

                <FloatingLabel
                  controlId="fltPassword"
                  label="Contraseña*"
                  className="mb-3"
                >
                  <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>

                <a href="/login" className="link-dark fw-semibold">¿Has olvidado tu contraseña?</a>

                <Button variant="success" type="submit" className="w-100 py-2 mt-3">
                  INICIAR SESIÓN
                </Button>
              </Form>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
