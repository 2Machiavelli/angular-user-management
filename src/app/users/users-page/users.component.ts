import { Component, OnInit } from "@angular/core"

import { UsersService } from "../../users.service"

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.sass"]
})
export class UsersComponent implements OnInit {
  dataSource: any
  displayedColumns: any
  users: any = []

  readonly USERS_URL = "https://randomuser.me/api/?page=3&results=10&seed=abc"
  

  constructor (
    private service: UsersService
  ) {}

  ngOnInit(): void {
    this.displayedColumns = this.service.displayedColumns

    this.service.getUsers().subscribe((data: any) => {
      this.users = data.results
    })
  }

}
