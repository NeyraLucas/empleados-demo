import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalPersonasComponent } from 'src/app/components/modal-personas/modal-personas.component';
import { Persona } from 'src/app/models/persona.interface';
import { PersonasService } from 'src/app/services/personas.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss'],
})
export class PersonasComponent implements OnInit, OnChanges {
  //columns
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'date', 'actions'];
  listPersonas!: Array<Persona>;

  //form personas
  formPersonas = this.fb.group({
    id: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    fecha: ['', [Validators.required]],
  });

  constructor(
    private sp: PersonasService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.listPersonas = this.sp.getAllPersonas();
  }

  ngOnChanges() {
    this.listPersonas = this.sp.getAllPersonas();
  }

  SendaData() {
    if (this.formPersonas.valid) {
      const contact: any = this.formPersonas.value;
      try {
        alert('Formulario enviado');
        //save localstorage
        this.sp.insertPersona(contact);
        this.listPersonas = this.sp.getAllPersonas();

        this.formPersonas.reset();
      } catch (err) {
        console.error(err);
      }
    } else {
      alert('Error en el formulario');
    }
  }

  delete(uid: number) {
    this.sp.deletePersona(uid);
    this.listPersonas = this.sp.getAllPersonas();
  }

  openDialog(uid: number) {
    const dialogRef = this.dialog.open(ModalPersonasComponent, {
      width: '40%',
      data: this.sp.getPersonasById(uid),
    });
  }
}
