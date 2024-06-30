import { Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'

const Home = () => {
  return (
    <section className='home-section'>
      <div className="header">
        <Container>
          <h1 className='titulos'>
            Tortas para celebrar :D
          </h1>
          <p>
            Solicita la torta que quieras
          </p>
        </Container>
        <Container className='button-container'>
          <Button as={Link} to='/contact' variant="secondary" className='boton'>Contáctanos</Button>
        </Container>
      </div>
    </section>
  )
}

export default Home