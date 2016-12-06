const {ObjectID} = require('mongodb');

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo.js");
const {User} = require("./../server/models/user.js");

// var id = '584683ea7380d9ba03e832c811';

// if (!ObjectID.isValid(id)){
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));


User.findById('58434cb50dce0bbc1ce4054c').then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }

  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
