// Import thư viện MongoDB
const MongoClient = require('mongodb').MongoClient;

// Địa chỉ và cổng của MongoDB
const url = 'mongodb://localhost:27017';

// Tên database và collection
const dbName = 'WebbanDienThoai';
const collectionName = 'products';

// Kết nối với MongoDB
MongoClient.connect(url, function(err, client) {
  if (err) {
    console.log('Lỗi kết nối đến MongoDB:', err);
    return;
  }

  console.log('Đã kết nối thành công đến MongoDB');

  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  // Truy vấn dữ liệu từ collection
  collection.find({}).toArray(function(err, products) {
    if (err) {
      console.log('Lỗi truy vấn dữ liệu:', err);
      return;
    }

    console.log('Dữ liệu từ MongoDB:', products);

    // Thực hiện các thao tác khác với dữ liệu từ MongoDB ở đây

    // Đóng kết nối với MongoDB
    client.close();
  });
});