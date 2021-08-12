const readNotes = require('./read');
const addNote = require('./add');
const deleteNote = require('./delete');
const updateNote = require('./update');
if (process.argv[2] === 'read') {
  readNotes();
} else if (process.argv[2] === 'create') {
  addNote(process.argv[3]);
} else if (process.argv[2] === 'delete') {
  deleteNote(process.argv[3]);
} else if (process.argv[2] === 'update') {
  updateNote(process.argv[3], process.argv[4]);
}
