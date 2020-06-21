const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const account = require("./models/account.model.js");

const id = 1;
const initialState = { balance: 10000, transactions: [] };
const userAccount = account(id, initialState);
const dirname = process.cwd();
const app = express();
app.use(
  "/public/images",
  express.static(path.resolve(dirname, "public", "images"))
);
app.use(
  "/public/css",
  express.static(path.resolve(dirname, "client-dist", "css"))
);
app.use(
  "/public/js",
  express.static(path.resolve(dirname, "client-dist", "js"))
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(dirname, "public", "index.html"));
});

app.get("/account", (req, res) => {
  res.send(JSON.stringify(userAccount.getBalance()));
});
app.get("/account/transactions", (req, res) => {
  
  res.send(JSON.stringify(userAccount.getTransactions()));
});
app.post("/account/transactions", (req, res) => {
  const { type, amount, id } = req.body;
  console.log('get transaction:',req.body);
  let result = false;
  switch (type) {
    case "debit":
      result = userAccount.debit(id, Math.abs(amount));
      break;
    case "credit":
      result = userAccount.credit(id, Math.abs(amount));
      break;
  }
  
  res.send(JSON.stringify({ success: result }));
});
app.get("/account/transactions/:id", (req, res) => {
  const { id } = req.params;
  res.send(JSON.stringify(userAccount.getTransactionById(id)));
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
