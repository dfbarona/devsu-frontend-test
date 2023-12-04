import { Routes } from '@angular/router';
import { layoutRoutes } from './layout/layout.routes';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: 'home',
		loadComponent: () =>
			import('./layout/page/layout-page.component').then((c) => c.LayoutPageComponent),
		children: layoutRoutes,
	},
];
