const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", require("./routes/pokemonRoutes"));

app.listen(port, () => console.log(`Server running on port ${port}`));
