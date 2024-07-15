export const loginPageObjects = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    logInButton: "[type='submit']",
    dashboardHeader: "h6",

    enterUsername(email) {
        return cy.get(this.usernameField).should('be.visible').click().type(email);
    },

    enterPassword(password) {
        return cy.get(this.passwordField).should('be.visible').click().type(password);
    },

    clickOnLogInButton() {
        return cy.get(this.logInButton).should('be.visible').click();
    },

    verifyUserLoggedInSuccessfully() {
        return cy.get(this.dashboardHeader).eq(0).should('be.visible').should('have.text', "Dashboard");
    }
}