import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isOpen = false;
  
  constructor() { }  

  toggle(){
    this.isOpen = !this.isOpen;
  }

}
