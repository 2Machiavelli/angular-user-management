import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { LeadersComponent } from "./leaders.component"


const routes: Routes = [
  {
    path: "",
    component: LeadersComponent
  },
  { 
    path: "leaders/:id", 
    loadChildren: () => import("../user/user.module").then(m => m.UserModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadersRoutingModule { }