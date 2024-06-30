import { useState } from 'react'
import { Form, Container, Button, Row, Col} from 'react-bootstrap'

const Contact = () => {
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [errors, setErrors] = useState({ email: '', description: '' })

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateDescription = (description) => {
    return description.trim().length > 0
  }

  const handleEmailBlur = () => {
    if (!validateEmail(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Por favor, introduce un correo electrónico válido (por ejemplo, usuario@dominio.com).'
      }))
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: ''
      }))
    }
  }

  const handleDescriptionBlur = () => {
    if (!validateDescription(description)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        description: 'La descripción no puede estar vacía. Por favor, proporciona más detalles sobre tu solicitud.'
      }))
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        description: ''
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let valid = true
    const newErrors = { email: '', description: '' }

    if (!validateEmail(email)) {
      newErrors.email = 'Por favor, introduce un correo electrónico válido (por ejemplo, usuario@dominio.com).'
      valid = false
    }

    if (!validateDescription(description)) {
      newErrors.description = 'La descripción no puede estar vacía. Por favor, proporciona más detalles sobre tu solicitud.'
      valid = false
    }

    setErrors(newErrors)

    if (valid) {
      // Enviar el formulario
      console.log('Formulario enviado', { email, description })
    }
  }

  return (
    <section className='contact-section'>
      <div className="header-contacto">
        <Container>
          <h1 className='titulos'>
            Apaga las velas <br />
            en la torta que quieras :D
          </h1>
          <p>
            Rellena el formulario y recibe tu torta
          </p>
        </Container>
      </div>
      {<Container className='form-container'>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Tu correo electrónico</Form.Label>
                <Form.Control
                type='email'
                id='email'
                placeholder='usuario@dominio.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleEmailBlur}
                />
                {errors.email && <p className='error'>{errors.email}</p>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Te leemos :D</Form.Label>
                <Form.Control as="textarea" rows={3}            name='description'
                    id='description'
                    placeholder='Detalla a continuación cualquier aspecto que se te ocurra de la torta que quieres :D'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    onBlur={handleDescriptionBlur} />
              </Form.Group>
            </Form>
            <Container>
              <Button variant="secondary" type='submit' className='boton'>Enviar</Button>
            </Container>
          </Col>
        </Row>
      </Container>}
    </section>
      );
    }

export default Contact

