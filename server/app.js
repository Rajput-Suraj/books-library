require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

const app = express();

//ALLOW CROSS-ORIGIN REQUESTS
app.use(cors());

//CONNECT MONGODB
mongoose.connect(process.env.MONGODB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//CHECK WHETHER DB CONNECTION IS ESTABLISHED OR NOT
mongoose.connection.once("open", () => {
    console.log("Connected to DB");
});

//API ROUTE/ENDPOINT
app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

app.listen("4000", () => {
    console.log("Listening on port 4000");
});
