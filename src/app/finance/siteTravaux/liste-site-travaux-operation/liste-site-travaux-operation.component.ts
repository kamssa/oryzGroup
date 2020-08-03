import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {SteTravauxService} from "../../../service/ste-travaux.service";
import {MediaChange, MediaObserver} from "@angular/flex-layout";
import {Observable, Subscription} from "rxjs";
import {Travaux} from "../../../model/travaux";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-liste-site-travaux-operation',
  templateUrl: './liste-site-travaux-operation.component.html',
  styleUrls: ['./liste-site-travaux-operation.component.scss']
})
export class ListeSiteTravauxOperationComponent implements OnInit {
  name: any;
  id: number;
  edit: number;
  devicesXs: boolean;
  mediaSub: Subscription;
  travaux: Travaux;
  travauxId: number;
  travaux$: Observable<Travaux>;
  constructor(private route: ActivatedRoute,
              private travauxService: SteTravauxService, private  router: Router,
              private mediaObserver: MediaObserver) {

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
      this.travauxId = result.body.id;
    });
  }
  getTravauxById(){
    this.travauxService.getTravauxById(this.id).subscribe( res => {
      this.travaux = res.body;
    });
  }

  achat() {
    this.edit = 0;

  }

  salaire() {
    this.edit = 1;
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
  }

