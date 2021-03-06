// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', function(e) {
    if (e.target.matches('.like-glyph')) {
      const resp = mimicServerCall()
      .then( function() { 
        e.target.classList.add("activated-heart")
        e.target.textContent = FULL_HEART
      })
      .catch( function(error) {
        const errorModal = document.getElementById('modal')
        errorModal.textContent = error
        errorModal.classList.remove("hidden")
        setTimeout( () => errorModal.classList.add("hidden"), 5000 )
      })

    }
  })
  
})




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
