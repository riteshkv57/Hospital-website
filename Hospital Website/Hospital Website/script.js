// Simulate visitor count increment
let visitorCount = 0;

function incrementVisitorCount() {
    visitorCount++;
    document.getElementById('visitorCount').textContent = visitorCount;
}

// Add event listener for page load
window.addEventListener('load', incrementVisitorCount);

document.getElementById('bookAppointment').addEventListener('click', () => {
    alert('Emergency appointment booked!');
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('sticky-nav');
    } else {
        navbar.classList.remove('sticky-nav');
    }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for now
    // Perform login logic here
    alert('Logged in successfully!');
});
