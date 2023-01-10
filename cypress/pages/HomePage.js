class homePage {
    acceptCookies() {
        cy.get('#onetrust-reject-all-handler').should('have.text', 'Only required cookies').click()
    }

    clickSignIn() {
        cy.get('span[class*="SignInBox-module--signInText__"]').click()
        cy.get('div[class*="SignInBox-module--modalInnerContainer__"]').should('be.visible')
    }

    clickBecomeAMember() {
        cy.get('button[class*="CTA-module--secondary__"]').click()
        cy.get('p[class*="SignInBox-module--description__"]').should('be.visible').should('have.text', 'Become a Member — you\'ll enjoy exclusive deals, offers, invites and rewards.')
    }

    clickFromMenu(value) {
        cy.get('#menu-links li').contains(value).first().click()
    }

    clickFirstItem() {
        cy.get('.products-listing > li').first().click()
    }

    addItemToFavorites() {
        cy.get('button[class*="wc-pdp-favourite-button"]').click()
    }

    openFavoritesPage() {
        cy.get('span[class*="Favourites-module--text__"]').click()
        cy.get('ul[class*="FavouritesItemList--mobilePadding__"]').should('be.visible')
    }
    searchFor(value) {
        cy.get('.Header-module--searchBarContainer__Gao9M > .SearchBar-module--visibleDesktop__LsMCl > ' +
            '.SearchBar-module--searchBar__ZXP0W > .SearchBar-module--searchField__zvllE > ' +
            '.Field-module--childWrapper__poVzy > .Input-module--input__G9M0z > ' +
            '.BaseInput-module--input__TeCcB').type(value + '{enter}', { delay: 100 })
    }
}

export default homePage;