import {Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from "@angular/material/table";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DetailMainOeuvre} from "../../../../model/DetailMainDoeuvre";
import {MainOeuvre} from "../../../../model/MainOeuvre";
import {MainoeuvreService} from "../../../../service/mainoeuvre.service";

@Component({
  selector: 'app-dialog-mainouvre',
  templateUrl: './dialog-mainouvre.component.html',
  styleUrls: ['./dialog-mainouvre.component.scss']
})
export class DialogMainouvreComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'montantVerser', 'salaire', 'update', 'delete'];
  dataSource: MatTableDataSource<DetailMainOeuvre>;
  receptacle: any = [];
  detailMainOeuvre: DetailMainOeuvre[] = [];
  mainOeuvreId: number;
  @ViewChild(MatSort) sort: MatSort;

  @Input() travauxId: number;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private mainoeuvreService: MainoeuvreService,
              @Inject(MAT_DIALOG_DATA) public data: MainOeuvre) {
   this.mainOeuvreId = data['mainOeuvres'];
    this.mainoeuvreService.getMainOeuvreById(data['mainOeuvres']).subscribe(result => {
      console.log('resultat retourne', result);
      this.detailMainOeuvre = result.body.detailMainOeuvre;

      this.detailMainOeuvre.forEach(value => {
        console.log(value);
        let opp : DetailMainOeuvre = value;
        // this.dataSource = opp;
        this.receptacle.push(opp);

      });
      this.dataSource = this.receptacle;
      this.dataSource = new MatTableDataSource<DetailMainOeuvre>(this.receptacle);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }
  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort;
  }
  ngOnInit() {

  }
  redirectToDetails(id: number){
    console.log(id);
  }

  redirectToUpdate(id: number) {
    console.log(id);
  }

  redirectToDelete(id: number) {
    console.log(id);
    this.mainoeuvreService.supprimerDetail(this.mainOeuvreId, id).subscribe( data => {
      console.log('opération reussi', data);
    });
  }

  public doFilter(event: Event){
    // this.dataSource.filter = value.trim().toLocaleLowerCase();
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
