import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {AchatTravaux} from '../../../model/AchatTravaux';
import {Router} from '@angular/router';
import {DetailAchatTravaux} from '../../../model/DtailAchat';
import {Materiaux} from "../../../model/Materiaux";
import {Fournisseur} from "../../../model/Fournisseur";

@Component({
  selector: 'app-edit-achat-travaux',
  templateUrl: './edit-achat-travaux.component.html',
  styleUrls: ['./edit-achat-travaux.component.scss']
})
export class EditAchatTravauxComponent implements OnInit {
  achatTravauxForm: FormGroup;
  editMode = false;
  @Input() travauxId: number;
  montant: number;


  constructor(private  fb: FormBuilder, private  router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.achatTravauxForm = this.fb.group({
      id: '',
      version: '',
      libelle: '',
      date: '',
      total: '',
      travaux: this.fb.group({
        id: '',
        version: '',
        libelle: '',
        budget: '',
        accompte: ''
      }),
      itemsRows : this.fb.array([this.initItemRows()])

    });
  }
  get formArr(){
  return this.achatTravauxForm.get('itemsRows') as FormArray;

  }
  initItemRows(){
   return this.fb.group({
         id: [''],
         version: [''],
         prix_unitaire: [''],
         quantite: [''],
         frais: [''],
         montant: [''],
         materiaux: this.fb.group({
           id: [''],
           version: [''],
           libelle: ['']
         }),
       fournisseur: this.fb.group({
       id: [''],
       version: [''],
       libelle: ['']
     }),
   });
  }
  onSubmit(){
    const  formValue = this.achatTravauxForm.value;
    let mat = new Materiaux(
      1,
      0,
      formValue['materiaux']
      );
    const four  = new Fournisseur(

      null,
      0,
      formValue['fournisseur']
    );
    const  detail = new DetailAchatTravaux(
      null,
      null,
      formValue['quantite'],
      formValue['prix_unutaire'],
      formValue['frais'],
      formValue['montant'],
      mat,
      four);
    const achatTravaux = new AchatTravaux(
      null,
      null,
      "Achat",
      new Date(),
      null,
      null,
       detail['']);
    console.log(achatTravaux);
  }
  addNewRows(){
  this.formArr.push(this.initItemRows());
}
deleteRow(index: number){
    this.formArr.removeAt(index);
}
}
