import { ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing"
import { HttpClientTestingModule } from "@angular/common/http/testing"
import { UserComponent } from "./user.component"
import { UserModule } from "./user.module"
import { UsersService } from "../store/users/users.service"
import { ActivatedRoute } from "@angular/router"
import { of } from "rxjs"
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"
import { IUser } from "../shared/models/user.model"

describe("UserComponent", () => {
  let component: UserComponent
  let fixture: ComponentFixture<UserComponent>
  let usersService: UsersService
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