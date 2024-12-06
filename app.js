// Importando Express
import express from 'express';
import httpStatus from 'http-status';

// Importando el enrutador
import adminRouter from './routes/admin.route.js';
import shopRouter from './routes/shop.route.js';

// Importando el directorio raiz
import { ROOT_DIR } from './helpers/paths.js'

// Se importa path
import path from 'path';

// Creando la instancia de express
// que basicamente es un middleware
const app = express();

// Se registra el middleware del body-parser
app.use(express.urlencoded({ extended: true }));

// Se registra el middleware para el servidor
// de archivos estaticos
app.use(express.static(path.join(ROOT_DIR, 'public')));

// Se agrega ruta de administrador
app.use('/admin', adminRouter);
// Se agrega ruta shop
app.use(shopRouter);

// Registrando el middleware para el error
// 404
app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND)
  .send("<h1 style='color: crimson;'>🤷‍♂️ Not found 🤷‍♂️</h1>")
});

// Definiendo puertos
const port = 3000;
const ip = "0.0.0.0"

// Arrancando el servidor
app.listen(port, ip, () => {
  console.log(`🤖 Sirviendo en http://localhost:${port}`);
});