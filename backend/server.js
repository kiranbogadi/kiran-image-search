import express from "express";

import photosSearchEngineRoutes from "./routes/photosSearchEngineRoutes.js";

const app = express();

const PORT = 5001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is Running....");
});

app.use("/api/searchimage", photosSearchEngineRoutes);

app.listen(
  PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} on mode port ${PORT}`)
);
