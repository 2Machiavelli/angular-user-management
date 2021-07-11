import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UsersComponent } from "./users.component";


const routes: Routes = [
  {
    path: "",
    component: UsersComponent
  },
  { 
    path: "users/:id", 
    loadChildren: () => import("../../user/user.module").then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }