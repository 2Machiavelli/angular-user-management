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
  readonly BASE_URL: string = "https://randomuser.me/api/"
  readonly BASE_URL_PARAMS: string = "?results=15&seed=abc"

  constructor(
    private usersStore: UsersStore, 
    private http: HttpClient
  ) {}


  public get(): Observable<IUser[]> {

    return this.http.get<IUser[]>(this.BASE_URL + this.BASE_URL_PARAMS)
      .pipe(tap(({ results }: any) => {

        // Add rating and full_name to the API results
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
