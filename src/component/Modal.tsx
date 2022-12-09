import React, { ReactNode, useState } from 'react'
import { User } from '../types/User';
import Item from './Item';

interface Props{
	open:boolean
}
interface ModalType {
  children?: ReactNode;
  isOpenModal: boolean;
	closeModal: () => void;
	users : User[]
}

const handleModalDialogClick =(e: any) =>{
	e.stopPropagation();
}
export default function Modal( {isOpenModal,users,closeModal}:ModalType) {
	return (
		<>
		{isOpenModal && (
			<div className='overlay'>
				<div className='container' onClick={handleModalDialogClick}>
					<div className='modal-header'>
					Modal
					</div>
					<button className='btn-close' onClick={closeModal}> X</button>
					<div className='content-modal'>
					{users.map((item:any, index:any) =>{
										return(
											<Item user={item}></Item>
										)
									})}
					</div>
				</div>
			</div>
		)}
		</>
	)
}
