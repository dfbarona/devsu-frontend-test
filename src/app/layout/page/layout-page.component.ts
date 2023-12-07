import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { AlertsService } from '../../services/alerts/alerts.service';
import { NgClass } from '@angular/common';

@Component({
	selector: 'app-layout-page',
	standalone: true,
	imports: [HeaderComponent, RouterOutlet, NgClass],
	templateUrl: './layout-page.component.html',
	styleUrl: './layout-page.component.scss',
})
export class LayoutPageComponent implements OnInit {
	private _alertService = inject(AlertsService);

	showAlert: boolean = false;
	message: string = '';
	type: string = '';

	ngOnInit(): void {
		this._alertService.alert$.subscribe((res: any) => {
			this.message = res.message;
			this.type = `--${res.type}`;

			this.showAlert = true;
			setTimeout(() => {
				this.showAlert = false;
			}, res.time);
		});
	}
}
