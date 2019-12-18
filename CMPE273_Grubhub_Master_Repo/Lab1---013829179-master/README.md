### Lab 1 - Calculator and Grubhub Application.

In this lab I have created calculator and Grubhub app using Node.js(Express) and React.

### Task:1

Developed a calculator app in which user can perform any operation like add, subtract, multiply, backspace, division. User can see the output of the expression by clicking on “=” icon soon after entering the expression.

### Task:2

Developed a prototype of a Grubhub application and include the functionalities in it for different roles like buyer and owner. 

### ->Basic Users (Buyer/Restaurant Owner) functionalities:

1. Sign up new Buyer (Name, Email and password)
2. Sign up new Owner (Name, Email, password, Restaurant name, Restaurant Zip Code)
3. Sign in existing user
4. Sign out.
5. Profile of Buyer (Profile Image, Name, Email, Phone Number)
5. Profile of Owner (Profile Image, Name, Email, Phone Number, Restaurant Name, Restaurant Image, Cuisine)
6. Users can update Profile anytime.
Note: To use the system, a user must login first to the system. Password must be encrypted.

### ->Functionalities for Buyer are mentioned below:

1. Home Page:
  a. Buyer should be able to search an item based on item name and go to search view.
2. Search Page:
  a. Buyer should be able to see the search results of restaurants offering that item.
  b. Buyer should be able to further filter results using cuisine.
  c. Buyers should be able to select a restaurant and go to details view.
3. Details Page:
  a. Buyer should be able to see items divided into sections
  b. Buyer should be able to select an item choose quantity and add it to cart.
  c. Buyer can purchase multiple items from a single restaurant at a time.
  d. The total amount should be calculated and shown to the buyer in the cart.
  e. Buyer should be able to order the items from the cart.
4. Past Orders Page:
  a. Buyer should be able to see all the past orders he placed to different restaurants.
5. Upcoming Orders Page:
  a. Buyer should be able to see all the upcoming orders and track their status as posted by the restaurant owner.

### ->Functionalities for Owner are mentioned below:

1. Home Page/Orders:
  a. Owner should be able to manage orders
  b. Owner should be able to see every order for his restaurant.
  c. Order details should have:
    1) Ordered Person’s name
    2) Ordered Person’s Address
    3) Item details:
      a) Items
      b) Quantity
      c) Price
    4)Status of the Order
      a) New
      b) Preparing
      c) Ready
      d) Delivered
  d. Owner should be able to cancel the orders.
  e. All the delivered items should be separated as old orders.

2. MENU:
  a. Owner should be able to add update sections (Breakfast, Lunch, Appetizers) to the menu.
  b. Owner should be able to add items to these sections.
    1) Name of item
    2) Description of item
    3) Image of item
    4) Price of item
  c. He should be able to delete or update sections.
  d. He should be able to delete or update items in a section.
  e. He should be able to see items divided based on sections in the menu view.


Performance Analysis is done using Jmeter Testing for backend APIs and results are compared with and without connection pooling.

Testing Backend APIs using Mocha and fron-end pages using Enzyme and Jest is also achieved in the lab.

Link to Repo : https://github.com/rajeshthummala94/Lab1---013829179

Instructions to run the application: 
-> Calculator : Go to Frontend folder and run npm start , Go to Backend folder and run node index.js for the application to be running. Client : 3000, Server : 3001 
-> Grubhub : Go to Frontend folder and run npm start , Go to Backend folder and run node index.js Client : 3000, Server : 9000.

For mocha to run, Go to backend folder and run npm test in Grubhub Application. For Enzyme testing, Go to frontend folder and run npm test in Grubhub Application it creates snapshots in the application to compare the views.
