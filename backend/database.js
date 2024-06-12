const { MongoClient } = require("mongodb");
const express = require('express');
const mongoose = require('mongoose');
const username = encodeURIComponent("KayakoAdmin");
const password = encodeURIComponent("Kyoko.1947");
const clusterUrl = "cozyfood.n5xhmsq.mongodb.net/"
const authMechanism = "DEFAULT";
const cors = require("cors");
const routes = require('./routes/api/recipes');

const app = express();
const port = process.env.PORT || 1947;

app.listen(port, () => console.log(`Server running on port ${port}`));
app.use(cors());
app.use(express.json());
app.use('/api/recipes', routes);
const uri = `mongodb+srv://${username}:${password}@${clusterUrl}/?authMechanism=${authMechanism}`;

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("oyy lad you're connected to mongo");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
