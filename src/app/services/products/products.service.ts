import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Products } from '../../interfaces/products.interfaces';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class ProductsService {
	private _http = inject(HttpClient);
	private _apiUrl: string = environment.API;
	private _productsEndpoint: string = 'bp/products';
	private _headers = new HttpHeaders({
		'Content-Type': 'application/json',
		authorId: '451',
	});

	constructor() {}

	getProducts() {
		return this._http.get<Products[]>(`${this._apiUrl}/${this._productsEndpoint}`, {
			headers: this._headers,
		});
	}

	getProductById(id: string) {
		return this._http
			.get<Products>(`${this._apiUrl}/${this._productsEndpoint}`, {
				headers: this._headers,
			})
			.pipe(
				map((objects) => {
					if (Array.isArray(objects)) {
						return objects.find((obj) => obj.id === id);
					}
					return undefined;
				})
			);
	}

	postProducts(body: any) {
		const stringifyBody = JSON.stringify(body);
		return this._http.post(`${this._apiUrl}/${this._productsEndpoint}`, stringifyBody, {
			headers: this._headers,
		});
	}

	putProducts(body: any) {
		return this._http.put(`${this._apiUrl}/${this._productsEndpoint}`, body, {
			headers: this._headers,
		});
	}

	deleteProducts(id: any) {
		return this._http.delete<string>(`${this._apiUrl}/${this._productsEndpoint}?id=${id}`, {
			headers: this._headers,
		});
	}

	verificationProduct(id: any) {
		return this._http.get<boolean>(
			`${this._apiUrl}/${this._productsEndpoint}/verification?id=${id}`,
			{
				headers: this._headers,
			}
		);
	}
}
