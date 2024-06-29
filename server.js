const express = require("express");
const router = express.Router();
const cors = require("cors");
const express = require('express');
const path = require('path');

// server used to send send emails
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);
const PORT = process.env.PORT || 3000;  // Render establecerá process.env.PORT

app.use(express.static(path.join(__dirname, 'build')));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
