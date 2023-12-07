import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutPageComponent } from './layout-page.component';
import { ActivatedRoute, ParamMap, ActivatedRouteSnapshot, UrlSegment } from '@angular/router';
import { AlertsService } from '../../services/alerts/alerts.service';
import { Title } from '@angular/platform-browser';

describe('LayoutPageComponent', () => {
	let component: LayoutPageComponent;
	let fixture: ComponentFixture<LayoutPageComponent>;
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
			imports: [LayoutPageComponent],
			providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub }, AlertsService, Title],
		}).compileComponents();

		fixture = TestBed.createComponent(LayoutPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
