const homelist = (req,res)=>{
    res.render('locations-list', {title: 'Home'});
};

const locationInfo = (req, res) =>{
    res.render('location-info',{title: 'Location info'});
};

const addReview = (req, res) =>{
    res.render('location-review-form', {title: 'Add review'});
};

const bookdetails = (req, res) =>{
    res.render('index', {title: 'Book Details'});
};

module.exports = {
    homelist,
    locationInfo,
    addReview,
    bookdetails
};