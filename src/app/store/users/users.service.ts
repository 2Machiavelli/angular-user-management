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
      .pipe(tap(({ results }: any) => {

        // Add rating to user
        const usersWithRating = results.map((item: any) => ({ ...item, rating: 0, full_name: `${item.name.first}  ${item.name.last}` }))

        this.usersStore.update({usersList: usersWithRating})
      }))

  }

  increaseRating(id: string): void {
    this.usersStore.update(({ usersList }: any) => {

      const updatedUsersList = usersList.map((user: IUser) => {

        if ( user.login.uuid === id ) {

          return { ...user, rating: user.rating + 1 }
        }

        return user
      })

      return { usersList: updatedUsersList }

    })
  }

  decreaseRating(id: string): void {
    
    this.usersStore.update(({ usersList }: any) => {

      const updatedUsersList = usersList.map((user: IUser) => {

        if ( user.login.uuid === id ) {

          return { ...user, rating: user.rating - 1 }
        }

        return user
      })

      return { usersList: updatedUsersList }

    })
  }

}
