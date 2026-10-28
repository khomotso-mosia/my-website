
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