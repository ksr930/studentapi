var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	age:{
		type:Number,
		required:true
	}
  ,
  std:{
         type:Number,
         requried:true
  }

})

var user = mongoose.model('user',userSchema);

module.exports = user