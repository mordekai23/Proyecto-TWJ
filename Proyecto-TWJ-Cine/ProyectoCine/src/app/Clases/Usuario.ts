/**
 * Created by Pc Xtreme on 06/08/2017.
 */

export class UsuarioClass {

  constructor(public id?: number,
              public nombre?: string,
              public correo?: string,
              public password?: string,
              public createdAt?: Date,
              public updateAt?: Date) {
  }
}
