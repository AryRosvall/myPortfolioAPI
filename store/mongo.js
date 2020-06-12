const { MongoClient, ObjectId } = require('mongodb');
const config = require('../config');

const dbHost = config.mongo.host;
const dbUser = encodeURIComponent(config.mongo.user);
const dbPassword = encodeURIComponent(config.mongo.password);
const dbName = config.mongo.database;

const MONGO_URI = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`;
class MongoLib {

  constructor() {
    this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    this.dbName = dbName;
  }
  connect() {
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect(err => {
          if (err) {
            reject(err);
          }
          console.log('Connected succesfully to mongo');
          resolve(this.client.db(this.dbName));
        });
      });
    }
    return MongoLib.connection;
  }

  //--------------------- CRUD ------------------------------

  list(collection, query) {
    return this.connect().then(db => {
      return db.collection(collection).find(query).sort({ order: -1 }).toArray();
    });
  }

  get(collection, id) {
    return this.connect().then((db) => {
      return db.collection(collection).findOne({ _id: ObjectId(id) });
    });
  }

  insert(collection, data) {
    return this.connect().then((db) => {
      return db.collection(collection).insertOne(data);
    })
      .then(result => (
        {
          insertedId: result.insertedCount > 0 ? result.insertedId : 0,
          insertedCount: result.insertedCount
        })
      );
  }

  update(collection, id, data) {
    return this.connect().then((db) => {
      return db.collection(collection).updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: false });
    })
      .then(result => (
        {
          updatedId: result.modifiedCount > 0 ? id : 0,
          updatedCount: result.modifiedCount
        })
      );
  }

  delete(collection, id) {
    return this.connect().then((db) => {
      return db.collection(collection).deleteOne({ _id: ObjectId(id) });
    })
      .then((result) => ({ deletedCount: result.deletedCount }));
  }
}

module.exports = MongoLib;