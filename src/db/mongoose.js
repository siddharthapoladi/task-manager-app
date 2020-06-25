const mongoose = require('mongoose')

mongoose.connect(MONGODB_URL
    , {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .catch(error => console.log(error))