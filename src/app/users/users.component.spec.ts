import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { UsersModule } from "./users.module"
import { UsersComponent } from "./users.component"

describe("UsersComponent", () => {
  let component: UsersComponent
  let fixture: ComponentFixture<UsersComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UsersModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent)
    component = fixture.componentInstance
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })

  it("should set users", () => {

  })
})
