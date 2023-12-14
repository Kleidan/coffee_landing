const myForm = document.getElementById('my-form');

myForm.addEventListener('submit', (e) => {
  e.preventDefault;
  const name = document.getElementById('fname');
  alert(`Thank you ${name.value} this is a demo page`)
})