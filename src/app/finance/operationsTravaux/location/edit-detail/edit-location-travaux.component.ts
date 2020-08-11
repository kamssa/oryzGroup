import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Router} from "@angular/router";
import {LocationService} from "../../../../service/location.service";
import {AchatTravaux} from "../../../../model/AchatTravaux";
import {LocationTravaux} from "../../../../model/LocationTravaux";

@Component({
  selector: 'app-edit-location-travaux',
  templateUrl: './edit-location-travaux.component.html',
  styleUrls: ['./edit-location-travaux.component.scss']
})
export class EditLocationTravauxComponent implements OnInit {
  locationForm: FormGroup;
  editMode = false;
  @Input() travauxId: number;
  constructor(private  fb: FormBuilder,
              private  router: Router,
              private locationService: LocationService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.locationForm =  this.fb.group({
      montant: '',
      travauxId: '',
      detailLocation : this.fb.array([this.initItemRows()])
    });
  }
  initItemRows(){
    return this.fb.group({
      id: [''],
      version: [''],
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
  get formArr(){
    return this.locationForm.get('detailLocation') as FormArray;
  }
  onSubmit(){
    const  formValue = this.locationForm.value;
    console.log(formValue);
    let locationTravaux = new LocationTravaux(null,
      null,
      null,
      null,
      this.travauxId,
      formValue['detailLocation']);
      this.locationService.ajoutLocationTravaux(locationTravaux).subscribe(data => {
      console.log('location enregistrer', data.body);
      //this.montant = data.body.montant;


    }, error => {
      //this.errorHandler.handleError(error);
      //  this.errorMessage = this.errorHandler.errorMessage;
      console.log('desole');
    });

    console.log('voir les achats', locationTravaux);
    this.locationForm.reset();

  }
  addNewRows(){
    this.formArr.push(this.initItemRows());
  }
  deleteRow(index: number){
    this.formArr.removeAt(index);
  }
}
