const User = require('../models/user'); 

exports.signup = function(req,res,next){
  const email = req.body.email;
  const password= req.body.password;

  //see if user w email exists
  User.findOne({email:email}, function(err,existingUser){

    if(err) {return next(err) };

    //if user exists throw error
    if(existingUser){ 
      return res.status(422).send({ error: 'Email is already being used' }); 
    }

    //if user doenst exist create and save record
    const user = new User({
      email: email,
      password: password
    });

    user.save(function(err){
      if(err){return next(err)};

      //respond w record created
      res.json({success:true}); 
    }); 

  });


}
