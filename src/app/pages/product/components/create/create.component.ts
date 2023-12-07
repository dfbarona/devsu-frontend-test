import { Component, inject } from '@angular/core';
import { FormProductComponent } from '../../shared/form-product/form-product.component';
import { Location } from '@angular/common';

@Component({
	selector: 'app-create',
	standalone: true,
	imports: [FormProductComponent],
	templateUrl: './create.component.html',
	styleUrl: './create.component.scss',
})
export class CreateComponent {
	private _location = inject(Location);

	goBack() {
		this._location.back();
	}
}
