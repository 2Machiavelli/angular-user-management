import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router"

import { UsersService } from "../users.service"

export interface UserInfo {
  title: string;
  value: any;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  UUID: any
  user: any
  userInfo: any
  displayedColumns: string[] = ['title', 'value'];

  constructor(
    private route: ActivatedRoute,
    private service: UsersService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.UUID = params.id
    })

    this.service.getUsers().subscribe((users: any) => {
      this.user = users.results.filter((user: any) => user.login.uuid === this.UUID)[0]


      this.userInfo = [
        {title: 'Email', value: this.user.email},
        {title: 'Phone', value: this.user.phone},
        {title: 'Rating', value: 3},
      ];
    })
  }

}
