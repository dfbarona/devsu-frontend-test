import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-layout-page',
	standalone: true,
	imports: [HeaderComponent, RouterOutlet],
	templateUrl: './layout-page.component.html',
	styleUrl: './layout-page.component.scss',
})
export class LayoutPageComponent {}
