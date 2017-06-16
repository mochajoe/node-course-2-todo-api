// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect( 'mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

db.collection('Users').findOneAndUpdate({_id: new ObjectID('5943544205bf95b329f0a366')},
{
  $set: {
    name: 'Johnny'
  },
  $inc : {
    age: 1
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});



  // db.close();
});

