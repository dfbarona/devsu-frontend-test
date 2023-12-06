import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../../services/products/products.service';
import { NgClass } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { IdService } from '../../../../services/validators/id/id.service';

@Component({
	selector: 'app-create',
	standalone: true,
	imports: [ReactiveFormsModule, NgClass],
	templateUrl: './create.component.html',
	styleUrl: './create.component.scss',
})
export class CreateComponent implements OnInit {
	private _formBuilder = inject(FormBuilder);
	private _productsService = inject(ProductsService);
	private _idService = inject(IdService);

	form!: FormGroup;
	formDisabled!: boolean;
	currentDate = new Date().toISOString().split('T')[0];
	dateRevision!: string;

	ngOnInit(): void {
		this.buildForm();
		this.calculateDateRevision();
	}

	buildForm() {
		this.form = this._formBuilder.group({
			id: [
				'',
				[Validators.required, Validators.minLength(3), Validators.maxLength(10)],
				[this._idService.checkIdExists()],
				onchange,
			],
			name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
			description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
			logo: ['', [Validators.required]],
			dateRelease: ['', [Validators.required]],
		});
	}

	calculateDateRevision() {
		this.dateReleaseField?.valueChanges.subscribe((event) => {
			if (event) {
				let year = new Date(event);
				this.dateRevision = new Date(year.setFullYear(year.getFullYear() + 1))
					.toISOString()
					.split('T')[0];
			}
		});
	}

	submit() {
		if (this.form.valid) {
			const product = {
				id: this.form.value.id,
				name: this.form.value.name,
				description: this.form.value.description,
				logo: this.form.value.logo,
				date_release: this.form.value.dateRelease,
				date_revision: this.dateRevision,
			};

			this.postForm(product);
		} else {
			this.form.markAllAsTouched();
		}
	}

	reset() {
		this.form.markAsUntouched();
		this.dateRevision = ' ';
		this.form.reset();
	}

	postForm(product: any) {
		this._productsService.postProducts(product).subscribe(
			() => {
				this.reset();
				console.log('La respuesta fue correcta');
			},
			(error: HttpErrorResponse) => {
				if (error.error instanceof ErrorEvent) {
					console.error('Error del lado del cliente:', error.error.message);
				} else {
					console.error(`Código de error ${error.status}, ` + `cuerpo: ${error.error}`);
				}
			}
		);
	}

	get idField() {
		return this.form.get('id');
	}

	get nameField() {
		return this.form.get('name');
	}

	get descriptionField() {
		return this.form.get('description');
	}

	get logoField() {
		return this.form.get('logo');
	}

	get dateReleaseField() {
		return this.form.get('dateRelease');
	}
}
