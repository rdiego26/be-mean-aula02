
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'BE MEAN', professor: 'Suissa' });
};