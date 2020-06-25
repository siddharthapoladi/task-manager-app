const mongoose = require('mongoose')

mongoose.connect('mongodb://taskmanager:taskmanager123@cluster0-shard-00-00-c4jze.mongodb.net:27017,cluster0-shard-00-01-c4jze.mongodb.net:27017,cluster0-shard-00-02-c4jze.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'
    , {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .catch(error => console.log(error))