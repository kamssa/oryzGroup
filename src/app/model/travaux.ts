import {Site} from './site';

export class Travaux {
  constructor(public  id?: number,
              public  version?: number,
              public  nomChantier?: string,
              public  numeroBon?: string,
              public  accompte?: number,
              public  budget?: number,
              public  reste?: number,
              public  total?: number,
              public  date?: Date,
              public  dateLivraison?: Date,
              public site?: Site) {
  }
}
