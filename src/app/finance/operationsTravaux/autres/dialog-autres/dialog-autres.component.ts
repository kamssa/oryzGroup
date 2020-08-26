import {AfterViewInit, Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DetailAutres} from "../../../../model/DetailAutres";
import {AutresService} from "../../../../service/autres.service";
import {Autres} from "../../../../model/Autres";


@Component({
  selector: 'app-dialog-autres',
  templateUrl: './dialog-autres.component.html',
  styleUrls: ['./dialog-autres.component.scss']
})
export class DialogAutresComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['Libelle', 'montant', 'update', 'delete'];
  dataSource: MatTableDataSource<DetailAutres>;
  receptacle: any = [];
  detailAutres: DetailAutres[] = [];
  autreId: number;
  @ViewChild(MatSort) sort: MatSort;

  @Input() travauxId: number;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private autreService: AutresService,
              @Inject(MAT_DIALOG_DATA) public data: Autres) {
    console.log('constructor', data['autres']);
    this.autreId = data['autres'];
    this.autreService.getAutresById(data['autres']).subscribe(result => {
      console.log('resultat retourne', result);
      this.detailAutres = result.body.detailAutres;

      this.detailAutres.forEach(value => {
        console.log(value);
        let opp : DetailAutres = value;
        // this.dataSource = opp;
        this.receptacle.push(opp);

      });
      this.dataSource = this.receptacle;
      this.dataSource = new MatTableDataSource<DetailAutres>(this.receptacle);
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
    this.autreService.supprimerDetail(this.autreId, id).subscribe( data => {
      console.log('opération reussi', data);
    });
  }

  public doFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
