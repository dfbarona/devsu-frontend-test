import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTableV1Component } from './ui-table-v1.component';

describe('UiTableV1Component', () => {
	let component: UiTableV1Component;
	let fixture: ComponentFixture<UiTableV1Component>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiTableV1Component],
		}).compileComponents();

		fixture = TestBed.createComponent(UiTableV1Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
