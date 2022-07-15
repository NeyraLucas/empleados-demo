import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalPuestosComponent } from 'src/app/components/modal-puestos/modal-puestos.component';
import { Puesto } from 'src/app/models/puesto.interface';
import { PuestosService } from 'src/app/services/puestos.service';

@Component({
  selector: 'app-puestos',
  templateUrl: './puestos.component.html',
  styleUrls: ['./puestos.component.scss'],
})
export class PuestosComponent implements OnInit {
  //columns
  displayedColumns: string[] = ['id', 'nombre', 'actions'];
  listPuestos!: Array<Puesto>;

  //form personas
  formPuesto = this.fb.group({
    id: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
  });
  constructor(
    private fb: FormBuilder,
    private ps: PuestosService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.listPuestos = this.ps.getAllPuestos();
  }

  SendaData() {
    if (this.formPuesto.valid) {
      const puesto: any = this.formPuesto.value;
      try {
        alert('Formulario enviado');
        //save localstorage
        this.ps.insertPuesto(puesto);
        this.listPuestos = this.ps.getAllPuestos();

        this.formPuesto.reset();
      } catch (err) {
        console.error(err);
      }
    } else {
      alert('Error en el formulario');
    }
  }

  delete(uid: number) {
    this.ps.deletePuesto(uid);
    this.listPuestos = this.ps.getAllPuestos();
  }

  openDialog(uid: number) {
    const dialogRef = this.dialog.open(ModalPuestosComponent, {
      width: '50%',
      data: this.ps.getPuestosById(uid),
    });
  }
}
