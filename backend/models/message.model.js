import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true 
    },
    receiverId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true 
    },
    message:{
        type: String,
        required: true
    }
    // adding timestampe to access createdAt and updatedAt
}, {timestamps: true});

const Message = mongoose.model("Message", messageSchema);

export default Message;