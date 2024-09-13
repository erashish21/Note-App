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
const mariadb_1 = __importDefault(require("mariadb"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pool = mariadb_1.default.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: 10,
    acquireTimeout: 20000,
    connectTimeout: 30000,
    idleTimeout: 10000,
});
function testConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        let conn;
        try {
            conn = yield pool.getConnection();
            console.log('Connected to the database successfully!');
        }
        catch (err) {
            console.error('Failed to connect to the database:', err);
        }
        finally {
            if (conn)
                conn.end();
        }
    });
}
testConnection();
exports.default = pool;
