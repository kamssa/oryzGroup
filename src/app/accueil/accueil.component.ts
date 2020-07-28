import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {MediaChange, MediaObserver} from "@angular/flex-layout";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit, OnDestroy {
  title = 'oryzGroup';
  mediaSub: Subscription;
  devicesXs: boolean;
  isAuthenticated = true;

  constructor(private mediaObserver: MediaObserver) {

  }
  ngOnInit()  {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        console.log(result.mqAlias);
        this.devicesXs = result.mqAlias === 'xs' ? true : false;
      });

  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }

}
