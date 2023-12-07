import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiModalV1Component } from './ui-modal-v1.component';

describe('UiModalV1Component', () => {
	let component: UiModalV1Component;
	let fixture: ComponentFixture<UiModalV1Component>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiModalV1Component],
		}).compileComponents();

		fixture = TestBed.createComponent(UiModalV1Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
