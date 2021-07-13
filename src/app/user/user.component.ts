import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { UsersService } from "../store/users/users.service"

interface userInfo {
  title: string
  value: any
}

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.sass"]
})
export class UserComponent implements OnInit {
  user: any = {}
  userInfo!: userInfo[]
  displayedColumns: string[] = ["title", "value"]

  constructor(
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

  private setUser(id: string): void {
    const akitaLocalStore: any = localStorage.getItem("AkitaStores")
    
    if ( !akitaLocalStore ) {

      this.usersService.get().subscribe((users: any) => {
        this.user = users.results.filter((user: any) => user.login.uuid === id)[0]

        this.setUserInfo(this.user)
      })

    } else {
      const store = JSON.parse(akitaLocalStore)

      this.user = store.users.entities.results.filter((user: any) => user.login.uuid === id)[0]

      this.setUserInfo(this.user)
    }
  }

  private setUserInfo(user: any): void {
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
