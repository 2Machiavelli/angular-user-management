describe("Rating", () => {
  beforeEach(() => {
    cy.visit('/users/9f07341f-c7e6-45b7-bab0-af6de5a4582d')
  })

  it("Increase the rating", () => {
    setTimeout(() => {
      cy.get(".user__rating-btns:first").click()
    }, 1000)

    setTimeout(() => {
      cy.get(".user__rating-status").should("contain.text", "1")
    }, 1500)
  })

  it("Decrease the rating", () => {
    setTimeout(() => {
      cy.get("user__rating-btns:last").click()
    }, 1000)

    setTimeout(() => {
      cy.get(".user__rating-status").should("contain.text", "-1")
    }, 1500)
  })
})