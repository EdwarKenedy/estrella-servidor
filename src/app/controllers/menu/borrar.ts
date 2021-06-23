import { Request, Response } from 'express';
import { getConnection } from 'typeorm';
import { Menu } from 'app/entities/menu';
import { RolMenu } from 'app/entities/rol-menu';

export const borrarMenu = async (req: Request, res: Response) => {
  const idMenu = req.params.idMenu;

  try {
    await getConnection().transaction(async transaction => {
      const rolesMenus = await transaction.find(
        RolMenu,
        {
          where: { menu: { id: parseInt(idMenu, 10) } },
          relations: ['rol']
        }
      );

      rolesMenus.forEach(async rolMenu => {
        await transaction.delete(
          RolMenu,
          { menu: { id: parseInt(idMenu, 10) }, rol: rolMenu.rol }
        );
      });

      await transaction.delete(Menu, idMenu);
    });

    res.json({ mensaje: 'Menú eliminado correctamente' });
  } catch(error) {
    res.status(500).json(error);
  }
};
