import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

// Material
import { MatTableModule } from "@angular/material/table"
import { MatSortModule } from "@angular/material/sort"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"

// Components
import { TableComponent } from "./table/table.component"


@NgModule({
  declarations: [
    TableComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    TableComponent
  ]
})
export class SharedModule { }
