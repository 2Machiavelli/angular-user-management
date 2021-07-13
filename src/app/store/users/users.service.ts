import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { tap } from "rxjs/operators"
import { User } from "./user.model"
import { UsersStore } from "./users.store"

@Injectable({ providedIn: "root" })
export class UsersService {

  readonly USERS_URL: string = "https://randomuser.me/api/"
  readonly USERS_URL_QUERY: string = "?results=15&seed=abc"

  constructor(
    private usersStore: UsersStore, 
    private http: HttpClient
  ) {}


  get() {
    return this.http.get<User[]>(this.USERS_URL + this.USERS_URL_QUERY).pipe(tap(entities => {
      this.usersStore.set(entities)
    }))
  }

}
