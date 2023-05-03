/* Ruta para saber el estado de la app */
import os from 'os';
import { Router, Request, Response } from 'express';

import { version } from './../../package.json';

const router = Router();

router.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    message: "OK",
    uptime: process.uptime(),
    version_proyect: `v.${version}`,
    version_node: process.versions.node,
    system: os.platform(),
    date: new Date().toDateString(),
    statusCode: res.statusCode,
    status: res.status,
  });
});

export default router