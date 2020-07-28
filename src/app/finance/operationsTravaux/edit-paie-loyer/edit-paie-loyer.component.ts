import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-paie-loyer',
  templateUrl: './edit-paie-loyer.component.html',
  styleUrls: ['./edit-paie-loyer.component.scss']
})
export class EditPaieLoyerComponent implements OnInit {
  loyerForm: FormGroup;
  editMode = false;

  constructor(private  fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loyerForm =  this.fb.group({

      montant: '',
      site: '',

    });
  }
  onSubmit(){
    const  formValue = this.loyerForm.value;
    console.log(formValue);

  }
}
