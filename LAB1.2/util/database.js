const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://hoabao0809:admin1234@cluster0.wxy42.mongodb.net/?retryWrites=true&w=majority'
  )
    .then((client) => {
      console.log('Connected');
      callback(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
