import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { UserComponent } from "./user-page/user.component"
import { MatTableModule } from "@angular/material/table"
import { UserRoutingModule } from "./user-page/user-routing.module"

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
