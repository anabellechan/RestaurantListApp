# RestaurantList

This repo contains the video demo located in 'Demo' folder.
**Architecture Diagram**
![image](https://github.com/user-attachments/assets/a11d030b-a0b3-4370-aa7d-13b383f6c885)
**List of Restaurants Added by User**
![image](https://github.com/user-attachments/assets/cf637caf-b87b-425c-90c8-e629e49d60a9)
**Restaurant Profile**
![image](https://github.com/user-attachments/assets/61c4b2a3-bcaa-4c70-9224-03e37aaeb264)



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

##Database and Data Types
![image](https://github.com/user-attachments/assets/563fda1c-2681-4d3a-943b-1bc78c24fcce)
Primary Key: id: Integer (auto-incremented, Non-null)
Restaurant Name- name: Varchar (100) datatype.
Address- location: Varchar (100) datatype.
Google rating- rating: Integer datatype. User would key in the online review ratings 
that they found online or a choice to leave ratings blank.
Upload_Date- upload_date: date datatype. Upload date is created upon saving a creation of a restaurant data through 'Add Restaurant'.
Description- description: text datatype. Current version only allows for editing of description after creating a restaurant. Hence description can be edited within the 'Edit' feature. Description can also be left blank.
Google Image- image: text datatype. Allows for href url links from google to be inserted in the database. Assumption for the future application is that user would be able to view a database of restaurants and add them to their own list, so images are taken on a full list of all restaurants in singapore scraped and stored within a database.
Cuisine- cuisine: Varchar(30) datatype. Allows user to select from a list of cuisine categories - Italian, Chinese, Muslim, Indian, Korean, Japanese. Future application could include more varieties of cuisine categories.

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










