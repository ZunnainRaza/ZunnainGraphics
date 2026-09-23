/* ==========================================================================
   ZUNNAIN RAZA - GRAPHIC DESIGNER
   COMPLETE SCRIPT.JS
   ========================================================================== */


/* ==========================================================================
   WEBSITE CONFIGURATION
   ========================================================================== */

const WHATSAPP_NUMBER = "919460072721";
const DEFAULT_INSTAGRAM = "CREATIVE_THRILLS.62";


/* ==========================================================================
   WHATSAPP FUNCTION
   ========================================================================== */

function openWhatsApp(context = "General Inquiry") {

    let message = "";


    /* --------------------------------------------------------------
       Default message
       -------------------------------------------------------------- */

    if (!context || context === "General Inquiry") {

        message =
            "Hello Zunnain! 👋\n\n" +
            "I am interested in your graphic design services.\n\n" +
            "Please share your services, pricing and details.";

    } else {

        message =
            "Hello Zunnain! 👋\n\n" +
            "I am interested in:\n" +
            `${context}\n\n` +
            "Please share the pricing and estimated delivery time.";

    }


    const encodedMessage =
        encodeURIComponent(message);


    const whatsappUrl =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;


    window.open(
        whatsappUrl,
        "_blank",
        "noopener,noreferrer"
    );

}


/* ==========================================================================
   INSTAGRAM FUNCTION
   ========================================================================== */

function openInstagram(username = DEFAULT_INSTAGRAM) {

    let cleanHandle =
        username || DEFAULT_INSTAGRAM;


    cleanHandle =
        cleanHandle
            .replace("@", "")
            .trim();


    const instagramUrl =
        `https://instagram.com/${cleanHandle}`;


    window.open(
        instagramUrl,
        "_blank",
        "noopener,noreferrer"
    );

}


/* ==========================================================================
   INSTAGRAM POPUP
   ========================================================================== */

function toggleInstagramMenu() {

    const popup =
        document.getElementById("instagramPopup");


    if (!popup) {
        return;
    }


    popup.classList.toggle("active");

}


/* Close Instagram popup when clicking outside */

document.addEventListener(
    "click",
    function (event) {

        const popup =
            document.getElementById("instagramPopup");

        const instagramContainer =
            document.getElementById("floatingInstagram");


        if (!popup || !instagramContainer) {
            return;
        }


        if (
            !instagramContainer.contains(event.target)
        ) {

            popup.classList.remove("active");

        }

    }
);


/* ==========================================================================
   MOBILE NAVIGATION
   ========================================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const menuToggle =
            document.getElementById("menuToggle");

        const navMenu =
            document.getElementById("navMenu");


        if (!menuToggle || !navMenu) {
            return;
        }


        /* ----------------------------------------------------------
           Toggle menu
           ---------------------------------------------------------- */

        menuToggle.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                navMenu.classList.toggle("active");

                updateMenuIcon();

            }
        );


        /* ----------------------------------------------------------
           Close menu after clicking navigation link
           ---------------------------------------------------------- */

        const navLinks =
            navMenu.querySelectorAll(".nav-link");


        navLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navMenu.classList.remove(
                            "active"
                        );

                        updateMenuIcon();

                    }
                );

            }
        );


        /* ----------------------------------------------------------
           Close menu after clicking mobile CTA
           ---------------------------------------------------------- */

        const mobileButtons =
            navMenu.querySelectorAll("button");


        mobileButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        setTimeout(
                            function () {

                                navMenu.classList.remove(
                                    "active"
                                );

                                updateMenuIcon();

                            },
                            100
                        );

                    }
                );

            }
        );


        /* ----------------------------------------------------------
           Change hamburger icon
           ---------------------------------------------------------- */

        function updateMenuIcon() {

            const icon =
                menuToggle.querySelector("i");


            if (!icon) {
                return;
            }


            if (
                navMenu.classList.contains("active")
            ) {

                icon.classList.remove(
                    "fa-bars-staggered"
                );

                icon.classList.add(
                    "fa-xmark"
                );

            } else {

                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars-staggered"
                );

            }

        }


        /* ----------------------------------------------------------
           Close menu when clicking outside
           ---------------------------------------------------------- */

        document.addEventListener(
            "click",
            function (event) {

                if (
                    !navMenu.contains(event.target) &&
                    !menuToggle.contains(event.target)
                ) {

                    navMenu.classList.remove(
                        "active"
                    );

                    updateMenuIcon();

                }

            }
        );

    }
);


/* ==========================================================================
   PORTFOLIO DATA
   ========================================================================== */

const portfolioData = [

    /* ==============================================================
       POSTERS
       ============================================================== */

    {
        src: "Poster1.jpeg",
        title: "Food Vally 50% Off Flyer",
        category: "Poster & Flyer"
    },

    {
        src: "Poster2.jpeg",
        title: "Free Local Pizza Delivery",
        category: "Poster & Flyer"
    },

    {
        src: "Poster3.jpeg",
        title: "Viral Chicken Wings Promo",
        category: "Poster & Flyer"
    },

    {
        src: "Poster4.jpeg",
        title: "Bee Nature 100% Pure Honey",
        category: "Poster & Flyer"
    },

    {
        src: "Poster5.jpeg",
        title: "Special Delicious Biryani 50% Save",
        category: "Poster & Flyer"
    },

    {
        src: "Poster6.jpeg",
        title: "Digital Marketing Agency Advertisement",
        category: "Poster & Flyer"
    },

    {
        src: "Poster7.jpeg",
        title: "Porsche 911 GT3 R Concept",
        category: "Poster & Flyer"
    },


    /* ==============================================================
       MENUS
       ============================================================== */

    {
        src: "Menu1.jpeg",
        title: "American Sweet Corn - Cover Page",
        category: "Menu Design"
    },

    {
        src: "Menu2.jpeg",
        title: "Seasonal Menu",
        category: "Menu Design"
    },

    {
        src: "Menu3.jpeg",
        title: "Chaat Menu",
        category: "Menu Design"
    },

    {
        src: "Menu4.jpeg",
        title: "Refreshments Menu",
        category: "Menu Design"
    },

    {
        src: "Menu5.jpeg",
        title: "Fast Food Menu",
        category: "Menu Design"
    },

    {
        src: "Menu6.jpeg",
        title: "Combos Menu",
        category: "Menu Design"
    },

    {
        src: "Menu7.jpeg",
        title: "Chef Specials Menu",
        category: "Menu Design"
    },

    {
        src: "Menu8.jpeg",
        title: "Hot & Cold Drinks",
        category: "Menu Design"
    },

    {
        src: "Menu9.jpeg",
        title: "Food Zone Board",
        category: "Menu Design"
    },

    {
        src: "Menu10.jpeg",
        title: "Full Spread Menu",
        category: "Menu Design"
    },

    {
        src: "Menu11.jpeg",
        title: "Wall Poster Menu",
        category: "Menu Design"
    },

    {
        src: "Menu12.jpeg",
        title: "Quick Counter Card",
        category: "Menu Design"
    },

    {
        src: "Menu13.jpeg",
        title: "American Sweet Corn - Master Rate & Price List",
        category: "Menu Design"
    },


    /* ==============================================================
       PACKAGING
       ============================================================== */

    {
        src: "PackagingDesignBox1.jpeg",
        title: "Infinity Machine Box Design",
        category: "Packaging Design"
    },

    {
        src: "PackagingDesignBox2.jpeg",
        title: "Panasonic LED Dura Saver 12W Box",
        category: "Packaging Design"
    },


    /* ==============================================================
       LOGOS
       ============================================================== */

    {
        src: "Logo1.jpeg",
        title: "Urban Scroll - 3D Gold Logo",
        category: "Logo Design"
    },

    {
        src: "Logo2.jpeg",
        title: "Urban Scroll - Flat Vector Logo",
        category: "Logo Design"
    },

    {
        src: "Logo3.jpeg",
        title: "Sarkar Travels Luxury Monogram",
        category: "Logo Design"
    }

];


/* ==========================================================================
   LIGHTBOX VARIABLES
   ========================================================================== */

let currentLightboxIndex = 0;

let touchStartX = 0;
let touchEndX = 0;


/* ==========================================================================
   GET LIGHTBOX ELEMENTS
   ========================================================================== */

function getLightboxElements() {

    return {

        modal:
            document.getElementById(
                "lightboxModal"
            ),

        image:
            document.getElementById(
                "lightboxImg"
            ),

        title:
            document.getElementById(
                "lightboxTitle"
            ),

        category:
            document.getElementById(
                "lightboxCategory"
            )

    };

}


/* ==========================================================================
   OPEN LIGHTBOX
   ========================================================================== */

function openLightbox(
    src,
    title = "Creative Design",
    category = "Portfolio"
) {

    const {
        modal,
        image,
        title: titleElement,
        category: categoryElement
    } = getLightboxElements();


    if (!modal || !image) {
        return;
    }


    /* ----------------------------------------------------------
       Find current image in portfolio data
       ---------------------------------------------------------- */

    const clickedIndex =
        portfolioData.findIndex(
            function (item) {

                return (
                    item.src.toLowerCase() ===
                    String(src).toLowerCase()
                );

            }
        );


    if (clickedIndex !== -1) {

        currentLightboxIndex =
            clickedIndex;

    }


    /* ----------------------------------------------------------
       Reset image styles
       ---------------------------------------------------------- */

    image.removeAttribute("width");
    image.removeAttribute("height");

    image.style.width = "auto";
    image.style.height = "auto";

    image.style.objectFit = "contain";

    image.style.opacity = "0";


    /* ----------------------------------------------------------
       Set image source
       ---------------------------------------------------------- */

    image.src = src;

    image.alt =
        title ||
        "Graphic Design Preview";


    /* ----------------------------------------------------------
       Set text
       ---------------------------------------------------------- */

    if (titleElement) {

        titleElement.textContent =
            title ||
            "Creative Design";

    }


    if (categoryElement) {

        categoryElement.textContent =
            category ||
            "Portfolio";

    }


    /* ----------------------------------------------------------
       Open modal
       ---------------------------------------------------------- */

    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "lightbox-open"
    );

    document.body.style.overflow =
        "hidden";


    /* ----------------------------------------------------------
       Make sure original image is loaded
       ---------------------------------------------------------- */

    const revealImage =
        function () {

            image.style.opacity = "1";

        };


    if (image.complete) {

        requestAnimationFrame(
            revealImage
        );

    } else {

        image.onload =
            revealImage;

    }

}


/* ==========================================================================
   CLOSE LIGHTBOX
   ========================================================================== */

function closeLightbox() {

    const {
        modal,
        image
    } = getLightboxElements();


    if (!modal) {
        return;
    }


    modal.classList.remove(
        "active"
    );

    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "lightbox-open"
    );

    document.body.style.overflow =
        "";


    /* ----------------------------------------------------------
       Clear image after transition
       ---------------------------------------------------------- */

    setTimeout(
        function () {

            if (
                !modal.classList.contains(
                    "active"
                )
            ) {

                if (image) {

                    image.removeAttribute(
                        "src"
                    );

                    image.style.opacity =
                        "1";

                }

            }

        },
        260
    );

}


/* ==========================================================================
   UPDATE LIGHTBOX IMAGE
   ========================================================================== */

function updateLightboxContent() {

    const item =
        portfolioData[
            currentLightboxIndex
        ];


    const {
        image,
        title,
        category
    } = getLightboxElements();


    if (!item || !image) {
        return;
    }


    /* ----------------------------------------------------------
       Fade out current image
       ---------------------------------------------------------- */

    image.style.opacity = "0";


    /* ----------------------------------------------------------
       Reset image sizing
       ---------------------------------------------------------- */

    image.removeAttribute("width");
    image.removeAttribute("height");

    image.style.width = "auto";
    image.style.height = "auto";

    image.style.objectFit =
        "contain";


    /* ----------------------------------------------------------
       Update information
       ---------------------------------------------------------- */

    if (title) {

        title.textContent =
            item.title;

    }


    if (category) {

        category.textContent =
            item.category;

    }


    /* ----------------------------------------------------------
       Load next image
       ---------------------------------------------------------- */

    image.onload =
        function () {

            image.style.opacity =
                "1";

        };


    image.src =
        item.src;

    image.alt =
        item.title;


    /* ----------------------------------------------------------
       Cached image handling
       ---------------------------------------------------------- */

    if (image.complete) {

        requestAnimationFrame(
            function () {

                image.style.opacity =
                    "1";

            }
        );

    }

}


/* ==========================================================================
   PREVIOUS LIGHTBOX IMAGE
   ========================================================================== */

function prevLightboxImage() {

    if (!portfolioData.length) {
        return;
    }


    currentLightboxIndex =
        (
            currentLightboxIndex -
            1 +
            portfolioData.length
        ) %
        portfolioData.length;


    updateLightboxContent();

}


/* ==========================================================================
   NEXT LIGHTBOX IMAGE
   ========================================================================== */

function nextLightboxImage() {

    if (!portfolioData.length) {
        return;
    }


    currentLightboxIndex =
        (
            currentLightboxIndex +
            1
        ) %
        portfolioData.length;


    updateLightboxContent();

}


/* ==========================================================================
   ORDER CURRENT PROJECT
   ========================================================================== */

function orderLightboxProject() {

    const item =
        portfolioData[
            currentLightboxIndex
        ];


    if (item) {

        openWhatsApp(
            `Portfolio Reference: ${item.title} (${item.category})`
        );

    } else {

        openWhatsApp(
            "Portfolio Image Inquiry"
        );

    }

}


/* ==========================================================================
   LIGHTBOX INITIALIZATION
   ========================================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const {
            modal
        } = getLightboxElements();


        if (!modal) {
            return;
        }


        /* ----------------------------------------------------------
           Close when clicking backdrop
           ---------------------------------------------------------- */

        const backdrop =
            modal.querySelector(
                ".lightbox-backdrop"
            );


        if (backdrop) {

            backdrop.addEventListener(
                "click",
                function () {

                    closeLightbox();

                }
            );

        }


        /* ----------------------------------------------------------
           Stop content click from reaching backdrop
           ---------------------------------------------------------- */

        const content =
            modal.querySelector(
                ".lightbox-content"
            );


        if (content) {

            content.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();

                }
            );

        }

    }
);


/* ==========================================================================
   KEYBOARD CONTROLS
   ========================================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        const {
            modal
        } = getLightboxElements();


        if (
            !modal ||
            !modal.classList.contains(
                "active"
            )
        ) {

            return;

        }


        switch (event.key) {

            case "Escape":

                event.preventDefault();

                closeLightbox();

                break;


            case "ArrowLeft":

                event.preventDefault();

                prevLightboxImage();

                break;


            case "ArrowRight":

                event.preventDefault();

                nextLightboxImage();

                break;

        }

    }
);


/* ==========================================================================
   LIGHTBOX TOUCH SWIPE
   ========================================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const {
            modal
        } = getLightboxElements();


        if (!modal) {
            return;
        }


        modal.addEventListener(
            "touchstart",
            function (event) {

                if (
                    !event.changedTouches.length
                ) {

                    return;

                }


                touchStartX =
                    event.changedTouches[0]
                        .screenX;

            },
            {
                passive: true
            }
        );


        modal.addEventListener(
            "touchend",
            function (event) {

                if (
                    !event.changedTouches.length
                ) {

                    return;

                }


                touchEndX =
                    event.changedTouches[0]
                        .screenX;


                handleLightboxSwipe();

            },
            {
                passive: true
            }
        );

    }
);


/* ==========================================================================
   HANDLE LIGHTBOX SWIPE
   ========================================================================== */

function handleLightboxSwipe() {

    const threshold = 45;


    const distance =
        touchEndX -
        touchStartX;


    if (
        Math.abs(distance) <
        threshold
    ) {

        return;

    }


    if (distance < 0) {

        nextLightboxImage();

    } else {

        prevLightboxImage();

    }

}


/* ==========================================================================
   GALLERY DRAG SCROLL
   ========================================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const galleries =
            document.querySelectorAll(
                ".service-gallery"
            );


        galleries.forEach(
            function (gallery) {

                let isDragging = false;

                let startX = 0;

                let initialScrollLeft = 0;


                /* --------------------------------------------------
                   Desktop mouse drag
                   -------------------------------------------------- */

                gallery.addEventListener(
                    "mousedown",
                    function (event) {

                        isDragging = true;

                        startX =
                            event.pageX -
                            gallery.offsetLeft;

                        initialScrollLeft =
                            gallery.scrollLeft;


                        gallery.style.cursor =
                            "grabbing";

                    }
                );


                gallery.addEventListener(
                    "mouseleave",
                    function () {

                        isDragging = false;

                        gallery.style.cursor =
                            "";

                    }
                );


                gallery.addEventListener(
                    "mouseup",
                    function () {

                        isDragging = false;

                        gallery.style.cursor =
                            "";

                    }
                );


                gallery.addEventListener(
                    "mousemove",
                    function (event) {

                        if (!isDragging) {
                            return;
                        }


                        event.preventDefault();


                        const currentX =
                            event.pageX -
                            gallery.offsetLeft;


                        const distance =
                            (
                                currentX -
                                startX
                            ) * 1.25;


                        gallery.scrollLeft =
                            initialScrollLeft -
                            distance;

                    }
                );

            }
        );

    }
);


/* ==========================================================================
   SMOOTH INTERNAL NAVIGATION
   ========================================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const internalLinks =
            document.querySelectorAll(
                'a[href^="#"]'
            );


        internalLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function (event) {

                        const targetId =
                            this.getAttribute(
                                "href"
                            );


                        if (
                            !targetId ||
                            targetId === "#"
                        ) {

                            return;

                        }


                        const target =
                            document.querySelector(
                                targetId
                            );


                        if (!target) {

                            return;

                        }


                        event.preventDefault();


                        const navbar =
                            document.querySelector(
                                ".navbar"
                            );


                        const navbarHeight =
                            navbar
                                ? navbar.offsetHeight
                                : 0;


                        const targetTop =
                            target.getBoundingClientRect()
                                .top +
                            window.scrollY -
                            navbarHeight -
                            12;


                        window.scrollTo({

                            top:
                                Math.max(
                                    0,
                                    targetTop
                                ),

                            behavior: "smooth"

                        });

                    }
                );

            }
        );

    }
);


/* ==========================================================================
   ACTIVE NAVIGATION LINK
   ========================================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const navLinks =
            document.querySelectorAll(
                ".nav-link"
            );


        if (!navLinks.length) {
            return;
        }


        const sections =
            document.querySelectorAll(
                "section[id]"
            );


        if (!sections.length) {
            return;
        }


        function updateActiveNavigation() {

            const scrollPoint =
                window.scrollY +
                150;


            let currentSection =
                "home";


            sections.forEach(
                function (section) {

                    const sectionTop =
                        section.offsetTop;

                    const sectionHeight =
                        section.offsetHeight;


                    if (
                        scrollPoint >=
                            sectionTop &&
                        scrollPoint <
                            sectionTop +
                            sectionHeight
                    ) {

                        currentSection =
                            section.id;

                    }

                }
            );


            navLinks.forEach(
                function (link) {

                    const href =
                        link.getAttribute(
                            "href"
                        );


                    link.classList.remove(
                        "active"
                    );


                    if (
                        href ===
                        `#${currentSection}`
                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                }
            );

        }


        window.addEventListener(
            "scroll",
            updateActiveNavigation,
            {
                passive: true
            }
        );


        updateActiveNavigation();

    }
);


/* ==========================================================================
   SCROLL REVEAL ANIMATION
   ========================================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const elements =
            document.querySelectorAll(
                ".service-box, " +
                ".feature-box, " +
                ".qr-card, " +
                ".contact-info-card"
            );


        if (!elements.length) {
            return;
        }


        /* ----------------------------------------------------------
           Initial state
           ---------------------------------------------------------- */

        elements.forEach(
            function (element) {

                element.style.opacity =
                    "0";

                element.style.transform =
                    "translateY(25px)";

                element.style.transition =
                    "opacity .65s ease, transform .65s ease";

            }
        );


        /* ----------------------------------------------------------
           Browser without IntersectionObserver
           ---------------------------------------------------------- */

        if (
            !("IntersectionObserver" in window)
        ) {

            elements.forEach(
                function (element) {

                    element.style.opacity =
                        "1";

                    element.style.transform =
                        "translateY(0)";

                }
            );

            return;

        }


        /* ----------------------------------------------------------
           Observer
           ---------------------------------------------------------- */

        const observer =
            new IntersectionObserver(
                function (
                    entries,
                    observerInstance
                ) {

                    entries.forEach(
                        function (entry) {

                            if (
                                !entry.isIntersecting
                            ) {

                                return;

                            }


                            entry.target.style.opacity =
                                "1";


                            entry.target.style.transform =
                                "translateY(0)";


                            observerInstance.unobserve(
                                entry.target
                            );

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        elements.forEach(
            function (element) {

                observer.observe(
                    element
                );

            }
        );

    }
);


/* ==========================================================================
   IMAGE ERROR HANDLING
   ========================================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const images =
            document.querySelectorAll(
                "img"
            );


        images.forEach(
            function (image) {

                image.addEventListener(
                    "error",
                    function () {

                        image.classList.add(
                            "image-load-error"
                        );


                        console.warn(
                            "Image could not be loaded:",
                            image.src
                        );

                    }
                );

            }
        );

    }
);


/* ==========================================================================
   DISABLE DRAGGING OF LIGHTBOX IMAGE
   ========================================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const image =
            document.getElementById(
                "lightboxImg"
            );


        if (!image) {
            return;
        }


        image.addEventListener(
            "dragstart",
            function (event) {

                event.preventDefault();

            }
        );

    }
);


/* ==========================================================================
   CLOSE INSTAGRAM POPUP WITH ESCAPE
   ========================================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key !== "Escape"
        ) {

            return;

        }


        const popup =
            document.getElementById(
                "instagramPopup"
            );


        if (popup) {

            popup.classList.remove(
                "active"
            );

        }

    }
);


/* ==========================================================================
   HANDLE WINDOW RESIZE
   ========================================================================== */

let resizeTimer;


window.addEventListener(
    "resize",
    function () {

        clearTimeout(
            resizeTimer
        );


        resizeTimer =
            setTimeout(
                function () {

                    /*
                       Close mobile menu if desktop
                       width becomes active.
                    */

                    if (
                        window.innerWidth >
                        768
                    ) {

                        const navMenu =
                            document.getElementById(
                                "navMenu"
                            );


                        const menuToggle =
                            document.getElementById(
                                "menuToggle"
                            );


                        if (navMenu) {

                            navMenu.classList.remove(
                                "active"
                            );

                        }


                        if (menuToggle) {

                            const icon =
                                menuToggle.querySelector(
                                    "i"
                                );


                            if (icon) {

                                icon.classList.remove(
                                    "fa-xmark"
                                );

                                icon.classList.add(
                                    "fa-bars-staggered"
                                );

                            }

                        }

                    }

                },
                150
            );

    }
);


/* ==========================================================================
   PREVENT SPACE / ENTER FROM ACCIDENTALLY TRIGGERING
   ========================================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        const activeElement =
            document.activeElement;


        /*
           Keep normal keyboard behaviour for
           inputs, textareas and buttons.
        */

        if (
            activeElement &&
            (
                activeElement.tagName === "INPUT" ||
                activeElement.tagName === "TEXTAREA" ||
                activeElement.tagName === "BUTTON"
            )
        ) {

            return;

        }

    }
);


/* ==========================================================================
   PAGE LOAD
   ========================================================================== */

window.addEventListener(
    "load",
    function () {

        document.body.classList.add(
            "page-loaded"
        );


        console.log(
            "Zunnain Raza Graphic Designer Portfolio loaded successfully."
        );

    }
);