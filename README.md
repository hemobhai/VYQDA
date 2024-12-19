Got it! Here's the updated `README.md` content that explicitly instructs the reader to import the SQL file into their database:

````markdown
# Assignments

This repository contains the solutions for multiple assignments. Please follow the steps below for each assignment to set up and run the programs.

## Assignment 1

- Contains a single file: `index.html`
- No additional setup required. Just open the file in any browser to view the assignment.

## Assignment 2

This assignment consists of two parts: **Frontend** and **Backend**.

### Steps to run Assignment 2:

1. **Import the Database**:

   - The backend requires a database to function correctly.
   - Locate the `database.sql` file in the `Assignment2/backend` directory.
   - Import this file into your MySQL database using the following steps:
     1. Open your database management tool (e.g., phpMyAdmin, MySQL Workbench, or command line).
     2. Create a new database (e.g., `assignment2_db`).
     3. Import the `database.sql` file into the newly created database.
     4. Update the database connection details in the `Assignment2/backend` configuration file (if required).

2. Navigate to the `frontend` directory:
   ```bash
   cd Assignment2/frontend
   ```
````

3. Install the required packages:
   ```bash
   npm install
   ```
4. Start the frontend application:

   ```bash
   npm start
   ```

5. Navigate to the `backend` directory:
   ```bash
   cd ../backend
   ```
6. Install the required packages:
   ```bash
   npm install
   ```
7. Start the backend application:
   ```bash
   npm start
   ```

Ensure that both the frontend and backend applications are running to match the data between them.

## Assignment 3

This assignment has a single `index.js` file and a `package.json` for setup.

### Steps to run Assignment 3:

1. Navigate to the `Assignment3` directory:
   ```bash
   cd Assignment3
   ```
2. Install the required packages:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```

Make sure to follow the instructions for each assignment to get everything working correctly.

---

### Notes:

- Ensure Node.js and npm are installed on your machine before running these commands.
- If you encounter any issues, please reach out to me @ sharanhemant7@gmail.com

```

```
