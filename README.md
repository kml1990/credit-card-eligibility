## How to run this application

In the project directory, you can run:

- Run `npm install`

- Run `npm run serve` to run the server 

- Run `npm run start` to run the client

## Comments

* This app covers all the points listed in description
* There are four routes configured for this app:
    * /check-credit
    * /customers
    * /customers/:id'
    * /credit-cards'

### Business Logic

* credit_cards.json was been created and is served from express server
* customers.json was created and is served from express server
* Credit cards contain `eligibility rules` that allows for easy defining of new rules for card.
* Each card have validators injected that perform number of validation rules agains customer.
* New credit cards can be easily added, they must follow specified interface.
* Each entity has its own parser from dto to domain model.
* When new rules are needed, new rule would need to be added. Check `EmploymentStatusRule` or `IncomeRule`.
    * This could be more generic, so that rule can be tested agains any Customer property. 

### UI development

* App is fully responsive
* This app was created with simple project starter based on create-react-app.
* Due to time limitations I had to help support myself with UI library (react-library) to speed up development.
* Formik was used for form validation and submission.
* Yup was used to define validation schema for Formik.

### Notes

* Scss support was added to the project to enable CSS preprocessing and keep consistency in the app.
* I have recently created a little project starter on github and this application is based on it.
* Due to time limitations, tests were not added to this tech test. I am happy to add them if needed.
* This is not production ready solution, there are still improvements to be done, especially around UI/UX.
* In order to support internationalization `i18n` could have been used
    * This would allow supporting mutliple languages
    * This would allow for all static text in the application to be defined in a single file (Better maintainability)