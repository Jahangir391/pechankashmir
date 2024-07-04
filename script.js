




const readMoreBtn = document.getElementById('read-more-btn');
const hiddenText = document.getElementById('hidden-text');
let isShowing = false; // Add a flag to track the state

readMoreBtn.addEventListener('click', () => {
  if (!isShowing) {
    hiddenText.style.display = 'block'; // Show the hidden text
    isShowing = true;
  } else {
    hiddenText.style.display = 'none'; // Hide the hidden text again
    isShowing = false;
  }
});





