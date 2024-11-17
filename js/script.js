// Event: Reserve Table Button
function reserveTable() {
    alert("Thank you for choosing Ajax! Our team will contact you soon to confirm your reservation.");
}

// Event: Contact Form Submission
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent default form submission
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (name && email && message) {
                alert(
                    `Thank you, ${name}! Your message has been received. We'll get back to you at ${email}.`
                );
                contactForm.reset(); // Clear the form fields
            } else {
                alert("Please fill out all fields before submitting.");
            }
        });
    }
});

// Event: Highlight Active Page in Navigation
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentPath = window.location.pathname.split("/").pop();

    navLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPath) {
            link.style.color = "#f0c14b"; // Highlight the current page link
            link.style.fontWeight = "bold";
        }
    });
});
