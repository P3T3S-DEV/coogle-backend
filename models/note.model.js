"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorie = [
  'learning',
  'work',
  'other'
]
const NoteSchema = Schema(
  {
    category: {
      type: String,
      enum: categorie,
      required: true,
      lowercase: true
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    files: [
      {
        type: String,
      },
    ],
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("note", NoteSchema);
