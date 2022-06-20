import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-list-user-card',
  templateUrl: './list-user-card.component.html',
  styleUrls: ['./list-user-card.component.scss']
})
export class ListUserCardComponent implements OnInit {

  @Input() users: User[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
