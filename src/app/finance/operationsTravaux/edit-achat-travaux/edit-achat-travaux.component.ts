import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {AchatTravaux} from '../../../model/AchatTravaux';
import {Router} from '@angular/router';
import {AchatTravauxService} from '../../../service/achat-travaux.service';


@Component({
  selector: 'app-edit-achat-travaux',
  templateUrl: './edit-achat-travaux.component.html',
  styleUrls: ['./edit-achat-travaux.component.scss']
})
export class EditAchatTravauxComponent implements OnInit {
  achatTravauxForm: FormGroup;
  editMode = false;

  @Input() travauxId: number;
  now = Date.now();
  @ViewChild("value", {static : false}) valueInput: ElementRef;
  @ViewChild("quantite", {static : false}) quantiteInput: ElementRef;
  @ViewChild("frais", {static : false}) fraisInput: ElementRef;


  constructor(private  fb: FormBuilder, private  router: Router, private achatService: AchatTravauxService) { }

  ngOnInit(): void {
    this.initForm();
    console.log(this.travauxId);
  }
  initForm(){
    this.achatTravauxForm = this.fb.group({
      id: '',
      version: '',
      libelle: '',
      date: '',
      total: '',
      travauxId: '',
      detailAchatTravaux : this.fb.array([this.initItemRows()])
    });
  }
  get formArr(){
  return this.achatTravauxForm.get('detailAchatTravaux') as FormArray;
  }
  initItemRows(){
    return this.fb.group({
         id: [''],
         version: [''],
         prix_unitaire: '',
         quantite: '',
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
  calcul() {
  return  this.valueInput.nativeElement.value * this.quantiteInput.nativeElement.value +
      parseInt(this.fraisInput.nativeElement.value);
   // console.log(montant);
  }
  onSubmit(){
    let  formValue = this.achatTravauxForm.value;
    console.log(formValue['detailAchatTravaux']);
   // console.log(formValue.itemsRows);


  let achat = new AchatTravaux(null,
     null,
     'Achat',
     null,
     null,
     this.travauxId,
     formValue['detailAchatTravaux']);
     this.achatService.ajoutAchatTravaux(achat).subscribe(data =>{
       console.log('Achat enregistrer', data.body);
     });
     console.log('voir les achats', achat);
  }
  addNewRows(){
  this.formArr.push(this.initItemRows());
}
deleteRow(index: number){
    this.formArr.removeAt(index);
}
}
