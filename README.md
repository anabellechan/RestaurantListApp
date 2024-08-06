# RestaurantList

### Current live version available at https://anabellechan.github.io/RestaurantListApp/. ###
## This repo contains the video demo located in 'Demo' folder.
![image](https://github.com/user-attachments/assets/a11d030b-a0b3-4370-aa7d-13b383f6c885)  
  
**List of Restaurants Added by User:**  
  
![image](https://github.com/user-attachments/assets/cf637caf-b87b-425c-90c8-e629e49d60a9)  
  
**Restaurant Profile:**  
![image](https://github.com/user-attachments/assets/747e6cf4-5ed5-4776-b160-75196aa525a4)



# Description
This is a Restaurant List Application that allows you to create a list of restaurants that you’d like to check out in the future. This web application
is built using React.js as the front-end client, Node.js as the backend server, and PostgresSQL as the database.

# Application Features
- **View Restaurant Details**: Ability to view list of all restaurants added to the list, as well as viewing individual restaurant profiles to view the restaurant images found on google, the google ratings, the description of the restaurant such as what other reviewers are saying, type of cuisine (Italian, Chinese, Muslim, Indian, Korean, Japanese).
- **Upload Restaurant Details**: Ability to upload restaurant details - Name, location, google rating, cuisine into a list.
- **Modify Restaurants**: Ability to modify uploaded restaurants in the list.
Modifying the list includes - Modifying Name, location, rating, description, cuisine
- **Delete Restaurants**: Ability to delete uploaded restaurants from the list.
- **Sort List**: Ability to sort the list by alphabetical order (of restaurants’ names) or by upload date.
  
# - **Additional Features**: 
- **Fuzzy Search**: Using fuse.js library, it gives the user the ability to search for restaurants in the database while accounting for spelling mistakes such as spelling "ennnnncahnted" would give the correct result of "Enchanted Cafe" on the search bar
- ![image](https://github.com/user-attachments/assets/56bfdd44-27be-482e-bd81-9ba83d2c7528)
- **Individual Restaurant Profile**: User can view individual restaurant profiles by clicking on the name of the dining establishment. This would show the profile of the restaurant containing the Image of the Restaurant, Restaurant Name, Location, Rating, Cuisine, Description, Upload Date. 
- **Google Images and Ratings**:  Assumption- Google Rating could be a rating scraped from google reviews so the user can make decisions based off of the google ratings. However in this application, the user would key in the online review ratings 
that they found online or a choice to leave ratings blank.

## Database and Data Types
![image](https://github.com/user-attachments/assets/563fda1c-2681-4d3a-943b-1bc78c24fcce)  
**Primary Key**: id: Integer (auto-incremented, Non-null)  
**Restaurant Name**- name: Varchar (100) datatype.  
**Address**- location: Varchar (100) datatype.  
**Google rating**- rating: Integer datatype. User would key in the online review ratings   
that they found online or a choice to leave ratings blank.  
**Upload_Date**- upload_date: date datatype. Upload date is created upon saving a creation of a restaurant data through 'Add Restaurant'.  
**Description**- description: text datatype. Current version only allows for editing of description after creating a restaurant. Hence description can be edited within the 'Edit' feature. Description can also be left blank.  
**Google Image**- image: text datatype. Allows for href url links from google to be inserted in the database. Assumption for the future application is that user would be able to view a database of restaurants and add them to their own list, so images are taken on a full list of all restaurants in singapore scraped and stored within a database.  
**Cuisine**- cuisine: Varchar(30) datatype. Allows user to select from a list of cuisine categories - Italian, Chinese, Muslim, Indian, Korean, Japanese. Future application could include more varieties of cuisine categories.  

## This repo contains the video demo located in 'Demo' folder if you do not wish to install.  

# Installation for Food-List App
This repository contains scripts for setting up the Food List.

### 1. Installation of PostgresSQL (Windows)
Firstly you would need to install [postgresSQL](https://www.postgresql.org/download/windows/)

#### Add PostgresSQL to your Path
https://www.commandprompt.com/education/how-to-set-windows-path-for-postgres-tools/

### Install Node.js, npm and React.js
```
https://nodejs.org/en/download/package-manager/current
https://www.freecodecamp.org/news/how-to-install-react-a-step-by-step-guide/
```

### Install Server-Side Packages (Node.js) and start 
```
cd ../backend
npm install
npm run start
```

### Navigate to the frontend directory of the repository, install packages and start reactjs client
```
cd ../frontend
npm install
npm run start
```

# Restaurant List Database Setup

These are the step-by-step instructions to set up the PostgreSQL database for the Restaurant List App and import the SQL dump file.

## Prerequisites

- PostgreSQL installed on your local machine.
- Access to the PostgreSQL command-line tool `psql`.
- The `restaurant_table.sql` file that contains the SQL dump.

## Steps

1. **Open PostgreSQL Command Line Interface**

   Open your terminal or command prompt and connect to your PostgreSQL server:

   ```sh
   psql -h localhost -U postgres

2. **Create the Database**

Ensure the database restaurant_list exists before running the import command. If it does not exist, create it using the following command:
postgres as user, connecting to port 5432:
```psql -U postgres -h localhost -p 5432 -c "CREATE DATABASE restaurant_list;"```

3. **Import the SQL Dump File**
This repo contains the restaurant_table.sql file in the root directory. Use the file to import the SQL dump file into the restaurant_list database using pg_restore command. postgre as user, connecting to port 5432, database: restaurant_list, sql file to import data into the schema table:  
```psql -U postgres -h localhost -p 5432 -d restaurant_list -f restaurant_table.sql```


## System Architecture Explained ##

### Frontend: HTML, CSS, JavaScript, React ###

HTML & CSS:

HTML: HTML structures the content of the web pages. It ensures that the data is organized in a way that is accessible and easily readable.
CSS: Used for styling the application, CSS will ensure that the user interface (UI) is visually appealing and responsive.

JavaScript:
JavaScript is used to add interaction to the web pages. It allows for dynamic content updates, form validations, and event handling, enhancing the UX.

React:
React is chosen for its component-based architecture, which allows for reusable UI components. It makes the codebase easier to manage and scale as well as it is efficient for development.
React Router in index.js: This will manage the routing of the application, ensuring smooth navigation between different pages (e.g., home, about, restaurant profile).
React Bootstrap: It is a UI library that combines the flexibility of Bootstrap with the power of React components that is easy for developers to implement UI features that are visually appealing to the users.

React-Bootstrap: Bootstrap is a popular front-end library that simplifies the development of responsive web applications. It provides a comprehensive collection of CSS and JavaScript components, such as grid systems, typography, forms, buttons, navigation, and modals, which help developers create consistent and attractive user interfaces quickly and efficiently.

### Backend: Node.js, Express.js, Postgres DB ###

Node.js:

Node.js is chosen for its event-driven architecture, which allows for the development of scalable and high-performance web applications.
Express: is a lightweight web application framework for Node.js, Express simplifies the process of setting up a web server. It provides robust routing and middleware capabilities, making it easier to build and maintain the backend.

RESTful API:

The backend will expose the RESTful API endpoints to handle CRUD (Create, Read, Update, Delete) operations for the restaurant data. This API will be consumed by the frontend to perform various actions like adding, editing, and deleting restaurants.

Database: PostgreSQL - Database: Restaurant_list. Table: restaurants

PostgreSQL:

PostgreSQL is chosen for its reliability, robustness, and SQL compliance. It supports complex queries and transactions, making it suitable for handling the restaurant data.
pgVector: An extension of PostgreSQL that supports vector similarity search, which can be useful for implementing features like recommendations or advanced search functionalities based on user preferences.


## Non-Functional, Considerations ##

### Performance: ###

React: The use of React ensures that the frontend is fast and responsive. React's virtual DOM and efficient diffing algorithm reduce the amount of DOM manipulation, leading to better performance.
React also supports server-side rendering (SSR) and static site generation (SSG), which can improve the initial load time and performance of the application by pre-rendering HTML content on the server.
React also has hooks like useState and useEffect to allow functional components to manage state and side effects directly, reducing the complexity and overhead associated with class components. Functional components with hooks are generally easier to optimize and can lead to more efficient code execution.
Node.js: The asynchronous nature of Node.js ensures that the backend can handle multiple requests simultaneously without blocking the event loop, improving the performance of the application. 
Additionally, Node.js can be optimized further by using clustering to take advantage of multi-core systems, distributing incoming requests across multiple worker processes.

### Security: ###
Input Validation & Sanitization: By validating and sanitizing all user inputs it helps prevent common vulnerabilities such as SQL injection, Cross-Site Scripting, and command injection attacks. By implementing strict input validation rules and using libraries that automatically sanitize inputs, the application can reduce the risk of malicious data that compromises the security of the system.
Express Middleware: In the current application, Middleware CORS was used to enhance security by setting various HTTP headers and enabling Cross-Origin Resource Sharing. This enabling or restricting cross-origin requests ensures that only permitted domains can interact with the backend, mitigating potential cross-site scripting (XSS) and cross-site request forgery (CSRF) attacks.
Authentication & Authorization: For future implementation of added security and authentication, a login page should be used to authenticate users and using role-based access control (RBAC) to enhance security by granting different permissions based on user roles. To add on, authentication is done by using either Cookies and Sessions or JWT (JSON Web Tokens) upon a successful login for secure authentication and authorization, and ensuring that only authorized users can perform certain actions. An added security measure is also to implement CSRF tokens to prevent cross-site request forgery attacks.

Security Logging and Monitoring: Regular security logging and continuous monitoring are important for identifying and addressing potential vulnerabilities. Implementing tools for logging and monitoring application activity, and setting up alerts for suspicious behavior, ensures timely detection and response to security incidents. Such alert software examples are: Datadog, AWS Cloudwatch to monitor HTTP request errors, as well as server usages for spikes.

Dependency Management: Keeping dependencies up to date and applying security patches for servers promptly helps mitigate risks associated with known vulnerabilities in third-party libraries and frameworks. Using tools like npm audit can automate the detection of vulnerabilities in project dependencies.

### Scalability: ###

Component-Based Architecture: Reactjs’s component-based architecture makes it easy to scale the frontend by reusing components and adding new features without affecting the existing codebase.
Microservices: The Nodejs backend can be developed as microservices, allowing for independent deployment and scaling of different parts of the application as needed. Nodejs also makes code modular and easy to maintain as well as scale up. 
For future scaling, the application can be deployed as a microservice on Docker and auto-scaled using Kubernetes. Docker allows applications to be packaged with all their dependencies into lightweight, portable containers. This ensures consistency across different environments, from development to production. By containerizing the application, each microservice can run in its own isolated environment, making it easier to manage dependencies and avoid conflicts. Docker also simplifies the deployment process, enabling quick and efficient scaling of services as needed.
To scale from docker, Kubernetes can be used to automate the deployment, scaling, and management of containerized applications. With Kubernetes, you can manage large-scale containerized applications and ensure high availability and optimum fault tolerance. It provides features such as automatic scaling, load balancing, and self-healing, which are essential for maintaining the reliability and performance of applications. Kubernetes also supports rolling updates and rollbacks, making it easier to deploy new features and updates without downtime.
    
### User Interface and User Experience: ###

Responsive Design: Using CSS frameworks like Bootstrap ensures that the application is responsive yet visually appealing to the users.
Intuitive UI: A well-designed UI enhances user satisfaction and engagement, making it easy for users to navigate the application and perform desired actions.

Through this stack, we ensure that the restaurant list application is robust, scalable, and easy to maintain, with seamless UX while meeting performance, security and scalability requirements.







