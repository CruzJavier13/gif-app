import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard', loadComponent: () => import('./gifs/pages/dashboard-page.component/dashboard-page.component'),
        children: [
            {
                path: 'tradding', loadComponent: () => import('./gifs/pages/tradding-page-component/tradding-page.component')
            },
            {
                path: 'search', loadComponent: () => import('./gifs/pages/search-page.component/search-page.component')
            },
            {
                path: 'history/:query', loadComponent: () => import('./gifs/pages/gif-history/gif-history.component')
            },
            {
                path: '**', redirectTo: 'tradding'
            }
        ]
    },

    {
        path: '**', redirectTo: 'dashboard'
    }
];
