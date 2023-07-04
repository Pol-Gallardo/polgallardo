import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    name: { 
        type: String,
        required: [true, 'Name is required.'],
        trim: true,
        minlength: [2, 'Name must be at least 2 characters.'],
        maxlength: [50, 'Name must be less than 50 characters.'],
    },

    email: {
        type: String,
        required: [true, 'Email is required.'],
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Email is invalid.'],
    },

    message: {
        type: String,
        required: [true, 'Message is required.'],
    },

    date: {
        type: Date,
        default: Date.now,
    },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;