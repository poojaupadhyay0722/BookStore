const { MongoClient } = require("mongodb");
var assert = require("assert");
var database_url = "mongodb://localhost:27017/bookstoredb";
var database_name = "book-data";

const homelist = (req,res)=>{
    res.render('home', {title: 'Home'});
};

const addNewBook = (req, res) =>{
    res.render('add-new-book', {title: 'Add new book'});
};

const doAddNewBook = (req, res) => {
    console.log(req.body.name);
    console.log(req.body.author);
    console.log(req.body.genre);
    console.log(req.body.comments);
    var item = {
        name: req.body.name,
        author: req.body.author,
        genre: req.body.genre,
        comments: req.body.comments
    };

    MongoClient.connect(database_url, { useNewUrlParser: true }, (error, client) => {
        if (error) {
          return console.log("Connection failed for some reason");
        }
        console.log("Connection established - All well");
        const db = client.db(database_name);

        db.collection(database_name).insertOne(item, function(err, result){
                        console.log("item inserted", err);
                        client.close();
                });
    });
    res.render('add-book-result', {title: 'Your book has been successfully added'});
};

const bookdetails = (req, res) =>{
    res.render('book-details', {title: 'Book Details'});
};

const editbook = (req, res) =>{
    res.render('edit-book', {title: 'Edit book'});
};

const deletebook = (req, res) =>{
    res.render('delete-book', {title: 'Delete book'});
};

const listbook = (req, res) =>{

    var results = []
    MongoClient.connect(database_url, { useNewUrlParser: true }, (error, client) => {
        if (error) {
          return console.log("Connection failed for some reason");
        }
        console.log("Connection established - All well");
        const db = client.db(database_name);
        var collection = db.collection(database_name);
        var cursor = collection.find();
        cursor.forEach(function(doc, err){
            results.push(doc);
            console.log(doc);
        }, function(){
            client.close();
            res.render("List-Book", {items: results});
        });
    });
};
module.exports = {
    homelist,
    addNewBook,
    bookdetails,
    editbook,
    deletebook,
    doAddNewBook,
    listbook
};