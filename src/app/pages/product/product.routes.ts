import { Routes } from '@angular/router';

export const productRoutes: Routes = [
	{
		path: '',
		redirectTo: 'list',
		pathMatch: 'full',
	},
	{
		path: 'list',
		loadComponent: () => import('./components/list/list.component').then((c) => c.ListComponent),
	},
	{
		path: 'create',
		loadComponent: () =>
			import('./components/create/create.component').then((c) => c.CreateComponent),
	},
];
