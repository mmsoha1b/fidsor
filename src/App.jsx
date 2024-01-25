import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import EditModal from './components/EditModal'
import { openEditModal } from './slices/modalSlice'

function App() {
  const user = useSelector((state)=>state.user)
  const modals = useSelector((state)=>state.modals)
  const dispatch = useDispatch()
  const displayEditModal = ()=>{
    dispatch(openEditModal())
  }
  return (
    <>
      <main className='p-8 flex flex-col items-center gap-4 w-full '>
        <h1 className='text-3xl font-bold'>User</h1>
        <p>Name :{user.name} </p>
        <p>Age : {user.age} </p>
        <p> Weight:{user.weight} </p>
        <button className='bg-emerald-200 button  ' onClick={displayEditModal}>Edit</button>
        {modals.editModalOpen && <EditModal/>}
      </main>
    </>
  )
}

export default App
