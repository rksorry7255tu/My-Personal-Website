
        // var typed = new Typed('#element', {
        //     strings: ['Web Developer.', 'Web Designer.', 'Software Engineer.'],
        //     typeSpeed: 50,
        // });
    


const scriptURL = 'https://script.google.com/macros/s/AKfycbz1ocJ7uLtguu_6U2aKaofupVS3FhdUcJalP8ARXU6Lu091y1xYuuDCT9E8WG53llP6/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})