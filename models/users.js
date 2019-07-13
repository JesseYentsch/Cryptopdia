var mongoose =require('mongoose');

var UserSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        index:true
    },
    crypto:String,
    valueUSD:Number,
    amountCrypto:Number
});

var UserModel=mongoose.model('UserModel',UserSchema);

module.exports={
    UserModel: UserModel
}