import React from 'react'
import { Container } from 'react-bootstrap'
import About from '../About/About'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'



function Home() {
  return (
     <section id="home" className="mx-auto vh-500 d-flex align-items-center">
      <Container className="text-center"><br/>
      

      <About/><br/>
      <Contact/><br/>
      <Footer/>
      </Container>     
      </section>
  )
}

export default Home