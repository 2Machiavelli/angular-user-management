import { ComponentFixture, TestBed } from "@angular/core/testing"
import { SharedModule } from "../shared.module"
import { TableComponent } from "./table.component"
import { MatTableDataSource } from "@angular/material/table"
import { IUser } from "src/app/models/user.model"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"

describe("UTableComponent", () => {
  let component: TableComponent
  let fixture: ComponentFixture<TableComponent>
  let users: IUser[]
  let nativeElement: any

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        SharedModule,
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
          "title": "mr",
          "first": "jhon",
          "last": "gibson"
        },
        "location": {
          "street": "9278 new road",
          "city": "kilcoole",
          "state": "waterford",
          "postcode": "93027",
          "coordinates": {
            "latitude": "20.9267",
            "longitude": "-7.9310"
          },
          "timezone": {
            "offset": "-3:30",
            "description": "Newfoundland"
          }
        },
        "email": "brad.gibson@example.com",
        "login": {
          "uuid": "155e77ee-ba6d-486f-95ce-0e0c0fb4b919",
          "username": "silverswan131",
          "password": "firewall",
          "salt": "TQA1Gz7x",
          "md5": "dc523cb313b63dfe5be2140b0c05b3bc",
          "sha1": "7a4aa07d1bedcc6bcf4b7f8856643492c191540d",
          "sha256": "74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"
        },
        "dob": {
          "date": "1993-07-20T09:44:18.674Z",
          "age": 26
        },
        "registered": {
          "date": "2002-05-21T10:59:49.966Z",
          "age": 17
        },
        "phone": "011-962-7516",
        "cell": "081-454-0666",
        "id": {
          "name": "PPS",
          "value": "0390511T"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/75.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        "nat": "IE",
        "rating": 3
      },
      {
        "gender": "male",
        "name": {
          "title": "mr",
          "first": "brad",
          "last": "gibson"
        },
        "location": {
          "street": "9278 new road",
          "city": "kilcoole",
          "state": "waterford",
          "postcode": "93027",
          "coordinates": {
            "latitude": "20.9267",
            "longitude": "-7.9310"
          },
          "timezone": {
            "offset": "-3:30",
            "description": "Newfoundland"
          }
        },
        "email": "brad.gibson@example.com",
        "login": {
          "uuid": "9f07341f-c7e6-45b7-bab0-af6de5a4582d",
          "username": "silverswan131",
          "password": "firewall",
          "salt": "TQA1Gz7x",
          "md5": "dc523cb313b63dfe5be2140b0c05b3bc",
          "sha1": "7a4aa07d1bedcc6bcf4b7f8856643492c191540d",
          "sha256": "74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"
        },
        "dob": {
          "date": "1993-07-20T09:44:18.674Z",
          "age": 26
        },
        "registered": {
          "date": "2002-05-21T10:59:49.966Z",
          "age": 17
        },
        "phone": "011-962-7516",
        "cell": "081-454-0666",
        "id": {
          "name": "PPS",
          "value": "0390511T"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/75.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        "nat": "IE",
        "rating": 3
      }
    ]

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
