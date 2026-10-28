
// Wait for the HTML document to fully load before running scripts
document.addEventListener("DOMContentLoaded", function () {

    /* ------------------------------------------
       1. AUTOMATIC LIVE TIMESTAMP IN FOOTER
       ------------------------------------------ */
    const timestampElement = document.getElementById("live-timestamp");
    if (timestampElement) {
        const now = new Date();
        // Formats date and time nicely (e.g., 2026/10/28, 12:36:00 PM)
        timestampElement.textContent = now.toLocaleString();
    }
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