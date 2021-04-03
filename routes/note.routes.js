"use strict";

const router = require('express').Router();
const { NoteController } = require('../controllers');
const { AuthMiddleware } = require('../middlewares')

router.get("/:noteId", AuthMiddleware, NoteController.getNoteById);
router.get("/:userId/unique", AuthMiddleware, NoteController.getUserNotes);
router.post("", AuthMiddleware, NoteController.createUserNote);
router.patch("/:noteId", AuthMiddleware, NoteController.updateNote);
router.delete("/:noteId", AuthMiddleware, NoteController.deleteNote);

module.exports = router;