import { CarouselLogin } from '../components/CarouselLogin';
import { FormLogin } from '../components/FormLogin';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function Login() {
  return (
    <Container className="vh-100" fluid>
      <Row>
        <Col md={6} lg={7} className="p-0 d-none d-md-block">

          <CarouselLogin />

        </Col>
        <Col md={6} lg={5} className="p-0 vh-100 d-flex justify-content-center align-items-center">

          <FormLogin />

        </Col>
      </Row>
    </Container>
  );
}
