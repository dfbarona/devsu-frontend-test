import { Component, inject, OnInit } from '@angular/core';
import { FormProductComponent } from '../../shared/form-product/form-product.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'app-update',
	standalone: true,
	imports: [FormProductComponent],
	templateUrl: './update.component.html',
	styleUrl: './update.component.scss',
})
export class UpdateComponent implements OnInit {
	private _activatedRoute = inject(ActivatedRoute);
	private _location = inject(Location);

	id!: any;

	ngOnInit(): void {
		this.getParams();
	}

	getParams() {
		this.id = this._activatedRoute.snapshot.paramMap.get('id');
	}

	goBack() {
		this._location.back();
	}
}
