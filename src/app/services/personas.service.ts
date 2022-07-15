import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.interface';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  //sl es el servicio en comun - localstorage
  constructor(private sl: CommonService) {}

  /**
   * getAllPersonas
   */
  public getAllPersonas() {
    return this.sl.getLocalStorage('persona');
  }

  /**
   * getPersonasById
   */
  public getPersonasById(uid: number): Persona[] {
    return this.sl.getIdLocalStorage('persona', uid);
  }

  /**
   * insertPersona
   */
  public insertPersona(body: Persona) {
    this.sl.saveLocalStorage('persona', body);
  }

  /**
   * updatePersona
   */
  public updatePersona(body: Persona, uid: number) {
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

    this.sl.saveNewLocalStorage('persona', flat);
  }

  /**
   * deletePersona
   */
  public deletePersona(uid: number) {
    if (window.confirm(`Desea eliminar el id ${uid}? `)) {
      this.sl.deleteLocalStorageById('persona', uid);
    }
  }
}
