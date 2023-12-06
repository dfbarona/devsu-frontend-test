import { Component, OnInit, inject } from '@angular/core';
import { UiTableV1Component } from '../../../../shared/ui-table-v1/ui-table-v1.component';
import { TableColumns } from '../../../../interfaces/table.interfaces';
import { ProductsService } from '../../../../services/products/products.service';

@Component({
	selector: 'app-list',
	standalone: true,
	imports: [UiTableV1Component],
	templateUrl: './list.component.html',
	styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
	private _productsService = inject(ProductsService);

	columns: TableColumns[] = [
		{ label: 'Logo', keyword: 'logo', type: 'image' },
		{ label: 'Nombre del producto', keyword: 'name' },
		{ label: 'Descripción', keyword: 'description' },
		{ label: 'Fecha de liberación', keyword: 'date_release', type: 'date' },
		{ label: 'Fecha de reestructuración', keyword: 'date_revision', type: 'date' },
	];

	dataSet: any[] = [];

	ngOnInit(): void {
		this.getProducts();
	}

	getProducts() {
		this._productsService.getProducts().subscribe((event: any) => {
			this.dataSet = event;
		});
	}
}
