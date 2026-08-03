/**
 * Component.js - Reusable Navbar, Footer, and Recent Events Component for RK Event Jhansi Website
 * Usage:
 *   1. Include script: <script src="js/Component.js"></script>
 *   2. Simply call in JS:
 *        new Component().render();
 *      or:
 *        Component.init();
 *      or render specific component:
 *        new Component().renderRecentEvents('#recent-events-container');
 */

class Component {
    constructor(options = {}) {
        this.basePath = options.basePath !== undefined ? options.basePath : this.detectBasePath();
        this.activePage = options.activePage || this.detectActivePage();
    }

    static init(options = {}) {
        const comp = new Component(options);
        comp.render();
        return comp;
    }

    detectBasePath() {
        const path = window.location.pathname;
        if (path.includes('/services/')) {
            return '../../';
        }
        return '';
    }

    detectActivePage() {
        const path = window.location.pathname.toLowerCase();
        if (path.includes('about')) return 'about';
        if (path.includes('service')) return 'services';
        if (path.includes('gallery')) return 'gallery';
        if (path.includes('contact')) return 'contact';
        return 'home';
    }

    getNavbarHTML() {
        const bp = this.basePath;
        const ap = this.activePage;

        return `
    <nav class="navbar navbar-expand-lg navbar-premium position-absolute w-100" style="z-index: 1030;">
        <div class="container">
            <a class="navbar-brand" href="${bp}index.html">
                <img src="${bp}assets/images/logo.png" alt="RK Event Jhansi Logo"
                    onerror="this.src='https://placehold.co/200x60/ffffff/2c2c2c?text=RK+EVENT'">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa-solid fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item">
                        <a class="nav-link ${ap === 'home' ? 'active' : ''}" href="${bp}index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${ap === 'about' ? 'active' : ''}" href="${bp}about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${ap === 'services' ? 'active' : ''}" href="${bp}index.html#services">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${ap === 'gallery' ? 'active' : ''}" href="${bp}gallery.html">Gallery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${ap === 'contact' ? 'active' : ''}" href="${bp}contact.html">Contact</a>
                    </li>
                    <li class="nav-item ms-lg-4 mt-3 mt-lg-0">
                        <a href="tel:+919369649071" class="btn-premium">Enquire Now</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`;
    }

    getRecentEventsHTML(reels = null) {
        const defaultReels = reels || [
            "https://www.instagram.com/reel/Da2v1AnBqX1/embed/",
            "https://www.instagram.com/reel/Da0KKjhhtSz/embed/",
            "https://www.instagram.com/reel/Da5URt2hEzf/embed/",
            "https://www.instagram.com/reel/Da7Du2_RU4j/embed/",
            "https://www.instagram.com/reel/Da9lIsMxIMh/embed/",
            "https://www.instagram.com/reel/DbGVKk3B1tE/embed/"
        ];

        const reelCards = defaultReels.map(url => `
                <div class="col-6 col-md-4 col-lg-2">
                    <div class="recent-event-card border-0">
                        <iframe loading="lazy" src="${url}" frameborder="0" scrolling="no"
                            allowtransparency="true" class="ig-iframe"></iframe>
                    </div>
                </div>`).join('');

        return `
    <section class="recent-events-section">
        <div class="container-fluid px-lg-5">
            <div class="text-center mb-4" data-aos="fade-up">
                <span class="ach-tag">OUR RECENT EVENTS</span>
                <h2 class="ach-heading">A Glimpse of Our Work</h2>
                <div class="ach-divider-wrap">
                    <div class="ach-line"></div>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <div class="ach-line"></div>
                </div>
            </div>

            <div class="row g-3 justify-content-center px-2" data-aos="fade-up" data-aos-delay="100">
                ${reelCards}
            </div>

            <div class="text-center mt-5" data-aos="fade-up" data-aos-delay="200">
                <a href="https://www.instagram.com/rkeventjhansi?igsh=OXowenpkeXlrejg5" target="_blank"
                    class="btn-gallery">
                    Our Instagram Page <i class="fa-solid fa-arrow-right ms-2"></i>
                </a>
            </div>
        </div>
    </section>`;
    }

    getFooterHTML() {
        const bp = this.basePath;

        return `
    <footer class="footer">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                    <img src="${bp}assets/images/logo.png" alt="RK Event Logo" class="mb-4" style="height: 50px;"
                        onerror="this.style.display='none'; document.getElementById('footerTextLogo').style.display='block';">
                    <h3 id="footerTextLogo" class="footer-title" style="display:none;">RK EVENT JHANSI</h3>
                    <p class="footer-text mt-3" style="max-width: 300px;">
                        The finest event management and photography agency in Jhansi. We bring your dreams to life with
                        elegant designs.
                    </p>
                    <div class="social-links">
                        <a href="https://www.instagram.com/rkeventjhansi" target="_blank" aria-label="Instagram"><i
                                class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.facebook.com/share/1DXTuvEnho/" target="_blank" aria-label="Facebook"><i
                                class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://wa.me/919369649071" target="_blank" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <h4 class="footer-title">Company</h4>
                    <ul class="footer-links">
                        <li><a href="${bp}about.html">About Us</a></li>
                        <li><a href="${bp}services.html">Services</a></li>
                        <li><a href="${bp}gallery.html">Portfolio</a></li>
                        <li><a href="${bp}contact.html">Contact</a></li>
                    </ul>
                </div>

                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h4 class="footer-title">Services</h4>
                    <ul class="footer-links">
                        <li><a href="${bp}index.html#services">Wedding Planning</a></li>
                        <li><a href="${bp}index.html#services">Photography & Video</a></li>
                        <li><a href="${bp}index.html#services">Entertainment</a></li>
                        <li><a href="${bp}index.html#services">Luxury Decor</a></li>
                    </ul>
                </div>

                <div class="col-lg-3">
                    <h4 class="footer-title">Visit Us</h4>
                    <ul class="footer-links">
                        <li class="mb-3">
                            <span class="d-block text-main fw-bold" style="font-size: 0.85rem;">MAIN BRANCH</span>
                            <span>Jeevan Shah Tiraha, Jhansi</span>
                        </li>
                        <li class="mb-3">
                            <span class="d-block text-main fw-bold" style="font-size: 0.85rem;">SECOND BRANCH</span>
                            <span>In Front of PNB, Rajgarh, Jhansi</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center">
                <p class="mb-2 mb-md-0">&copy; 2024 RK Event Jhansi. All Rights Reserved.</p>
                <div class="legal-links">
                    <a href="${bp}privacy-policy.html" class="text-muted text-decoration-none me-3">Privacy Policy</a>
                    <a href="${bp}terms.html" class="text-muted text-decoration-none">Terms</a>
                </div>
            </div>
        </div>
    </footer>`;
    }

    renderNavbar(targetSelector = '#navbar-container') {
        const container = document.querySelector(targetSelector) || document.querySelector('header') || document.querySelector('.navbar-placeholder');
        if (container) {
            container.outerHTML = this.getNavbarHTML();
        } else {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = this.getNavbarHTML();
            document.body.insertBefore(tempDiv.firstElementChild, document.body.firstChild);
        }
    }

    renderRecentEvents(targetSelector = '#recent-events-container') {
        const container = document.querySelector(targetSelector) || document.querySelector('.recent-events-placeholder');
        if (container) {
            container.outerHTML = this.getRecentEventsHTML();
        }
    }

    renderFooter(targetSelector = '#footer-container') {
        const container = document.querySelector(targetSelector) || document.querySelector('.footer-placeholder');
        if (container) {
            container.outerHTML = this.getFooterHTML();
        } else {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = this.getFooterHTML();
            document.body.appendChild(tempDiv.firstElementChild);
        }
    }

    render() {
        this.renderNavbar();
        this.renderRecentEvents();
        this.renderFooter();
    }
}

// Support alias classes for flexible syntax:
class Navbar {
    constructor(options) {
        return new Component(options).getNavbarHTML();
    }
}

class RecentEvents {
    constructor(reels) {
        return new Component().getRecentEventsHTML(reels);
    }
}

class Footer {
    constructor(options) {
        return new Component(options).getFooterHTML();
    }
}

// Auto-run if placeholder containers or data-component attributes exist
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('#navbar-container') || document.querySelector('#recent-events-container') || document.querySelector('#footer-container') || document.querySelector('[data-component]')) {
        Component.init();
    }
});
