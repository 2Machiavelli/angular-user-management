import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { UsersComponent } from "./users.component"

// Routing
import { UsersRoutingModule } from "./users-routing.module"

// Shared
import { TableModule } from "../shared/shared.module"

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
  ]
})
export class UsersModule { }
