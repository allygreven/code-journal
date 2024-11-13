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
