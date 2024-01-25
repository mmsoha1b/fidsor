import React from 'react'
import ModalLayout from './ModalLayout'
import { useDispatch, useSelector } from 'react-redux'
import { closeAllModal } from '../slices/modalSlice'

export default function ConfirmModal({onOk}) {
  const dispatch = useDispatch()

  const closeModals = ()=>{
    dispatch(closeAllModal())
  }


  return (
    <ModalLayout>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 w-1/2 bg-white rounded-lg'>
        <div className='w-full h-full border-black border-[1px] items-center flex flex-col'>
          <div className='flex-1'>
            <p>Are you sure?</p>
          </div>
          <div className='flex w-full justify-center gap-6 mb-2'>
            <button className='button rounded-lg bg-green-200' onClick={onOk}>ok</button>
            <button className='button rounded-lg bg-red-400' onClick={closeModals}>cancel</button>
          </div>

        </div>
      </div>
    </ModalLayout>
  )
}
