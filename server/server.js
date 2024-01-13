import Database from "better-sqlite3";
import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";

const app = express();
const port = 8080;
app.use(cors());
app.use(fileUpload({ createParentPath: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = new Database("cookie-table.db");

app.get("/", (req, res) => {
  let cookieStore = [];

  if (req.query.id) {
    cookieStore = db
      .prepare(`SELECT * FROM cookieStore WHERE id=${req.query.id}`)
      .all();
  } else {
    cookieStore = db.prepare("SELECT * FROM cookieStore").all();
  }

  res.json(cookieStore);
  console.log(res.json(cookieStore));
});

app.post("/addCookie", (req, res) => {
  const { id, name, price, quantity, image } = req.body;

  console.log("body", req.body);

  const newCookieStore = db
    .prepare(
      `INSERT INTO cookieStore (id, name, price, quantity, image) VALUES (?, ?, ?, ?, ?, ?)`
    )
    .run(id, name, price, quantity, image);
  res.json(newCookieStore);
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
