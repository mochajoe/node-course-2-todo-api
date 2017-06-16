// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect( 'mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  //deleteMany
  // db.collection('Users').deleteMany({name: 'Anthony'}).then((result) => {
  //   console.log(result)
  // })

  // deleteOne
  db.collection('Users').deleteOne({_id: new ObjectID('594360fe05bf95b329f0a5dd')}).then((result) => {
    console.log(JSON.stringify(result));
  })

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed:false}).then( (result) => {
  //   console.log(result);
  // });

  // db.close();
});

