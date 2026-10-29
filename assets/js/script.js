
// 1. Live Timestamp Updater (Dual Placement: Top Right & Footer)
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
    
    const timestampElements = document.querySelectorAll('.live-timestamp');
    timestampElements.forEach(el => {
        el.textContent = formattedTime;
    });
}
updateTimestamp();
setInterval(updateTimestamp, 1000);


// 2. FAQ Accordion Functionality
document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion-header");
    
    accordions.forEach(header => {
        header.addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    // 3. Form Validation & Error Message Handling
    const contactForm = document.getElementById("contactForm");
    const feedbackMsg = document.getElementById("form-feedback");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Stop page reload

            const name = document.getElementById("name") ? document.getElementById("name").value.trim() : "";
            const email = document.getElementById("email") ? document.getElementById("email").value.trim() : "";
            const phone = document.getElementById("phone") ? document.getElementById("phone").value.trim() : "";
            const message = document.getElementById("message") ? document.getElementById("message").value.trim() : "";

            // Check for missing required fields
            if (!name || !email || !message) {
                feedbackMsg.style.color = "#ff4d4d"; // Error Red
                feedbackMsg.textContent = "⚠️ Please fill in all required fields (Name, Email, Message) before submitting.";
                return;
            }

            // Simple email structure verification
            if (!email.includes("@") || !email.includes(".")) {
                feedbackMsg.style.color = "#ff4d4d";
                feedbackMsg.textContent = "⚠️ Please enter a valid email address.";
                return;
            }

            // Success state
            feedbackMsg.style.color = "#2ecc71"; // Success Green
            feedbackMsg.textContent = "✨ Thank you, " + name + "! Your enquiry/booking has been successfully sent. We will contact you soon.";
            contactForm.reset();
        });
    }

    // 4. Live Services Search Bar Filter
    const searchInput = document.getElementById("serviceSearch");
    if (searchInput) {
        searchInput.addEventListener("keyup", function() {
            const filter = searchInput.value.toLowerCase();
            const serviceRows = document.querySelectorAll("tbody tr");

            serviceRows.forEach(row => {
                const text = row.textContent.toLowerCase();
                if (text.includes(filter)) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            });
        });
    }
});