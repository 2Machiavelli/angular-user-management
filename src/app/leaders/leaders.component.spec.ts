import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HttpClientTestingModule } from "@angular/common/http/testing"
import { RouterTestingModule } from "@angular/router/testing"
import { LeadersComponent } from "./leaders.component"
import { LeadersModule } from "./leaders.module"
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { Router } from "@angular/router"
import { IUser } from "../shared/models/user.model"

describe("LeadersComponent", () => {
  let component: LeadersComponent
  let fixture: ComponentFixture<LeadersComponent>
  let router: Router
  let nativeElement: any
  let store: any = {
    AkitaStores: {
      users: {
        usersList: [
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
      }
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LeadersModule,
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadersComponent)
    component = fixture.componentInstance
    nativeElement = fixture.nativeElement
    router = TestBed.inject(Router)

    spyOn(localStorage, "getItem").and.callFake((key) => {
      return JSON.stringify(store[key])
    })

    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })

  it("should set leaders", () => {
    const usersRows = nativeElement.querySelectorAll(".users-table__row")

    expect(usersRows.length).toBe(2)
  })

  it("should navigate to leader", () => {
    const userRow = nativeElement.querySelectorAll(".users-table__row")[0]
    const navigateSpy = spyOn(router, "navigateByUrl")

    userRow.dispatchEvent(new Event("click"))

    expect(navigateSpy).toHaveBeenCalledWith("leaders/155e77ee-ba6d-486f-95ce-0e0c0fb4b919")
  })
})
