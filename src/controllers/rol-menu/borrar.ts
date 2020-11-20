import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { RolMenu } from 'entities/rol-menu';

export const borrarRolMenu = async (req: Request, res: Response) => {
  const idRol = req.params.idRol;
  const idMenu = req.params.idMenu;

  try {
    await getRepository(RolMenu).delete({
      rol: { id: parseInt(idRol, 10) },
      menu: { id: parseInt(idMenu, 10) }
    });

    res.json({ mensaje: 'Eliminado correctamente' });
  } catch(error) {
    res.status(500).json(error);
  }
};
