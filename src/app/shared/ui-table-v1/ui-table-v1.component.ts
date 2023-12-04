import { Component, Input } from '@angular/core';
import { TableColumns } from '../../interfaces/table.interfaces';
import { DatePipe } from '@angular/common';

@Component({
	selector: 'app-ui-table-v1',
	standalone: true,
	imports: [DatePipe],
	templateUrl: './ui-table-v1.component.html',
	styleUrl: './ui-table-v1.component.scss',
})
export class UiTableV1Component {
	@Input() tableColumns!: TableColumns[];
	@Input() tableDataSet!: any[];
}
