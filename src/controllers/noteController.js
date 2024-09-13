"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteController = void 0;
const noteModel_1 = require("../models/noteModel");
class NoteController {
    static save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { content } = req.body;
                yield noteModel_1.NoteModel.saveNote(content);
                res.status(200).json({ message: 'Note saved successfully' });
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to save note' });
            }
        });
    }
    static list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const notes = yield noteModel_1.NoteModel.listNotes();
                res.status(200).json(notes);
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to list notes' });
            }
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield noteModel_1.NoteModel.deleteNote(Number(id));
                res.status(200).json({ message: 'Note deleted successfully' });
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to delete note' });
            }
        });
    }
}
exports.NoteController = NoteController;
