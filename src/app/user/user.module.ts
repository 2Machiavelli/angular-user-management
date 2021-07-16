import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { UserComponent } from "./user.component"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"


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
    UserRoutingModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class UserModule { }
