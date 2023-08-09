import mysql from 'mysql';

const userSchema = mysql.Schema({
username: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
    }
 },{
   timestamps: true
});

export default mysql.model("user", userSchema);
