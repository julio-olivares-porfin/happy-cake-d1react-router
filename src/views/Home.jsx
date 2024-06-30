import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Home = () => {
  return (
    <section className='home-section'>
      <Container>
        <h1 className='titulo-home'>
          Tortas para celebrar :D
        </h1>
      </Container>
      <Container className='button-container'>
         <Button as={Link} to='/contact' variant="secondary" type='submit'>Contáctanos</Button>
      </Container>
    </section>
  )
}

export default Home