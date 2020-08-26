import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enregistrer-employe',
  templateUrl: './enregistrer-employe.component.html',
  styleUrls: ['./enregistrer-employe.component.scss']
})
export class EnregistrerEmployeComponent implements OnInit {
  employeForm: any;

  constructor() { }

  ngOnInit(): void {
  }

  search(value: string) {

  }

  onSubmit(value: any) {

  }
}
