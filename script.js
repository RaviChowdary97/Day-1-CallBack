let count = 10;
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  countdownElement.textContent = count;
  if (count > 0) {
    count--;
    setTimeout(updateCountdown, 1000); // Decrement count and update every second
  } else {
    countdownElement.textContent = "Happy Independence Day";
  }
}

// Start the countdown
updateCountdown();
