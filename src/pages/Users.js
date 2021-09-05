import React, { useEffect, useState } from "react";
// npm install axios
import axios from "axios";
import UserList from '../components/UserList';

const Users = () => {
	const [users, setUsers] = useState([]);

	// axois 에서 더미 데이터 받아옴
	// def 빈 배열이면 처음 렌더링 시 한번만 useEffect 발동
	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				setUsers(response.data);
			});
	}, []);

	return (
		// eact.Fragment 생략했을 때 <> 이런 식으로 표현
		<>
			<h1>Users</h1>
			<UserList users={users} />
		</>
	);
};

export default Users;
