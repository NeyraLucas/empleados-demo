import { Injectable } from '@angular/core';
import { EmpleadoPuesto } from '../models/empleado_puesto.interface';
import { Persona } from '../models/persona.interface';
import { Puesto } from '../models/puesto.interface';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  data = [];

  constructor() {}

  /**
   *
   * @returns data del local
   */
  public getLocalStorage(name: string): Array<any> {
    let data: Array<any>;
    if (localStorage.getItem(name)) {
      data = JSON.parse(localStorage.getItem(name)!);
    } else {
      //sino exite, la crea
      console.log('No hay datos');
      localStorage.setItem(name, '[]');
      data = [];
    }

    return data;
  }

  /**
   *
   * @param name nombre en el localstorage
   * @param data info del forms
   */

  public saveNewLocalStorage(name: string, data: any) {
    localStorage.setItem(name, JSON.stringify(data));
  }

  /**
   *
   * @param name nombre en el localstorage
   * @param data info del forms
   */
  public saveLocalStorage(name: string, data: any) {
    const getData: any = JSON.parse(localStorage.getItem(name)!);
    getData.push(data);
    localStorage.setItem(name, JSON.stringify(getData));
  }

  public getIdLocalStorage(name: string, uid: number) {
    const data: Array<any> = JSON.parse(localStorage.getItem(name)!);
    const id: any[] = data.filter((e) => e.id === uid);
    return id;
  }

  public deleteLocalStorageById(name: string, uid: number) {
    const data: Array<any> = JSON.parse(localStorage.getItem(name)!);

    const id = data.filter((e) => e.id !== uid);
    localStorage.setItem(name, JSON.stringify(id));
  }

  /**
   * saveLocalStorageEmpleadoPuesto
   */
  public saveLocalStorageEmpleadoPuesto(name: string, body: any) {
    const getData: any = JSON.parse(localStorage.getItem(name)!);
    //get empleado
    const empleado = this.getIdLocalStorage('persona', body.persona);
    //get puesto
    const puesto = this.getIdLocalStorage('puesto', body.puesto);

    //save data
    let arr = {
      id: body.id,
      puesto: puesto,
      persona: empleado,
    };

    getData.push(arr);
    localStorage.setItem(name, JSON.stringify(getData));
  }

  /**
   * saveNewLocalStorageEmpleadoPuesto
   */
  public saveNewLocalStorageEmpleadoPuesto(
    name: string,
    body: any,
    uid: number
  ) {
    const getData: Array<EmpleadoPuesto> = JSON.parse(
      localStorage.getItem(name)!
    );
    //get empleado
    const empleado = this.getIdLocalStorage('persona', body.persona);
    //get puesto
    const puesto = this.getIdLocalStorage('puesto', body.puesto);

    //get index de localstorage
    let indexArr: number = getData.findIndex((e) => e.id === body.id);
    //delete elemento a modificar
    const flat: any = getData.filter((e, i) => i !== indexArr);
    //save data
    let arr = {
      id: body.id,
      puesto: puesto,
      persona: empleado,
    };
    //agregar elemento modificado
    flat.push(arr);
    localStorage.setItem(name, JSON.stringify(flat));
  }
}
