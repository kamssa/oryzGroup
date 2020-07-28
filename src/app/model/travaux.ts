import {Site} from './site';

export class Travaux {
  constructor(public  id?: number,
              public  version?: number,
              public  libelle?: string,
              public  budget?: number,
              public  accompte?: number,
              public site?: Site) {
  }
}
