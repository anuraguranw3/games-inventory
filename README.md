# Games Inventory

## Demo
You can try out the live demo of this application at:  
**[Games Inventory Demo](https://games-inventory-vk6s.onrender.com)**

This is a simple **Games Inventory** application built with **Node.js**, **Express**, and **PostgreSQL** (local database). It allows users to add and manage games along with their details and categories. 

Currently, the application implements basic **Create** and **Read** functionality. Users can add new games to the inventory, associate them with categories, and view the existing games and categories. The **Update** and **Delete** functionalities are planned for future versions.

## Features
- **Add New Games**: Users can add games with details like the game title, description, and category.
- **Add New Categories**: Users can add new categories to organize their games.
- **View Games**: Users can see a list of all the games in the inventory along with their details and categories.
- **Local PostgreSQL Database**: The database is hosted locally using PostgreSQL, not the cloud version.

## Tech Stack
- **Backend**: Node.js, Express
- **Database**: PostgreSQL (local)
- **Database Querying**: `pg` (PostgreSQL Node.js client)