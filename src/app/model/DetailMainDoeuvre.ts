import {Fournisseur} from "./Fournisseur";
import {Employe} from "./Employe";

export class DetailMainOeuvre {
  constructor(public id?: number,
              public version?: number,
              public salaire?: number,
              public montantVerser?: number,
              public reste?: number,
              public  employe?: Employe) {
  }
}
