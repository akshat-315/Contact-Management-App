const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User"
    },
    
    name: {
        "type": "string",
        "required": ["true","Please add the contact name"],
    },
    email: {
        "type": "string",
        "required": ["true","Please add the email address"],
    },
    name: {
        "type": "string",
        "required": ["true","Please add the phone number"],
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("contact", contactSchema);