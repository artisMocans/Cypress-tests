class ShoppingBagPage {

    isItemDisplayed() {
        return cy.get('article[class*="CartItem-module--item__"]').should('be.visible')
    }

}

export default ShoppingBagPage;