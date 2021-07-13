import { Component, OnInit } from "@angular/core"
import { UsersService } from "../store/users/users.service"
import { Router } from "@angular/router"

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.sass"]
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = [ "photo", "name", "email", "phone", "rate" ]
  users: any = []
  
  constructor (
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setUsers()
  }

  private setUsers(): void {
    const akitaLocalStore: any = localStorage.getItem("AkitaStores")
    
    if ( !akitaLocalStore ) {

      this.usersService.get().subscribe((users: any) => {
        this.users = users.results
      })

    } else {
      const store = JSON.parse(akitaLocalStore)

      this.users = store.users.entities.results
    }
  }

  navigateToUser(user: any): void {
    this.router.navigateByUrl(`users/${user.login.uuid}`)
  }
}
