import { Injectable } from "@angular/core"
import { EntityState, EntityStore, StoreConfig } from "@datorama/akita"
import { IUser } from "../../models/user.model"

export interface UsersState extends EntityState<IUser> {}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "users" })
export class UsersStore extends EntityStore<UsersState> {

  constructor() {
    super()
  }

}
