module.exports = app =>{
    const mongoose = app.mongoose;
    constSchema= mongoose.Schema;
    constUserSchema=newSchema({
        userName:{ type:String},
        password:{ type:String},
    });
    return mongoose.model('User',UserSchema);
}