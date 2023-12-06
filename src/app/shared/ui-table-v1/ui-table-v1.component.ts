import { Component, Input, inject } from '@angular/core';
import { TableColumns } from '../../interfaces/table.interfaces';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FilterPipe } from '../../pipes/filter/filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-ui-table-v1',
	standalone: true,
	imports: [DatePipe, RouterLink, FilterPipe, FormsModule],
	templateUrl: './ui-table-v1.component.html',
	styleUrl: './ui-table-v1.component.scss',
})
export class UiTableV1Component {
	private _router = inject(Router);
	private _activatedRoute = inject(ActivatedRoute);

	@Input() tableColumns!: TableColumns[];
	@Input() tableDataSet!: any[];
	@Input() buttonActionPath!: string;

	filterProduct = '';

	goTo() {
		this._router.navigate([this.buttonActionPath], { relativeTo: this._activatedRoute });
	}
}
