const mongoose = require('mongoose');
async function connect() {
    try {


        await mongoose.connect('mongodb://localhost:27017/dut_education_dev',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        // console.log('Connect sucessfully');
    } catch (error) {
        // console.log('Connect failure');
    }
}

module.exports = { connect };