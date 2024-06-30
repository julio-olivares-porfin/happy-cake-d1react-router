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
    <section className='contacto'>
      <Container className='mt-4'>
        <h1>
          Aquí pueden pedirnos tortas para celebrar :D
        </h1>
      </Container>
      <Container className='mt-4'>
      <Row>
        <Col>
        <Form onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
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
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3}            name='description'
              id='description'
              placeholder='Proporciona más detalles sobre tu solicitud...'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              onBlur={handleDescriptionBlur} />
        </Form.Group>
      </Form>
      <Container>
         <Button variant="secondary" type='submit'>Enviar</Button>
      </Container>
        </Col>
      </Row>
    </Container>
    </section>
      );
    }

export default Contact

