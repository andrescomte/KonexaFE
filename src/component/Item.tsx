import { userInfo } from 'os'
import React from 'react'
import { User } from '../types/User'

interface Props {
	user : User
}
export default function Item({user}:Props) {
	return (
		<div className='person'>
			<img src={`https://picsum.photos/200/200?random=${user.id}`} alt="" width="35" height="35" key={user.id}/>
			<div className='content-information'>
				<p style={{fontWeight:"bold"}}>{user.name}</p>
				<p style = {{fontSize:"13px"}}>{user.address.street.concat(' ',user.address.suite,', ',user.address.city)}</p>
			</div>
		</div>
	)
}
