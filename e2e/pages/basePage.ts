import { expect, Locator} from "../fixtures/resources.fixture"

export class BasePage {
    
    public async clickOnElement (element: Locator) {
        await expect(element).toBeDisplayed()
        await element.click()
    }
    
    public async fillInputElement (element: Locator, text: string){
        await expect(element).toBeDisplayed()
        await element.fill(text)
    }
}



