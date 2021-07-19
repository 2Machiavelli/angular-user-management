import { Component, OnInit } from "@angular/core"
import { UsersService } from "../store/users/users.service"
import { Router } from "@angular/router"

// Models
import { IUser } from "../models/user.model"

import { MatTableDataSource } from "@angular/material/table"

@Component({
  selector: "app-leaders",
  templateUrl: "./leaders.component.html",
  styleUrls: ["./leaders.component.sass"]
})
export class LeadersComponent implements OnInit {
  readonly displayedColumns: string[] = [ "photo", "full_name", "email", "phone", "rating" ]
  public leaders!: MatTableDataSource<IUser>
  private users!: IUser[]
  
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
    const akitaLocalStore: any = localStorage.getItem("AkitaStores")
    
    if ( akitaLocalStore ) {
      const store = JSON.parse(akitaLocalStore)

      this.users = store.users.usersList

      this.users = this.users.sort((a: any, b: any) => b.rating - a.rating).filter((item, index) => {
        if (index <= 4) {
          return item
        }
        return false
      })

      this.leaders = new MatTableDataSource(this.users)
    }
    
    if ( !akitaLocalStore ) {

      this.usersService.get().subscribe(() => {
        return this.setUsers()
      })

    }
  }

  navigateToLeader(user: IUser): void {
    this.router.navigateByUrl(`leaders/${user.login.uuid}`)
  }
}
