const getDb = require('../util/database').getDb;

class Product {
  constructor(title, price, description, imageUrl) {
    (this.title = title),
      (this.price = price),
      (this.description = description),
      (this.imageUrl = imageUrl);
  }

  save() {}
}

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Product;

// const db = require('../util/database');
// const Cart = require('./cart');

// module.exports = class Product {
//   constructor(_id, _title, _imageUrl, _description, _price) {
//     this.id = _id;
//     this.title = _title;
//     this.imageUrl = _imageUrl;
//     this.description = _description;
//     this.price = _price;
//   }

//   save() {
//     return db.execute(
//       'INSERT INTO products(title, price, imageUrl, description) VALUES (?,?,?,?)',
//       [this.title, this.price, this.imageUrl, this.description]
//     );
//     // NHằm tránh SQL injection
//   }

//   static deleteById(id) {}

//   static fetchAll() {
//     return db.execute('SELECT * FROM products');
//   }

//   static findById(id) {
//     return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
//   }
// };
