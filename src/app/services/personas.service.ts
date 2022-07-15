import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  constructor() {}

  /**
   * getAllPersonas
   */
  public getAllPersonas() {
    const dataPersona: Array<Persona> = this.getLocalStorage('persona');
    return dataPersona;
  }

  /**
   * getPersonasById
   */
  public getPersonasById(uid: number): Persona[] {
    const data: Array<Persona> = JSON.parse(localStorage.getItem('persona')!);
    const id: Persona[] = data.filter((e) => e.id === uid);
    return id;
  }

  /**
   * insertPersona
   */
  public insertPersona(body: Persona) {
    return body;
  }

  /**
   * updatePersona
   */
  public updatePersona(body: Persona, uid: number){
    //obtenemos los datos del localStorage
    const getData: Array<Persona> = JSON.parse(
      localStorage.getItem('persona')!
    );
    //get index de localstorage
    let indexArr: number = getData.findIndex((e) => e.id === uid);
    //delete elemento a modificar
    const flat: any = getData.filter((e, i) => i !== indexArr);
    //agregar elemento modificado
    flat.push(body);

    this.saveNewLocalStorage('persona', flat);
  }

  /**
   * deletePersona
   */
  public deletePersona(uid: number) {
    if (window.confirm(`Desea eliminar el id ${uid}? `)) {
      const data: Array<Persona> = JSON.parse(localStorage.getItem('persona')!);

      const id = data.filter((e) => e.id !== uid);
      localStorage.setItem('persona', JSON.stringify(id));
    }
  }

  public saveLocalStorage(name: string, data: any) {
    const getData: any = JSON.parse(localStorage.getItem(name)!);
    getData.push(data);
    localStorage.setItem(name, JSON.stringify(getData));
  }

  public saveNewLocalStorage(name: string, data: any){
    localStorage.setItem(name, JSON.stringify(data));
  }

  public getLocalStorage(name: string): Array<Persona> {
    let data: Array<Persona>;
    if (localStorage.getItem(name)) {
      data = JSON.parse(localStorage.getItem(name)!);
    } else {
      console.log('No hay datos');
      localStorage.setItem(name, '[]');
      data = [];
    }

    return data;
  }
}
