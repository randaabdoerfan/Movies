import { useState } from "react";
import { Card, Container, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import setLogin from "../../store/Actions/setLogin";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({fname:"", email: "", password: "" });
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {  
      const savedUser = JSON.parse(localStorage.getItem("userData"));
      console.log(savedUser);
      if (!savedUser) {
        alert("No registered user found!");
        return;
      }
      if (
        formData.email === savedUser.email &&
        formData.password === savedUser.password
      ) {
        alert(`Welcome back, ${savedUser.fname}!`);
        localStorage.setItem("isLoggedIn", "true");
        dispatch(setLogin(true));
         navigate("/");
      } else {
        alert("Invalid email or password");
      }
    }
    setValidated(true);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Col xs={12} sm={10} md={6} xl={6}>
        <Card className="p-4 shadow">
          <h3 className="text-center mb-4">Login</h3>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <Form.Control.Feedback type="invalid">
                Please enter your email.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <Form.Control.Feedback type="invalid">
                Please enter your password.
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Card>
      </Col>
    </Container>
  );
}

export default Login;