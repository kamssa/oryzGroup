import {AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Observable, Observer, Subscription} from 'rxjs';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {AuthService} from "./service/auth.service";
import {JwtHelperService} from "@auth0/angular-jwt";
import {ConnexionComponent} from "./connexion/connexion/connexion.component";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, OnChanges{
  title = 'oryzGroup';
  mediaSub: Subscription;
  devicesXs: boolean;
  isAuthenticated: any;
  @ViewChild(ConnexionComponent) childReference;
  exempleParent: boolean;

  constructor(private mediaObserver: MediaObserver,
              private authService: AuthService,
              private helper: JwtHelperService) {
               authService.isUserLoggedIn.subscribe(data => {
                console.log('voir la valeur de auth dans app', data);
                this.isAuthenticated = data;
               });

  }

  ngOnChanges(changes: SimpleChanges): void {



   console.log('voir si la valeur change', this.isAuthenticated.next);
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
