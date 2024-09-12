// document.getElementsByClassName(btn1);


function displayMessage(message = null) {
    const nameInput = document.getElementById('name').value;
    const messageDiv = document.getElementById('message');

    if (message) {
        messageDiv.textContent = message;
    } else if (nameInput) {
        messageDiv.textContent = `Sahil and ${nameInput} get married!`;
    } else {
        messageDiv.textContent = 'Please enter your name.';
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const btn2 = document.querySelector(".btn2");

    btn2.addEventListener("mouseover", function() {
        // Get the viewport width and height
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Generate random positions, ensuring the button stays fully visible within the viewport
        const randomX = Math.floor(Math.random() * (windowWidth - btn2.offsetWidth - 100)); // 20px margin to prevent being at the edge
        const randomY = Math.floor(Math.random() * (windowHeight - btn2.offsetHeight - 100));

        // Apply new positions to the button
        btn2.style.left = randomX + "px";
        btn2.style.top = randomY + "px";
    });
});


function hideInputOnEnter(event) {
    if (event.key === 'Enter') {
        const nameInput = document.getElementById('name');
        const namePrompt = document.getElementById('namePrompt');


        if (nameInput.value.trim() !== '') {
            nameInput.style.display = 'none';  // Hide the input field
            namePrompt.style.display = 'none';
        }
    }
}


