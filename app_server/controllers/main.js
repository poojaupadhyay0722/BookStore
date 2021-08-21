const homelist = (req,res)=>{
    res.render('home', {title: 'Home'});
};

const addNewBook = (req, res) =>{
    res.render('add-new-book', {title: 'Add new book'});
};

const doAddNewBook = (req, res) => {
    console.log(req.query.name);
    console.log(req.query.author);
    console.log(req.query.genre);
    console.log(req.query.comments);
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
    res.render('List-Book', {title: 'List Book'});
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