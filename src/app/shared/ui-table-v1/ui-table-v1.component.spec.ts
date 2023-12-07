import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiTableV1Component } from './ui-table-v1.component';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap, UrlSegment } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UiTableV1Component', () => {
	let component: UiTableV1Component;
	let fixture: ComponentFixture<UiTableV1Component>;
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
			imports: [UiTableV1Component, HttpClientTestingModule],
			providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub }],
		}).compileComponents();

		fixture = TestBed.createComponent(UiTableV1Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
