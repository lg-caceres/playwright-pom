import { test } from "../fixtures/resources.fixture"
import { loginPageData, inventoryPageData } from "../data/testData"


test.describe('Inventory page test suite', () => {

  const pageTitle = loginPageData.pageTitle
  const validUserName = loginPageData.validUserName
  const validPassword = loginPageData.validPassword
  const numberOfItems = inventoryPageData.numberOfItems
  const itemsToBeAdded = inventoryPageData.itemsToBeAdded
  const itemsToBeRemoved = inventoryPageData.itemsToBeRemoved

  test.beforeEach(async ({ loginPage, inventoryPage }) => {
    await loginPage.goto(pageTitle)
    await loginPage.loginFormDisplayed()
    await loginPage.fillFormAndSubmit(validUserName, validPassword)
    await inventoryPage.containerItemDisplayed()
  });

  test('After users log in, they should see all product cards', async({inventoryPage}) => {
    //verify that all products are displayed
    await inventoryPage.areAllItemsDisplayed(numberOfItems)
  })

  test('When a new item is added or removed, cart count should be updated properly', async({inventoryPage}) => {
    // numberOfItemsRemoved MUST BE a subset of numberOfItemsAdded
    const numberOfItemsAdded = itemsToBeAdded.length
    const numberOfItemsRemoved = itemsToBeRemoved.length
    const numberOfFinalItemsSelected = numberOfItemsAdded - numberOfItemsRemoved

    //add items to the cart
    await inventoryPage.addItemsToCart(itemsToBeAdded)
    await inventoryPage.verifyCartBadgeCount(numberOfItemsAdded)

    //remove items from the cart
    await inventoryPage.removeItemsFromCart(itemsToBeRemoved)
    await inventoryPage.verifyCartBadgeCount(numberOfFinalItemsSelected)
  })

  test('Users shoudl be able to logout from application', async ({inventoryPage, loginPage}) => {
    //logout and verify login is displayed
    await inventoryPage.logoutUsingContextMenu()
    await loginPage.loginFormDisplayed()
  }) 

})