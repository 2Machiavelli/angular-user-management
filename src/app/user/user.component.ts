import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { UsersService } from "../store/users/users.service"

export interface UserInfo {
  title: string
  value: any
}

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.sass"]
})
export class UserComponent implements OnInit {
  UUID: any
  user: any = {}
  userInfo: any
  displayedColumns: string[] = ["title", "value"]

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params => {
      this.UUID = params.id
    })

    this.setUser(this.UUID)
  }

  /**
   * If the storage does not exist then we call api, 
   * and if it does then we take the user data form localStorage
   * @returns {void}
   */

  private setUser(id: string): void {
    const akitaLocalStore: any = localStorage.getItem("AkitaStores")
    if ( !akitaLocalStore ) {

      this.usersService.get().subscribe((users: any) => {
        this.user = users.results.filter((user: any) => user.login.uuid === id)[0]
      })

    } else {
      const store = JSON.parse(akitaLocalStore)

      this.user = store.users.entities.results.filter((user: any) => user.login.uuid === id)[0]
    }

    this.userInfo = [
      {title: "Email", value: this.user.email},
      {title: "Phone", value: this.user.phone},
      {title: "Phone", value: this.user.phone},
      {title: "Username", value: this.user.login.username},
      {title: "Gender", value: this.user.gender},
      {title: "Age", value: this.user.dob.age},
      {title: "Rating", value: 0},
    ]
  }
}
