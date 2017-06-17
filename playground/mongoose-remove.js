const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove

// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5944d51924a8e74a585f9771').then((todo) => {
  console.log(todo);
});