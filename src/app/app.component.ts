import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {Observable, Observer, Subscription} from 'rxjs';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {AuthService} from "./service/auth.service";
import {JwtHelperService} from "@auth0/angular-jwt";
import {ConnexionComponent} from "./connexion/connexion/connexion.component";
import {MediaMatcher} from "@angular/cdk/layout";
import {Router} from "@angular/router";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit{
  title = 'oryzGroup';
  mediaSub: Subscription;
  devicesXs: boolean;
  isAuthenticated: any;
  public isAut: any;
  @ViewChild(ConnexionComponent) childReference;
  exempleParent: boolean;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(private mediaObserver: MediaObserver,
              private authService: AuthService,
              private helper: JwtHelperService,
              private router: Router,
              changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
ngAfterViewInit(): void {
  /*this.authService.isUserLoggedIn.subscribe(data => {
    console.log('voir la valeur de auth dans app', data);
    this.isAuthenticated = data;
  });*/

}

  ngOnChanges(changes: SimpleChanges): void {

  }
  ngOnInit()  {
    this.isAut = localStorage.getItem('currentUser');
    console.log('voir la valeur de auth dans app', this.isAut);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout() {
    this.authService.logout();
    this.isAut = localStorage.getItem('currentUser');
    this.router.navigate(['/connexion']);
  }

  login() {
    this.router.navigate(['/connexion']);
  }

  search() {

  }
}
