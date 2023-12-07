import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IdService } from './id.service';
import { ProductsService } from '../../products/products.service';

describe('IdService', () => {
	let service: IdService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [IdService, ProductsService],
		});

		service = TestBed.inject(IdService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
