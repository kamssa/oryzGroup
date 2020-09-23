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
import {MediaMatcher} from "@angular/cdk/layout";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "./model/User";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit{
  title = 'oryzGroup';
  mediaSub: Subscription;
  devicesXs: boolean;
  public isAut: string;
  mobileQuery: MediaQueryList;
  form: FormGroup;
  private returnUrl: string;



  private _mobileQueryListener: () => void;
  error: any;

  constructor(private mediaObserver: MediaObserver,
              private authService: AuthService,
              private helper: JwtHelperService,
              private router: Router,
              private changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              private fb: FormBuilder) {
    // this.isAut = localStorage.getItem('currentUser');

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    // redirect to home if already logged in
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }
  ngAfterViewInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }
  ngOnInit()  {
    this.initForm();
    this.isAut = localStorage.getItem('currentUser');

  }
  initForm() {
    this.form = this.fb.group({
      name: [''],
      email: ['', Validators.email],
      password: ['', Validators.required]
    });

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout() {
    this.authService.logout();
    this.isAut = localStorage.getItem('currentUser');
    this.router.navigate(['/accueil']);
  }
  search() {

  }

  onSubmit() {
    const email = this.form.get('email').value;
    const password = this.form.get('password').value;
    const  user = new User(null, null, '', email, password);
    this.authService.login(user).subscribe(data => {
        this.isAut = localStorage.getItem('currentUser');
        console.log(data);
      },
      error => {
        this.error = 'email ou mot de passe oublié';

      });
  }

}
