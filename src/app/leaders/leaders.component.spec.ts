import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HttpClientTestingModule } from "@angular/common/http/testing"
import { RouterTestingModule } from "@angular/router/testing"
import { LeadersComponent } from "./leaders.component"
import { LeadersModule } from "./leaders.module"
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { Router } from "@angular/router"

describe("LeadersComponent", () => {
  let component: LeadersComponent
  let fixture: ComponentFixture<LeadersComponent>
  let router: Router
  let nativeElement: any
  let store: any = {
    AkitaStores: {
      users: {
        usersList:[
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
