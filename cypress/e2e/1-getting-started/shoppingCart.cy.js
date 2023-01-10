import HomePage from "../../pages/HomePage";
import FavoritesPage from "../../pages/FavoritesPage";
import ShoppingBagPage from "../../pages/ShoppingBagPage";
describe('H&M test', () => {
    before(() => {
        cy.visit('https://www2.hm.com/en_us/index.html')
    })

    it('Searches for sweatpants, filters by Mens, chooses first, adds to Favorites and then adds to bag', () => {
        const homePage = new HomePage();
        const favoritesPage = new FavoritesPage();
        const shoppingBagPage = new ShoppingBagPage();

        homePage.acceptCookies()
        homePage.searchFor('sweatpants')
        homePage.clickFromMenu('Men')
        // cy.get('#menu-links li').contains("Men").first().click()
        cy.url().should('contain', 'sweatpants&department=men_all')

        // cy.get('.products-listing > li').first().click()
        homePage.clickFirstItem()

        // cy.get('button[class*="wc-pdp-favourite-button"]').click()
        homePage.addItemToFavorites()

        // cy.get('span[class*="Favourites-module--text__"]').click()
        homePage.openFavoritesPage()
        // cy.get('ul[class*="FavouritesItemList--mobilePadding__"]').should('be.visible')

        favoritesPage.selectSize('M')
        // cy.get('button[class*="DropdownButton-module--sizePickerTrigger__"]').click()
        // cy.get('div[class*="Dropdown-module--sizePicker__"]').find('span').contains('M').click({force: true})

        favoritesPage.clickAddToBag()
        // cy.get('button[aria-label="ADD TO SHOPPING BAG"]').click()
        // cy.get('div[class*="AddToBagVerification-module--container__"]').should('be.visible')

        expect(favoritesPage.isShoppingBagTitle('Shopping bag (1)')).to.be.true
        favoritesPage.clickShoppingBag()
        // cy.get('span[class*=MiniCart-module--visibleDesktop__]').should('have.text', 'Shopping bag (1)').click()

        cy.url().should('contain', 'en_us/cart')

        expect(shoppingBagPage.isItemDisplayed()).to.be.true
        // cy.get('article[class*="CartItem-module--item__"]').should('be.visible')
        cy.get('button[class*="CartSidebar--continueButton__"]').should('be.visible').should('have.text', 'Continue to checkout')
    })
})