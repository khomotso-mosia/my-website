// --- Consolidated Script for Noma's BeautyParlour ---

// 1. Live Timestamp Updater (Top Right & Footer)
function updateTimestamp() {
    const now = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedTime = now.toLocaleDateString('en-ZA', options);
    
    document.querySelectorAll('.live-timestamp').forEach(el => {
        el.textContent = formattedTime;
    });
}
updateTimestamp();
setInterval(updateTimestamp, 1000);


// 2. DOM Content Loaded (Forms, Search, Lightbox, Accordions, Scroll Button)
document.addEventListener("DOMContentLoaded", () => {
    console.log("Noma's Script Loaded Successfully!");

    // --- Back to Top Button Logic ---
    const backToTopBtn = document.getElementById("backToTop");
    if (backToTopBtn) {
        // Show button when user scrolls down 300px
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        });

        // Smooth scroll to top when clicked
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // --- FAQ Accordion Functionality ---
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

    // --- Form Validation (Red Error Text Under Fields + Personalized Greeting) ---
    const contactForm = document.getElementById("contactForm");
    const feedbackMsg = document.getElementById("form-feedback");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Stop page reload

            // Clear previous errors safely
            document.querySelectorAll(".field-error").forEach(el => el.textContent = "");
            if (feedbackMsg) feedbackMsg.textContent = "";

            let isValid = true;

            // Validate Name
            const nameInput = document.getElementById("name");
            const nameError = document.getElementById("name-error");
            if (nameInput && nameInput.value.trim() === "") {
                if (nameError) nameError.textContent = "⚠️ Please enter your name.";
                isValid = false;
            }

            // Validate Email
            const emailInput = document.getElementById("email");
            const emailError = document.getElementById("email-error");
            if (emailInput) {
                const emailVal = emailInput.value.trim();
                if (emailVal === "") {
                    if (emailError) emailError.textContent = "⚠️ Please enter your email address.";
                    isValid = false;
                } else if (!emailVal.includes("@") || !emailVal.includes(".")) {
                    if (emailError) emailError.textContent = "⚠️ Please enter a valid email address.";
                    isValid = false;
                }
            }

            // Validate Phone (Check for letters)
            const phoneInput = document.getElementById("phone");
            const phoneError = document.getElementById("phone-error");
            if (phoneInput) {
                const phoneVal = phoneInput.value.trim();
                if (phoneVal === "") {
                    if (phoneError) phoneError.textContent = "⚠️ Please enter your phone number.";
                    isValid = false;
                } else if (/[a-zA-Z]/.test(phoneVal)) {
                    if (phoneError) phoneError.textContent = "⚠️ Phone number cannot contain letters. Please use digits only.";
                    isValid = false;
                }
            }

            // Validate Message
            const messageInput = document.getElementById("message");
            const messageError = document.getElementById("message-error");
            if (messageInput && messageInput.value.trim() === "") {
                if (messageError) messageError.textContent = "⚠️ Please enter your message.";
                isValid = false;
            }

            // Final Result
            if (!isValid) {
                if (feedbackMsg) {
                    feedbackMsg.style.color = "#ff4d4d";
                    feedbackMsg.textContent = "⚠️ Please correct the errors highlighted below.";
                }
            } else {
                // Success state with personalized name
                if (feedbackMsg) {
                    const userName = nameInput ? nameInput.value.trim() : "Valued Customer";
                    feedbackMsg.style.color = "#2ecc71";
                    feedbackMsg.textContent = "✨ Thank you, " + userName + "! Your enquiry/booking has been successfully sent. We will contact you soon.";
                }
                contactForm.reset();
            }
        });
    }

    // --- Services Search Bar ---
    const searchInput = document.getElementById("serviceSearch");
    if (searchInput) {
        searchInput.addEventListener("keyup", function() {
            const filter = searchInput.value.toLowerCase();
            document.querySelectorAll("tbody tr").forEach(row => {
                row.style.display = row.textContent.toLowerCase().includes(filter) ? "" : "none";
            });
        });
    }

    // --- Image Lightbox Modal ---
    if (!document.getElementById("imageModal")) {
        document.body.insertAdjacentHTML('beforeend', `
            <div id="imageModal" class="modal">
                <span class="modal-close">&times;</span>
                <img class="modal-content" id="modalImg" alt="Enlarged View">
            </div>
        `);
    }

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.querySelector(".modal-close");

    document.querySelectorAll("main img").forEach(img => {
        if (!img.closest('iframe')) {
            img.style.cursor = "pointer";
            img.addEventListener("click", function(e) {
                e.preventDefault();
                modal.style.display = "block";
                modalImg.src = this.src;
            });
        }
    });

    const closeModal = () => modal.style.display = "none";
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (modalImg) modalImg.addEventListener("click", closeModal);
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeModal();
        });
    }
});