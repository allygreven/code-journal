'use strict';
const data = readData();
// let data: Data = {
//   view: 'entry-form',
//   entries: [],
//   editing: null,
//   nextEntryId: 1,
// };
function writeData() {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('data storage', dataJSON);
}
function readData() {
  const dataJSON = localStorage.getItem('data storage');
  if (dataJSON) {
    return JSON.parse(dataJSON);
  } else {
    return {
      view: 'entry-form',
      entries: [],
      editing: null,
      nextEntryId: 1,
    };
  }
}
