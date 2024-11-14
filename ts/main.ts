const $photoInput = document.querySelector('#photo-url') as HTMLInputElement;
const $photoPreview = document.querySelector(
  '#placeholder-image',
) as HTMLImageElement;

if (!$photoInput) throw new Error('$photoInput does not exist');
if (!$photoPreview) throw new Error('$photoPreview does not exist');

$photoInput.addEventListener('input', (event: Event) => {
  const input = event.target as HTMLInputElement;
  const newURL = input.value;
  $photoPreview.src = newURL;
});

/////////////////////////////////
const $entryForm = document.querySelector('#entry-form') as HTMLFormElement;
if (!$entryForm) throw new Error('$entryForm does not exist');

$entryForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();

for (let i = 0; i < $entryForm.elements.length; i++) {
    const newEntry = $entryForm.elements[i] as HTMLInputElement;
     if (newEntry.name) {
      newEntry.name === newEntry.value;
    }
  }




/*













//   // Assign entryId and increment nextEntryId
//   newEntry.entryId = data.nextEntryId;
//   data.nextEntryId++;

//   // Add the new entry at the beginning of entries array
//   data.entries.unshift(newEntry);

//   // Reset the preview image to the placeholder
//   $photoPreview.src = 'path/to/placeholder-image.jpg';

//   // Reset the form fields
//   $entryForm.reset();
//   }

// })






// unshift



// $entryForm.addEventListener('submit', (event: Event) => {
//   event.preventDefault();
//   const $formElements = $entryForm.elements as HTMLFormElement;
// const entryData = {
//   image: $formElements.url.value,
//   title: $formElements.title.value,
//   notes: $formElements.notes.value
// }

// })
/*
*





8







// for (let i = 0; i < $entryForm.elements.length; i++) {
//   const element = $entryForm.elements[i] as HTMLInputElement;
//   if (element.name === 'name' && element.value) {
//     entryData.image = element.value;
//   } else if (element.name === 'email' && element.value) {
//     entryData.title = element.value;
//   } else if (element.name === 'photo-url' && element.value) {
//     entryData.notes = element.value;
//   }
// }
