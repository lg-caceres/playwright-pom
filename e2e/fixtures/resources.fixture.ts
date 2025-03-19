import { test as baseTest, expect as baseExpect, Locator} from "@playwright/test" 
import { LoginPage } from "../pages/loginPage"
import { InventoryPage } from "../pages/inventoryPage"

type MyFixtures = {
    loginPage: LoginPage
    inventoryPage: InventoryPage
}

export const test = baseTest.extend<MyFixtures>({
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page)
        await use(loginPage)
    },

    inventoryPage: async ({page}, use) => {
        const inventoryPage = new InventoryPage(page)
        await use(inventoryPage)
    },
})

export const expect = baseExpect.extend({
    toBeDisplayed: async (element: Locator) => {
        const isVisible = await element.isVisible();
        return {
            pass: isVisible,
            message: () => `Expected element - ${element} - to be displayed, but it was not.`,
            name: "toBeDisplayed"
        }
    },
});

export { Locator, Page } from "@playwright/test"