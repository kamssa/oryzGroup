import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() devicesXs: boolean;
  mode = new FormControl('over');
  constructor(private  authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  doFilter(value: any) {

  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/connexion']);
  }
}
