const express        = require('express');
const cors = require('cors');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');
const app            = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

MongoClient.connect(db.url, (err, database) => {
  const eDB = database.db('E-table')
  eDB.collection('database')
    if (err) return console.log(err)
    require('./app/routes')(app, eDB);
    app.listen(port, () => {
      console.log('We are live on ' + port);
    });               
  })
