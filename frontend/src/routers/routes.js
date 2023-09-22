const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/HomePage.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../pages/AboutPage.vue'),
    },
];

export default routes;
