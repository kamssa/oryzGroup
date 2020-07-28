import {Travaux} from './travaux';
import {DetailAchatTravaux} from './DtailAchat';

export class AchatTravaux {

constructor(public id?: number,
            public version?: number,
            public libelle?: string,
            public date?: Date,
            public total?: number,
            public travaux?: Travaux,
            public detailAchat?: DetailAchatTravaux[]) {
}
}
