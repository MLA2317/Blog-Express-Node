const mongoose = require('mongoose')

// function to connect

const DbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGOODB_URL)
        console.log('DB connected Successfully');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

DbConnect();