const express = require("express");
const router = express.Router();
const cors = require("cors");
const path = require('path');

// server used to send send emails
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);
const PORT = process.env.PORT || 3000;  // Render establecerá process.env.PORT

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
