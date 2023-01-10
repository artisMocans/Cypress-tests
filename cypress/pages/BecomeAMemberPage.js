class BecomeAMemberPage {
    inputEmail(value) {
        cy.get('#email').type(value , { delay: 100 })
    }

    inputPassword(value) {
        cy.get('#password').type(value , { delay: 100 })
    }

    inputDateOfBirth(month, day, year) {
        cy.get('#dateOfBirth').type(month , { delay: 100 })
        cy.get('div[data-testid="dateInput"] >  input[name="day"]').type(day , { delay: 100 })
        cy.get('div[data-testid="dateInput"] >  input[name="year"]').type(year , { delay: 100 })
    }

    isDateOfBirthErrorDisplayed() {
        cy.get('span[class*="Field-module--errorText__"]').should('be.visible')
            .should('have.text', 'You have to be at least 16 years old to become a member')
    }

    isPasswordErrorDisplayed() {
        cy.get('.PasswordInput-module--safetyCheckWrapper__aH4zL > :nth-child(1) > span').should('have.text', '8 characters not passed')
        cy.get('.PasswordInput-module--safetyCheckWrapper__aH4zL > :nth-child(2) > span').should('have.text', '1 lowercase not passed')
        cy.get('.PasswordInput-module--safetyCheckWrapper__aH4zL > :nth-child(3) > span').should('have.text', '1 uppercase not passed')
    }

    clickBecomeAMember() {
        cy.get('[data-testid="submitButton"]').click()
    }
}

export default BecomeAMemberPage;