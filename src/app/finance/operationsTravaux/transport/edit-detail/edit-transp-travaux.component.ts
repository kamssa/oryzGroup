import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-transp-travaux',
  templateUrl: './edit-transp-travaux.component.html',
  styleUrls: ['./edit-transp-travaux.component.scss']
})
export class EditTranspTravauxComponent implements OnInit {
  transportForm: FormGroup;
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
    this.transportForm =  this.fb.group({
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
    const  formValue = this.transportForm.value;
    console.log(formValue);

  }
}
