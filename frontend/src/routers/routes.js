import MainLayout from '../layouts/MainLayout.vue';
import routeNames from './routeNames';

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: '/',
                name: routeNames.home,
                component: () => import('../pages/HomePage.vue'),
            },
            {
                path: '/about',
                name: routeNames.about,
                component: () => import('../pages/AboutPage.vue'),
            },
        ],
    },
];

export default routes;
