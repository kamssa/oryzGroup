import {Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {DetailAchatTravaux} from "../../../../model/DtailAchat";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {AchatTravaux} from "../../../../model/AchatTravaux";
import {AchatTravauxService} from "../../../../service/achat-travaux.service";

@Component({
  selector: 'app-dialog-transport',
  templateUrl: './dialog-transport.component.html',
  styleUrls: ['./dialog-transport.component.scss']
})
export class DialogTransportComponent implements OnInit {
  displayedColumns: string[] = ['materiaux', 'prix_unitaire', 'quantite', 'frais', 'montant', 'fournisseur', 'details', 'update', 'delete'];
  dataSource: MatTableDataSource<DetailAchatTravaux>;
  receptacle: any = [];
  detailAchatTravaux: DetailAchatTravaux[] = [];
  @ViewChild(MatSort) sort: MatSort;

  @Input() travauxId: number;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private serviceAchat: AchatTravauxService,
              @Inject(MAT_DIALOG_DATA) public data: AchatTravaux) {
    console.log('constructor', data['achatTravaux']);
    this.serviceAchat.getAchatTravauxById(data['achatTravaux']).subscribe(result => {
      console.log('resultat retourne', result);
      this.detailAchatTravaux = result.body.detailAchatTravaux;

      this.detailAchatTravaux.forEach(value => {
        console.log(value);
        let opp : AchatTravaux = value;
        // this.dataSource = opp;
        this.receptacle.push(opp);

      });
      this.dataSource = this.receptacle;
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
  }

  public doFilter(event: Event){
    // this.dataSource.filter = value.trim().toLocaleLowerCase();
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
