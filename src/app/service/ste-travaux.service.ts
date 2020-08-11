import { Injectable } from '@angular/core';
import {Observable, of, Subject} from "rxjs";
import {Resultat} from "../model/resultat";
import {Travaux} from "../model/travaux";
import {HttpClient} from "@angular/common/http";
import {catchError, map, tap} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class SteTravauxService {
  private urlTravaux = 'http://localhost:8080/api/travaux';
  private urlRecherche = 'http://localhost:8080/api/rechemc/?mc=';

  // observables sources
  private travauxCreerSource = new Subject<Resultat<Travaux>>();
  private travauxModifSource = new Subject<Resultat<Travaux>>();
  private travauxFiltreSource = new Subject<string>();
  private travauxSupprimeSource = new Subject<Resultat<boolean>>();


// observables streams
  travauxCreer$ = this.travauxCreerSource.asObservable();
  travauxModif$ = this.travauxModifSource.asObservable();
  travauxFiltre$ = this.travauxFiltreSource.asObservable();
  travauxSupprime$ = this.travauxSupprimeSource.asObservable();

  constructor(private  http: HttpClient, private messageService: MessageService) {
  }

  getAllTravaux(): Observable<Resultat<Travaux[]>> {
    return this.http.get<Resultat<Travaux[]>>(this.urlTravaux);
  }

  ajoutTravaux(travaux: Travaux): Observable<Resultat<Travaux>> {
    console.log('methode du service qui ajoute un travail', travaux);
    return this.http.post<Resultat<Travaux>>(`${environment.apiUrl}/api/travaux`, travaux);
  }

  modifierTravaux(travauxModif: Travaux): Observable<Resultat<Travaux>> {
    return this.http.put<Resultat<Travaux>>(this.urlTravaux, travauxModif);
  }
  getTravauxById(id: number): Observable<Resultat<Travaux>> {
    return this.http.get<Resultat<Travaux>>(`${this.urlTravaux}/${id}`);
  }
  rechercheTravauxParMc(mc: string): Observable<Array<Travaux>> {
    return this.http.get<Resultat<Array<Travaux>>>(`${this.urlRecherche}${mc}`)
      .pipe(map(res => res.body,
        tap(res =>
          this.log(`travaux trouve =${res}`))),
        catchError(this.handleError<Array<Travaux>>('rechercheTravauxParMc'))
      );

  }
  // supprimer un travail
  supprimerTravaux(id: number): Observable<Resultat<boolean>> {
    return this.http.delete<Resultat<boolean>> (`${this.urlTravaux}/${id}`);
  }


   travauxCreer(res: Resultat<Travaux>) {
    console.log('Travail a ete  creer correctement essaie source');
    this.travauxCreerSource.next(res);
  }

  abonnesModif(res: Resultat<Travaux>) {
    this.travauxModifSource.next(res);
  }

  filtreTravaux(text: string) {
    this.travauxFiltreSource.next(text);
  }
  travauxsupprime(res: Resultat<boolean>){
    this.travauxSupprimeSource.next(res);
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
