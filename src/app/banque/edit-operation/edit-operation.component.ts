import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Banque} from "../../model/Banque";
import {Operation} from "../../model/OperationBanque";
import {OperationBanqueService} from "../../service/operationBanque.service";
import {Travaux} from "../../model/travaux";

@Component({
  selector: 'app-edit-operation',
  templateUrl: './edit-operation.component.html',
  styleUrls: ['./edit-operation.component.scss']
})
export class EditOperationComponent implements OnInit {
  banqueForm: FormGroup;
  libelles: any[] = ['retrait', 'versement', 'virement'];
  banques: any[] = ['BOA', 'Banque altantique', 'NSIA'];

  constructor(private fb: FormBuilder, private operationService: OperationBanqueService) { }

  ngOnInit(): void {
    this.banqueForm = this.fb.group({
      date: new Date(),
      libelle: '',
      montant: '',
      motif: '',
      banque: this.fb.group({
        nom: ''
      })
    });
  }
  onSubmit(banqueFormValue){
    console.log(this.banqueForm.value);
    let  operation: Operation = {
      date: banqueFormValue.date,
      libelle: banqueFormValue.libelle,
      montant: banqueFormValue.montant,
      motif: banqueFormValue.motif,
      banque: banqueFormValue.banque
    };
    this.operationService.ajoutOperation(operation).subscribe(data => {
     console.log(data.body);
    });
  }
}
