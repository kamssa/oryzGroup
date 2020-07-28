import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-location-travaux',
  templateUrl: './edit-location-travaux.component.html',
  styleUrls: ['./edit-location-travaux.component.scss']
})
export class EditLocationTravauxComponent implements OnInit {
  locationForm: FormGroup;
  editMode = false;

  constructor(private  fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.locationForm =  this.fb.group({
      montant: '',
      materiel: '',
      fournisseur: '',

    });
  }
  onSubmit(){
    const  formValue = this.locationForm.value;
    console.log(formValue);

  }
}
