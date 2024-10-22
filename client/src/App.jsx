import './App.css'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'
import { CrearClienteModal } from './components/CreateClientModal'
import { EditarClienteModal } from './components/EditClientModal'
import { ListUsers } from './components/ListUsers'

function App() {
  const [showModalCreate, setShowModalCreate] = useState(false)
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [listUsers, setListUsers] = useState([])
  const [userToEdit, setUserToEdit] = useState(null)

  const handleShowModalCreate = () => setShowModalCreate(true)
  const handleCloseModalCreate = () => setShowModalCreate(false)
  const handleCloseModalEdit = () => setShowModalEdit(false)

  const handleEditUser = (user) => {
    setUserToEdit(user)
    setShowModalEdit(true)
  }

  const handleSwitchChange = (documento) => {
    setListUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.documento === documento ? { ...user, isChecked: !user.isChecked } : user
      )
    )
  }

  const getAllUsers = () => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((users) => {
        const usersWithState = users.map((user) => ({
          ...user,
          isChecked: user.estado,
        }));
        setListUsers(usersWithState)
      })
      .catch((error) => { console.log(error) })
  };

  useEffect(getAllUsers, [])

  return (
    <>
      <ListUsers
        listUsers={listUsers}
        handleSwitchChange={handleSwitchChange}
        handleEditUser={handleEditUser}
      />
      <div className='container-button'>
        <Button variant="primary" className='create-client-button' onClick={handleShowModalCreate} size="lg">
          Crear nuevo cliente
        </Button>
      </div>
      <CrearClienteModal showModalCreate={showModalCreate} handleCloseModalCreate={handleCloseModalCreate} />
      <EditarClienteModal
        showModalEdit={showModalEdit}
        handleCloseModalEdit={handleCloseModalEdit}
        userToEdit={userToEdit}
      />
    </>
  )
}

export default App;
