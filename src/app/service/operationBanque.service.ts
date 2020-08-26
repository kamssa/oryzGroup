import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {Resultat} from '../model/resultat';
import {AchatTravaux} from '../model/AchatTravaux';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {Operation} from '../model/OperationBanque';
import {MessageService} from './message.service';



@Injectable({
  providedIn: 'root'
})
export class OperationBanqueService {
  // observables sources
  private travauxCreerSource = new Subject<Resultat<AchatTravaux>>();
  private travauxModifSource = new Subject<Resultat<AchatTravaux>>();
  private travauxFiltreSource = new Subject<string>();
  private travauxSupprimeSource = new Subject<Resultat<boolean>>();


// observables streams
  travauxCreer$ = this.travauxCreerSource.asObservable();
  travauxModif$ = this.travauxModifSource.asObservable();
  travauxFiltre$ = this.travauxFiltreSource.asObservable();
  travauxSupprime$ = this.travauxSupprimeSource.asObservable();

  constructor(private  http: HttpClient, private messageService: MessageService) {
  }

  getAllOperations(): Observable<Resultat<Operation[]>> {
    return this.http.get<Resultat<Operation[]>>(`${environment.apiUrl}/api/operation`);
  }

  ajoutOperation(op: Operation): Observable<Resultat<Operation>> {
    console.log('methode du service qui ajoute une operation', op);
    return this.http.post<Resultat<Operation>>(`${environment.apiUrl}/api/operation`, op);
  }
  private log(message: string) {
    this.messageService.add('travauxService: ' + message);

  }
  ///////////////////////////////////////////
  // recuper les erreurs


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {


      console.error(error);


      this.log(`${operation} non disponible: ${error.message}`);


      return of(result as T);
    };
  }
}
