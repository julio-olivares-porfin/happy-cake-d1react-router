import { Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'

const Home = () => {
  return (
    <section className='home-section'>
      <Container>
        <h1 className='titulos'>
          Tortas para celebrar :D
        </h1>
      </Container>
      <Container className='button-container'>
         <Button as={Link} to='/contact' variant="secondary" className='boton'>Contáctanos</Button>
      </Container>
    </section>
  )
}

export default Home