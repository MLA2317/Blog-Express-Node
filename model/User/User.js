const mongoose = require('mongoose');

// create schema

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "First name is required"]
    },
    
    lastname: {
        type: String,
        required: [true, "Last name is requried"]
    },

    profilePhoto: {
        type: String,
    },

    email: {
        type: String,
        required: [true, "Email is required"]
    },

    password: {
        type: String,
        requried: [true, "Password is required"]
    },

    postCount: {
        type: Number,
        default: 0
    },

    isBlocked: {
        type: Boolean,
        default: false,
    },

    isAdmin: {
        type: Boolean,
        default: false,
    },

    role: {
        type: String,
        enum: ["Admin", "Guest", "Editor"],
    },

    viewdBy: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],

    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],

    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],

    active: {
        type: Boolean,
        default: true,
    },

    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
    ],

 },
 {
    timestamps: true,
 },
);


//Compile the user model

const User = mongoose.model('User', userSchema);

module.exports = User;


    