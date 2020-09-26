import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Cliente } from 'entities/cliente';
import { validationResult } from 'express-validator';

export type Body = {
  nombres: string,
  apellidos: string,
  nitCI: string,
  telefonoFijo: string,
  telefonoMovil: string,
  direccionDomicilio: string,
  coordenadasDireccionDomicilio: string
};

export const crearCliente = async (req: Request, res: Response) => {
  const {
    nombres,
    apellidos,
    nitCI,
    telefonoFijo,
    telefonoMovil,
    direccionDomicilio,
    coordenadasDireccionDomicilio
  }: Body = req.body;

  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json(error.array());
  }

  try {
    await getRepository(Cliente).insert({
      nombres,
      apellidos,
      nitCI,
      telefonoFijo,
      telefonoMovil,
      direccionDomicilio,
      coordenadasDireccionDomicilio,
    });

    res.status(201).json({ mensaje: 'Cliente registrado' });
  } catch(error) {
    res.status(500).json(error);
  }
};