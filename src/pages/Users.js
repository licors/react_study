import React, { useEffect, useState } from "react";
// npm install axios
import axios from "axios";
import UserList from '../components/UserList';
import Spinner from '../components/Spinner';

const Users = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				setUsers(response.data);
				setLoading(false);
			});
	}, []);

	return (
		// eact.Fragment 생략했을 때 <> 이런 식으로 표현
		<>
			<h1>Users</h1>
			{loading ? <Spinner /> :
			<UserList users={users} />}
		</>
	);
};

export default Users;
