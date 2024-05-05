const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234567890',
  database: 'resto'
});


connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
    return;
  }
  console.log('Connecté à la base de données MySQL');
});

app.get('/', (req, res) => {
  res.send('Bienvenue sur la page d\'accueil');
});

app.get('/api/comments', (req, res) => {
  const sql = 'SELECT * FROM categorie';
  connection.query(sql, (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération des commentaires:', err);
      return res.status(500).json({ error: 'Erreur lors de la récupération des commentaires' });
    }
    res.status(200).json(result); 
  });
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
