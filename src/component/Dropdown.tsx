import React, { useEffect, useState } from 'react'
import useModal from '../hooks/useModal';
import { User } from '../types/User';
import 'font-awesome/css/font-awesome.min.css';
import Modal from './Modal';

export default function Dropdown() {
	const [isActive, setIsActive] = useState(false);
	const [users, setUsers] = useState<User[]>([])
	const { isOpen, openModal, closeModal } = useModal();

	useEffect(()=>{
		fetch(`https://localhost:7042/api/User`)
		.then(response => response.json())
		.then(res => setUsers(res));
	},[]);

	
	return (
		<div className='dropdown'>
			<div className='dropdown-btn' data-testid="dropdownBtn" onClick={(e)=> setIsActive(!isActive)}>Dropdown
			<span className={'fa fa-caret-'+ (isActive ? 'up':'down')} data-testid="icon" style={{marginLeft:"3px"}}></span>
			</div>
			{isActive && (
				<div className="dropdown-content">
					<div className='dropdown-item' data-testid="dropdownItem" onClick={openModal}>Show Modal
							<Modal isOpenModal = {isOpen} closeModal = {closeModal} users ={users}>
							</Modal>
					</div>
			</div>
			)}
		</div>
	)
}
