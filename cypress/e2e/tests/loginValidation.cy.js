import HomePage from "../../pages/HomePage";
import BecomeAMemberPage from "../../pages/BecomeAMemberPage";

describe('Shopping website test', () => {
    before(() => {
        cy.visit('https://www2.hm.com/en_us/index.html')
    })

    it('Should validate invalid credentials', () => {
        const homePage = new HomePage();
        const becomeAMemberPage = new BecomeAMemberPage()

        homePage.acceptCookies()
        homePage.clickSignIn()
        homePage.clickBecomeAMember()

        becomeAMemberPage.inputEmail('test@test.com')
        becomeAMemberPage.inputPassword('123')
        becomeAMemberPage.inputDateOfBirth('01', '01', '2024')
        becomeAMemberPage.clickBecomeAMember()
        becomeAMemberPage.isDateOfBirthErrorDisplayed()
        becomeAMemberPage.isPasswordErrorDisplayed()
    })
})