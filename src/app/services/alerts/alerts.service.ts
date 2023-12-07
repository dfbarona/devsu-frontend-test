import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AlertsService {
	alertSource = new Subject();
	alert$ = this.alertSource.asObservable();
	constructor() {}

	showAlert(message: string, type: 'error' | 'success', time: number = 5000) {
		this.alertSource.next({ message, time, type });
	}
}
