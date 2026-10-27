import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'projetos/:slug',
    loadComponent: () =>
      import('./features/project-case/project-case.page').then((m) => m.ProjectCasePage),
  },
  { path: '**', redirectTo: '' },
];
