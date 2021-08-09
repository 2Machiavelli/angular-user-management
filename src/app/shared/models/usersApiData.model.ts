import { IUser } from "./user.model";

export interface IUsersApiData {
  results: IUser[]
  info: object
}