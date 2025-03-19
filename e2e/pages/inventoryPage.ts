import {Page, Locator, expect} from '../fixtures/resources.fixture'
import { inventoryPageData } from '../../data/testData'
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
        await expect(this.locators.inventoryList).toBeDisplayed
    }

    public async areAllItemsDisplayed(numberOfItems: number) {
        await expect(this.locators.inventoryItem).toHaveCount(numberOfItems)
    } 

    private getItemSelector(itemName: string, action: 'add-to-cart' | 'remove'): Locator {
        // Converts item names to a format suitable for selectors (e.g., "Item Name" -> "item-name")
        const selectorId = itemName.toLowerCase().replace(/ /g, '-')
        return this.page.getByTestId(`${action}-${selectorId}`)
    }

    public async addItemsToCart(itemsName: string[]) {
        for(const itemName of itemsName){ 
            await this.clickOnElement (this.getItemSelector(itemName, 'add-to-cart'))
        }
    }

    public async removeItemsFromCart(itemsName: string[]) {
        for(const itemName of itemsName){ 
            await this.clickOnElement(this.getItemSelector(itemName, 'remove'))
        }
    }

    public async verifyCartBadgeCount(totalItemsAdded: number) {
        await expect(this.locators.shoppingCartBadge).toBeDisplayed()
        await expect(this.locators.shoppingCartBadge).toHaveText(totalItemsAdded.toString())
    }

    public async logoutUsingContextMenu() {
        await this.clickOnElement(this.locators.openMenuButton)
        await this.clickOnElement(this.locators.logoutSidebarOption)
    }
}
