module.exports = function(app, db) {
  app.get('/name/:name', (req, res) => {
    const name = req.params.name;
    const query = { name : name};
    const options = { information : 1, _id: 0 };
    db.collection('database').findOne(query, options, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      } 
    });
  });
  app.get('/number/:number', (req, res) => {
    const number = req.params.number;
    const query = { number : number}
    const options = { information : 1, _id: 0};
    db.collection('database').findOne(query, options, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      } 
    });
  });
}