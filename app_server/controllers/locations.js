const homelist = (req,res)=>{
    res.render('home', {title: 'Home'});
};

const locationInfo = (req, res) =>{
    res.render('location-info',{title: 'Location info'});
};

const addReview = (req, res) =>{
    res.render('add-new-book', {title: 'Add review'});
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

module.exports = {
    homelist,
    locationInfo,
    addReview,
    bookdetails,
    editbook,
    deletebook
};