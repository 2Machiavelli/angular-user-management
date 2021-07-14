import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { tap } from "rxjs/operators"
import { IUser } from "../../models/user.model"
import { UsersStore } from "./users.store"

@Injectable({
  providedIn: "root",
})
export class UsersService {

  readonly USERS_URL: string = "https://randomuser.me/api/"
  readonly USERS_URL_QUERY: string = "?results=15&seed=abc"

  constructor(
    private usersStore: UsersStore, 
    private http: HttpClient
  ) {}


  public get(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.USERS_URL + this.USERS_URL_QUERY)
      .pipe(tap((data) => this.usersStore.set(data)))
  }

}
