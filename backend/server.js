import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Rutas de acceso a Datos.
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

// Archivos Error Middleware Handlers
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
connectDB();

const app = express();

// Para poder utilizar contenido en JSON
app.use(express.json());

// Inicio
app.get('/', (req, res) => {
  res.send('API is running');
});

// Acceso a datos de Productos.
app.use('/api/products', productRoutes);

// Acceso a datos de Usuarios.
app.use('/api/users', userRoutes);

// Para routes que no existen.
app.use(notFound);

// Error Middleware handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
