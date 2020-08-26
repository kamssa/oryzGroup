import {AfterViewInit, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import {MediaMatcher} from "@angular/cdk/layout";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
   @Input() devicesXs: boolean;
   @Input()isAuthenticated: boolean;
   currentUser;
   hidden: boolean;
  mode = new FormControl('over');
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  private _mobileQueryListener: () => void;

  constructor(private  authService: AuthService, private router: Router,
              changeDetectorRef: ChangeDetectorRef, media: MediaMatcher ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {


  }
  ngAfterViewInit(): void {
    this.currentUser = localStorage.getItem('currentUser');
    if (this.currentUser){
      console.log('dans header component', this.currentUser);
      this.hidden = true;
    } else {
      this.hidden = false;
    }
  }

  doFilter(value: any) {

  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/connexion']);
  }

  fillerContent = Array.from({length: 50}, () =>
    `Lorem ipsum dolor sit amet.`);



  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
