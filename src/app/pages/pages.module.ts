import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosPuestosComponent } from './empleados-puestos/empleados-puestos.component';
import { PersonasComponent } from './personas/personas.component';
import { PuestosComponent } from './puestos/puestos.component';
import { PagesRoutingModule } from './pages-routing.module';

import { MaterialModule } from '../modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmpleadosPuestosComponent,
    PersonasComponent,
    PuestosComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule

  ]
})
export class PagesModule { }
