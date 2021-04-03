"use strict";

const { NoteService } = require("../services");

const getNoteById = async (req, res) => {
  const { noteId } = req.params;
  const note = await NoteService.getNoteById(noteId);
  return res.send(note);
};

const getUserNotes = async (req, res) => {
  const { id: userId } = req.user;
  const notes = await NoteService.getUserNotes(userId);
  return res.send(notes);
};

const createUserNote = async (req, res) => {
  const { body } = req;
  const { id: userId } = req.user;
  const createdNote = await NoteService.createNote(userId, body);
  return res.status(201).send(createdNote);
};

const updateNote = async (req, res) => {
  const { noteId } = req.params;
  const { body } = req;
  const updatedNote = await NoteService.updateNote(noteId, body);
  return res.send(updatedNote);
};

const deleteNote = async (req, res) => {
  const { noteId } = req.params;
  const deletedNote = await NoteService.deleteNote(noteId);
  return res.send(deletedNote);
};

module.exports = {
  getNoteById,
  getUserNotes,
  createUserNote,
  updateNote,
  deleteNote,
};
