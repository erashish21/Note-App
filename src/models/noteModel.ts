import pool from '../config';

export class NoteModel {
  static async saveNote(content: string): Promise<void> {
    const conn = await pool.getConnection();
    try {
      await conn.query('INSERT INTO notes (content) VALUES (?)', [content]);
    } finally {
      conn.release();
    }
  }

  static async listNotes(): Promise<any[]> {
    const conn = await pool.getConnection();
    try {
      const rows = await conn.query('SELECT * FROM notes');
      return rows;
    } finally {
      conn.release();
    }
  }

  static async deleteNote(id: number): Promise<void> {
    const conn = await pool.getConnection();
    try {
      await conn.query('DELETE FROM notes WHERE id = ?', [id]);
    } finally {
      conn.release();
    }
  }
}
