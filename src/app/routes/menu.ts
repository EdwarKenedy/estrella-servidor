import { Router } from 'express';
import { obtenerMenus } from 'app/controllers/menu/obtener-menus';
import { borrarMenu } from 'app/controllers/menu/borrar';
import { obtenerMenu } from 'app/controllers/menu/obtener-menu';
import { crearMenu } from 'app/controllers/menu/crear';
import { actualizarMenu } from 'app/controllers/menu/actualizar';

export const menuRoutes = Router();

menuRoutes.get('/menu', obtenerMenus);

menuRoutes.get('/menu/:idMenu', obtenerMenu);

menuRoutes.post('/menu', crearMenu);

menuRoutes.put('/menu/:idMenu', actualizarMenu);

menuRoutes.delete('/menu/:idMenu', borrarMenu);
