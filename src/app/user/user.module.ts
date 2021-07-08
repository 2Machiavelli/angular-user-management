import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { MatTableModule } from "@angular/material/table";


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class UserModule { }
