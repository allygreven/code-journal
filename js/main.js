"use strict";
const $photoInput = document.querySelector('#photo-url');
const $photoPreview = document.querySelector('#placeholder-image');
if (!$photoInput)
    throw new Error('$photoInput does not exist');
if (!$photoPreview)
    throw new Error('$photoPreview does not exist');
$photoInput.addEventListener('input', (event) => {
    const input = event.target;
    const newURL = input.value;
    $photoPreview.src = newURL;
});
const $entryForm = document.querySelector('form');
if (!$entryForm)
    throw new Error('$entryForm does not exist');
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
    $entryForm.reset();
    writeData();
});
/// ///////////////////////////////////////////
function renderEntry(entry) {
    const $entry = document.createElement('li');
    $entry.setAttribute('class', 'entry');
    const $columnHalf = document.createElement('div');
    $columnHalf.setAttribute('class', 'column-half');
    const $image = document.createElement('img');
    $image.setAttribute('class', 'img src');
    const $headingTwo = document.createElement('h2');
    $headingTwo.textContent = 'Boating!';
    const $paragraph = document.createElement('p');
    $paragraph.textContent =
        "Yay! I love boating in the middle of nowhere! Hope I don't get lost!";
    return $entry;
}
