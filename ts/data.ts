interface Data {
  view: string;
  entries: FormEntry[];
  editing: null;
  nextEntryId: number;
}

const data = readData();

// let data: Data = {
//   view: 'entry-form',
//   entries: [],
//   editing: null,
//   nextEntryId: 1,
// };

function writeData(): void {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('data storage', dataJSON);
}

function readData(): Data {
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
