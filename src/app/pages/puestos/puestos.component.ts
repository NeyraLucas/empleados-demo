import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Puesto } from 'src/app/models/puesto.interface';

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
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
