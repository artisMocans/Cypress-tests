class ShoppingBagPage {

    isItemDisplayed() {
        return cy.get('article[class*="CartItem-module--item__"]').should('be.visible')
    }

    isContinueButtonDisplayed() {
        return cy.get('button[class*="CartSidebar--continueButton__"]').should('be.visible').should('have.text', 'Continue to checkout')
    }
}

export default ShoppingBagPage;