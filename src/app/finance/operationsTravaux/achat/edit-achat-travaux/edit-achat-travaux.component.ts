import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  EventEmitter,
  AfterViewInit
} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AchatTravaux} from '../../../../model/AchatTravaux';
import {Router} from '@angular/router';
import {AchatTravauxService} from '../../../../service/achat-travaux.service';
import {SteTravauxService} from "../../../../service/ste-travaux.service";


@Component({
  selector: 'app-edit-achat-travaux',
  templateUrl: './edit-achat-travaux.component.html',
  styleUrls: ['./edit-achat-travaux.component.scss']
})
export class EditAchatTravauxComponent implements OnInit {
  achatTravauxForm: FormGroup;
  editMode = false;
  montant: number;
  montantdetail: number;
  @Input() travauxId: number;
  now = Date.now();
  public errorMessage: string = '';
  @ViewChild("value", {static: false}) valueInput: ElementRef;
  @ViewChild("quantite", {static: false}) quantiteInput: ElementRef;
  @ViewChild("frais", {static: false}) fraisInput: ElementRef;
  @ViewChild("montant", {static: false}) montantInput: ElementRef;
  @Output() change = new EventEmitter<number>();


  constructor(private  fb: FormBuilder, private  router: Router,
              private achatService: AchatTravauxService,
              private travauxServices: SteTravauxService) {
  }

  ngOnInit(): void {
    this.initForm();
    console.log(this.travauxId);
    // this.change.emit(this.travauxId);
    console.log('voir le output', this.change.emit(this.montant));
  }


  initForm() {
    this.achatTravauxForm = this.fb.group({
      id: '',
      version: '',
      libelle: '',
      date: '',
      montant: '',
      travauxId: '',
      detailAchatTravaux: this.fb.array([this.initItemRows()])
    });

  }

  get formArr() {
    return this.achatTravauxForm.get('detailAchatTravaux') as FormArray;
  }

  initItemRows() {
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

  getCalcul() {
    this.montantInput.nativeElement.value = this.valueInput.nativeElement.value * this.quantiteInput.nativeElement.value +
      parseInt(this.fraisInput.nativeElement.value);
  }

  onSubmit() {
    let formValue = this.achatTravauxForm.value;
    console.log(formValue['detailAchatTravaux']);
    // console.log(formValue.itemsRows);
    let achat = new AchatTravaux(null,
      null,
      'Achat',
      null,
      null,
      this.travauxId,
      formValue['detailAchatTravaux']);
    this.achatService.ajoutAchatTravaux(achat).subscribe(data => {
      console.log('Achat enregistrer', data.body);
      this.montant = data.body.montant;
      console.log(data.body);
      console.log('voir le output', this.change.emit(this.montant));

      }, error => {
      //this.errorHandler.handleError(error);
      //  this.errorMessage = this.errorHandler.errorMessage;
      console.log('desole');
    });

    console.log('voir les achats', achat);
    this.achatTravauxForm.reset();
  }

  addNewRows() {
    this.formArr.push(this.initItemRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }

}
