import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosPuestosComponent } from './empleados-puestos/empleados-puestos.component';
import { PersonasComponent } from './personas/personas.component';
import { PuestosComponent } from './puestos/puestos.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {path: 'personas', component: PersonasComponent },
      {path: 'puestos', component: PuestosComponent },
      {path: 'empleados-puestos', component: EmpleadosPuestosComponent },
      {path: '**', redirectTo: 'personas'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
