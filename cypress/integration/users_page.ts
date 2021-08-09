describe("Users Page", () => {
  beforeEach(() => {
    const fakeUsersData = JSON.stringify({
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
            "rating": 3,
            "full_name": "Jhon Gibson"
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
            "rating": 3,
            "full_name": "Brad Gibson"
          }
        ]
      }
    })

    localStorage.setItem("AkitaStores", fakeUsersData)

    cy.visit("/users")
  })

  it("has the correct title", () => {
    cy.title().should("equal", "AUM | Users")
  })

  it("check if the side menu works correctly", () => {
    // Open
    cy.get(".app__menu-btn").click()
    cy.get(".drawer").should("be.visible")
  
    // Close
    cy.get(".app__menu-btn").click()
    cy.get(".drawer").should("be.hidden")
  })       
  
  it("if the filter works", () => {
    cy.get("[data-testid='filter']").type("Jhon Gibson")
    cy.get(".users-table__row:first").should("include.text", "Jhon Gibson")
  })

  it("go to user page", () => {
    cy.get(".users-table__row:first").click()
    cy.title().should("equal", "AUM | Jhon Gibson")
    cy.location("href").should("equal", "http://localhost:4200/users/155e77ee-ba6d-486f-95ce-0e0c0fb4b919")
  })

})