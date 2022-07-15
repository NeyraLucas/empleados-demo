import { TestBed } from '@angular/core/testing';

import { EmpleadoPuestoService } from './empleado-puesto.service';

describe('EmpleadoPuestoService', () => {
  let service: EmpleadoPuestoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadoPuestoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
