import { expect, Locator} from "@playwright/test"

export class BasePage {

    public async isElementDisplayed (element: Locator)  {
        try {
            await expect(element).toBeVisible()
        } catch(errorMessage) {
            await console.log('Element is not visible:', element)
            throw errorMessage
        }
    }
    
    public async clickOnElement (element: Locator) {
        await this.isElementDisplayed(element)
        await element.click()
    }
    
    public async fillInputElement (element: Locator, text: string){
        await this.isElementDisplayed(element)
        await element.fill(text)
    }
    
    public convertNameOnSelector (itemName: string): string {
        return itemName.toLowerCase().replace(/ /g, '-')
    }
}



