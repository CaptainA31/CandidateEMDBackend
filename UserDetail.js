const mongoose = require("mongoose");

const UserDetailSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    mobile: Number,
    password: String,
    dob: Date,
    gender: String,
    address: String,
    passportNumber: { type: String, unique: true },
    cnic: { type: Number, unique: true },
    partyName: String,
    experience: String,
},
{
    collection: "UserInfo",
}
);
mongoose.model("UserInfo", UserDetailSchema);