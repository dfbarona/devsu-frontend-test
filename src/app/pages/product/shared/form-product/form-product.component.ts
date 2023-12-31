import { Component, inject, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../../services/products/products.service';
import { NgClass } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { IdService } from '../../../../services/validators/id/id.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertsService } from '../../../../services/alerts/alerts.service';
import { LogoService } from '../../../../services/validators/logo/logo.service';

type Type = 'post' | 'update';

@Component({
	selector: 'app-form-product',
	standalone: true,
	imports: [ReactiveFormsModule, NgClass],
	templateUrl: './form-product.component.html',
	styleUrl: './form-product.component.scss',
})
export class FormProductComponent implements OnInit {
	private _formBuilder = inject(FormBuilder);
	private _productsService = inject(ProductsService);
	private _idService = inject(IdService);
	private _router = inject(Router);
	private _activatedRoute = inject(ActivatedRoute);
	private _alertService = inject(AlertsService);
	private _logoService = inject(LogoService);

	@Input() formTitle!: string;
	@Input() type!: Type;
	@Input() id!: string;

	form!: FormGroup;
	formDisabled!: boolean;
	currentDate = new Date().toISOString().split('T')[0];
	dateRevision!: string;

	ngOnInit(): void {
		this.buildForm();
		this.calculateDateRevision();
		this.setFormUpdate();
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
			logo: ['', [Validators.required, this._logoService.imagenUrlValidator()]],
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
				id: this.form.get('id')?.value,
				name: this.form.value.name,
				description: this.form.value.description,
				logo: this.form.value.logo,
				date_release: this.form.value.dateRelease,
				date_revision: this.dateRevision,
			};

			if (this.type === 'update') {
				this.updateForm(product);
			} else {
				this.postForm(product);
			}
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
				this._alertService.showAlert('El producto se creó satisfactoriamente', 'success');
			},
			(error: HttpErrorResponse) => {
				if (error.error instanceof ErrorEvent) {
					this._alertService.showAlert(error.error.message, 'error');
				} else {
					this._alertService.showAlert('No se pudo realizar la actualización', 'error');
				}
			}
		);
	}

	updateForm(product: any) {
		this._productsService.putProducts(product).subscribe(
			() => {
				this._alertService.showAlert('El producto se actualizó correctamente', 'success');
				this._router.navigate(['../../list'], { relativeTo: this._activatedRoute });
			},
			(error: HttpErrorResponse) => {
				if (error.error instanceof ErrorEvent) {
					this._alertService.showAlert(error.error.message, 'error');
				} else {
					this._alertService.showAlert('No se pudo realizar la actualización', 'error');
				}
			}
		);
	}

	setFormUpdate() {
		if (this.type === 'update') {
			this.form.get('id')?.setValue(this.id);
			this.form.get('id')?.disable();
			this.setProductItems(this.id);
		}
	}

	setProductItems(id: string) {
		this._productsService.getProductById(id).subscribe((event: any) => {
			this.form.get('name')?.setValue(event.name);
			this.form.get('description')?.setValue(event.description);
			this.form.get('logo')?.setValue(event.logo);
			this.form
				.get('dateRelease')
				?.setValue(new Date(event.date_release).toISOString().split('T')[0]);
		});
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
