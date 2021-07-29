import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { LeadersComponent } from "./leaders.component"

// Routing
import { LeadersRoutingModule } from "./leaders-routing.module"

// Shared
import { SharedModule } from "../shared/shared.module"

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LeadersRoutingModule
  ],
  declarations: [
    LeadersComponent
  ],
  exports: [
    LeadersComponent
  ]
})
export class LeadersModule { }

