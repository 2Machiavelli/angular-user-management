import { ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing"
import { HttpClientTestingModule } from "@angular/common/http/testing"
import { UserComponent } from "./user.component"
import { UserModule } from "./user.module"
import { UsersService } from "../store/users/users.service"
import { ActivatedRoute } from "@angular/router"
import { of } from "rxjs"
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"

describe("UserComponent", () => {
  let component: UserComponent
  let fixture: ComponentFixture<UserComponent>
  let usersService: UsersService
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
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ 
              id: "9f07341f-c7e6-45b7-bab0-af6de5a4582d"
            })
          }
        }
      ],
      imports: [
        UserModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent)
    component = fixture.componentInstance
    usersService = TestBed.inject(UsersService)
    nativeElement = fixture.nativeElement

    spyOn(localStorage, "getItem").and.callFake((key) => {
      return JSON.stringify(store[key])
    })
  
    fixture.detectChanges()
  })
  
  it("should create", () => {
    expect(component).toBeTruthy()
  })

  it("check user name", () => {
    const userName = nativeElement.querySelector(".user__name")

    expect(userName.innerText).toBe("brad gibson")
  })

  it("check user rating", () => {
    const userRating = nativeElement.querySelector(".user__rating-status")

    expect(userRating.innerText).toBe("3")
  })

  it("check user info", () => {
    // Email
    expect(component.userInfo[0].value).toBe(store.AkitaStores.users.usersList[1].email)
    // Phone
    expect(component.userInfo[1].value).toBe(store.AkitaStores.users.usersList[1].phone)
    // Gender
    expect(component.userInfo[3].value).toBe(store.AkitaStores.users.usersList[1].gender)
    // Age
    expect(component.userInfo[4].value).toBe(store.AkitaStores.users.usersList[1].dob.age)
  })


  it("should increase rating up to 1", () => {
    const increaseBtn = nativeElement.querySelectorAll(".user__rating-btn")[0]
    const userRating = nativeElement.querySelector(".user__rating-status")

    spyOn(usersService, "increaseRating").and.callFake(() => userRating.innerText = +userRating.innerText + 1)

    increaseBtn.dispatchEvent(new Event("click"))

    fixture.detectChanges()

    expect(userRating.innerText).toEqual("4")
  })


  it("should decrease rating down to 2", () => {
    const increaseBtn = nativeElement.querySelectorAll(".user__rating-btn")[1]
    const userRating = nativeElement.querySelector(".user__rating-status")

    spyOn(usersService, "decreaseRating").and.callFake(() => userRating.innerText = +userRating.innerText - 1)

    increaseBtn.dispatchEvent(new Event("click"))

    fixture.detectChanges()

    expect(userRating.innerText).toEqual("2")
  })
})