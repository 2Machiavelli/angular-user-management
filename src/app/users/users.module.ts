import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { UsersComponent } from "./users-page/users.component"
import { UsersRoutingModule } from "./users-page/users-routing.module"

import { TableModule } from "../shared/shared.module"

import { UsersService } from "../users.service"

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersComponent
  ],
  exports: [
    UsersComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
