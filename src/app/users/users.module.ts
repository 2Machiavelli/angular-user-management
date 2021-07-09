import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { UsersComponent } from "./users.component"

import { TableModule } from "../shared/shared.module"

import { UsersService } from "../users.service"

@NgModule({
  imports: [
    CommonModule,
    TableModule
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
