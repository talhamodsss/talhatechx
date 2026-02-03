const recipientName = "Alice"; // Change this
const messageGreeting = "Happy Birthday,";

document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('birthday-music');
    const steps = document.querySelectorAll('.step');
    const startBtn = document.getElementById('start-btn');
    const envelope = document.querySelector('.envelope-wrapper');
    const nextCelebration = document.getElementById('next-celebration');

    // Set name
    document.querySelector('.name-placeholder').innerText = recipientName;
    document.getElementById('main-greeting').innerText = `${messageGreeting} ${recipientName}!`;

    // Step 1 to Step 2
    startBtn.addEventListener('click', () => {
        music.play().catch(e => console.log("Music auto-play blocked"));
        changeStep(1, 2);
    });

    // Step 2 to Step 3
    envelope.addEventListener('click', () => {
        changeStep(2, 3);
    });

    // Step 3 to Step 4
    nextCelebration.addEventListener('click', () => {
        changeStep(3, 4);
        startConfetti();
    });

    function changeStep(current, next) {
        document.getElementById(`step-${current}`).classList.remove('active');
        document.getElementById(`step-${next}`).classList.add('active');
    }
});

function startConfetti() {
    // Basic JS Confetti logic can be added here
    // For the demo effect, typically a library like canvas-confetti is used.
    console.log("Confetti Burst!");
          }
