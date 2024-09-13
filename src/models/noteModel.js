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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteModel = void 0;
const config_1 = __importDefault(require("../config"));
class NoteModel {
    static saveNote(content) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield config_1.default.getConnection();
            try {
                yield conn.query('INSERT INTO notes (content) VALUES (?)', [content]);
            }
            finally {
                conn.release();
            }
        });
    }
    static listNotes() {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield config_1.default.getConnection();
            try {
                const rows = yield conn.query('SELECT * FROM notes');
                return rows;
            }
            finally {
                conn.release();
            }
        });
    }
    static deleteNote(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield config_1.default.getConnection();
            try {
                yield conn.query('DELETE FROM notes WHERE id = ?', [id]);
            }
            finally {
                conn.release();
            }
        });
    }
}
exports.NoteModel = NoteModel;
