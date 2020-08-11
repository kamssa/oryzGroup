import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-mainouvre-travaux',
  templateUrl: './edit-mainouvre-travaux.component.html',
  styleUrls: ['./edit-mainouvre-travaux.component.scss']
})
export class EditMainouvreTravauxComponent implements OnInit {
  mainOuvreForm: FormGroup;
  editMode = false;
  titres = [
    {libelle: 'Achat', name: 'Achat'},
    {libelle: 'Location', name: 'Location'}

  ];
  constructor(private  fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.mainOuvreForm =  this.fb.group({
      titre: '',
      quantite: '',
      prix: '',
      montant: '',
      materiel: '',
      fournisseur: '',
      site: '',
      travaux: ''
    });
  }
  onSubmit(){
    const  formValue = this.mainOuvreForm.value;
    console.log(formValue);

  }
}
