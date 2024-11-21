const $photoInput = document.querySelector('#photo-url') as HTMLInputElement;
const $photoPreview = document.querySelector(
  '#placeholder-image',
) as HTMLImageElement;

if (!$photoInput) throw new Error('$photoInput does not exist');
if (!$photoPreview) throw new Error('$photoPreview does not exist');

$photoInput.addEventListener('input', (event: Event) => {
  const input = event.target as HTMLInputElement;
  $photoPreview.src = input.value;
});

interface formElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  url: HTMLInputElement;
  notes: HTMLTextAreaElement;
}

interface FormEntry {
  title: string;
  url: string;
  notes: string;
  entryId: number;
}

const $entryForm = document.querySelector('form');
if (!$entryForm) throw new Error('$entryForm does not exist');

$entryForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const $formElements = $entryForm.elements as formElements;
  const formData: FormEntry = {
    entryId: data.nextEntryId,
    title: $formElements.title.value,
    url: $formElements.url.value,
    notes: $formElements.notes.value,
  };
  data.nextEntryId++;
  data.entries.unshift(formData);

  $photoPreview.src = 'images/placeholder-image-square.jpg';

  const $newEntry = renderEntry(formData);
  $ul.prepend($newEntry);
  viewSwap('entries');
  toggleNoEntries();

  $entryForm.reset();
  writeData();
});

function renderEntry(entry: FormEntry): HTMLLIElement {
  const $entry = document.createElement('li');
  $entry.className = 'list';
  $entry.setAttribute('data-entry-id', entry.entryId.toString());

  const $columnHalf = document.createElement('div');
  $columnHalf.className = 'column-half';

  const $image = document.createElement('img');
  $image.setAttribute('src', entry.url);

  const $columnHalf2 = document.createElement('div');
  $columnHalf2.className = 'column-half';

  const $headingTwo = document.createElement('h2');
  $headingTwo.textContent = entry.title;

  const $pencil = document.createElement('i');
  $pencil.className = 'fa-solid fa-pencil';

  const $paragraph = document.createElement('p');
  $paragraph.textContent = entry.notes;

  $entry.appendChild($columnHalf);
  $entry.appendChild($columnHalf2);
  $columnHalf.appendChild($image);
  $columnHalf2.appendChild($headingTwo);
  $columnHalf2.appendChild($paragraph);
  $headingTwo.appendChild($pencil);

  return $entry;
}

const $ul = document.querySelector('ul') as HTMLElement;
if (!$ul) throw new Error('$ul does not exist');

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < data.entries.length; i++) {
    const entry = data.entries[i];
    const $entryDOM = renderEntry(entry);
    $ul.appendChild($entryDOM);
  }
  viewSwap(data.view);
  toggleNoEntries();
});

const $pElement = document.querySelector('.no-entries') as HTMLElement;
if (!$pElement) throw new Error('$pElement query failed');

function toggleNoEntries(): any {
  if (!$pElement) throw new Error('$p query failed');
  if (data.entries.length > 0) {
    $pElement.className = 'noEntries hidden';
  } else {
    $pElement.className = 'noEntries';
  }
}

const $entriesView = document.querySelector(
  '[data-view="entries"]',
) as HTMLElement;
const $form = document.querySelector('[data-view="entry-form"]') as HTMLElement;

if (!$entriesView) throw new Error('$entriesView query failed');
if (!$form) throw new Error('$form query failed');

function viewSwap(viewName: string): any {
  data.view = viewName;
  if (!$entriesView) throw new Error('$entriesView query failed');
  if (!$form) throw new Error('$form query failed');

  if (viewName === 'entries') {
    $entriesView.className = 'entries';
    $form.className = 'form hidden';
  } else {
    $entriesView.className = 'entries hidden';
    $form.className = 'form';
  }
}

const $entriesLink = document.querySelector('.entries-link');
if (!$entriesLink) throw new Error('$entriesLink query failed');

const $newEntryButton = document.querySelector('.new-button');
if (!$newEntryButton) throw new Error('$newEntryButton not found');

$newEntryButton.addEventListener('click', () => {
  viewSwap('entry-form');
});

$entriesLink.addEventListener('click', () => {
  viewSwap('entries');
});

/// /////////////////////////////////////////////////////////////

$ul.addEventListener('click', (event: Event) => {
  const target = event.target as HTMLElement;
  if (target.matches('.fa-pencil')) {
    const $entry = target.closest('li') as HTMLElement;

    const entryId = $entry.getAttribute('data-entry-id');

    const entryToEdit = data.entries.find(
      (entry) => entry.entryId.toString() === entryId,
    );

    if (!entryToEdit) return;
    data.editing = entryToEdit;

     const $formElements = $entryForm.elements as formElements;
      $formElements.title.value = entryToEdit.title;
      $formElements.url.value = entryToEdit.url;
      $formElements.notes.value = entryToEdit.notes;

      $photoPreview.src = entryToEdit.url;

      const $formTitle = document.querySelector('#entry-form') as HTMLElement;
      if (!$formTitle) throw new Error('$formTitle query failed')

  //    if ($formTitle === .new-entry) {
  //   $entriesView.className = 'entries';
  //   $form.className = 'form hidden';
  // } else {
  //   $entriesView.className = 'entries hidden';
  //   $form.className = 'form';
  }
  viewSwap('entry-form');
}
});





  // if (viewName === 'entries') {
  //   $entriesView.className = 'entries';
  //   $form.className = 'form hidden';
  // } else {
  //   $entriesView.className = 'entries hidden';
  //   $form.className = 'form';
  // }



/*
/
/
/
/
/
/
/
/
/
/
/


//     // Pre-populate the form fields with the entry's values
//

//     // Update the photo preview
//

//     // Update the form title
//

//     // Show the form view
//     viewSwap('entry-form');
//   }
// });
