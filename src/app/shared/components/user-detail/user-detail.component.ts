import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  @Input() user!: User;
  @Output('back') toBack = new EventEmitter<boolean>(false);
  constructor() { } 
    
  goToBack(){    
    this.toBack.emit(true);
  }

}
