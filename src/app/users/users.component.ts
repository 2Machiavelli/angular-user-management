import { Component, OnInit } from "@angular/core"
import { UsersService } from "../store/users/users.service"
import { Router } from "@angular/router"

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.sass"]
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ["photo", "name", "email", "phone", "rate"]
  users: any = []
  readonly USERS_URL = "https://randomuser.me/api/?page=3&results=10&seed=abc"
  
  constructor (
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usersService.get().subscribe((data: any) => {
      this.users = data.results
    })
  }

  openUserCard(user: any): void {
    this.router.navigateByUrl(`users/${user.login.uuid}`, { state: user })
  }

}
