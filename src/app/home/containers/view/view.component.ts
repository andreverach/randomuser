import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  user!: User;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUser();
  }


  getUser(){
    this.userService.apiGetUser('id')
    .subscribe((user: any) => {
      this.user = user.results[0];
    })
  }  

  goToBack(signal:boolean){
    if(signal){
      this.router.navigate(['home']);
    }
  }

}
