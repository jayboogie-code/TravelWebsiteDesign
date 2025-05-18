// Function to toggle the visibility of the sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const isHidden = sidebar.style.display === 'none';
    sidebar.style.display = isHidden ? 'block' : 'none';
    mainContent.style.marginLeft = isHidden ? '250px' : '0';
    const toggleButton = document.getElementById('toggle-button');
    toggleButton.textContent = isHidden ? 'Hide Sidebar' : 'Show Sidebar';
}

//funcituon to leave a comment
function leaveComment() {
    const commentInput = document.getElementById('comment-input');
    const commentList = document.getElementById('comment-list');

    if (commentInput.value.trim() === '') {
        alert('Please enter a comment.');
        return;
    }

    const newComment = document.createElement('li');
    newComment.textContent = commentInput.value;
    commentList.appendChild(newComment);
    commentInput.value = ''; // Clear the input field
} 
// Function to display a welcome message
function displayWelcomeMessage(username) {
    const welcomeElement = document.getElementById('welcome-message');
    if (welcomeElement) {
        welcomeElement.textContent = `Welcome back, ${username}!`;
    }
}

// Function to validate a contact form
function validateContactForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('All fields are required.');
        return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Make sure default form submission is prevented

    if (validateContactForm()) {
        // This is where I would send the form data to the server
        console.log('Form data is valid and ready for submission.');
    }
}

