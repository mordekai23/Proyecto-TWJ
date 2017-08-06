/**
 * Created by Pc Xtreme on 06/08/2017.
 */

export class UsuarioClass {

  constructor(public nombre?:string,
              public password?:string,
              public id?:number,
              public createdAt?:Date,
              public updatedAt?:Date,
              public editar?:boolean){
  }
}
