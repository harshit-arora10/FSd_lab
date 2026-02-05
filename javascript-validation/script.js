
const form = document.getElementById('registrationForm');
const errorDisplay = document.getElementById('errorBox');

form.addEventListener('submit', function(event) {
   
    const name = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const pass = document.getElementById('userPass').value.trim();
    const mobile = document.getElementById('userMobile').value.trim();

    let errorMessage = "";

   
    if (name === "") {
        errorMessage = "Name is required.";
    } 
    else if (!email.includes("@")) {
        errorMessage = "Please enter a valid email.";
    } 
    else if (pass.length < 6) {
        errorMessage = "Password must be at least 6 characters.";
    } 
    else if (mobile.length !== 10 || isNaN(mobile)) {
        errorMessage = "Mobile number must be exactly 10 digits.";
    }

    
    if (errorMessage !== "") {
       
        event.preventDefault();
        errorDisplay.innerText = errorMessage;
    } else {
        
        alert("Success! Form is being submitted.");
       
    }
});