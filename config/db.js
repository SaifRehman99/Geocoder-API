const mongoose = require('mongoose');

const connectMONGO = async() => {
    try {

        const connc = await mongoose.connect(process.env.MONGODB_CON, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        console.log(`Connected to MongoDB on ${connc.connection.host}`);


    } catch (err) {

        console.log(err);
        process.exit(1);
    }

}

module.exports = connectMONGO;