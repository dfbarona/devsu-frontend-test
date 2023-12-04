import { Routes } from '@angular/router';

export const layoutRoutes: Routes = [
	{
		path: '',
		redirectTo: 'products',
		pathMatch: 'full',
	},
	{
		path: 'products',
		loadComponent: () =>
			import('./../pages/product/page/product-page.component').then((c) => c.ProductPageComponent),
	},
];
