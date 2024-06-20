import {
  Title,
  Container,
  TopBackGround,
  Form,
  ContainerInputs,
  Input,
  Button,
  InputLabel
} from '../Home/styles.js'

import UsersImage from '../../assets/users.png'
// import Trash from './assets/trash.svg'

function Home() {
  return (
    <>
      <Container>
        <TopBackGround>
          <img src={UsersImage} alt="imagem-usuarios" />
        </TopBackGround>

        <Form>
          <Title>Cadastrar Usuário</Title>
          <ContainerInputs>
            <div>
              <InputLabel>Nome<span> *</span></InputLabel>
              <Input type='text' placeholder='Nome do usuário' />
            </div>
            <div>
              <InputLabel>Idade<span> *</span></InputLabel>
              <Input type='text' placeholder='Idade do usuário' />
            </div>
          </ContainerInputs>
          <div style={{width: '100%'}}>
            <InputLabel>E-mail<span> *</span></InputLabel>
            <Input type='email' placeholder='E-mail do usuário' />
          </div>

          <Button>Cadastrar Usuário</Button>
        </Form >
      </Container>
    </>
  )
}

export default Home
