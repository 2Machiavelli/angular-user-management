import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root"
})
export class UsersService {
  displayedColumns: string[] = ["photo", "name", "email", "phone", "rate"]

  readonly USERS_URL = "https://randomuser.me/api/?page=3&results=10&seed=abc"

  constructor (
    private http: HttpClient
  ) {}

  getUsers(): any {
    return this.http.get(this.USERS_URL)
  }
}
