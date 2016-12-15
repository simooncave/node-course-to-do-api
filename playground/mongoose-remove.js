const {ObjectID} = require('mongodb');

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo.js");
const {User} = require("./../server/models/user.js");

Todo.findOneAndRemove({_id: '585222586478974843289d3b'}).then((todo) => {

});

Todo.findByIdAndRemove('585222586478974843289d3b').then((todo) => {
  console.log(todo);
});
