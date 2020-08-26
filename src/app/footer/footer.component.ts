import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
 currentUser;
  constructor() { }

  ngOnInit(): void {
    this.currentUser = localStorage.getItem('currentUser');
    if (this.currentUser){
      console.log('dans header component', this.currentUser);
    } else {
      console.log('item non disponible');
    }
  }

}
