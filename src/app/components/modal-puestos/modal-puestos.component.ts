import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Puesto } from 'src/app/models/puesto.interface';
import { PuestosService } from 'src/app/services/puestos.service';

@Component({
  selector: 'app-modal-puestos',
  templateUrl: './modal-puestos.component.html',
  styleUrls: ['./modal-puestos.component.scss'],
})
export class ModalPuestosComponent implements OnInit {
  public formPuesto!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModalPuestosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Array<Puesto>,
    private ps: PuestosService
  ) {}

  ngOnInit(): void {
    this.formPuesto = this._myInitialForm();
  }

  private _myInitialForm() {
    return new FormGroup({
      id: new FormControl(this.data[0].id, [Validators.required]),
      nombre: new FormControl(this.data[0].nombre, [Validators.required]),
    });
  }

  UpdateData() {
    if (this.formPuesto.valid) {
      const puesto = this.formPuesto.value;
      try {
        alert('Puesto actualizado');
        this.ps.updatePuesto(puesto, this.data[0].id);
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
