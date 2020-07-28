import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-autredepense-travaux',
  templateUrl: './edit-autredepense-travaux.component.html',
  styleUrls: ['./edit-autredepense-travaux.component.scss']
})
export class EditAutredepenseTravauxComponent implements OnInit {
  autreDepenseForm: FormGroup;
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
    this.autreDepenseForm =  this.fb.group({
      titre: '',
      montant: '',
      materiel: '',
      fournisseur: '',
    });
  }
  onSubmit(){
    const  formValue = this.autreDepenseForm.value;
    console.log(formValue);

  }
}
