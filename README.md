# Noma's BeautyParlour - Website Documentation

Welcome to the official web repository for **Noma's BeautyParlour**, a local salon based in Magxaki, Port Elizabeth (Gqeberha). This repository contains the complete responsive multi-page web application built with HTML5 and custom CSS.

---

## 1. Project Overview & Target Audience
* **Business Name:** Noma's BeautyParlour
* **Location:** Magxaki, Port Elizabeth (Gqeberha), South Africa
* **Services:** Professional hair styling, custom nail art, lash extensions, and skincare treatments.
* **Target Audience:** Local clients in Gqeberha seeking quality salon services with an easy way to view service offerings and submit enquiries online.

---

## 🎨 Design & Styling
* **Theme**: Luxury Dark Theme featuring a deep charcoal background (`#121212`) paired with sophisticated gold accents (`#ab930c`).
* **Typography**: Clean, high-contrast white text for optimal readability across all mobile and desktop viewports.
* **Layout**: Centered content containers, structured tables, and consistent navigation headers across all pages.

---
## Features

1. Responsive layout for desktop, tablet, and mobile displays

2. Navigation menu with cross-page linked navigation

3. "Home", "About Us", "Services", "Enquiry", and "Contact" sections

4. Luxury styling featuring signature gold (#ab930c) navigation and gold-bordered white content cards

Semantic HTML5 forms for booking enquiries and user feedback

5. **Client-Side Form Validation & Error Handling**:
   * Custom JavaScript validation (`novalidate`) replacing default browser popups.
   * Field-specific red warning messages displayed dynamically underneath each input (`#name`, `#email`, `#phone`, `#message`).
   * Intelligent checks preventing numbers in name fields and letters in telephone number fields.
   * Personalized success greeting banner ("*Thank you, [Name]! Your enquiry has been successfully sent...*").

6. **Interactive Services & Pricing Page**:
   * **Live Search Filter**: Instantly filters table rows based on user input.

7. **Image Lightbox Modal**:
   * Clicking any product or service image instantly opens a custom dark luxury overlay modal on the page, avoiding unwanted page navigation or raw file redirects.
   * Closeable via an explicit "X" button, clicking the image itself, or clicking anywhere on the backdrop.

8. **Dynamic User Enhancements**:
   * **Live Timestamp Header**: Real-time localized date and time display updated every second.
   * **FAQ Accordions**: Smooth collapsible dropdown panels for frequently asked questions.
   * **Back-to-Top Button**: Floating gold button that appears when scrolling down and smoothly returns the user to the top of the page.

---
## File & Folder Structure

nomas-beauty-parlour/
│
├── index.html                  # Home page
├── pages/
│   ├── about.html              # About Us & Story
│   ├── services.html           # Services, Pricing, and Live Search
│   ├── gallery.html            # Visual Portfolio & Lightbox Images
│   ├── faq.html                # FAQ & Accordion Sections
│   ├── contact.html            # Contact & Enquiry Form
│   └── enquiry.html            # Detailed Booking & Enquiry Form
│
├── assets/
│   ├── css/
│   │   └── style.css           # Global luxury theme, modal, and error styles
│   ├── js/
│   │   └── script.js           # Consolidated JavaScript functionality
│   └── images/                 # Optimized salon imagery and pricelists
│
└── README.md                   # Project documentation and changelog

---
## Installation / How to Run

Download or clone this repository.

Open the index.html file in any modern web browser.

No server setup or build process required (static HTML5/CSS3 site).

---

## Dependencies

Font Awesome
- for UI icons

Google Fonts
- for typography styling

## Usage Instructions

Edit index.html or pages/*.html files to update page content.

Modify assets/css/style.css to customize colors, fonts, or layout to add style and lifr to your website.

Maintain relative path linking for subpages (../assets/css/style.css).

---

## Changelog

v1.0.0 - Initial Release (2026-08-13)

    Added homepage (index.html)

    Created "About Us", "Services", "Enquiry", and "Contact" pages

    Added basic navigation bar and dark footer layout


v1.1.0 - Responsive & Styling Update (2026-09-16)

    Added CSS flexbox layouts for desktop, tablet, and mobile views

    Implemented gold theme (#ab930c) header with white link text

    Framed content sections with 2px solid gold borders

    Standardized image aspect ratios and form element styling

SEE WEBSITE RESPONSIVE DESIGN SNIPPETS:
./assets/images/

v1.2.0 - Advanced Interactivity & JavaScript Features (2026-11-03)
    Implemented custom JavaScript image lightbox modal for immediate on-page zooming and background click-to-close.

    Added dynamic client-side form validation with field-specific red error messages (`.field-error`).

    Added input protection to block numbers in name fields and letters in phone number fields.

    Integrated personalized user success greeting banners ("Thank you, [Name]!...") on valid form submissions.

    Added live table row filtering (search bar) on the Services page.

    Added dynamic user enhancements including collapsible FAQ accordions, a live timestamp, and a smooth-scroll "Back to Top" button.

    Consolidated all script event listeners to prevent execution conflicts 

---

## Improvements from part 1 and part 2 feedback

Fixed missing README documentation, layout wireframes, and content research notes.

fixed site map as well as of expected by feedback.

Corrected header layout: square logo aligned left, navigation links aligned right.

Standardized gold navigation bar (#ab930c) with crisp white text.

Updated complete footer across all pages with Magxaki (Gqeberha) location, contact details, operating hours, and slogan.

Applied relative pathing across root and subfolder structures.

Consolidated global CSS into a single stylesheet (assets/css/style.css).

Formatted service offerings into structured, readable HTML tables.

Refined and optimized responsive design layouts specifically for tablet and mobile viewports to meet all project criteria as feedback from part 2.

Fixed Navigation as of feedback of part 2.

---

## REFERENCES

1. W3C HTML Standard: World Wide Web Consortium (W3C). (2023). HTML5 Semantics and Structure Guidelines. https://www.w3.org/TR/html52/

2. MDN Flexbox Guide: Mozilla Developer Network. (2024). CSS Flexible Box Layout. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout

3. WebAIM Accessibility: Web Accessibility in Mind. (2023). Contrast and Color Accessibility (WCAG 2.1). https://webaim.org/articles/contrast/

4. Google Fonts System: Google Typography. (2024). Web Font Stacks and Ergonomics. https://fonts.google.com/

5. w3shcools:Web development.(2026).CSS Examples.https://www.w3schools.com/webdev/

6. FreeCodeCamp:Responsive web design certification.(2026).Html learning.https://www.freecodecamp.org/

7. MDN Web Docs: Mozilla. (2026). Client-side form validation. Mozilla Developer Network. https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation

8. MDN Web Docs: Mozilla. (2026). Using the DOM. Mozilla Developer Network. https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Using_the_DOM


9. JavaScript.info. (2026). Bubbling and capturing, Event handling and preventDefault. https://javascript.info/bubbling-and-capturing