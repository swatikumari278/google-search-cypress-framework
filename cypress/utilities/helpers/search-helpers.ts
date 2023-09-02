/**
* Verify the searched item 
*/
export function verifySearchItem(){
    cy.get('#APjFqb')
      .should('have.text',"Cypress UI Automtion")
       
   }
  