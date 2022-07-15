import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Persona } from 'src/app/models/persona.interface';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-modal-personas',
  templateUrl: './modal-personas.component.html',
  styleUrls: ['./modal-personas.component.scss']
})
export class ModalPersonasComponent implements OnInit {

  //form
  public formModal!: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<ModalPersonasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Array<Persona>, private ps: PersonasService) { }

  ngOnInit(): void {
    this.formModal = this._myInitialForm();
  }


  private _myInitialForm() {
    return new FormGroup({
      id: new FormControl(this.data[0].id, [Validators.required]),
      nombre: new FormControl(this.data[0].nombre, [Validators.required]),
      apellido: new FormControl(this.data[0].apellido, [Validators.required]),
      fecha: new FormControl(this.data[0].fechaNacimiento),
    });
  }

  UpdateData(){

    if (this.formModal.valid) {
      const contact = this.formModal.value;
      try {
        alert('Formulario enviado');
        this.ps.updatePersona(contact, this.data[0].id);
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
