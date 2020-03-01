const mongoose = require("mongoose");

let UserSchema =mongoose.Schema({
   userName:{
      type:String,
      
   },
   userEmail:{
      type:String,
      
   },
   userPassword: {
      type:String,
     
   }

})

module.exports = mongoose.model("SignUp", UserSchema);