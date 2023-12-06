import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filterText',
	standalone: true,
})
export class FilterPipe implements PipeTransform {
	transform(value: any, ...arg: any): any {
		if (arg === '' || arg.toString().length < 3) return value;
		const resultRecords = [];
		for (const record of value) {
			if (record.name.toLowerCase().indexOf(arg.toString().toLowerCase()) > -1) {
				resultRecords.push(record);
			}
		}

		return resultRecords;
	}
}
