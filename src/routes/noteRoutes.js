"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const noteController_1 = require("../controllers/noteController");
const router = (0, express_1.Router)();
router.post('/notes', noteController_1.NoteController.save);
router.get('/notes', noteController_1.NoteController.list);
router.delete('/notes/:id', noteController_1.NoteController.delete);
exports.default = router;
