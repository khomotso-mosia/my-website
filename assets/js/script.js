
// Wait for the HTML document to fully load before running scripts
document.addEventListener("DOMContentLoaded", function () {

   // Live Timestamp Updater (Updates all elements with the class 'live-timestamp')
function updateTimestamp() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };
    const formattedTime = now.toLocaleDateString('en-ZA', options);
    
    // Find all elements with the live-timestamp class and update them
    const timestampElements = document.querySelectorAll('.live-timestamp');
    timestampElements.forEach(el => {
        el.textContent = formattedTime;
    });
}

// Run immediately and update every second
updateTimestamp();
setInterval(updateTimestamp, 1000);
    /* ------------------------------------------
       2. INTERACTIVE ACCORDION BUTTONS (FAQ / SERVICES)
       ------------------------------------------ */
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function () {
            // Toggle active class on the clicked header
            this.classList.toggle("active");

            // Find the panel right next to the header
            const panel = this.nextElementSibling;
            
            // Toggle display between hidden and visible
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
    /* ------------------------------------------
       3. CONTACT & ENQUIRY FORM VALIDATION
       ------------------------------------------ */
    const contactForm = document.getElementById("contactForm");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            // Prevent form from submitting if fields are empty
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const feedbackBox = document.getElementById("form-feedback");

            if (name === "" || email === "" || message === "") {
                event.preventDefault(); // Stop form submission
                if (feedbackBox) {
                    feedbackBox.style.color = "red";
                    feedbackBox.textContent = "Please fill in all required fields before submitting.";
                }
            } else {
                event.preventDefault(); // For demo/static purposes
                if (feedbackBox) {
                    feedbackBox.style.color = "green";
                    feedbackBox.textContent = "Thank you! Your message has been successfully validated.";
                }
            }
        });
    }

});