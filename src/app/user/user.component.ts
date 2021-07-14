import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { UsersService } from "../store/users/users.service"

// Models
import { IUserInfo } from "../models/userInfo.model"
import { IUser } from "../models/user.model"

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.sass"]
})
export class UserComponent implements OnInit {
  user!: IUser
  userInfo!: IUserInfo[]
  displayedColumns: string[] = ["title", "value"]

  constructor (
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.setUser(params.id)
    })
  }

  /**
   * If the storage does not exist then we call api, 
   * and if it does then we take the user data form localStorage
   * @returns {void}
   */

  setUser(id: string): void {
    const akitaLocalStore: any = localStorage.getItem("AkitaStores")
    
    if ( !akitaLocalStore ) {

      this.usersService.get().subscribe((data: any) => {
        this.user = data.results.filter((user: IUser) => user.login.uuid === id)[0]

        this.setUserInfo(this.user)
      })

    } else {
      const store = JSON.parse(akitaLocalStore)

      this.user = store.users.entities.results.filter((user: IUser) => user.login.uuid === id)[0]

      this.setUserInfo(this.user)
    }
  }

  setUserInfo(user: IUser): void {
    this.userInfo = [
      {title: "Email", value: user.email},
      {title: "Phone", value: user.phone},
      {title: "Phone", value: user.phone},
      {title: "Username", value: user.login.username},
      {title: "Gender", value: user.gender},
      {title: "Age", value: user.dob.age},
      {title: "Rating", value: 0},
    ]
  }
}
