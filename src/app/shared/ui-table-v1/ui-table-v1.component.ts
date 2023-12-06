import { Component, Input, OnInit, inject } from '@angular/core';
import { TableColumns } from '../../interfaces/table.interfaces';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PaginatePipe } from '../../pipes/paginate/paginate.pipe';
import { FormsModule } from '@angular/forms';
import { PluralizePipe } from '../../pipes/pluralize/pluralize.pipe';

@Component({
	selector: 'app-ui-table-v1',
	standalone: true,
	imports: [DatePipe, RouterLink, FormsModule, PaginatePipe, PluralizePipe],
	templateUrl: './ui-table-v1.component.html',
	styleUrl: './ui-table-v1.component.scss',
})
export class UiTableV1Component {
	private _router = inject(Router);
	private _activatedRoute = inject(ActivatedRoute);

	@Input() tableColumns!: TableColumns[];
	@Input() tableDataSet!: any[];
	@Input() buttonActionPath!: string;

	filteredData: any[] = [];
	searchTerm = '';
	itemsPerPage: number = 5;
	currentPage: number = 0;

	filterData() {
		if (this.searchTerm.length >= 3) {
			this.filteredData = this.tableDataSet.filter((item) =>
				item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
			);
		} else {
			this.filteredData = this.tableDataSet;
		}
		this.currentPage = 0;
	}

	goTo() {
		this._router.navigate([this.buttonActionPath], { relativeTo: this._activatedRoute });
	}

	nextPage() {
		this.currentPage += this.itemsPerPage;
	}

	prevPage() {
		if (this.currentPage > 0) this.currentPage -= this.itemsPerPage;
	}
}
