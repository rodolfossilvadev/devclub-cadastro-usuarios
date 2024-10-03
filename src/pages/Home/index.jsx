import { useRef } from 'react'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'

import {
  ContainerInputs,
  Form,
  Input,
  InputLabel,
  Title,
} from './styles'
import { Container } from './styles'
import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'


function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  const navigate = useNavigate()

  async function registerNewUser() {
    console.log(inputName.current.value)
    const data = await api.post('/usuarios', {
      email: inputEmail.current.value,
      name: inputName.current.value,
      age: parseInt(inputAge.current.value)
    })
    console.log(data)
  }

  return (
    <Container>

      <TopBackground />

      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome <span> *</span>
            </InputLabel>
            <Input type='text' placeholder='Nome do Usuário' ref={inputName} />
          </div>
          <div>
            <InputLabel>
              Idade <span> *</span>
            </InputLabel>
            <Input type='number' placeholder='Idade do Usuário' ref={inputAge} />
          </div>

        </ContainerInputs>
        <div style={{ width: '100%' }}>
          <InputLabel>
            E-mail <span> *</span>
          </InputLabel>
          <Input type='email' placeholder='E-mail do Usuário' ref={inputEmail} />
        </div>

        <Button type='button'
          onClick={registerNewUser}
           theme='primary'>
          Cadastrar Usuário
        </Button>
      </Form>

      <Button type='button'
      onClick={ () => navigate('/lista-de-usuarios')}>
        Ver Lista de Usuários
      </Button>

    </Container>

  )
}

export default Home

