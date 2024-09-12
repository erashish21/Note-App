import { Request, Response } from 'express';
import { NoteModel } from '../models/noteModel';

export class NoteController {
  static async save(req: Request, res: Response): Promise<void> {
    try {
      const { content } = req.body;
      await NoteModel.saveNote(content);
      res.status(200).json({ message: 'Note saved successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to save note' });
    }
  }

  static async list(req: Request, res: Response): Promise<void> {
    try {
      const notes = await NoteModel.listNotes();
      res.status(200).json(notes);
    } catch (error) {
      res.status(500).json({ error: 'Failed to list notes' });
    }
  }

  static async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await NoteModel.deleteNote(Number(id));
      res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete note' });
    }
  }
}
