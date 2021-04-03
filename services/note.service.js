"use strict";

const { NoteRepository, UserRepository } = require('../repositories');

const getNoteById = async (id) => {
    if(!id){
        const error = new Error();
        error.status = 400;
        error.message = "note id must be sent";
        throw error;
    }

    const note = await NoteRepository.getNoteById(id);

    if(!note){
        const error = new Error();
        error.status = 404;
        error.message = "note not found";
        throw error;
    }

    return note;
};

const getUserNotes = async (userId) => {
    if(!userId){
        const error = new Error();
        error.status = 400;
        error.message = "user id must be sent";
        throw error;
    }

    const user = await UserRepository.getUserById(userId);

    if(!user){
         const error = new Error();
         error.status = 404;
         error.message = "user does not exist";
         throw error;
    }

    const { notes } = user;

    return notes;
};

const createNote = async (userId, note) => {
    if(!userId){
        const error = new Error();
        error.status = 400;
        error.message = "user id must be sent";
        throw error;
    }

    const user = await UserRepository.getUserById(userId);

    if(!user){
        const error = new Error();
        error.status = 404;
        error.message = "user does not exist";
        throw error;
    }

    const createdNote = await NoteRepository.createNote(note);
    user.notes.push(createdNote);

    return await UserRepository.updateUser(userId, {notes: user.notes})
};

const updateNote = async (id, note) => {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "note id must be sent";
      throw error;
    }

    return await NoteRepository.updateNote(id, note);
};

const deleteNote = async (id) => {
     if (!id) {
       const error = new Error();
       error.status = 400;
       error.message = "note id must be sent";
       throw error;
     }

     return await NoteRepository.deleteNote(id);
};

module.exports = {
  getNoteById,
  getUserNotes,
  createNote,
  updateNote,
  deleteNote,
};
