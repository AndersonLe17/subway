import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import logo from "../../img/logo.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function FormLogin() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container className="px-4">
      <div className="w-75 mx-auto">
        <Image src={logo} fluid className="w-100" />
      </div>
      <div className="w-75 mt-3 mx-auto">
        <h1 className="text-center fw-semibold">Login Account</h1>

        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="mt-4 mx-sm-4"
        >
          <FloatingLabel
            controlId="fltEmail"
            label="Dirección de correo electrónico*"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="username@subwayperu.com"
              required
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="fltPassword"
            label="Contraseña*"
            className="mb-3"
          >
            <Form.Control type="password" placeholder="Password" required />
          </FloatingLabel>

          <Link to="/login" className="link-dark fw-semibold">
            ¿Has olvidado tu contraseña?
          </Link>

          <Button variant="success" type="submit" className="w-100 py-2 mt-3" onClick={() => navigate("/")}>
            INICIAR SESIÓN
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default FormLogin;
