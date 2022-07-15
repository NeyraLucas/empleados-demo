import { Injectable } from '@angular/core';
import { Puesto } from '../models/puesto.interface';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class PuestosService {
  //sl es el servicio en comun - localstorage
  constructor(private sl: CommonService) {}

  /**
   * getAllPuestos
   */
  public getAllPuestos() {
    return this.sl.getLocalStorage('puesto');
  }

  /**
   * getPuestosById
   */
  public getPuestosById(uid: number): Puesto[] {
    return this.sl.getIdLocalStorage('puesto', uid);
  }

  /**
   * insertPuesto
   */
  public insertPuesto(body: Puesto) {
    this.sl.saveLocalStorage('puesto', body);
  }

  /**
   * updatePuesto
   */
  public updatePuesto(body: Puesto, uid: number) {
    //obtenemos los datos del localStorage
    const getData: Array<Puesto> = JSON.parse(
      localStorage.getItem('puesto')!
    );
    //get index de localstorage
    let indexArr: number = getData.findIndex((e) => e.id === uid);
    //delete elemento a modificar
    const flat: any = getData.filter((e, i) => i !== indexArr);
    //agregar elemento modificado
    flat.push(body);

    this.sl.saveNewLocalStorage('puesto', flat);
  }

  /**
   * deletePuesto
   */
  public deletePuesto(uid: number) {
    if (window.confirm(`Desea eliminar el id ${uid}? `)) {
      this.sl.deleteLocalStorageById('puesto', uid);
    }
  }
}
