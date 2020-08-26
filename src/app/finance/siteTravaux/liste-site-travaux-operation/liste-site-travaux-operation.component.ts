import {Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {SteTravauxService} from '../../../service/ste-travaux.service';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {Observable, Subscription} from 'rxjs';
import {Travaux} from '../../../model/travaux';
import {switchMap} from 'rxjs/operators';
import {AchatTravauxService} from '../../../service/achat-travaux.service';

@Component({
  selector: 'app-liste-site-travaux-operation',
  templateUrl: './liste-site-travaux-operation.component.html',
  styleUrls: ['./liste-site-travaux-operation.component.scss']
})
export class ListeSiteTravauxOperationComponent implements OnInit{
  name: any;
  id: number;
  edit: number;
  devicesXs: boolean;
  mediaSub: Subscription;
  travaux: Travaux;
  travauxId: number;
  solde: number;
  panelOpenState = false;
  travaux$: Observable<Travaux>;
  montant: number;

  constructor(private route: ActivatedRoute,
              private travauxService: SteTravauxService,
              private  router: Router,
              private mediaObserver: MediaObserver,
              private achatTravauxService: AchatTravauxService) {

  }
  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        console.log(result.mqAlias);
        this.devicesXs = result.mqAlias === 'xs' ? true : false;
      });
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.travauxService.getTravauxById(+params.get('id')))
    ).subscribe(result => {
      this.travaux = result.body;
      console.log(this.travaux);
      this.travauxId = result.body.id;
    });
  }
  achat() {
    this.edit = 0;
  }
  loyer() {
    this.edit = 4;
  }

  ouvre() {
    this.edit = 3;
  }

  transport() {
    this.edit = 5;
  }

  autre() {
    this.edit = 6;
   }

  location() {
    this.edit = 2;
  }

  montantChange($event) {
    this.montant = $event;
    console.log('voir le output' , this.montant);
    if ($event){
      this.travauxService.getTravauxById(this.travauxId).subscribe(res => {
      this.travaux = res.body;
      });
    }
  }

}

