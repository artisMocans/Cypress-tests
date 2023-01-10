import HomePage from "../../pages/HomePage";
import FavoritesPage from "../../pages/FavoritesPage";
import ShoppingBagPage from "../../pages/ShoppingBagPage";
describe('Shopping website test', () => {
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
        cy.url().should('contain', 'sweatpants&department=men_all')

        homePage.clickFirstItem()

        homePage.addItemToFavorites()

        homePage.openFavoritesPage()

        favoritesPage.selectSize('M')

        favoritesPage.clickAddToBag()

        favoritesPage.isShoppingBagTitle('Shopping bag (1)')
        favoritesPage.clickShoppingBag()

        cy.url().should('contain', 'en_us/cart')

        shoppingBagPage.isItemDisplayed()
        shoppingBagPage.isContinueButtonDisplayed()
    })
})