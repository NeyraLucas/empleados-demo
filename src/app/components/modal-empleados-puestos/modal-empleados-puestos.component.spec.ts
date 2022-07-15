import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEmpleadosPuestosComponent } from './modal-empleados-puestos.component';

describe('ModalEmpleadosPuestosComponent', () => {
  let component: ModalEmpleadosPuestosComponent;
  let fixture: ComponentFixture<ModalEmpleadosPuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEmpleadosPuestosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEmpleadosPuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
