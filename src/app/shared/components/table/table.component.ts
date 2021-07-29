import { AfterViewInit, ViewChild, Component, Input, Output, EventEmitter } from "@angular/core"
import { MatSort } from "@angular/material/sort"
import { IUser } from "../../models/user.model"
import { MatTableDataSource } from "@angular/material/table"

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.sass"]
})
export class TableComponent implements AfterViewInit {
  @Input() displayedColumns!: string[]
  @Input() users!: MatTableDataSource<IUser>

  @Output() clickEvent = new EventEmitter()

  @ViewChild(MatSort) sort!: MatSort

  constructor () {}

  ngAfterViewInit() {
    this.users.sort = this.sort
  }

  userFullName(user: IUser): string {
    return `${user.name.first} ${user.name.last}`
  }

  handleClick(user: IUser): void {
    this.clickEvent.emit(user)
  }

  applyFilter(event: Event): void {
    const filterValue: string = (event.target as HTMLInputElement).value
    this.users.filter = filterValue.trim().toLowerCase()
  }
}

