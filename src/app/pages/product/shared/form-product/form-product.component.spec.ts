import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductComponent } from './form-product.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap, UrlSegment } from '@angular/router';

describe('FormProductComponent', () => {
	let component: FormProductComponent;
	let fixture: ComponentFixture<FormProductComponent>;
	let activatedRouteStub: Partial<ActivatedRoute>;

	beforeEach(async () => {
		activatedRouteStub = {
			snapshot: {
				paramMap: {
					get: (name: string): string | null => {
						return null;
					},
					has: (name: string): boolean => {
						return false;
					},
					getAll: (name: string): string[] => {
						return [];
					},
					keys: [],
				} as ParamMap,
				url: [new UrlSegment('', {})],
				params: {},
				queryParams: {},
				fragment: '',
				data: {},
				outlet: '',
				component: null,
				routeConfig: null,
			} as ActivatedRouteSnapshot,
		} as ActivatedRoute;

		await TestBed.configureTestingModule({
			imports: [FormProductComponent, HttpClientTestingModule],
			providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub }],
		}).compileComponents();

		fixture = TestBed.createComponent(FormProductComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
