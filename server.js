const express = require('express');
const app = express();
const studentsAPI = require('./studentsAPI'); // Import the new API file

app.use(express.json());  // Middleware to parse JSON requests
app.use(studentsAPI);  // Use the studentsAPI route

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
