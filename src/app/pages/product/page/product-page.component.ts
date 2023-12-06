import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-product-page',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './product-page.component.html',
	styleUrl: './product-page.component.scss',
})
export class ProductPageComponent {}
