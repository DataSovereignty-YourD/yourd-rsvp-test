// server.ts
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './database';

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// 이메일 체크 API
app.post('/check-email', (req, res) => {
  const { email } = req.body;
  db.get('SELECT email FROM users WHERE email = ?', [email], (err, row) => {
    if (err) {
      res.status(500).send({ error: 'DB Error' });
      return;
    }
    if (row) {
      res.send({ exists: true });
    } else {
      res.send({ exists: false });
    }
  });
});

// 서버 실행
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
