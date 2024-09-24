const textAreaElement = document.getElementById('text-area');
const totalCharElement = document.querySelector('.total-char');
const remainingCharElement = document.querySelector('.remaining-char');
const maxChar = textAreaElement.getAttribute('maxlength');

textAreaElement.addEventListener('keyup',()=>{
  updateCounter();
});

function updateCounter() {
  totalCharElement.innerText = textAreaElement.value.length;

  remainingCharElement.innerText = maxChar - textAreaElement.value.length;
}