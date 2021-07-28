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
  UUID!: string

  constructor (
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.UUID = params.id
    })

    this.setUser(this.UUID)
  }

  get userFullName(): string {
    return `${this.user.name.first} ${this.user.name.last}`
  }

  /**
   * If the storage does not exist then we call api, 
   * and if it does then we take the user data form localStorage
   * @returns {void}
   */
  setUser(id: string): any {
    const akitaLocalStore: any = localStorage.getItem("AkitaStores")

    if ( akitaLocalStore ) {
      const store = JSON.parse(akitaLocalStore)

      this.user = store.users.usersList.filter((user: IUser) => user.login.uuid === id)[0]

      this.setUserInfo(this.user)
    }
    
    if ( !akitaLocalStore ) {

      this.usersService.get().subscribe(() => {
        return this.setUser(id)
      })

    }
  }

  setUserInfo(user: IUser): void {
    this.userInfo = [
      {title: "Email", value: user.email},
      {title: "Phone", value: user.phone},
      {title: "Username", value: user.login.username},
      {title: "Gender", value: user.gender},
      {title: "Age", value: user.dob.age}
    ]
  }

  async increaseRating(id: string) {
    await this.usersService.increaseRating(id)

    this.setUser(id)
  }

  async decreaseRating(id: string) {
    await this.usersService.decreaseRating(id)

    this.setUser(id)
  }
}
