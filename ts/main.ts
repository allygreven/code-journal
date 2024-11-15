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
