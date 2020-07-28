import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SteTravauxService} from "../../../service/ste-travaux.service";
import {Travaux} from "../../../model/travaux";
import {MediaChange, MediaObserver} from "@angular/flex-layout";
import {BehaviorSubject, Observable, Subscription} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";


@Component({
  selector: 'app-manage-site-travaux',
  templateUrl: './manage-site-travaux.component.html',
  styleUrls: ['./manage-site-travaux.component.scss']
})
export class ManageSiteTravauxComponent implements OnInit {

  createSiteForm: FormGroup;
  editMode: any;
  name: any;
  travail: Travaux;
  @HostBinding('class.is-open')
  isOpen = false;
  title = 'la liste des sites';
  travaux: Travaux[] = [];
  selectedTravaux: Travaux;
  messageSucces: string;
  messageServiceErreur: string;
  statut: number;
  resultat: Travaux[] = [];
  oTravaux: Observable<Travaux[]>;
  searchTravauxSource = new BehaviorSubject<string>('');
  pathNullImage = './assets/images/image3.jpg';

  constructor(
    private  router: Router, private  fb: FormBuilder,
    private  siteTravauxService: SteTravauxService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // this.initForm();
    this.toutsLesTravaux();
    this.oTravaux = this.searchTravauxSource
      .pipe(debounceTime(300),
        distinctUntilChanged(),
        switchMap(mc => mc ? this.siteTravauxService.rechercheTravauxParMc(mc)
          : this.siteTravauxService.rechercheTravauxParMc(''))
      );
    this.oTravaux.subscribe(result => {
      console.log('voir observable', result);
      // this.resultat = result.body;
    });
    this.siteTravauxService.travauxCreer$.subscribe(res => {
        this.travaux.push(res.body);
        this.messageSucces = res.messages.toString();
        this.snackBar.open(this.messageSucces, '', {
          duration: 3000
        });
      }
    );
    this.siteTravauxService.travauxModif$.subscribe(res => {
        this.travaux[this.findSelectedTravauxIndex()] = res.body;
        this.messageSucces = res.messages.toString();
        this.snackBar.open(this.messageSucces, '', {
          duration: 3000
        });
      }
    );
    this.siteTravauxService.travauxSupprime$.subscribe(
      res => {
        let index: number;
        index = this.findSelectedTravauxIndex();
        this.travaux = this.travaux.filter((val, i) => i !== index);
        this.messageSucces = res.messages.toString();
        this.snackBar.open(this.messageSucces, '', {
          duration: 3000
        });
      });
    this.siteTravauxService.travauxFiltre$
      .subscribe(lib => {
          this.search(lib);
        }
      );
    /* this.messageService.message$.subscribe(msg => {
         this.messageServiceErreur = msg.toString();
         this.closeMessage();
       }

     );*/
  }
  initForm(): void {
    this.createSiteForm = this.fb.group({
      libelle: [''],
      budget: [''],
      accompte: [''],
      site: this.fb.group({
        nom: ['']
      }),
    });
  }
  toutsLesTravaux() {
    this.siteTravauxService.getAllTravaux()
      .subscribe(data => {
        this.travaux = data.body;
        this.statut = data.status;
      });

  }
  findSelectedTravauxIndex(): number {
    return this.travaux.indexOf(this.selectedTravaux);
  }
  onSubmit(): void {
    const formValue = this.createSiteForm.value;
    const  travail = new  Travaux(
      null,
      null,
      formValue['libelle'],
      formValue['budget'],
      formValue['accompte'],
      formValue['site']
    );

    this.siteTravauxService.ajoutTravaux(travail).subscribe(data => {
      console.log(data.body);
      this.travail = data.body;
      this.router.navigate(['site/manage', this.travail.id]);
    });
  }

  search(mc: string) {

    this.searchTravauxSource.next(mc);
  }

  onSelect(travail: Travaux) {
    this.selectedTravaux = travail;
    //  this.router.navigate(['enseignant/liste', enseignant.id]);
  }

  closeMessage() {
    setTimeout(() => {
      this.messageServiceErreur = '';
    }, 5000);
  }
}