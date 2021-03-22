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
* Credit cards contain eligibility_rules that allows to fairly easy define eligibility rules for card. 

### UI development

* App is fully responsive
* This app was created with simple project starter based on create-react-app.
* Due to limited time I had to help support myself with UI library (react-library) to speed up development.
* Formik was used for form validation and submission.
* Yup was used to define validation schema for Formik.

### Notes

* Scss support was added to the project to enable CSS preprocessing and keep consistency in the app.
* I have recently created a little project starter on github and this application is based on it.
* Due to limited time, tests were not added to this tech test 