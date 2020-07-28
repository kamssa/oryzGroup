import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-operation-travaux',
  templateUrl: './edit-operation-travaux.component.html',
  styleUrls: ['./edit-operation-travaux.component.scss']
})
export class EditOperationTravauxComponent implements OnInit {
  achatTravauxForm: FormGroup;
  editMode = false;

  constructor(private  fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.achatTravauxForm =  this.fb.group({
      quantite: '',
      prix: '',
      montant: '',
      materiel: '',
      fournisseur: '',

    });
  }
  onSubmit(){
    const  formValue = this.achatTravauxForm.value;
    console.log(formValue);

  }
}
