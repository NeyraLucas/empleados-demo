import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmpleadoPuesto } from 'src/app/models/empleado_puesto.interface';
import { EmpleadoPuestoService } from 'src/app/services/empleado-puesto.service';
import { PersonasService } from 'src/app/services/personas.service';
import { PuestosService } from 'src/app/services/puestos.service';

@Component({
  selector: 'app-modal-empleados-puestos',
  templateUrl: './modal-empleados-puestos.component.html',
  styleUrls: ['./modal-empleados-puestos.component.scss'],
})
export class ModalEmpleadosPuestosComponent implements OnInit {
  puesto: any = [];
  personas: any = [];
  //form
  public formModal!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModalEmpleadosPuestosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Array<EmpleadoPuesto>,
    private eps: EmpleadoPuestoService,
    private sp: PersonasService,
    private spe: PuestosService
  ) {}

  ngOnInit(): void {
    this.formModal = this._myInitialForm();
    this.puesto = this.spe.getAllPuestos();
    this.personas = this.sp.getAllPersonas();
  }

  private _myInitialForm() {
    return new FormGroup({
      id: new FormControl(this.data[0].id, [Validators.required]),
      puesto: new FormControl('', [Validators.required]),
      persona: new FormControl('', [Validators.required]),
    });
  }

  UpdateData() {
    if (this.formModal.valid) {
      const contact = this.formModal.value;
      try {
        alert('Formulario enviado');
        this.eps.updateEmpleadoPuesto(contact, this.data[0].id);
        this.onClose();
      } catch (err) {
        console.error(err);
      }
    } else {
      alert('Error en el formulario');
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}
