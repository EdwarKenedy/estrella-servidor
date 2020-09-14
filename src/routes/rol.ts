import { Router } from 'express';
import { body } from 'express-validator';
import { verificarToken } from '../middlewares/verificarToken.middleware';
import { crearRol } from 'controllers/rol/crear';
import { actualizarRol } from 'controllers/rol/actualizar';
import { borrarRol } from 'controllers/rol/borrar';
import { obtenerRoles } from 'controllers/rol/obtener-roles';

export const rolRoutes = Router();

rolRoutes.post('/rol', [
  body('nombre').notEmpty(),
  // verificarToken
], crearRol);

rolRoutes.put('/rol/:id', [
  body('nombre').notEmpty(),
  // verificarToken
], actualizarRol);

rolRoutes.delete('/rol/:id', borrarRol);

rolRoutes.get('/rol', obtenerRoles);
