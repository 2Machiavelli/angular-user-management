import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { UsersService } from "../store/users/users.service"
import { Title } from "@angular/platform-browser"

// Models
import { IUserInfo } from "../shared/models/userInfo.model"
import { IUser } from "../shared/models/user.model"

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.sass"]
})
export class UserComponent implements OnInit {
  user: IUser
  userInfo: IUserInfo[]
  displayedColumns: string[] = ["title", "value"]
  UUID: string

  constructor (
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private titleService: Title
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
  setUser(id: string): void | boolean {
    const akitaLocalStore: string | null = localStorage.getItem("AkitaStores")

    if ( akitaLocalStore ) {
      const store = JSON.parse(akitaLocalStore)

      this.user = store.users.usersList.filter((user: IUser) => user.login.uuid === id)[0]

      // Set title of this page with the name of the user
      this.titleService.setTitle(`AUM | User: ${this.user.full_name}`)

      this.setUserInfo(this.user)
    }
    
    if ( !akitaLocalStore ) {

      this.usersService.get().subscribe(() => {
        this.setUser(id)
        return true
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
