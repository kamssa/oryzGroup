import {Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AchatTravaux} from '../../../../../model/AchatTravaux';
import {MatTableDataSource} from "@angular/material/table";
import {DetailAchatTravaux} from "../../../../../model/DtailAchat";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {AchatTravauxService} from "../../../../../service/achat-travaux.service";

@Component({
  selector: 'app-datail-achat-dialog',
  templateUrl: './datail-achat-dialog.component.html',
  styleUrls: ['./datail-achat-dialog.component.scss']
})
export class DatailAchatDialogComponent implements OnInit {
  displayedColumns: string[] = ['materiaux', 'prix_unitaire', 'quantite', 'frais', 'montant', 'fournisseur', 'update', 'delete'];
  dataSource: MatTableDataSource<DetailAchatTravaux>;
  receptacle: any = [];
  achatTravauxId: number;
  detailAchatTravaux: DetailAchatTravaux[] = [];
  @ViewChild(MatSort) sort: MatSort;

  @Input() travauxId: number;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private serviceAchat: AchatTravauxService,
              @Inject(MAT_DIALOG_DATA) public data: AchatTravaux,
              public dialogRef: MatDialogRef<DatailAchatDialogComponent>) {

    console.log('constructor', data['achatTravaux']);
    this.achatTravauxId = data['achatTravaux'];
    console.log('constructor', this.achatTravauxId);
    this.serviceAchat.getAchatTravauxById(data['achatTravaux']).subscribe(result => {
      console.log('resultat retourne', result);
      this.detailAchatTravaux = result.body.detailAchatTravaux;

      this.detailAchatTravaux.forEach(value => {
        console.log(value);
        let opp : DetailAchatTravaux = value;
        this.receptacle.push(opp);
      });
      this.dataSource = this.receptacle;
      this.dataSource = new MatTableDataSource<DetailAchatTravaux>(this.receptacle);
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



  redirectToDelete(id: number) {
    console.log( 'id de detail achat', id);
    console.log('Id de achat', this.achatTravauxId);
    this.serviceAchat.supprimerDetail(this.achatTravauxId, id).subscribe( data => {
      console.log('opération reussi', data);
      this.dialogRef.close();
    });
  }

  public doFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
