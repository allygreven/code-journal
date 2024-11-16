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
  $entryForm.reset();
  writeData();
});

/// ///////////////////////////////////////////
function renderEntry(entry: FormEntry): HTMLLIElement {
  const $entry = document.createElement('li');
  $entry.className = 'list';

  const $columnHalf = document.createElement('div');
  $columnHalf.className = 'column-half';

  const $image = document.createElement('img');
  $image.setAttribute('src', entry.url);

  const $columnHalf2 = document.createElement('div');
  $columnHalf2.className = 'column-half';

  const $headingTwo = document.createElement('h2');
  $headingTwo.textContent = entry.title;

  const $paragraph = document.createElement('p');
  $paragraph.textContent = entry.notes;

  $entry.appendChild($columnHalf);
  $entry.appendChild($columnHalf2);
  $columnHalf.appendChild($image);
  $columnHalf2.appendChild($headingTwo);
  $columnHalf2.appendChild($paragraph);

  return $entry;
}

const $ul = document.querySelector('ul');
if (!$ul) throw new Error('$ul does not exist');

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < data.entries.length; i++) {
    const entry = data.entries[i];
    const $entryDOM = renderEntry(entry);
    $ul.appendChild($entryDOM);
  }
});

const $pElement = document.querySelector('.noEntries');
if (!$pElement) throw new Error('$pElement query failed');

function toggleNoEntries(): void {
  if (!$pElement) throw new Error('$p query failed');
  if (data.entries.length > 0) {
    $pElement.className = 'noEntries hidden';
  } else {
    $pElement.className = 'noEntries';
  }
}

///////////is this right?!?!?//////////////////

function viewSwap(entries: Data): void {
  const viewName = data.view;
  const $views = document.querySelectorAll('.entries');
  if (!$views) throw new Error('$views query failed');
  for (let i = 0; i < $views.length; i++) {
    const $view = $views[i] as HTMLElement;
    if ($view.dataset.view === viewName) {
      $view.classList.remove('hidden');
    } else {
      $view.classList.add('hidden');
    }
  }
}
