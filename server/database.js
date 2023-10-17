// database.ts
import { Database } from 'sqlite3';

const db = new Database('./database.db');

db.serialize(() => {
  // 유저 테이블 생성
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    email TEXT UNIQUE,
    password TEXT
  )`);
});

export default db;
