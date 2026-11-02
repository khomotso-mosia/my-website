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
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        });

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

    // --- Dynamic Validation & Direct Email Client Trigger ---
    const contactForm = document.getElementById("contactForm");
    const feedbackMsg = document.getElementById("form-feedback");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Always prevent default page jump/reload

            // 1. Clear previous errors safely
            document.querySelectorAll(".field-error").forEach(el => el.textContent = "");
            if (feedbackMsg) feedbackMsg.textContent = "";

            let isValid = true;

            // 2. Validate Name
            const nameInput = document.getElementById("name");
            const nameError = document.getElementById("name-error");
            let nameVal = "";
            if (nameInput) {
                nameVal = nameInput.value.trim();
                if (nameVal === "") {
                    if (nameError) nameError.textContent = " Please enter your name.";
                    isValid = false;
                } else if (/[0-9]/.test(nameVal)) {
                    if (nameError) nameError.textContent = " Name cannot contain numbers. Please enter letters only.";
                    isValid = false;
                }
            }

            // 3. Validate Email
            const emailInput = document.getElementById("email");
            const emailError = document.getElementById("email-error");
            let emailVal = "";
            if (emailInput) {
                emailVal = emailInput.value.trim();
                if (emailVal === "") {
                    if (emailError) emailError.textContent = " Please enter your email address.";
                    isValid = false;
                } else if (!emailVal.includes("@") || !emailVal.includes(".")) {
                    if (emailError) emailError.textContent = " Please enter a valid email address.";
                    isValid = false;
                }
            }

            // 4. Validate Phone
            const phoneInput = document.getElementById("phone");
            const phoneError = document.getElementById("phone-error");
            let phoneVal = "";
            if (phoneInput) {
                phoneVal = phoneInput.value.trim();
                if (phoneVal === "") {
                    if (phoneError) phoneError.textContent = " Please enter your phone number.";
                    isValid = false;
                } else if (/[a-zA-Z]/.test(phoneVal)) {
                    if (phoneError) phoneError.textContent = " Phone number cannot contain letters. Please use digits only.";
                    isValid = false;
                }
            }

            // 5. Validate Message
            const messageInput = document.getElementById("message");
            const messageError = document.getElementById("message-error");
            let messageVal = "";
            if (messageInput) {
                messageVal = messageInput.value.trim();
                if (messageVal === "") {
                    if (messageError) messageError.textContent = " Please enter your message.";
                    isValid = false;
                }
            }

            // 6. Output Evaluation
            if (!isValid) {
                if (feedbackMsg) {
                    feedbackMsg.style.color = "#ff4d4d";
                    feedbackMsg.textContent = " Please correct the errors highlighted below.";
                }
            } else {
                // Personalized Green Success Message
                if (feedbackMsg) {
                    feedbackMsg.style.color = "#2ecc71";
                    feedbackMsg.textContent = " Thank you, " + nameVal + "! Launching your email application to send your enquiry...";
                    
                    // Automatically clear the success message after 2 minutes (120,000 ms)
                    setTimeout(() => {
                        feedbackMsg.textContent = "";
                    }, 120000);
                }

                // Construct Email Body and Subject
                const recipientEmail = "info@nomasbeautyparlour.co.za";
                const subject = encodeURIComponent("New Salon Enquiry from " + nameVal);
                const body = encodeURIComponent(
                    "Name: " + nameVal + "\n" +
                    "Email: " + emailVal + "\n" +
                    "Phone: " + phoneVal + "\n\n" +
                    "Message/Enquiry:\n" + messageVal
                );

                // Trigger opening the default user mail application safely
                window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

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

    // --- Image Lightbox Modal with Next/Prev Support ---
    if (!document.getElementById("imageModal")) {
        document.body.insertAdjacentHTML('beforeend', `
            <div id="imageModal" class="modal" style="display: none;">
                <span class="modal-close">&times;</span>
                <span class="modal-nav modal-prev" id="modalPrev">&#10094;</span>
                <img class="modal-content" id="modalImg" alt="Enlarged View">
                <span class="modal-nav modal-next" id="modalNext">&#10095;</span>
            </div>
        `);
    }

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.querySelector(".modal-close");
    const prevBtn = document.getElementById("modalPrev");
    const nextBtn = document.getElementById("modalNext");

    // Collect all zoomable page images into an array
    const pageImages = Array.from(document.querySelectorAll("main img")).filter(img => !img.closest('iframe'));
    let currentImageIndex = 0;

    function showImage(index) {
        if (pageImages.length === 0) return;
        if (index < 0) index = pageImages.length - 1; // Wrap around to end
        if (index >= pageImages.length) index = 0;   // Wrap around to start
        currentImageIndex = index;
        modalImg.src = pageImages[currentImageIndex].src;
    }

    pageImages.forEach((img, index) => {
        img.style.cursor = "pointer";
        img.addEventListener("click", function(e) {
            e.preventDefault();
            modal.style.display = "block";
            showImage(index);
        });
    });

    // Next / Previous Click Listeners
    if (prevBtn) {
        prevBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            showImage(currentImageIndex - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            showImage(currentImageIndex + 1);
        });
    }

    // Keyboard Arrow Key Navigation
    document.addEventListener("keydown", (e) => {
        if (modal && modal.style.display === "block") {
            if (e.key === "ArrowLeft") {
                showImage(currentImageIndex - 1);
            } else if (e.key === "ArrowRight") {
                showImage(currentImageIndex + 1);
            } else if (e.key === "Escape") {
                modal.style.display = "none";
            }
        }
    });

    const closeModal = () => { if (modal) modal.style.display = "none"; };
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeModal();
        });
    }
});