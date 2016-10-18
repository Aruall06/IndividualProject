var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/gallery");



var UsersSchema = new mongoose.Schema({
  username: {type : String, required: true, unique: true},
  password : {type: String, required: true}
});

mongoose.model('Users' , UsersSchema).create({
  username: "laura",
  password: "laura"
}, {
  username: "laura5",
  password: "laura"
}, {
  username: "catcat",
  password: "cat"
}
);
console.log("Test Data added");
