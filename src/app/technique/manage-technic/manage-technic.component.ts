import {Component, HostBinding, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Travaux} from "../../model/travaux";
import {BehaviorSubject, Observable} from "rxjs";
import {Router} from "@angular/router";
import {SteTravauxService} from "../../service/ste-travaux.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-manage-technic',
  templateUrl: './manage-technic.component.html',
  styleUrls: ['./manage-technic.component.scss']
})
export class ManageTechnicComponent implements OnInit {
  constructor() {
  }
  ngOnInit(): void {
  }
}
