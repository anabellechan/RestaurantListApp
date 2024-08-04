# RestaurantList
![image](https://github.com/user-attachments/assets/a11d030b-a0b3-4370-aa7d-13b383f6c885)

This repo contains the video demo located in 'Demo' folder.

# Description
This is a Restuarant List Application that allows you to create a list of restaurants that you’d like to check out in the future. This web application
is built using React.js as the front-end client, Node.js as the backend server, and PostgresSQL as the database.

# Application Features
- **View Restaurant Details**: Ability to view list of all restaurants added to the list, as well as viewing individual restaurant profiles to view the restaurant images found on google, the description of the restaurant such as what other reviewers are saying, type of cuisine (),
- **Upload Restaurant Details**: Ability to upload restaurant details - Name, location, google rating, cuisine into a list.
- **Modify Restaurants**: Ability to modify uploaded restaurants in the list.
Modifying the list includes - Modifying Name, location, rating, description, cuisine
- **Delete Restaurants**: Ability to delete uploaded restaurants from the list.
- **Sort List**: Ability to sort the list by alphabetical order (of restaurants’ names) or by upload date.
- **Additional Features**: Anything else that you think might be useful/impressive!

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










