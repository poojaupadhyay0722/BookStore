const { MongoClient } = require("mongodb");
var assert = require("assert");
const  ObjectID = require('mongodb').ObjectId;
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
    console.log(req.body.review);
    var item = {
        name: req.body.name,
        author: req.body.author,
        genre: req.body.genre,
        review: req.body.review
    };

    MongoClient.connect(database_url, { useNewUrlParser: true }, (error, client) => {
        if (error) {
          return console.log("Connection failed for some reason");
        }
        console.log("Connection established - All well");
        const db = client.db(database_name);

        db.collection(database_name).insertOne(item, function(err, result){
                        if (error)
                        {
                            console.log("Connection failed for some reason");
                            client.close();
                            res.render('add-book-result', {error: 1});
                            return;
                        }
                        console.log("item inserted");
                        client.close();
                });
    });
    res.render('add-book-result', {error: 0});
};

const bookdetails = (req, res) =>{
    res.render('book-details', {title: 'Book Details'});
};

const getEditBook = (req, res) =>{
    res.render('edit-book', {title: 'Edit book'});
};

const editbook = (req, res) =>{
    console.log(req.body.name);
    console.log(req.body.author);
    console.log(req.body.genre);
    console.log(req.body.review);
    var item = {
        name: req.body.name,
        author: req.body.author,
        genre: req.body.genre,
        review: req.body.review
    };
    var id = req.body.Id;
    var results = [];

    MongoClient.connect(database_url, { useNewUrlParser: true }, (error, client) => {
        if (error) {
          return console.log("Connection failed for some reason");
        }
        console.log("Connection established - All well");
        const db = client.db(database_name);
        var collection = db.collection(database_name);

        if (id != "")
        {
            try
            {
                collection.updateOne(
                    {"_id": ObjectID(id)}, 
                    {$set:item}, 
                    function(err, result)
                    {
                        console.log("item updated", err);
                        client.close();
                    });
            }
            catch (error)
            {
                console.log("exception occured while edit");
                res.render("List-Book", {items: results, update_error: 1});
                return;
            }

            res.render("List-Book", {items: results, update_error: 0});
        }
        else
        {
            var cursor = collection.find({"name": req.body.name});
            cursor.forEach(function(doc, err){
                console.log(doc);
                results.push(doc);
            }, function(){

                if (results.length == 0)
                {
                    res.render("List-Book", {items: results, update_error: 1});
                    return;
                }
                else if (results.length > 1)
                {
                    res.render("List-Book", {items: results, update_error: 2});
                    return;
                }
                else 
                {
                    collection.updateOne(
                        {"_id": results[0]._id}, 
                        {$set:item}, 
                        function(err, result)
                        {
                            console.log("item updated", err);
                            client.close();
                        });
                    res.render("List-Book", {items: results, update_error: 0});
                }
            });
        }
    });
};

const deletebook = (req, res) =>{
    res.render('delete-book', {title: 'Delete book'});
};

const postBookDetails = (req, res) => {
    var results = [];
    MongoClient.connect(database_url, { useNewUrlParser: true }, (error, client) => {
        if (error) {
          return console.log("Connection failed for some reason");
        }
        console.log("Connection established - All well");
        const db = client.db(database_name);
        var collection = db.collection(database_name);
        // var query = '\\' + req.body.name + '\i';
        var cursor = collection.find({"name": req.body.name});

        cursor.forEach(function(doc, err){
            console.log(doc);
            results.push(doc);
        }, function(){

            if (results.length == 0)
            {
                res.render("List-Book", {items: results, update_error: 1});
                return;
            }
            else if (results.length > 1)
            {
                res.render("List-Book", {items: results, update_error: 2});
                return;
            }
            else 
            {
                res.render("List-Book", {items: results, update_error: 0});
            }
        });
    });
}

const postDeleteBook = (req, res) =>{
    console.log(req.body.name);
    var id = req.body.Id;
    var results = []
    var deleteById = false;
    if (id != "")
    {
        deleteById = true;
    }

    MongoClient.connect(database_url, { useNewUrlParser: true }, (error, client) => {
        if (error) {
          return console.log("Connection failed for some reason");
        }
        console.log("Connection established - All well");
        const db = client.db(database_name);
        var collection = db.collection(database_name);

        if (deleteById)
        {
            console.log("id: " + id);
            try
            {
                collection.deleteOne(
                    {"_id": ObjectID(id)},
                    function(err, result)
                    {
                        if (err)
                        {
                            return console.log("Unknown reason in delete");
                        }
                        console.log("item deleted");
                        client.close();
                    });
            }
            catch (error) 
            {
                console.log("exception happened while delete");
                res.render("List-Book", {items: results, update_error: 1});
                return;
            }
            res.render("List-Book", {items: results, update_error: 0});
        }
        else
        {
            var cursor = collection.find({"name": req.body.name});
            cursor.forEach(function(doc, err){
                console.log(doc);
                results.push(doc);
            }, function(){

                if (results.length == 0)
                {
                    res.render("List-Book", {items: results, update_error: 1});
                    return;
                }
                else if (results.length > 1)
                {
                    res.render("List-Book", {items: results, update_error: 2});
                    return;
                }
                else 
                {
                    collection.deleteOne(
                        {"_id": results[0]._id},
                        function(err, result)
                        {
                            if (err)
                            {
                                return console.log("Unknown reason in delete");
                            }
                            console.log("item deleted");
                            client.close();
                        });
                    res.render("List-Book", {items: results, update_error: 0});
                }
            });
        }
    });
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
    listbook,
    getEditBook,
    postDeleteBook,
    postBookDetails
};