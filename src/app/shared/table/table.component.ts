import { Component, Input, Output, EventEmitter } from "@angular/core"

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

  handleClick(user: any) {
    this.clickEvent.emit(user)
  }
}
