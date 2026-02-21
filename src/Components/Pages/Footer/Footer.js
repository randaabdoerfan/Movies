import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer>
      <Container className="text-center">
        <div className="mb-3 d-flex justify-content-center gap-4">
          <span
            onClick={() =>
              window.open(
                "https://github.com/randaabdoerfan",
                "_blank"
              )
            }
          >
            <i className="bi bi-github fs-4"></i>
          </span>

          <span
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/randa-erfan-6a230b217/",
                "_blank"
              )
            }
          >
            <i className="bi bi-linkedin fs-4"></i>
          </span>

          <span
            onClick={() =>
              window.open("mailto:randaerfan12@gmail.com", "_blank")
            }
          >
            <i className="bi bi-envelope fs-4"></i>
          </span>

        </div>

        <p className="mb-0">
          © {new Date().getFullYear()} Randa Erfan Movies Website. All Rights Reserved.
        </p>

      </Container>
    </footer>


  )
}