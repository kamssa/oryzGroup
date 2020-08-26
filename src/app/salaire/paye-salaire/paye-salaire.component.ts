import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paye-salaire',
  templateUrl: './paye-salaire.component.html',
  styleUrls: ['./paye-salaire.component.scss']
})
export class PayeSalaireComponent implements OnInit {
  salaireForm: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value: any) {

  }
}
