import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SiteService} from "../../service/site.service";
import {catchError, map, switchMap} from "rxjs/operators";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {SteTravauxService} from "../../service/ste-travaux.service";
import {Travaux} from "../../model/travaux";
import {Site} from "../../model/site";
import {HttpErrorResponse, HttpEventType} from "@angular/common/http";
import {of} from 'rxjs';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent implements OnInit {
  selectedFile = null;
  travaux: Travaux;
  travauxId: number;
  site: Site;
  urls = [];
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;
  files = [];

  constructor(private uploadService: SteTravauxService,
              private travauxService: SteTravauxService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.travauxService.getTravauxById(+params.get('id')))
    ).subscribe(result => {
      this.travaux = result.body;
      this.site = result.body.site;
      this.travauxId = result.body.id;
      console.log(this.travauxId);
      // console.log(this.site);
    });
  }

  /* onFileSelected(event) {
     this.selectedFile = event.target.files[0];
   }*/

  /*onUpload() {
    this.siteService.addImage(this.urls).subscribe( result => {
    console.log('reussi');
    });
  }*/

  /*selectFiles(event) {
    if (event.target.files) {
      for (let i = 0; i < File.length; i++) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (event: any) => {
          this.urls.push(event.target.result);
        //  console.log('Voir les fichiers recuperés', this.urls);
        }
      }
    }
  }*/
  uploadFile(file) {
    console.log('Voir les fichiers', file);
    const formData = new FormData();
    formData.append('image_photo', file.data);
    file.inProgress = true;
    this.uploadService.upload(formData, this.travauxId).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            file.progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            return event;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        file.inProgress = false;
        return of(`${file.data.name} upload failed.`);
      })).subscribe((event: any) => {
      if (typeof (event) === 'object') {
        console.log(event.body);
      }
    });
  }

  private uploadFiles() {
    this.fileUpload.nativeElement.value = '';
    this.files.forEach(file => {
      this.uploadFile(file);
    });
  }

  onClick() {
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.onchange = () => {
      for (let index = 0; index < fileUpload.files.length; index++) {
        const file = fileUpload.files[index];
        this.files.push({data: file, inProgress: false, progress: 0});
      }
      this.uploadFiles();
    };
    fileUpload.click();
  }
}
