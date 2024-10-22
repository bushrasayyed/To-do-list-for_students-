document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    let firstName = document.getElementById('firstName').value.trim();
    let lastName = document.getElementById('lastName').value.trim();
    let age = parseInt(document.getElementById('age').value.trim(), 10);

    // Name validation (only alphabets)
    let namePattern = /^[A-Za-z]+$/;
    if (!namePattern.test(firstName)) {
        alert("First name should only contain alphabets.");
        return;
    }

    if (!namePattern.test(lastName)) {
        alert("Last name should only contain alphabets.");
        return;
    }

    // Age validation (18 to 50)
    if (isNaN(age) || age < 18 || age > 50) {
        alert("Age should be between 18 and 50.");
        return;
    }

    alert("Form submitted successfully!");
});
//open html file directly 
