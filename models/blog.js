const mongoose = require('mongoose');

//mongoose.Schema this Scehma is a constructor
const Schema = mongoose.Schema;

// Schema is the structure of the database and models wrap the schema 

// here we create a new schema object to specify the structure of the Schema 
const blogSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    snippets : {
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
},{timestamps : true});


//mongoose.model is the model which wraps the schema 
// model method takes first parameter the name of the model
// remember the model name should be equal to the collection name in the database 
// and we need to name the model as singular because it automatically pluralized the name and look for
// the colection name in the database and
// second parameter takes the Schema structure
const Blog = mongoose.model('blog', blogSchema)

module.exports = Blog;