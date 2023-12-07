import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable, of, timer } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Injectable, inject } from '@angular/core';
import { ProductsService } from '../../products/products.service';

@Injectable({ providedIn: 'root' })
export class IdService {
	private _productsService = inject(ProductsService);

	// El validador asincrónico
	checkIdExists(): AsyncValidatorFn {
		return (control: AbstractControl): Observable<ValidationErrors | null> => {
			const id = control.value;

			// Si el campo está vacío, no realizar la validación
			if (!id) {
				return of(null);
			}

			// Simula un pequeño retraso antes de realizar la llamada al servidor
			return timer(100).pipe(
				switchMap(() => this._productsService.verificationProduct(id)),
				map((idExists) => (idExists ? { idExists: true } : null)),
				catchError(() => of(null)) // Manejar errores (puedes ajustarlo según tus necesidades)
			);
		};
	}
}
