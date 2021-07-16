import { Injectable } from "@angular/core"
import { Store, StoreConfig } from "@datorama/akita"
import { IUser } from "../../models/user.model"

export interface UsersState {
  usersList: IUser[]
}

export function createInitialState(): UsersState {
 return {} as UsersState
}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "users" })
export class UsersStore extends Store<UsersState> {

  constructor() {
    super(createInitialState())
  }

}
