
## Lab 3 - Using GraphQL and React Apollo client
The goal is to create grubhub application using GraphQL for queries and mutations with the help of Apollo client in reactJS and use a graphql and express server in the backend to handle multiple requests.

Added graphQL queries (can be found in 'graphQLAPI.js' in kafka-backend/services path) and mutations to handle requests from client side by creating schema for users, restaurants.

Added below functionalities for Customer and Owner like :

Sign up new Customer/Owner(at least first name, last name, Email and password)
Sign in existing Customer/Owner(Encrypt Passwords)
Sign out.
List enrolled restaurants on dashboard
Update Profile of Customer/Owner(Without Profile Image update).
add restaurants.
View items and sections(Both Customer and Owner).
Steps to run application:

## Front End:

Download the repository. Install the required dependencies from package.json using npm install. Start the application using "npm start".

### Back End:

Download the repository. Install the required dependencies from package.json using npm install. Set up the connection pooling configuration and db configuration in the file mongoose.js. Start the server using the command "node index.js"
