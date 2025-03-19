import {Page, Locator, expect} from '@playwright/test'
import { loginPageData } from '../../data/testData'
import { BasePage } from './basePage'

 interface LoginPageLocators {
    loginContainer : Locator
    usernameInput: Locator
    passwordInput: Locator
    loginButton: Locator
 }

export class LoginPage extends BasePage {
    public url = loginPageData.url
    readonly page : Page
    readonly locators : LoginPageLocators

    constructor(page: Page){
        super()
        this.page = page;
        this.locators= {
            loginContainer: page.getByTestId('login-container'),
            usernameInput : page.getByTestId('username'),
            passwordInput : page.getByTestId('password'),
            loginButton : page.getByTestId('login-button')
        }
    }

    public async goto(titlePage) {
        await this.page.goto(this.url)
        await expect(this.page).toHaveTitle(titlePage)
    }

    public async loginFormDisplayed() {
        await this.isElementDisplayed(this.locators.loginContainer)
    }

    public async fillFormAndSubmit(username: string, password: string){
        await this.fillInputElement(this.locators.usernameInput, username)
        await this.fillInputElement(this.locators.passwordInput, password)
        await this.clickOnElement(this.locators.loginButton)
    }

    public async loginSucceed(url) {
        await expect(this.page).toHaveURL(url)
    }

    public async loginFails(loginErrorMessage:string) {
        await this.isElementDisplayed(this.page.getByText(loginErrorMessage))
    }

}