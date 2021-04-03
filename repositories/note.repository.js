"use strict";

const noteModel = require("../models/note.model");

const getNoteById = async (id) => {
  return await noteModel.findById(id);
};

const getAllUserNotes = async (pageSize = 10, pageNum = 1) => {
  const skips = pageSize * (pageNum - 1);
  return await noteModel.find().skip(skips).limit(pageSize);
};

const createNote = async (note) => {
  return await noteModel.create(note);
};

const updateNote = async (id, note) => {
  return await noteModel.findByIdAndUpdate(id, note, { new: true });
};

const deleteNote = async (id) => {
  await noteModel.findByIdAndDelete(id);
  return true;
};


module.exports = {
  getNoteById,
  getAllUserNotes,
  createNote,
  updateNote,
  deleteNote
};
