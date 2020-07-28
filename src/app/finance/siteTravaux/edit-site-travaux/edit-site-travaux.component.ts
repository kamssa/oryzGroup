import {Component, HostBinding, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Travaux} from '../../../model/travaux';
import {Router} from '@angular/router';
import {SteTravauxService} from '../../../service/ste-travaux.service';

@Component({
  selector: 'app-edit-site-travaux',
  templateUrl: './edit-site-travaux.component.html',
  styleUrls: ['./edit-site-travaux.component.scss']
})
export class EditSiteTravauxComponent implements OnInit {
  createSiteForm: FormGroup;
  editMode: any;
  name: any;
  travail: Travaux;
  @HostBinding('class.is-open')
  isOpen = false;
  title = 'la liste des sites';
  travaux: Travaux[] = [];
  edit: number;
  travauxId: number;

  constructor(
    private  router: Router, private  fb: FormBuilder,
    private  siteTravauxService: SteTravauxService) { }

  ngOnInit(): void {
    this.initForm();
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
      this.travauxId = data.body.id;
      this.router.navigate(['site/liste/detail', this.travail.id]);
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
