import { lazy } from 'react';

const routes = [
    {
        path: '/',
        exact: true,
        component: lazy(() => import('@pages/landing')),
    },    
    {
        path: '/:slug',
        exact: true,
        component: lazy(() => import('@pages/project')),
    },
];

export default routes;
