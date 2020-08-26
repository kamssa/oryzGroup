import {Injectable} from '@angular/core';
import {Observable, of, Subject} from "rxjs";
import {Resultat} from "../model/resultat";
import {Travaux} from "../model/travaux";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "./message.service";
import {environment} from "../../environments/environment";
import {catchError, map, tap} from "rxjs/operators";
import {AchatTravaux} from "../model/AchatTravaux";

@Injectable({
  providedIn: 'root'
})
export class AchatTravauxService {

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

  getAllTravaux(): Observable<Resultat<AchatTravaux[]>> {
    return this.http.get<Resultat<AchatTravaux[]>>(`${environment.apiUrl}/api/achat`);
  }

  ajoutAchatTravaux(achatTravaux: AchatTravaux): Observable<Resultat<AchatTravaux>> {
    console.log('methode du service qui ajoute un achat', achatTravaux);
    return this.http.post<Resultat<AchatTravaux>>(`${environment.apiUrl}/api/achat`, achatTravaux);
  }
  modifAchatTravaux(achatTravaux: AchatTravaux): Observable<Resultat<AchatTravaux>> {
    console.log('methode du service qui modifie un achat', achatTravaux);
    return this.http.put<Resultat<AchatTravaux>>(`${environment.apiUrl}/api/achat`, achatTravaux);
  }

  getAchatTravauxById(id: AchatTravaux): Observable<Resultat<AchatTravaux>> {
    return this.http.get<Resultat<AchatTravaux>>(`${environment.apiUrl}/api/achats/${id}`);
  }

// recuperer achat par id travaux
  getAchatTravauxByTravaux(id: number): Observable<AchatTravaux[]> {
    // @ts-ignore
    return this.http.get<Resultat<AchatTravaux[]>>(`${environment.apiUrl}/api/achat/${id}`)
      .pipe(map(res => res.body,
        tap(res =>
          this.log(`travaux trouve =${res}`))),
        catchError(this.handleError<Resultat<AchatTravaux[]>>('getAchatTravauxByTravaux'))
      );
  }
  supprimerUnAchat(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/api/achat/${id}`);

  }
  supprimerDetail(id: number, idDetail: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/api/DeleteDetail/${id}/${idDetail}`);

  }
  travauxCreer(res: Resultat<AchatTravaux>) {
    console.log('Travail a ete  creer correctement essaie source');
    this.travauxCreerSource.next(res);
  }

  abonnesModif(res: Resultat<AchatTravaux>) {
    this.travauxModifSource.next(res);
  }

  filtreTravaux(text: string) {
    this.travauxFiltreSource.next(text);
  }

  travauxsupprime(res: Resultat<boolean>) {
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
