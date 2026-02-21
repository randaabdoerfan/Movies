
import { Container } from 'react-bootstrap'
import { motion } from "framer-motion";
import { Card } from "react-bootstrap";
import './Contact.css';
import { useSelector } from 'react-redux';

function Contact() {

const mode = useSelector((state)=>{return state.mode.mode})
console.log(mode)

  return (

    <Container className={`h-100 pb-4 d-flex justify-content-center align-items-center pb-5 border-bottom`}>

      <div className="w-100 py-5" style={{ maxWidth: "750px", maxHeight: "530px", textAlign: 'left' }}>
        <h2 style={{ textDecoration: "underline", textUnderlineOffset: "10px", textDecorationColor: '#f67b68', lineHeight: '3' }} className="text-center mb-4">Contact Information</h2>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 ml-6"
        >
          <Card className="contant rounded-1xl shadow-md hover:shadow-lg transition-all w-75 duration-300 mx-auto">
            <Card.Body className=
            {`p-4 
              ${mode === "dark" ? "bg-dark text-white" : "bg-light text-black"}
              `}
            >

              <div className="d-flex flex-column gap-3">

                <h5>
                  <i className="bi bi-pin-map-fill me-2"></i>
                  Online Website
                </h5>

               


                <div className="d-flex gap-3 mt-2 mx-auto">
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => window.open("https://github.com/randaabdoerfan?tab=repositories", "_blank")}
                  >
                    <i className="bi bi-github fs-4"></i>
                  </span>

                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => window.open("https://www.linkedin.com/in/randa-erfan-6a230b217/", "_blank")}
                  >
                    <i className="bi bi-linkedin fs-4"></i>
                  </span>
                </div>

              </div>
            </Card.Body>
          </Card>
        </motion.div>

      </div>

    </Container>

  )
}

export default Contact