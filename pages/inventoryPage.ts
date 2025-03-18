import {Page, Locator, expect} from '@playwright/test'
import { inventoryPageData } from '../data/testData'
import { BasePage } from './basePage'

interface InventoryPageLocators {
    inventoryList: Locator
    inventoryItem: Locator
    shoppingCartBadge: Locator
    openMenuButton: Locator
    logoutSidebarOption: Locator
}


export class InventoryPage extends BasePage {
    public url = inventoryPageData.url
    readonly page : Page
    readonly locators : InventoryPageLocators

    constructor(page: Page){
        super()
        this.page = page
        this.locators= {
            inventoryList :  page.getByTestId('inventory-list'),
            inventoryItem : page.getByTestId('inventory-item'),
            shoppingCartBadge : page.getByTestId('shopping-cart-badge'),
            openMenuButton : page.getByRole('button', {name: 'Open Menu'}),
            logoutSidebarOption : page.getByTestId('logout-sidebar-link')
        }
    }

    public async containerItemDisplayed() {
        this.isElementDisplayed(this.locators.inventoryList)
    }

    public async areAllItemsDisplayed(numberOfItems: number) {
        await expect(this.locators.inventoryItem).toHaveCount(numberOfItems)
    } 

    public async addItemsToCart(itemsName: string[]) {
        for(const itemName of itemsName){ 
            const selectorId = this.convertNameOnSelector(itemName)
            await this.clickOnElement (this.page.getByTestId(`add-to-cart-${selectorId}`))
        }
    }

    public async removeItemsFromCart(itemsName: string[]) {
        for(const itemName of itemsName){ 
            const selectorId = this.convertNameOnSelector(itemName)
            await this.clickOnElement(this.page.getByTestId(`remove-${selectorId}`))
        }
    }

    public async verifyCartBadgeCount(totalItemsAdded: number) {
        await expect(this.locators.shoppingCartBadge).toHaveText(totalItemsAdded.toString())
    }

    public async logoutUsingContextMenu() {
        await this.clickOnElement(this.locators.openMenuButton)
        await this.clickOnElement(this.locators.logoutSidebarOption)
    }
}
