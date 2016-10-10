const Authentication = require('./controllers/authentication'); 

module.exports = function(app){
  // for anything posted to /signup
  // we wanna run Auth.signup
  app.post('/signup', Authentication.signup);
}
