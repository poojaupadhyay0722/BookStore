// const index = (req, res) => {
//     res.render('index', { title: 'Express - Chaper 3'});
// };

// module.exports = {
//     index
// };
const about = (req,res) => {res.render('generic-text', {title:'About us'});
};
module.exports = {
    about
};