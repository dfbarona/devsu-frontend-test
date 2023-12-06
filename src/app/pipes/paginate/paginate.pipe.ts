import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'paginate',
	standalone: true,
})
export class PaginatePipe implements PipeTransform {
	transform(records: any[], page: number, itemsPerPage: number): any {
		return records.slice(page, Number(page) + Number(itemsPerPage));
	}
}
