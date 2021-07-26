import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { LeadersComponent } from "./leaders.component"
import { LeadersModule } from "./leaders.module"

describe("LeadersComponent", () => {
  let component: LeadersComponent
  let fixture: ComponentFixture<LeadersComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        LeadersModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadersComponent)
    component = fixture.componentInstance
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
