import { useEffect, useState } from 'react'
import api from '../../services/api'
import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'
import Trash from '../../assets/trash.svg'
import { useNavigate } from 'react-router-dom'

import {
    Container,
    ContainerUsers,
    Title,
    TrashIcon,
    CardUsers, 
    AvatarUser
} from './style'


function ListUsers() {

    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/usuarios')
            console.log(data)

            setUsers(data)
        }
        getUsers()
    }, [])

    async function deleteUsers (id) {
        await api.delete(`/usuarios/${id}`)

        const updateUsers = users.filter (user => user.id !== id)
    
        setUsers(updateUsers)
    }

    // toda vez que a tela carrega o useEffect é chamado
    // toda vez que uma variavel muda de valor ele é chamado
    return (
        <Container>
            <TopBackground />
            <Title>Lista de Usuários</Title>
            <ContainerUsers>
                {users.map(user => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username= ${user.id}`} />
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon  src={Trash} alt='icone-lixo' onClick={ () => deleteUsers(user.id)} />
                    </CardUsers>
                ))}
            </ContainerUsers>
            <Button type="button" onClick={ () => navigate('/')}>Voltar</Button>
        </Container>
    )

}

export default ListUsers