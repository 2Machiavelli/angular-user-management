import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {
  @Input() displayedColumns: any
  @Input() dataSource: any


  constructor (
    private router: Router
  ) {}

  openUserCard(user: any): void {
    this.router.navigateByUrl(`users/${user.login.uuid}`)
  }

  ngOnInit(): void {}

}
