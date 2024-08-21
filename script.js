function myfunc(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Retrieve values from form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var clientId = document.getElementById("client-id").value;
    var comments = document.getElementById("comments").value;

    // Retrieve the values of selected radio buttons
    var quality = document.querySelector('input[name="quality"]:checked').value;
    var shipping = document.querySelector('input[name="shipping"]:checked').value;
    var website = document.querySelector('input[name="website"]:checked').value;

    // Store the form data in localStorage
    localStorage.setItem('ls_name', name);
    localStorage.setItem('ls_email', email);
    localStorage.setItem('ls_clientId', clientId);
    localStorage.setItem('ls_quality', quality);
    localStorage.setItem('ls_shipping', shipping);
    localStorage.setItem('ls_website', website);
    localStorage.setItem('ls_comments', comments);

    // Send form data to the server using fetch API
    fetch(event.target.action, {
        method: "POST",
        body: new FormData(document.getElementById("rating-form")),
    })
    .then(response => response.json()) // Parse the JSON response from the server
    .then((html) => {
        window.open('thankyou.html', '_blank'); // Open a new page with a thank you message
    })
    .catch(error => {
        console.error('Error:', error); // Log any errors to the console
        alert("There was an error submitting your feedback. Please try again."); // Show an error message
    });
}

// Attach the myfunc function to the form's submit event
document.getElementById("rating-form").addEventListener("submit", myfunc);