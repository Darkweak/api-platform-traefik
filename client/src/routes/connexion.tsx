import { IRoute } from './';
import { Login, Register } from '../components/pages';

export const connexionRoutes = (): IRoute[] => [
    {
        component: Register,
        icon: 'add_box',
        name: 'account.register',
        path: '/register',
    },
    {
        component: Login,
        icon: 'user',
        name: 'account.login',
        path: '/login',
    },
];
