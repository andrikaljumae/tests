const express = require('express');
const path = require("path");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load(path.resolve(__dirname, "default.yaml"));
const app = express();
require("./database.js");
const PORT = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const productsRouter = require("./product.router.js");
const ordersRouter = require("./orders.router.js");
const usersRouter = require("./user.router.js");

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/v1/products", productsRouter);
app.use("/api/v1/orders", ordersRouter);
app.use("/api/v1/users", usersRouter);

app.use("/static", express.static("dist/static"));


app.post("/api/v1/register", (req,res)=>{
  const age = req.body.age;
  const username = req.body.username;
  if(!req.body || !req.body.age || !req.body.username) return res.status(400).send("Bad request!");
  if(age > 70){
    return res.status(401).send(`Game over, ${username}! `);
  }
  if(age < 18){
    return res.status(401).send(`Grow up, ${username}!`);
  }
  res.status(200).send(`Success, ${username}!`);
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

