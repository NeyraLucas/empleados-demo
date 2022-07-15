import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPuestosComponent } from './modal-puestos.component';

describe('ModalPuestosComponent', () => {
  let component: ModalPuestosComponent;
  let fixture: ComponentFixture<ModalPuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPuestosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
