import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    const createdUsers = await User.insertMany(users);
    // Obteción del Id del Administrador
    const adminUser = createdUsers[0]._id;

    // Introducir en cada elemento del array de productos, el Id del administrador.
    const sampleProducts = products.map((product) => {
      // Mantiene la información que tiene cada elemento producto y le añade el campo user.
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);
    console.log('Data Imported');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();
    console.log('Data Destroyed');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

// Forma de llamar a las funciones desde el Terminal:
// node backend/seeder -d --> destroyData()
if (process.argv[2] === 'd') {
  destroyData();
} else {
  importData();
}
