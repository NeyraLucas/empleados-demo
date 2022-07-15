import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { ModalPersonasComponent } from './components/modal-personas/modal-personas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalPuestosComponent } from './components/modal-puestos/modal-puestos.component';
import { ModalEmpleadosPuestosComponent } from './components/modal-empleados-puestos/modal-empleados-puestos.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalPersonasComponent,
    ModalPuestosComponent,
    ModalEmpleadosPuestosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
