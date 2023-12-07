import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

@Injectable({
	providedIn: 'root',
})
export class LogoService {
	imagenUrlValidator(): ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			if (!control.value) {
				return null; // No hay error si el campo está vacío
			}

			// Patrón para verificar si la URL termina en una extensión de imagen común
			const imagenExtensiones = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];
			const url = control.value.toLowerCase();

			if (imagenExtensiones.some((ext) => url.endsWith(`.${ext}`))) {
				return null; // La URL es válida
			} else {
				return { imagenInvalida: true }; // La URL no es de una imagen
			}
		};
	}
}
