const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const app = express();
// Enable CORS for all origins or specific origins
app.use(cors({
    origin: "https://mern-project--rho.vercel.app/", // Replace with your frontend URL on Vercel
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow necessary methods
    allowedHeaders: ["Content-Type", "Authorization"] // Allow specific headers
  })
);


app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 5432;


const authRoutes = require("./routes/authRoutes");
const dataRoutes = require("./routes/dataRoutes")

const connectToDatabase = require("./db/connectDatabase");

app.use('/api/auth',authRoutes);
app.use('/api/data',dataRoutes);

app.listen(PORT,()=>{
    connectToDatabase();
    console.log("server is started" + PORT)
});