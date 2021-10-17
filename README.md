# MembersPortal
The portal enable the user to search for a member using the member’s policy number as a query parameter and view the information on the member returned from the search.

# To run the Angular frontend client
 
## Step1: Setup
Once cloned the repository, open the terminal and change the directory to be at client. Then, Run npm install to install all the packages and dependencies required to build and run the app.

## Step 2: Build
Run ng build to build the project.

## Step 3: Development server
Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

--------------------------------------------------------------------------------------------------------------------------------------------------------

# To run the backend with node runtime and express web server

## Step1: Setup
Once cloned the repository, open the terminal and  Run npm install to install all the packages and dependencies required to build and run the app.

## Step 2: Development server
Run npm run start:watch to run the server and with the help of nodemon package it watches the changes without the need of restarting it (i.e. :watch)


-----------------------------------------------------------------------------------------------------------------------------------------------------------


### Consideration and Decision: 
 - Based on my little knowledge with insurance policy business logic, I've considered that there could be a case of joint policy in which case there can be multiple policy owner. So, if a user search such policy with just policy number, the search result will display both the members info (e.g. a policy number #8335993386). However, if the user also provide a member card number along with the policy number, then only the search result of the particular member with that card number will be displayed.
 - Since we currently don't have an api support requirement for service date filter, I decided not to have the input field for it on frontend.

 ### Limitation and Potential Enhancement:
  - The requirement to display search result is in a card or simple div format. I believe it would be good to have it in a tabular format since there could be a highly possible requirement to display other info of members in future (e.g contact number, email, etc. just to name few) and we could easily scable and customize. Also pagination and sorting could be utilized by default with Angular framework.
  - From the navigation prospect, may be instead of clicking first on menu icon which will have a link to navigate member search, we could probably have the first page as the app runs to have the member search that way user don't need to click menu and then navigate to search. 

  ### Design Pattern:
 - On the server, I've used a repository pattern as well as structured it layering into components like route, handler, repository, etc.
 - On the client side, I've used a angular service which is Singleton. I could have improved it using a Datasource decoupling the logic relatetd with data access into it and the service just connect to it for accesing data.

  ### What could I have improved on: If I was able to manage more time which I couldn't due to my current personal circumstances
 - Implement the functionality to iterate previous search results or history probabaly using state management tech with angular, authentication, security, improve on navigation and styling and potential if I scale the app, I would improve on the design pattern and performance.
 - At last obviously, I would add good coverage of unit test, integration and e2e test using mocha, jasmine, cypress frameworks then deploy it to a cloud server like aws or azure.
 - I'm also keen to implement the simple json db tech (lowdb). Had a look at it on npm library and found it interesting.
 
