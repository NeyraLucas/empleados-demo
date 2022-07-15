import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalEmpleadosPuestosComponent } from 'src/app/components/modal-empleados-puestos/modal-empleados-puestos.component';
import { EmpleadoPuesto } from 'src/app/models/empleado_puesto.interface';
import { Persona } from 'src/app/models/persona.interface';
import { Puesto } from 'src/app/models/puesto.interface';
import { EmpleadoPuestoService } from 'src/app/services/empleado-puesto.service';
import { PersonasService } from 'src/app/services/personas.service';
import { PuestosService } from 'src/app/services/puestos.service';

@Component({
  selector: 'app-empleados-puestos',
  templateUrl: './empleados-puestos.component.html',
  styleUrls: ['./empleados-puestos.component.scss'],
})
export class EmpleadosPuestosComponent implements OnInit {
  //columns
  displayedColumns: string[] = ['id', 'puesto', 'persona', 'actions'];
  listEmpleadosPuestos!: Array<EmpleadoPuesto>;
  personas!: Array<Persona>;
  puestos!: Array<Puesto>;

  //form personas
  formEmpleadoPuesto = this.fb.group({
    id: ['', [Validators.required]],
    puesto: ['', [Validators.required]],
    persona: ['', [Validators.required]],
  });
  constructor(
    private eps: EmpleadoPuestoService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private personaService: PersonasService,
    private puestoService: PuestosService
  ) {}

  ngOnInit(): void {
    this.personas = this.personaService.getAllPersonas();
    this.puestos = this.puestoService.getAllPuestos();

    this.listEmpleadosPuestos = this.eps.getAllEmpleadoPuesto();
  }

  SendaData() {
    if (this.formEmpleadoPuesto.valid) {
      const contact: any = this.formEmpleadoPuesto.value;
      this.eps.insertEmpleadoPuesto(contact);
    }
  }

  openDialog(uid: number) {
    const dialogRef = this.dialog.open(ModalEmpleadosPuestosComponent, {
      width: '35%',
      data: this.eps.getEmpleadoPuestoById(uid),
    });
  }

  delete(uid: number) {
    this.eps.deleteEmpleadoPuesto(uid);
    this.listEmpleadosPuestos = this.eps.getAllEmpleadoPuesto();
  }
}
