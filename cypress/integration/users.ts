describe("Rating", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Set the users to localStorage", () => {
    setTimeout(() => {
      expect(!!localStorage.getItem("AkitaStores")).to.true
    }, 1500)
  })
})