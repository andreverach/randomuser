import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//routerlink
import { RouterModule } from '@angular/router';
import { ListUserCardComponent } from './components/list-user-card/list-user-card.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';



@NgModule({
  declarations: [
    ListUserCardComponent,
    UserCardComponent,
    NavbarComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListUserCardComponent,
    UserCardComponent,
    NavbarComponent,
    UserDetailComponent
  ]
})
export class SharedModule { }
