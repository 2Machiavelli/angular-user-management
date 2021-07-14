import { Component, Input, Output, EventEmitter } from "@angular/core"

// Models
import { IUser } from "../../models/user.model"

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.sass"]
})
export class TableComponent {
  @Input() displayedColumns: any
  @Input() users: any

  @Output() clickEvent = new EventEmitter()


  constructor () {}

  handleClick(user: IUser): void {
    this.clickEvent.emit(user)
  }
}
