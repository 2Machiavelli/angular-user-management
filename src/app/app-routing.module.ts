import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

const routes: Routes = [
  { 
    path: "",
    redirectTo: "/users", 
    pathMatch: "full" 
  },
  { 
    path: "users", 
    loadChildren: () => import("./users/users.module").then(m => m.UsersModule)
  },
  { 
    path: "leaders", 
    loadChildren: () => import("./leaders/leaders.module").then(m => m.LeadersModule)
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
