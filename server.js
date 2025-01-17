// Load environment variables
require('dotenv').config();
const express = require('express');

// Access the environment variable
const isAdmin = process.env.IS_ADMIN === 'true'; // Converts string 'true' to a boolean
const app = express();

// Check the value and perform an action
if (isAdmin) {
  console.log("Admin privileges granted.");
} else {
  console.log("Access restricted. Admin only.");
}


app.get('/', (req, res) => {
  if (process.env.IS_ADMIN === 'true') {
    res.send({ message: "Welcome, Admin!", data: ["Admin Data 1", "Admin Data 2"] });
  } else {
    res.send({ message: "Welcome, User!", data: ["User Data 1", "User Data 2"] });
  }
});

app.listen(3000, () => console.log("Server is running on port 3000."));