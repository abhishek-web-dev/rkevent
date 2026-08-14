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
        if (path.includes('service') || path.includes('decoration') || path.includes('photography')) return 'services';
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
                        <a class="nav-link ${ap === 'services' ? 'active' : ''}" href="${bp}services.html">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${ap === 'gallery' ? 'active' : ''}" href="${bp}gallery.html">Gallery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${ap === 'contact' ? 'active' : ''}" href="${bp}contact.html">Contact</a>
                    </li>
                    <li class="nav-item ms-lg-4 mt-3 mt-lg-0">
                        <a href="#" class="btn-premium" data-bs-toggle="modal" data-bs-target="#enquiryModal">Enquire Now</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`;
    }

    getRecentEventsHTML(reels = null) {
        const defaultReels = reels || [
            "https://www.instagram.com/reel/Da2v1AnBqX1/embed/?hidecaption=true",
            "https://www.instagram.com/reel/Da0KKjhhtSz/embed/?hidecaption=true",
            "https://www.instagram.com/reel/Da5URt2hEzf/embed/?hidecaption=true",
            "https://www.instagram.com/reel/Da7Du2_RU4j/embed/?hidecaption=true",
            "https://www.instagram.com/reel/Da9lIsMxIMh/embed/?hidecaption=true",
            "https://www.instagram.com/reel/DbGVKk3B1tE/embed/?hidecaption=true"
        ];

        const swiperSlides = defaultReels.map(url => `
                        <div class="swiper-slide">
                            <div class="recent-event-card border-0 shadow-lg">
                                <iframe loading="lazy" src="${url}" frameborder="0" scrolling="no"
                                    allowtransparency="true" class="ig-iframe"></iframe>
                            </div>
                        </div>`).join('');

        return `
    <section class="recent-events-section">
        <div class="container-fluid px-lg-5">
            <div class="text-center mb-4" data-aos="fade-up">
                <span class="ach-tag text-gold">OUR RECENT EVENTS</span>
                <h2 class="ach-heading text-white">A Glimpse of Our Work</h2>
                <div class="ach-divider-wrap justify-content-center">
                    <div class="ach-line" style="background-color: #d4af37;"></div>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <div class="ach-line" style="background-color: #d4af37;"></div>
                </div>
            </div>

            <div class="recent-events-wrapper position-relative px-4 px-md-5">
                <div class="swiper recent-events-swiper" data-aos="fade-up" data-aos-delay="100" style="padding: 20px 0;">
                    <div class="swiper-wrapper">
                        ${swiperSlides}
                    </div>
                </div>
                <!-- Custom Navigation Arrows -->
                <div class="swiper-button-prev recent-prev"></div>
                <div class="swiper-button-next recent-next"></div>
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
    <footer class="site-footer">
        <div class="container">
            <div class="row gy-4">
                <!-- Column 1: Logo & About -->
                <div class="col-lg-3 col-md-6 pe-lg-4">
                    <a href="${bp}index.html" class="footer-logo mb-3 d-inline-block">
                        <img src="${bp}assets/images/logo.png" alt="RK Events" class="img-fluid" style="max-width: 150px;">
                    </a>
                    <p class="footer-about-text">We create unforgettable celebrations with creativity, passion and perfect execution.</p>
                    <div class="footer-social-links mt-4">
                        <a href="https://www.facebook.com/share/1PyEXy5nie/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://youtube.com/@rkeventjhansi?si=YQcqBzcLPYwdvs2r" target="_blank"><i class="fa-brands fa-youtube"></i></a>
                        <a href="https://www.instagram.com/rkeventjhansi?igsh=ZWs2OHU2aTRndWFm" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://wa.me/919169659965" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                    </div>
                </div>

                <!-- Column 2: Quick Links -->
                <div class="col-lg-2 col-md-6">
                    <h4 class="footer-heading">QUICK LINKS</h4>
                    <ul class="footer-links">
                        <li><a href="${bp}index.html">Home</a></li>
                        <li><a href="${bp}about.html">About Us</a></li>
                        <li><a href="${bp}services.html">Services</a></li>
                        <li><a href="${bp}gallery.html">Gallery</a></li>
                        <li><a href="${bp}packages.html">Packages</a></li>
                        <li><a href="${bp}contact.html">Contact Us</a></li>
                    </ul>
                </div>

                <!-- Column 3: Services -->
                <div class="col-lg-3 col-md-6">
                    <h4 class="footer-heading">SERVICES</h4>
                    <ul class="footer-links">
                        <li><a href="${bp}best-decoration-planner-in-jhansi.html">Decoration</a></li>
                        <li><a href="${bp}premium-wedding-photography-in-jhansi.html">Photography & Videography</a></li>
                        <li><a href="${bp}best-wedding-entertainment-in-jhansi.html">Entertainment</a></li>
                        <li><a href="${bp}best-stage-lighting-in-jhansi.html">Lighting & Stage</a></li>
                        <li><a href="${bp}best-tent-and-furniture-in-jhansi.html">Tent & Furniture</a></li>
                        <li><a href="${bp}best-wedding-caterers-in-jhansi.html">Catering</a></li>
                        <li><a href="${bp}wedding-logistics-in-jhansi.html">Wedding Logistics</a></li>
                        <li><a href="${bp}wedding-essentials-in-jhansi.html">Wedding Essentials</a></li>
                        <li><a href="${bp}best-event-planner-in-jhansi.html">Event Management</a></li>
                    </ul>
                </div>

                <!-- Column 4: Contact Us -->
                <div class="col-lg-2 col-md-6">
                    <h4 class="footer-heading">CONTACT US</h4>
                    <ul class="footer-contact-info">
                        <li><i class="fa-solid fa-phone"></i> 
                            <div><span>+91 93696 49071 (Call)</span><br><span>+91 91696 59965 (WhatsApp)</span></div>
                        </li>
                        <li><i class="fa-solid fa-envelope"></i> <span>info@rkevents.com</span></li>
                        <li><i class="fa-solid fa-location-dot"></i> <span>123, Civil Lines, Jhansi,<br>Uttar Pradesh</span></li>
                    </ul>
                </div>

                <!-- Column 5: Newsletter -->
                <div class="col-lg-2 col-md-12 border-start-lg">
                    <h4 class="footer-heading">NEWSLETTER</h4>
                    <p class="footer-newsletter-text">Subscribe to get updates on our latest events & offers.</p>
                    <form class="footer-newsletter-form mt-3">
                        <div class="input-group">
                            <input type="email" class="form-control" placeholder="Your Email Address" required>
                            <button class="btn" type="submit"><i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </form>
                </div>
            </div>
            
            <div class="footer-bottom mt-5 pt-4">
                <div class="row align-items-center">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <p class="mb-0 copyright-text">&copy; 2024 RK Events. All Rights Reserved.</p>
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <ul class="footer-bottom-links mb-0 list-inline">
                            <li class="list-inline-item"><a href="${bp}privacy-policy.html">Privacy Policy</a></li>
                            <li class="list-inline-item mx-2 text-muted">|</li>
                            <li class="list-inline-item"><a href="${bp}terms.html">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>`;
    }

    getEnquiryModalHTML() {
        return `
        <!-- Enquiry Modal -->
        <div class="modal fade" id="enquiryModal" tabindex="-1" aria-labelledby="enquiryModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content border-0 shadow-lg">
                    <div class="modal-header" style="background: linear-gradient(135deg, #111, #222); color: #fff; border-bottom: 2px solid #d4af37;">
                        <h5 class="modal-title font-heading" id="enquiryModalLabel">Enquire Now</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-4">
                        <form id="modalEnquiryForm">
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label class="form-label fw-bold" for="modalName">Your Name</label>
                                    <input type="text" class="form-control" id="modalName" placeholder="E.g. Priya Sharma" required>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label fw-bold" for="modalPhone">Phone Number</label>
                                    <input type="tel" class="form-control" id="modalPhone" placeholder="+91 XXXXXXXXXX" required>
                                </div>
                                
                                <div class="col-12">
                                    <label class="form-label fw-bold" for="modalService">Interested In</label>
                                    <select class="form-select" id="modalService" required>
                                        <option value="" disabled selected>Select an option</option>
                                        <option value="Complete Wedding Planning">Complete Wedding Planning</option>
                                        <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                                        <option value="Photography & Videography">Photography & Videography</option>
                                        <option value="Decoration">Decoration</option>
                                        <option value="Entertainment">Entertainment</option>
                                        <option value="Lighting & Stage">Lighting & Stage</option>
                                        <option value="Tent & Furniture">Tent & Furniture</option>
                                        <option value="Catering">Catering</option>
                                        <option value="Wedding Logistics">Wedding Logistics</option>
                                        <option value="Wedding Essentials">Wedding Essentials</option>
                                        <option value="Event Management">Event Management</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <input type="text" class="form-control mt-2 d-none" id="modalOtherService" placeholder="Please specify your interest">
                                </div>
                                
                                <div class="col-md-6">
                                    <label class="form-label fw-bold" for="modalVenue">Venue</label>
                                    <input type="text" class="form-control" id="modalVenue" placeholder="E.g. Taj Hotel">
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label fw-bold" for="modalDate">Date</label>
                                    <input type="date" class="form-control" id="modalDate">
                                </div>
                                
                                <div class="col-md-6">
                                    <label class="form-label fw-bold" for="modalLocation">Location</label>
                                    <input type="text" class="form-control" id="modalLocation" placeholder="E.g. Jhansi">
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label fw-bold" for="modalBudget">Budget</label>
                                    <input type="text" class="form-control" id="modalBudget" placeholder="E.g. 5 Lakhs">
                                </div>
                                
                                <div class="col-12">
                                    <label class="form-label fw-bold" for="modalMessage">Message Details</label>
                                    <textarea class="form-control" id="modalMessage" rows="3" placeholder="Tell us about your special requests..."></textarea>
                                </div>
                                
                                <div class="col-12 text-center mt-4">
                                    <button type="submit" class="btn btn-dark w-100 py-2 fw-bold text-uppercase" style="letter-spacing: 1px; transition: all 0.3s;" onmouseover="this.style.backgroundColor='#d4af37';this.style.color='#111'" onmouseout="this.style.backgroundColor='#111';this.style.color='#fff'">
                                        <i class="fa-brands fa-whatsapp me-2"></i> Send via WhatsApp
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                const modalServiceSelect = document.getElementById('modalService');
                const modalOtherServiceInput = document.getElementById('modalOtherService');

                if (modalServiceSelect && modalOtherServiceInput) {
                    modalServiceSelect.addEventListener('change', function() {
                        if (this.value === 'Other') {
                            modalOtherServiceInput.classList.remove('d-none');
                            modalOtherServiceInput.setAttribute('required', 'required');
                        } else {
                            modalOtherServiceInput.classList.add('d-none');
                            modalOtherServiceInput.removeAttribute('required');
                            modalOtherServiceInput.value = '';
                        }
                    });
                }

                const modalEnquiryForm = document.getElementById('modalEnquiryForm');
                if (modalEnquiryForm) {
                    modalEnquiryForm.addEventListener('submit', function(e) {
                        e.preventDefault();
                        const name = document.getElementById('modalName').value;
                        const phone = document.getElementById('modalPhone').value;
                        let service = document.getElementById('modalService').value;
                        if (service === 'Other') {
                            service = document.getElementById('modalOtherService').value;
                        }
                        const venue = document.getElementById('modalVenue').value;
                        const date = document.getElementById('modalDate').value;
                        const location = document.getElementById('modalLocation').value;
                        const budget = document.getElementById('modalBudget').value;
                        const message = document.getElementById('modalMessage').value;
                        
                        const waNumber = '919169659965';
                        let waText = \`Hello RK Event Jhansi!%0A%0AMy name is \${name}.%0APhone: \${phone}%0AInterested in: \${service}\`;
                        if (venue) waText += \`%0AVenue: \${venue}\`;
                        if (date) waText += \`%0ADate: \${date}\`;
                        if (location) waText += \`%0ALocation: \${location}\`;
                        if (budget) waText += \`%0ABudget: \${budget}\`;
                        if (message) waText += \`%0AMessage: \${message}\`;
                        
                        window.open(\`https://wa.me/\${waNumber}?text=\${waText}\`, '_blank');
                        
                        // Close modal after sending
                        const modalInstance = bootstrap.Modal.getInstance(document.getElementById('enquiryModal'));
                        if (modalInstance) {
                            modalInstance.hide();
                        }
                    });
                }
            });
        </script>`;
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

    renderEnquiryModal() {
        if (!document.getElementById('enquiryModal')) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = this.getEnquiryModalHTML();
            // Append the modal to the body
            document.body.appendChild(tempDiv.firstElementChild);
            // Append the script separately since innerHTML doesn't execute script tags
            const scripts = tempDiv.querySelectorAll('script');
            scripts.forEach(script => {
                const newScript = document.createElement('script');
                newScript.textContent = script.textContent;
                document.body.appendChild(newScript);
            });
        }
    }

    render() {
        this.renderNavbar();
        this.renderRecentEvents();
        this.renderFooter();
        this.renderEnquiryModal();
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
