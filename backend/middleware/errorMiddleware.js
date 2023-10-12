// Para rutas que no existen.
// {{URL}}/api/noPage
const notFound = (req, res, next) => {
  const error = new Error(`Page Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Error Middleware handling para errores en las APIs.
// {{URL}}/api/products/5fee0d4a3cf4a94ec8dca580
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export { notFound, errorHandler };
