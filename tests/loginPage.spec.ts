import { test } from "../fixtures/resources.fixture"
import { loginPageData, inventoryPageData } from "../data/testData";


test.describe('Login page test suite', () => {

  const pageTitle = loginPageData.pageTitle
  const validUserName = loginPageData.validUserName
  const validPassword = loginPageData.validPassword
  const invalidPassword =  loginPageData.invalidPassword
  const loginErrorMessage = loginPageData.errorMessage
  const inventoryUrl = inventoryPageData.url

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto(pageTitle)
    await loginPage.loginFormDisplayed()
  });

  test('When users log in with valid credentials, they should see the inventory page', async({loginPage}) => {
    //fill form with valid credentials
    await loginPage.fillFormAndSubmit(validUserName, validPassword)
    //user should see the inventory view
    await loginPage.loginSucceed(inventoryUrl)
  })

  test('When users log in with invalid credentials, they should see an error message', async ({loginPage}) => {
    //fill form with invalid credentials
    await loginPage.fillFormAndSubmit(validUserName, invalidPassword)
    //user should see an error message
    await loginPage.loginFails(loginErrorMessage)
  })

})