import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { UserComponent } from "./user.component"

// Routing
import { UserRoutingModule } from "./user-routing.module"

// Material
import { MatTableModule } from "@angular/material/table"

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    UserRoutingModule
  ]
})
export class UserModule { }
