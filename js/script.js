function reserveTable() {
    alert('Table reserved successfully! We look forward to welcoming you at Ajax.');
}

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}, for reaching out to Ajax! We'll respond to your query at ${email} soon.`);
    // Clear form
    this.reset();
});
