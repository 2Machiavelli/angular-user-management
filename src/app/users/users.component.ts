import { Component, OnInit } from "@angular/core"
import { UsersService } from "../store/users/users.service"
import { Router } from "@angular/router"

// Models
import { IUser } from "../shared/models/user.model"

// Material
import { MatTableDataSource } from "@angular/material/table"

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.sass"]
})
export class UsersComponent implements OnInit {
  readonly displayedColumns: string[] = [ "photo", "full_name", "email", "phone", "rating" ]
  public users!: MatTableDataSource<IUser>
  
  constructor (
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setUsers()
  }

  /**
   * If the storage does not exist then we call api, 
   * and if it does then we take the users data form localStorage
   * @returns {void}
   */

  setUsers(): void {
    const akitaLocalStore: string | null = localStorage.getItem("AkitaStores")
    
    if ( akitaLocalStore ) {
      const store = JSON.parse(akitaLocalStore)

      this.users = new MatTableDataSource(store.users.usersList)
    }
    
    if ( !akitaLocalStore ) {

      this.usersService.get().subscribe(() => {
        return this.setUsers()
      })

    }
  }

  navigateToUser(user: IUser): void {
    this.router.navigateByUrl(`users/${user.login.uuid}`)
  }
}
