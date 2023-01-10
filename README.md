[![LinkedIn][linkedin-shield]][linkedin-url]
[<img alt="GitHub contributors" src="https://img.shields.io/github/contributors/artisMocans/Cypress-tests?style=for-the-badge">](https://github.com/artisMocans/Cypress-tests/graphs/contributors).

<h3 align="center">Cypress-tests</h3>

  <p align="center">
    <a href="https://github.com/artisMocans/Cypress-tests"><strong>Explore the docs »</strong></a>
    <br />
    <br />


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#running-tests">Running tests</a></li>
    <li><a href="#quick-rundown-of-current-tests">Quick rundown of current tests</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
Project developed using Javascript and [Cypress](https://www.cypress.io/) framework. \
Contains simple test case scenarios to showcase how such test cases could be handled.


<!-- GETTING STARTED -->
## Getting Started
To get started you need to simply clone the project and open it in your desired IDE. \
Personally I prefer [WebStorm](https://www.jetbrains.com/webstorm/).

### Prerequisites
Make sure you have [Nodejs](https://nodejs.org/en/download/) installed.
* npm
  ```sh
  npm install -g npm
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/artisMocans/Cypress-tests.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```



<!-- USAGE EXAMPLES -->
## Running tests
You can open Cypress from your project root one of the following ways:
* #### Using npx: `npx cypress open`
* #### Using yarn: `yarn run cypress open`

#### Selecting Testing Type
These commands should open the Cypress application where you'll be presented with two testing types. In our case select
the **E2E Testing**.

#### Choosing a browser
You'll need to choose you preferred browser you want the test to be executed on. (Keep in mind it only displayed locally
installed browsers.) 

#### Executing tests
To execute test you'll need to: 
1. open **Specs** tab from the left-side panel
2. click on the desired file containing test cases

From here the tests will automatically be executed and results, as well as logs, will be posted in the Cypress application.

<!-- RUNDOWN OF CURRENT TESTS -->
## Quick rundown of current tests

#### Test case in the class `shoppingCart.cy.js` contain the following steps:
- Visit the H&M website: `cy.visit('https://www2.hm.com/en_us/index.html')`
- accept cookies: `homePage.acceptCookies()`
- search for "sweatpants" in the search bar `homePage.searchFor('sweatpants')`
- click "Men" from the left-side panel `homePage.clickFromMenu('Men')`
- assert the url matches filter `cy.url().should('contain', 'sweatpants&department=men_all')`
- click the first item available `homePage.clickFirstItem()`
- add that item to favorites  `homePage.addItemToFavorites()`
- open Favorites page `homePage.openFavoritesPage()`
- select size "M" from the drop-down menu `favoritesPage.selectSize('M')`
- click Add to bag button `favoritesPage.clickAddToBag()`
- assert that the Shopping bag title matches expected `favoritesPage.isShoppingBagTitle('Shopping bag (1)')`\
- open Shopping bag page `favoritesPage.clickShoppingBag()`
- assert the url matches cart `cy.url().should('contain', 'en_us/cart')`
- assert the item is displayed `shoppingBagPage.isItemDisplayed()`
- assert the Continue to checkout button is displayed `shoppingBagPage.isContinueButtonDisplayed()`

#### Test case in the class `loginValidation.cy.js` contain the following steps:
- Visit the H&M website: `cy.visit('https://www2.hm.com/en_us/index.html')`
- accept cookies: `homePage.acceptCookies()`
- click the Sign In button `homePage.clickSignIn()`
- click Become A Member button `homePage.clickBecomeAMember()`
- fill the Email field with desired value `becomeAMemberPage.inputEmail('test@test.com')`
- fill the Password field with desired value `becomeAMemberPage.inputPassword('123')`
- input date of birth by Month/Day/Year `becomeAMemberPage.inputDateOfBirth('01', '01', '2024')`
- click register button `becomeAMemberPage.clickBecomeAMember()`
- assert the Date Ff Birth error is displayed `becomeAMemberPage.isDateOfBirthErrorDisplayed()`
- assert the Password error is displayed `becomeAMemberPage.isPasswordErrorDisplayed()`


As you can see the project is structured following the [PageObject Model](https://medium.com/geekculture/using-pageobject-pattern-with-cypress-6d9907850522) , so I highly recommend digging deeper
into these steps and explore what they actually do, and you'll learn that these are fairly simple to understand and implement.

<!-- CONTACT -->
## Contact
Project Link: [https://github.com/artisMocans/Cypress-tests](https://github.com/artisMocans/Cypress-tests)

<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/artis-mocans-31893b159/
