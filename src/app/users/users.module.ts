import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { UsersComponent } from "./users.component"
import { UsersRoutingModule } from "./users-routing.module"

// Shared
import { TableModule } from "../shared/shared.module"

// Store
import { UsersService } from "../store/users/users.service"

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
