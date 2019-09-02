#Exercise 03

This version of the exercise uses AngularJS to add functionality to a Form.

This exercise uses **Webpack** helping in the automation of changes and processing **sass** stylesheets.

If you like to test and play around with the code, you need to `cd` into this folder and the run the following command first:

`npm install`

after that you have 2 more commands you can use:

* `npm run dev` - creates a dev server with live reload to test changes on the spot
* `npm run build` - packages and ships the build into the `dist` folder

If you just want to see the build in action, please load the `index.html` file located inside the `dist` folder.


##requirements
Exercise 3 - Design

To open a trial account in our system, the user must enter at least the following information: first and last name, email address (important that it is entered correctly otherwise the registration process does not go through without the user receives any feedback) and declare to accept the platform’s conditions of use.
Since the data entered at the registration's time are the only ones accessible to our marketing / sales service it would also be convenient for us to have: the company name (for non-private users), a telephone number and the address.
We should then prevent the registration form from being abused by programs (spam / brute force attacks).

Draw an optimal form that takes into account the desires of the potential clients (who wants to test our application with the minimum effort) and of our marketing (which instead would like as much data as possible).

Result: HTML file with any resources (CSS, …)
