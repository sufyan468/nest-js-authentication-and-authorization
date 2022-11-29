import * as reviews from '../views';

const routData = [
    {
        id: 'route-001',
        path: '/login',
        component: reviews.Login,
        requiresAuth: true,
    },
    {
        id: 'route-001',
        path: '/user/dashboard',
        component: reviews.DashBoard,
        requiresAuth: true,
    }
]

export default routData;
