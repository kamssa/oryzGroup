import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {AchatTravauxService} from '../../../../service/achat-travaux.service';
import {AchatTravaux} from '../../../../model/AchatTravaux';
import {MatTableDataSource} from '@angular/material/table';
import {DetailAchatTravaux} from '../../../../model/DtailAchat';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from "@angular/material/dialog";
import {DatailAchatDialogComponent} from "../dialogue/datail-achat-dialog/datail-achat-dialog.component";

@Component({
  selector: 'app-list-achat',
  templateUrl: './list-achat.component.html',
  styleUrls: ['./list-achat.component.scss']
})
export class ListAchatComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['date', 'total', 'details', 'update', 'delete'];
  dataSource: MatTableDataSource<DetailAchatTravaux>;
  achats: AchatTravaux[] = [];
  receptacle: any = [];
  @ViewChild(MatSort) sort: MatSort;

  @Input() travauxId: number;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
   constructor(private serviceAchat: AchatTravauxService,
               public dialog: MatDialog) {
   }
  ngAfterViewInit(): void {
   // this.dataSource.sort = this.sort;
  }
  ngOnInit() {
      console.log(this.travauxId);
      this.serviceAchat.getAchatTravauxByTravaux(this.travauxId)
        .subscribe( data => {
          this.achats = data;
          console.log(data);
         /* this.achats.forEach(value => {
          console.log('Voir', value.detailAchatTravaux);
          let opp : AchatTravaux[] = value.detailAchatTravaux;
          this.receptacle.push(opp[0]);*/
        //});
        //this.dataSource = this.receptacle;
       // this.achats = data;
        console.log(this.achats);
        this.achats.forEach(value => {
          console.log(value);
          let opp : AchatTravaux = value;
         // this.dataSource = opp;
          this.receptacle.push(opp);

        });

        // this.receptacle.push([0]);
        this.dataSource = this.receptacle;
      });
   }
  redirectToDetails(id: number){
    console.log(id);
  }

  redirectToUpdate(id: number) {
    console.log(id);
  }

  redirectToDelete(id: number) {
    console.log(id);
  }

  public doFilter(event: Event){
    // this.dataSource.filter = value.trim().toLocaleLowerCase();
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(id: number) {
    this.dialog.open(DatailAchatDialogComponent,{
      data: {
        achatTravaux: id
      }
    });
  }
}

