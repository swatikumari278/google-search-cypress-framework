import { verifySearchItem } from "../utilities/helpers/search-helpers"
describe('template spec', {tags: "smoke"}, () => {

  before(() => {

    cy.visitUrl()

  })


  it('Should verify user land on Google Page', () => {
    cy.url().should('include', "https://www.google.com/")
    cy.title().should('eq', 'Google')
  })


  it('Should verify search functionality works on Google Page', () => {
    cy.fixture('search-item').then((search) => {
      cy.searchElementOnSearchPage(search.searchItem)
    })
  })
  it('Should verify search functionality works on Google Page', () => {
    cy.fixture('search-item').then((search) => {
    //  cy.searchElementOnSearchPage(search.searchItem)
    })
    verifySearchItem()
  })



})