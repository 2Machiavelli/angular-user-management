import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { tap } from "rxjs/operators"
import { User } from "./user.model"
import { UsersStore } from "./users.store"

@Injectable({ providedIn: "root" })
export class UsersService {

  readonly USERS_URL: string = "https://randomuser.me/api/?page=3&results=30&seed=abc"

  constructor(
    private usersStore: UsersStore, 
    private http: HttpClient
  ) {

  }


  get() {
    return this.http.get<User[]>(this.USERS_URL).pipe(tap(entities => {
      this.usersStore.set(entities)
    }))
  }

}
