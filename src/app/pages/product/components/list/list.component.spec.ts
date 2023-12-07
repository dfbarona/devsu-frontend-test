import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap, UrlSegment } from '@angular/router';

describe('ListComponent', () => {
	let component: ListComponent;
	let fixture: ComponentFixture<ListComponent>;
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
			imports: [ListComponent, HttpClientTestingModule],
			providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub }],
		}).compileComponents();

		fixture = TestBed.createComponent(ListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
