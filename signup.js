document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const weddingDate = document.getElementById("weddingDate").value;
    const budget = document.getElementById("budget").value.trim();
    const serviceType = document.getElementById("serviceType").value;
    const message = document.getElementById("message").value.trim();

    // Simple form validation
    if (!fullName || !email || !weddingDate || !budget || !serviceType) {
        alert("Please fill in all required fields.");
        return;
    }

    // Here you would typically send the data to a server or database
    // For now, we simulate a successful submission by showing a success message
    document.getElementById("successMessage").classList.remove("hidden");

    // Optionally, clear the form after submission
    document.getElementById("signupForm").reset();
});
