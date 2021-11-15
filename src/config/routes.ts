import { lazy } from 'react';

const routes = [
    {
        path: '/',
        exact: true,
        component: lazy(() => import('@pages/Landing')),
    },    
    {
        path: '/:slug',
        exact: true,
        component: lazy(() => import('@pages/Project')),
    },
];

export default routes;
