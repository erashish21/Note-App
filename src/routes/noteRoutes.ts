import { Router } from 'express';
import { NoteController } from '../controllers/noteController';

const router = Router();

router.post('/notes', NoteController.save);
router.get('/notes', NoteController.list);
router.delete('/notes/:id', NoteController.delete);

export default router;
