import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUsers();    
  }

  getUsers(){
    this.userService.apiGetAllUsers()
    .subscribe((res:any) => {
      this.users = res.results;      
    });
  }

  getUser(){
    //navegar a la pagina de view y ahi ejecutar el get
    this.router.navigate(['view']);    
  }

}
