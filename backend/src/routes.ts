import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

//Listagem dos orfanatos cadastrados
routes.get('/orphanages', OrphanagesController.index);

//Detalhe de um orfanato
routes.get('/orphanages/:id', OrphanagesController.show);

//Criação de um orfanato
routes.post('/orphanages', upload.array('images') ,OrphanagesController.create);

export default routes;