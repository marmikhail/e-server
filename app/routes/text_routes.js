module.exports = function(app, db) {
  app.get('/:find', (req, res) => {
    const find = req.params.find;
    const query = { $text : {$search : find}};
    const options = { 'information' : 1, '_id': 0 };
    db.collection('database').createIndex({number: "text", name: "text"});
    db.collection('database').findOne(query, options, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      } 
    });
  });
}
