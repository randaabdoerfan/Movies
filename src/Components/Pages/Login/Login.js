import { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


function Login() {
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
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      
      <Col xs={12} sm={10} md={6} xl={6}>
        
        <Card className="p-4 shadow">
          <h3 className="text-center mb-4">Sign In</h3>

          <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="validationCustomEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="name@example.com"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationCustomPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a password.
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" className="w-100">
              Sign In
            </Button>

          </Form>
        </Card>

      </Col>

    </Container>
  );
}

export default Login;