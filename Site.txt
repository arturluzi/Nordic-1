<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Nordic Import AL - Specializuar në importin e produkteve premium për fëmijë nga LIBERO dhe marka të tjera europiane">
    <meta name="keywords" content="produkte për fëmijë, pelena libero, import nga europa, kremra për fëmijë">
    <title>NORDIC IMPORT AL - Produkte Premium për Fëmijë</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container">
            <div class="logo">
                <img src="images/logo.png" alt="Nordic Import AL Logo">
                <h1>NORDIC IMPORT AL</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Ballina</a></li>
                    <li><a href="#products">Produktet</a></li>
                    <li><a href="#about">Rreth Nesh</a></li>
                    <li><a href="#contact">Kontakt</a></li>
                    <li class="cart-icon"><a href="#cart"><i class="fas fa-shopping-cart"></i> <span id="cart-count">0</span></a></li>
                </ul>
            </nav>
            <div class="mobile-menu">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <h2>Produkte Premium për Fëmijë nga LIBERO</h2>
            <p>Kremra, pelena dhe ushqime të gatshme me cilësi europiane</p>
            <div class="hero-buttons">
                <a href="#products" class="btn">Shiko Produktet</a>
                <a href="https://wa.me/355XXXXXXXX" class="btn whatsapp-btn"><i class="fab fa-whatsapp"></i> Na kontaktoni</a>
            </div>
        </div>
    </section>

    <!-- Produktet -->
    <section id="products" class="products">
        <div class="container">
            <h2 class="section-title">Produktet Tona</h2>
            <div class="product-filters">
                <button class="filter-btn active" data-filter="all">Të gjitha</button>
                <button class="filter-btn" data-filter="kremra">Kremra</button>
                <button class="filter-btn" data-filter="pelena">Pelena</button>
                <button class="filter-btn" data-filter="ushqim">Ushqim</button>
            </div>
            <div class="product-grid" id="product-container">
                <!-- Produktet do të ngarkohen dinamikisht nga script.js -->
            </div>
        </div>
    </section>

    <!-- Rreth Nesh -->
    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">Rreth Nesh</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>Nordic Import AL është specializuar në importin e produkteve premium për fëmijë nga Evropa. Ne ofrojmë vetëm produkte me cilësi të lartë, të testuara dhe të certifikuara sipas standardeve europiane.</p>
                    <p>Që nga viti 2015, ne kemi sjellë në tregun shqiptar produktet më të mira nga markat më të njohura në Evropë.</p>
                    <ul class="about-features">
                        <li><i class="fas fa-check"></i> Produkte 100% origjinale</li>
                        <li><i class="fas fa-check"></i> Certifikime europiane</li>
                        <li><i class="fas fa-check"></i> Dorëzim i shpejtë</li>
                    </ul>
                </div>
                <div class="about-image">
                    <img src="images/about-image.jpg" alt="Rreth Nordic Import AL" loading="lazy">
                </div>
            </div>
        </div>
    </section>

    <!-- Kontakt -->
    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Na Kontaktoni</h2>
            <div class="contact-grid">
                <div class="contact-info">
                    <h3>Informacion Kontakti</h3>
                    <p><i class="fas fa-envelope"></i> nordicimportal@gmail.com</p>
                    <p><i class="fas fa-phone"></i> +355 XX XXX XXXX</p>
                    <p><i class="fas fa-map-marker-alt"></i> Tirana, Albania</p>
                    
                    <h3 class="social-title">Rrjetet Sociale</h3>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="https://wa.me/355XXXXXXXX"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
                <div class="contact-form">
                    <form id="contactForm">
                        <div class="form-group">
                            <input type="text" id="name" placeholder="Emri Juaj*" required>
                        </div>
                        <div class="form-group">
                            <input type="email" id="email" placeholder="Email Juaj*" required>
                        </div>
                        <div class="form-group">
                            <input type="tel" id="phone" placeholder="Telefoni">
                        </div>
                        <div class="form-group">
                            <textarea id="message" placeholder="Mesazhi Juaj*" required></textarea>
                        </div>
                        <button type="submit" class="btn">Dërgo Mesazhin</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Shporta Modal -->
    <div id="cart-modal" class="modal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>Shporta Juaj</h2>
            <div id="cart-items" class="cart-items">
                <!-- Produktet në shportë do të shfaqen këtu -->
                <p class="empty-cart">Shporta juaj është bosh</p>
            </div>
            <div class="cart-total">
                <p>Totali: <span id="cart-total">0</span> Lekë</p>
                <button id="checkout-btn" class="btn">Blej Tani</button>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-col">
                    <h3>Nordic Import AL</h3>
                    <p>Specialist në produkte për fëmijë me cilësi europiane</p>
                </div>
                <div class="footer-col">
                    <h3>Linqe të Shpejta</h3>
                    <ul>
                        <li><a href="#home">Ballina</a></li>
                        <li><a href="#products">Produktet</a></li>
                        <li><a href="#about">Rreth Nesh</a></li>
                        <li><a href="#contact">Kontakt</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>Orari i Punës</h3>
                    <p>E Hënë - E Premte: 08:00 - 17:00</p>
                    <p>E Shtunë: 09:00 - 14:00</p>
                    <p>E Dielë: Mbyllur</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2023 NORDIC IMPORT AL. Të gjitha të drejtat e rezervuara.</p>
            </div>
        </div>
    </footer>

    <!-- Back to Top Button -->
    <a href="#home" class="back-to-top"><i class="fas fa-arrow-up"></i></a>

    <script src="script.js"></script>
</body>
</html>