import Users from './pages/Users';
import Home from './pages/Home';
import Movies from './pages/Movies';
import User from './pages/User';

// 이 코드는 워닝 발생
// export default [
// 	{
// 		path: '/',
// 		component: Home
// 	},
// 	{
// 		path: '/movies',
// 		component: Movies
// 	},
// 	{
// 		path: '/users',
// 		component: Users
// 	}
// ];

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/movies',
		component: Movies
	},
	{
		path: '/users',
		component: Users
	},
	{
		path: '/users/:id',
		component : User
	}
];

export default routes;
