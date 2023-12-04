import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Products } from '../../interfaces/products.interfaces';

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
		return this._http.get<Products>(`${this._apiUrl}/${this._productsEndpoint}`, {
			headers: this._headers,
		});
	}

	postProducts(body: any) {
		return this._http.post(`${this._apiUrl}/${this._productsEndpoint}`, body, {
			headers: this._headers,
		});
	}

	putProducts(body: any, id: any) {
		return this._http.put(`${this._apiUrl}/${this._productsEndpoint}/${id}`, body, {
			headers: this._headers,
		});
	}

	deleteProducts(body: any, id: any) {
		return this._http.delete(`${this._apiUrl}/${this._productsEndpoint}/${id}`, {
			headers: this._headers,
		});
	}
}
