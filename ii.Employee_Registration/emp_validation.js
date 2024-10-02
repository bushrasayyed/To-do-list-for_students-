document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    let dob = new Date(document.getElementById('dob').value);
    let joiningDate = new Date(document.getElementById('joiningDate').value);
    let salary = parseFloat(document.getElementById('salary').value.trim());

    // DOB validation (must be at least 18 years old)
    let today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    // let monthDiff = today.getMonth() - dob.getMonth();
    // if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    //     age--;
    // }

    if (isNaN(dob.getTime()) || age < 18) {
        alert("Employee must be at least 18 years old.");
        return;
    }

    // Joining Date validation (must be after DOB and not in the future)
    if ( joiningDate > today) {
        alert("Joining date cannot be in the future.");
        return;
    }

    // Salary validation (must be a positive number)
    if (isNaN(salary) || salary <= 0) {
        alert("Salary must be a positive number.");
        return;
    }

    alert("Form submitted successfully!");
});
