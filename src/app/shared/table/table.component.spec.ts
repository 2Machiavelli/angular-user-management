import { ComponentFixture, TestBed } from "@angular/core/testing"
import { SharedModule } from "../shared.module"
import { TableComponent } from "./table.component"

describe("UTableComponent", () => {
  let component: TableComponent
  let fixture: ComponentFixture<TableComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        SharedModule
      ],
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent)
    component = fixture.componentInstance
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
