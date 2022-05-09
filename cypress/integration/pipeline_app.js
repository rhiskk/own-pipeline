describe('pipeline', () => {
  it('front page can be opened', () => {
    cy.visit('http://localhost:8000')
    cy.contains('Welcome')
    cy.contains('Messages')
  })
})
