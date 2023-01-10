class FavoritesPage {

    selectSize(value) {
        cy.get('button[class*="DropdownButton-module--sizePickerTrigger__"]').click()
        cy.get('div[class*="Dropdown-module--sizePicker__"]').find('span').contains(value).click({force: true})
    }

    clickAddToBag() {
        cy.get('button[aria-label="ADD TO SHOPPING BAG"]').click()
        cy.get('div[class*="AddToBagVerification-module--container__"]').should('be.visible')
    }

    isShoppingBagTitle(value) {
        return cy.get('span[class*=MiniCart-module--visibleDesktop__]').should('have.text', value)
    }

    clickShoppingBag() {
        cy.get('span[class*=MiniCart-module--visibleDesktop__]').click()
    }
}

export default FavoritesPage;