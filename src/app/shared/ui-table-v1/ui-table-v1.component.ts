import { Component, Input, OnInit, DoCheck, inject, OnChanges } from '@angular/core';
import { TableColumns } from '../../interfaces/table.interfaces';
import { DatePipe, NgClass } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PaginatePipe } from '../../pipes/paginate/paginate.pipe';
import { FormsModule } from '@angular/forms';
import { PluralizePipe } from '../../pipes/pluralize/pluralize.pipe';
import { Options } from '../../interfaces/options.interfaces';

@Component({
	selector: 'app-ui-table-v1',
	standalone: true,
	imports: [DatePipe, RouterLink, FormsModule, PaginatePipe, PluralizePipe, NgClass],
	templateUrl: './ui-table-v1.component.html',
	styleUrl: './ui-table-v1.component.scss',
})
export class UiTableV1Component implements OnChanges {
	private _router = inject(Router);
	private _activatedRoute = inject(ActivatedRoute);

	@Input() tableColumns!: TableColumns[];
	@Input() tableDataSet!: any[];
	@Input() buttonActionPath!: string;
	@Input() options!: Options[];

	filteredData: any[] = [];
	searchTerm = '';
	itemsPerPage: number = 5;
	currentPage: number = 0;
	isOnShowOptions: boolean = false;
	currentProductOption!: string;

	ngOnChanges(): void {
		this.filteredData = this.tableDataSet;
	}

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

	goTo(action: string, id?: any) {
		this._router.navigate(id ? [action, id] : [action], { relativeTo: this._activatedRoute });
	}

	nextPage() {
		this.currentPage = this.currentPage + this.itemsPerPage;
	}

	prevPage() {
		if (this.currentPage > 0) this.currentPage -= this.itemsPerPage;
	}

	showOptions(id?: string) {
		this.isOnShowOptions = !this.isOnShowOptions;
		if (id) this.currentProductOption = id;
	}
}
