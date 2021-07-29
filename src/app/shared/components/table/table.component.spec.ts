import { ComponentFixture, TestBed } from "@angular/core/testing"
import { TableComponent } from "./table.component"
import { MatTableDataSource } from "@angular/material/table"
import { IUser } from "../../models/user.model"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"
import { TableModule } from "./table.module"

describe("UTableComponent", () => {
  let component: TableComponent
  let fixture: ComponentFixture<TableComponent>
  let users: IUser[]
  let nativeElement: any

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        TableModule,
        BrowserAnimationsModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    users = [
      {
        "gender": "male",
        "name": {
          "first": "jhon",
          "last": "gibson"
        },
        "email": "brad.gibson@example.com",
        "login": {
          "uuid": "155e77ee-ba6d-486f-95ce-0e0c0fb4b919"
        },
        "dob": {
          "age": 26
        },
        "phone": "011-962-7516",
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/75.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        "rating": 3
      },
      {
        "gender": "male",
        "name": {
          "first": "brad",
          "last": "gibson"
        },
        "email": "brad.gibson@example.com",
        "login": {
          "uuid": "9f07341f-c7e6-45b7-bab0-af6de5a4582d",
        },
        "dob": {
          "age": 26
        },
        "phone": "011-962-7516",
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/75.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        "rating": 3
      }
    ] as IUser[]

    fixture = TestBed.createComponent(TableComponent)
    component = fixture.componentInstance
    nativeElement = fixture.nativeElement

    component.displayedColumns = [ "photo", "full_name", "email", "phone", "rating" ]
    component.users = new MatTableDataSource(users)

    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })

  it("should display 2 users in the table", () => {
    const usersRows = nativeElement.querySelectorAll(".users-table__row")

    expect(usersRows.length).toEqual(2)
  })

  it("should emit click event on user", () => {
    const userRow = nativeElement.querySelector(".users-table__row")

    spyOn(component.clickEvent, "emit")

    userRow.dispatchEvent(new Event("click"))

    fixture.detectChanges()

    expect(component.clickEvent.emit).toHaveBeenCalledWith(users[0])
  })
})
