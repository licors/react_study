import React from "react";

const UserList = ({ users }) => {
	return (
		<div>
			{users.map(user => {
				return (
					// bootstrap cardForm 사용
					<div
						className="card mb-2"
						key={user.id}
					>
						<div className="card-body p-3">
							{user.name}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default UserList;