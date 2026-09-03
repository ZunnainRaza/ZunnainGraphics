/**
 * ==========================================================================
 * ZUNNAIN RAZA - GRAPHIC DESIGNER PORTFOLIO JAVASCRIPT
 * Features: WhatsApp Custom Messaging, Instagram Landing, Portfolio Filtering,
 * Fullscreen Lightbox Modal, Interactive Project Estimator & Mobile Navigation.
 * ==========================================================================
 */

const WHATSAPP_NUMBER = "919460072721";
const DEFAULT_INSTAGRAM = "CREATIVE_THRILLS.62";

/**
 * Open WhatsApp with Context-Aware Pre-filled Messages
 * @param {string} context - The context or service name triggering the chat
 */
function openWhatsApp(context) {
    let message = "";

    if (!context) {
        message = "Hello Zunnain! I visited your website and would like to connect for a graphic design project.";
    } else if (context.includes("Poster") || context.includes("Menu") || context.includes("Packaging") || context.includes("Logo")) {
        message = `Hello Zunnain! I want to order/inquire about: *${context}*. Please share pricing and timelines!`;
    } else {
        message = `Hello Zunnain! Reaching out regarding: *${context}*. Let's discuss!`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

/**
 * Open Instagram Profile
 * @param {string} username - Specific Instagram handle (default: CREATIVE_THRILLS.62)
 */
function openInstagram(username) {
    const handle = username || DEFAULT_INSTAGRAM;
    const cleanHandle = handle.replace('@', '');
    const instagramUrl = `https://instagram.com/${cleanHandle}`;
    window.open(instagramUrl, '_blank');
}

/**
 * Toggle Floating Instagram Menu Popover
 */
function toggleInstagramMenu() {
    const popup = document.getElementById("instagramPopup");
    if (popup) {
        popup.classList.toggle("active");
    }
}

// Close Instagram Popover when clicked outside
document.addEventListener("click", (e) => {
    const igContainer = document.getElementById("floatingInstagram");
    const popup = document.getElementById("instagramPopup");
    if (igContainer && popup && !igContainer.contains(e.target)) {
        popup.classList.remove("active");
    }
});

/**
 * Mobile Navigation Drawer Toggle
 */
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            const icon = menuToggle.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-bars-staggered");
                icon.classList.toggle("fa-xmark");
            }
        });

        // Close menu on navigation link click
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("open");
                const icon = menuToggle.querySelector("i");
                if (icon) {
                    icon.classList.add("fa-bars-staggered");
                    icon.classList.remove("fa-xmark");
                }
            });
        });
    }
});

/**
 * ==========================================================================
 * PORTFOLIO FILTERING SYSTEM
 * ==========================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    if (!filterButtons.length || !portfolioItems.length) return;

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            portfolioItems.forEach(item => {
                const category = item.getAttribute("data-category");

                if (filterValue === "all" || category === filterValue) {
                    item.classList.remove("hide");
                    item.style.opacity = "0";
                    item.style.transform = "scale(0.95)";
                    setTimeout(() => {
                        item.style.opacity = "1";
                        item.style.transform = "scale(1)";
                    }, 50);
                } else {
                    item.classList.add("hide");
                }
            });
        });
    });
});

/**
 * ==========================================================================
 * FULLSCREEN LIGHTBOX MODAL SYSTEM
 * ==========================================================================
 */
const portfolioData = [
    { src: "Poster1.jpeg", title: "Food Vally 50% Off Restaurant Flyer", category: "Poster & Flyer" },
    { src: "Poster2.jpeg", title: "Free Local Pizza Delivery Marketing Poster", category: "Poster & Flyer" },
    { src: "Poster3.jpeg", title: "Special Viral Chicken Wings Promo Poster", category: "Poster & Flyer" },
    { src: "Poster4.jpeg", title: "Bee Nature Sweet Harvest 100% Pure Honey Banner", category: "Poster & Flyer" },
    { src: "Poster5.jpeg", title: "Special Delicious Biryani 50% Save Banner", category: "Poster & Flyer" },
    { src: "Poster6.jpeg", title: "Digital Marketing Agency Commercial Ad Poster", category: "Poster & Flyer" },
    { src: "Poster7.jpeg", title: "Porsche 911 GT3 R Minimalist Concept Poster", category: "Poster & Flyer" },
    { src: "Logo1.jpeg", title: "Urban Scroll (3D Gold Luxury Identity)", category: "Brand Identity & Logo" },
    { src: "Logo2.jpeg", title: "Urban Scroll (Flat Minimalist Vector)", category: "Brand Identity & Logo" },
    { src: "Logo3.jpeg", title: "Sarkar Travels Luxury Monogram Brandmark", category: "Brand Identity & Logo" },
    { src: "PackagingDesignBox1.jpeg", title: "Infinity Machine Box Die-cut Packaging", category: "Packaging Box" },
    { src: "PackagingDesignBox2.jpeg", title: "Panasonic LED Dura Saver 12W Box Design", category: "Packaging Box" },
    { src: "Menu1.jpeg", title: "American Sweet Corn - Cover Page Menu", category: "Shop Menu" },
    { src: "Menu2.jpeg", title: "American Sweet Corn - Seasonal Specials Menu", category: "Shop Menu" },
    { src: "Menu3.jpeg", title: "American Sweet Corn - Chaat & Snacks Menu", category: "Shop Menu" },
    { src: "Menu4.jpeg", title: "American Sweet Corn - Refreshments & Drinks", category: "Shop Menu" },
    { src: "Menu5.jpeg", title: "American Sweet Corn - Fast Food Menu Card", category: "Shop Menu" },
    { src: "Menu6.jpeg", title: "American Sweet Corn - Combo Offers Card", category: "Shop Menu" },
    { src: "Menu7.jpeg", title: "American Sweet Corn - Chef Specials Menu", category: "Shop Menu" },
    { src: "Menu8.jpeg", title: "American Sweet Corn - Hot & Cold Drinks Menu", category: "Shop Menu" },
    { src: "Menu9.jpeg", title: "American Sweet Corn - Food Zone Menu Board", category: "Shop Menu" },
    { src: "Menu10.jpeg", title: "American Sweet Corn - Full Spread Table Menu", category: "Shop Menu" },
    { src: "Menu11.jpeg", title: "American Sweet Corn - Wall Poster Menu Board", category: "Shop Menu" },
    { src: "Menu12.jpeg", title: "American Sweet Corn - Quick Counter Rate Card", category: "Shop Menu" },
    { src: "Menu13.jpeg", title: "American Sweet Corn - Master Rate & Price List", category: "Shop Menu" }
];

let currentLightboxIndex = 0;

/**
 * Open Lightbox Modal with selected image
 */
function openLightbox(src, title, category) {
    const modal = document.getElementById("lightboxModal");
    const img = document.getElementById("lightboxImg");
    const titleEl = document.getElementById("lightboxTitle");
    const categoryEl = document.getElementById("lightboxCategory");

    // Find index in array
    const index = portfolioData.findIndex(item => item.src.toLowerCase() === src.toLowerCase());
    if (index !== -1) {
        currentLightboxIndex = index;
    }

    if (modal && img) {
        img.src = src;
        if (titleEl) titleEl.textContent = title || "Creative Design Preview";
        if (categoryEl) categoryEl.textContent = category || "Portfolio";
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden"; // Lock background scroll
    }
}

/**
 * Close Lightbox Modal
 */
function closeLightbox() {
    const modal = document.getElementById("lightboxModal");
    if (modal) {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "auto";
    }
}

/**
 * Display Previous Image in Lightbox
 */
function prevLightboxImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + portfolioData.length) % portfolioData.length;
    updateLightboxContent();
}

/**
 * Display Next Image in Lightbox
 */
function nextLightboxImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % portfolioData.length;
    updateLightboxContent();
}

/**
 * Update content in the active lightbox
 */
function updateLightboxContent() {
    const item = portfolioData[currentLightboxIndex];
    const img = document.getElementById("lightboxImg");
    const titleEl = document.getElementById("lightboxTitle");
    const categoryEl = document.getElementById("lightboxCategory");

    if (img && item) {
        img.style.opacity = "0.4";
        setTimeout(() => {
            img.src = item.src;
            if (titleEl) titleEl.textContent = item.title;
            if (categoryEl) categoryEl.textContent = item.category;
            img.style.opacity = "1";
        }, 120);
    }
}

/**
 * Trigger WhatsApp Inquiry from within Lightbox for current image
 */
function orderLightboxProject() {
    const item = portfolioData[currentLightboxIndex];
    if (item) {
        openWhatsApp(`Portfolio Reference: ${item.title} (${item.category})`);
    } else {
        openWhatsApp("Portfolio Image Inquiry");
    }
}

// Lightbox Keyboard Navigation
document.addEventListener("keydown", (e) => {
    const modal = document.getElementById("lightboxModal");
    if (!modal || !modal.classList.contains("active")) return;

    if (e.key === "Escape") {
        closeLightbox();
    } else if (e.key === "ArrowLeft") {
        prevLightboxImage();
    } else if (e.key === "ArrowRight") {
        nextLightboxImage();
    }
});

/**
 * ==========================================================================
 * INTERACTIVE PROJECT BRIEF BUILDER & WHATSAPP DISPATCH
 * ==========================================================================
 */
let estimatorState = {
    service: "Poster / Flyer Design",
    speed: "Standard (48-72 Hours)",
    notes: ""
};

document.addEventListener("DOMContentLoaded", () => {
    const serviceButtons = document.querySelectorAll("#serviceOptions .pill-btn");
    const speedButtons = document.querySelectorAll("#speedOptions .pill-btn");
    const notesInput = document.getElementById("projectNotes");

    // Service Pill Click Handlers
    serviceButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            serviceButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            estimatorState.service = btn.getAttribute("data-service");
            updateEstimatorSummary();
        });
    });

    // Speed Pill Click Handlers
    speedButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            speedButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            estimatorState.speed = btn.getAttribute("data-speed");
            updateEstimatorSummary();
        });
    });

    // Notes Input Handler
    if (notesInput) {
        notesInput.addEventListener("input", (e) => {
            estimatorState.notes = e.target.value.trim();
        });
    }

    updateEstimatorSummary();
});

function updateEstimatorSummary() {
    const summaryServiceEl = document.getElementById("summaryService");
    const summarySpeedEl = document.getElementById("summarySpeed");

    if (summaryServiceEl) summaryServiceEl.textContent = estimatorState.service;
    if (summarySpeedEl) summarySpeedEl.textContent = estimatorState.speed;
}

/**
 * Dispatch Formatted Brief Directly to WhatsApp without hardcoded price
 */
function dispatchWhatsAppBrief() {
    const notesInput = document.getElementById("projectNotes");
    const userNotes = notesInput ? notesInput.value.trim() : "";

    let briefMessage = `*🚀 NEW DESIGN PROJECT INQUIRY — ZUNNAIN RAZA*\n\n`;
    briefMessage += `📌 *Category:* ${estimatorState.service}\n`;
    briefMessage += `⏱️ *Timeline Required:* ${estimatorState.speed}\n`;

    if (userNotes) {
        briefMessage += `📝 *Project Details / Brand:* ${userNotes}\n`;
    }

    briefMessage += `\n_Hi Zunnain, I created this project brief on your website and would like to discuss pricing and get started!_`;

    const encodedBrief = encodeURIComponent(briefMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedBrief}`;
    window.open(whatsappUrl, '_blank');
}

/**
 * ==========================================================================
 * SCROLL REVEAL & INTERSECTION OBSERVER ANIMATIONS
 * ==========================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Intersection Observer for fade-in animations
    const revealElements = document.querySelectorAll(".service-card, .stat-card, .qr-card, .feature-box, .portfolio-card");
    
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    obs.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -40px 0px"
        });

        revealElements.forEach(el => {
            el.style.opacity = "0";
            el.style.transform = "translateY(25px)";
            el.style.transition = "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
            observer.observe(el);
        });
    }
});
