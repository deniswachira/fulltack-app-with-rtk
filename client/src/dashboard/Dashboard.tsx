import Container from '../components/Container'
import Form from '../components/Form'
import UserTable from '../features/users/UserTable'

function Dashboard() {
  return (
    <Container className='grid grid-cols-1 place-items-center gap-2'>
        <Form />
        <UserTable/>
    </Container>
  )
}

export default Dashboard