import { Injectable } from '@angular/core';
import { EmpleadoPuesto } from '../models/empleado_puesto.interface';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoPuestoService {
  constructor(private sl: CommonService) {}

  /**
   * getAllEmpleadoPuesto
   */
  public getAllEmpleadoPuesto() {
    return this.sl.getLocalStorage('empleadopuesto');
  }

  /**
   * getEmpleadoPuesto
   */
  public getEmpleadoPuestoById(uid: number): EmpleadoPuesto[] {
    return this.sl.getIdLocalStorage('empleadopuesto',uid);
  }

  /**
   * insertEmpleadoPuesto
   */
  public insertEmpleadoPuesto(body: any) {
    this.sl.saveLocalStorageEmpleadoPuesto('empleadopuesto', body);
  }

  /**
   * updatePersona
   */
  public updateEmpleadoPuesto(body:any, uid:number) {
    this.sl.saveNewLocalStorageEmpleadoPuesto('empleadopuesto', body,uid);
  }

  /**
   * deleteEmpleadoPuesto
   */
  public deleteEmpleadoPuesto(uid: number) {
    if (window.confirm(`Desea eliminar el id ${uid}? `)) {
      this.sl.deleteLocalStorageById('empleadopuesto', uid);
    }
  }
}
