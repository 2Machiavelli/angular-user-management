import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatTableModule } from "@angular/material/table";

// Components
import { TableComponent } from "./table/table.component"


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
