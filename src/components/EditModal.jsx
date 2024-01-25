import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateVals } from '../slices/userSlice'
import ConfirmModal from './ConfirmModal'
import ModalLayout from './ModalLayout'
import { closeAllModal, closeEditModal, openConfirmModal } from '../slices/modalSlice'

export default function EditModal() {
  const initalUserData = useSelector((state)=>state.user)
  const modals = useSelector((state)=>state.modals)
  const dispatch = useDispatch()
  const [userData, setUserData] = useState(initalUserData)
  const handleChange = (e)=>{
    setUserData({
      ...userData,
      [e.target.id]:e.target.value
    })
  }
  const handleSumbit =()=>{
    dispatch(updateVals(userData))
    dispatch(closeAllModal())
  }
  const displayConfirmModal = ()=>{
    dispatch(openConfirmModal())
  }
  const hideConfrimModal = ()=>{
    dispatch(closeEditModal())
  }

  return (
    <ModalLayout>
      <div className='relative  border-black border-[1px] min-h-1/2 w-1/2 bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg'>
      {modals.confirmModalOpen && <ConfirmModal onOk = {handleSumbit}/>}
        <div className='w-full flex flex-col gap-4 items-center p-4'>

          <label htmlFor='name'>Name</label>
          <input id="name" name='name' value={userData.name} onChange={handleChange} className='p-4 border-gray-500 border-2' />

          <label htmlFor='age'>Age</label>
          <input  id="age" type='number' name="age" value={userData.age} onChange={handleChange} className='p-4 border-gray-500 border-2'/>

          <label htmlFor='weight'>Weight</label>
          <input  id="weight" type="number" name='weight' value={userData.weight} onChange={handleChange} className='p-4 border-gray-500 border-2'/>

          <button onClick={displayConfirmModal} className='button bg-green-300'>Ok</button>
          <button onClick={hideConfrimModal}  className='button bg-red-300'>Close</button>
        </div>
      </div>
    </ModalLayout>
  )
}
