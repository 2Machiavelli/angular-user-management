import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { tap } from "rxjs/operators"
import { UsersStore } from "./users.store"

// Models
import { IUser } from "../../shared/models/user.model"
import { IUsersApiData } from "../../shared/models/usersApiData.model"

@Injectable({
  providedIn: "root",
})
export class UsersService {
  readonly BASE_URL: string = "https://randomuser.me/api/"
  readonly BASE_URL_PARAMS: string = "?results=100&seed=abc"

  constructor(
    private usersStore: UsersStore,
    private http: HttpClient
  ) {}


  public get(): Observable<IUsersApiData> {

    return this.http.get<IUsersApiData>(this.BASE_URL + this.BASE_URL_PARAMS)
      .pipe(tap((data: IUsersApiData) => {

        // Add rating and full_name to the API results
        const usersWithRating = data.results.map((item: any) => ({ ...item, rating: 0, full_name: `${item.name.first}  ${item.name.last}` }))

        this.usersStore.update({usersList: usersWithRating})
      }))

  }

  increaseRating(id: string): void {
    this.usersStore.update(({ usersList }: { usersList: IUser[] }) => {

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
    this.usersStore.update(({ usersList }: { usersList: IUser[] }) => {

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
