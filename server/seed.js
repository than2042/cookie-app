import Database from "better-sqlite3";

const db = Database("cookie-table.db");

db.exec(`CREATE TABLE IF NOT EXISTS cookieStore(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    image TEXT
)`);

const insertItem = db.prepare(`
  INSERT INTO cookieStore (id, name, price, 
    quantity, image)
  VALUES (?, ?, ?, ?, ?)
`);
insertItem.run(1, "Example Item", 10, 20000, "image");
