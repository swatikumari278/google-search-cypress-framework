declare global {

    namespace Cypress {

        interface Chainable {
            /**
            * visiting google url
            * @memberof chainable
            */

            visitUrl: () => void
            /**
            * type the passed element and press enter
            *@param searchItem : items that needs to be searched
            */
            searchElementOnSearchPage(searchItem:string)
        }
    }
}

/**
* visit the google url
*/
export function visitUrl(){
   cy.visit('/')
    
}

/**
* type the passed element and press enter
*@param searchItem : items that needs to be searched
*/
export function searchElementOnSearchPage(searchItem:string){
  cy.get('[name="q"]')
    .should('be.visible')
    .type(`${searchItem}{enter}`)
     
 }




//Adding the custom command to the Cypress commands
// Login section
Cypress.Commands.add('searchElementOnSearchPage', searchElementOnSearchPage)
Cypress.Commands.add('visitUrl', visitUrl)

// Making the custom commnads global

export { }

 