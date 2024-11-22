'use strict';
const $photoInput = document.querySelector('#photo-url');
const $photoPreview = document.querySelector('#placeholder-image');
if (!$photoInput) throw new Error('$photoInput does not exist');
if (!$photoPreview) throw new Error('$photoPreview does not exist');
$photoInput.addEventListener('input', (event) => {
  const input = event.target;
  $photoPreview.src = input.value;
});
const $entryForm = document.querySelector('form');
if (!$entryForm) throw new Error('$entryForm does not exist');
$entryForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $entryForm.elements;
  const formData = {
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
function renderEntry(entry) {
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
const $ul = document.querySelector('ul');
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
const $pElement = document.querySelector('.no-entries');
if (!$pElement) throw new Error('$pElement query failed');
function toggleNoEntries() {
  if (!$pElement) throw new Error('$p query failed');
  if (data.entries.length > 0) {
    $pElement.className = 'noEntries hidden';
  } else {
    $pElement.className = 'noEntries';
  }
}
const $entriesView = document.querySelector('[data-view="entries"]');
const $form = document.querySelector('[data-view="entry-form"]');
if (!$entriesView) throw new Error('$entriesView query failed');
if (!$form) throw new Error('$form query failed');
function viewSwap(viewName) {
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
$ul.addEventListener('click', (event) => {
  const $target = event.target;
  if ($target.matches('.fa-pencil')) {
    viewSwap('entry-form');
    const $firstLi = $target.closest('li');
    const $li = $firstLi.getAttribute('data-entry-id');
    for (let i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId === Number($li)) {
        data.editing = data.entries[i];
        $photoPreview.src = data.editing.url;
        const $formElements = $entryForm.elements;
        $formElements.title.value = data.editing.title;
        $formElements.url.value = data.editing.url;
        $formElements.notes.value = data.editing.notes;
      }
    }
  }
});
