import { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


function Register() {
  const [formData , setFormData] = useState({
    fname :"",
    email:"",
    password:"",
    
  })
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate()


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    
    } else {
      localStorage.setItem("userData", JSON.stringify(formData));
      alert("Registered Successfully!");
      navigate('/login')
    }
    setValidated(true);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      
      <Col xs={12} sm={10} md={6} xl={6}>
        
        <Card className="p-4 shadow">
          <h3 className="text-center mb-4">Register</h3>

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                value={formData.fname}
                onChange={(e)=>{setFormData({...formData,fname:e.target.value})}}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationCustomEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e)=>{setFormData({...formData,email:e.target.value})}}
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
                 value={formData.password || ""}
                onChange={(e)=>{setFormData({...formData,password:e.target.value})}}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a password.
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" className="w-100">
              Register
            </Button>

          </Form>
        </Card>

      </Col>

    </Container>
  );
}

export default Register;