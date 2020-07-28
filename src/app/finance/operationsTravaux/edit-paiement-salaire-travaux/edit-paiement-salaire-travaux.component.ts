import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-paiement-salaire-travaux',
  templateUrl: './edit-paiement-salaire-travaux.component.html',
  styleUrls: ['./edit-paiement-salaire-travaux.component.scss']
})
export class EditPaiementSalaireTravauxComponent implements OnInit {
  salaireForm: FormGroup;
  editMode = false;

  constructor(private  fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.salaireForm =  this.fb.group({
      montant: '',
      materiel: '',
      date: '',
    });
  }
  onSubmit(){
    const  formValue = this.salaireForm.value;
    console.log(formValue);

  }
}
