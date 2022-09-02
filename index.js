require("dotenv").config();
const http = require("http");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const authMiddleware = require("./middleware/credentials");

const app = express();
const homeRoutes = require("./routes/home");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// all new routes will be here
app.use("/api", homeRoutes);

// server configuration
const server = http.createServer(app);
const PORT = process.env.SERVER_PORT || 5000;
app.use(authMiddleware);
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
