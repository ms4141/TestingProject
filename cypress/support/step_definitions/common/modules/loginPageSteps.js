import { When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { loginPageObjects } from "../../../base/pageObjects/loginPageObjects";
import users from "../../../../fixtures/users.json";

When(/^User navigate to website$/, () => {
    cy.visit("/");
});

And(/^User enters the username$/, () => {
    loginPageObjects.enterUsername(users.username);
});

And(/^User enters the password$/, () => {
    loginPageObjects.enterPassword(users.password);
});

And(/^User click on login button$/, () => {
    loginPageObjects.clickOnLogInButton();
});

Then(/^Verify user logged in successfully$/, () => {
    loginPageObjects.verifyUserLoggedInSuccessfully();
});