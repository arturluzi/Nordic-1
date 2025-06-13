# Nordic-1
Nuk ka problem! Ja hapat e detajuar për të publikuar faqen tuaj në internet **falas** përmes GitHub Pages, duke përdorur email-in tuaj `nordicimportal@gmail.com`. Do t'ju dërgoj edhe kodin e plotë të faqes në fund të udhëzimeve.

---

### **Hapat për të Publikuar Faqen në GitHub**

#### **1. Krijo një Repository në GitHub**
1. Hyrë në [github.com](https://github.com) dhe regjistrohu me email-in `nordicimportal@gmail.com`.
2. Kliko **"New"** (butoni jeshil) për të krijuar një repository të re.
3. Jep emrin:  
   ```
   nordicimportal.github.io  
   ```
   *(Kjo është e rëndësishme për GitHub Pages!)*
4. Vërejtje: Zgjidh **"Public"** dhe kliko **"Create Repository"**.

#### **2. Ngarko Kodin në GitHub**
1. Shkarko kodin e faqes që kam përgatitur për ju:  
   📁 **[Kodi i Plotë i Faqes (ZIP)](https://drive.google.com/example-link)** *(do të dërgoj një link real nëse doni)*  
2. Zgjidh skedarin ZIP dhe nxirre të gjithë skedarët (`index.html`, `style.css`, `script.js`, dhe folderin `images` nëse ke).
3. Në faqen e repository-t të GitHub, kliko **"Add file"** > **"Upload files"** dhe tërhiq të gjithë skedarët e faqes.

#### **3. Aktivizo GitHub Pages**
1. Shko te **"Settings"** (në repository).
2. Në anën e majtë, kliko **"Pages"**.
3. Nën **"Branch"**, zgjidh `main` dhe kliko **"Save"**.
4. Prit 1-2 minuta dhe faqja juaj do të jetë online në:  
   🌐 **https://nordicimportal.github.io**

---

### **🛠️ Kodi i Plotë i Faqes**

#### **1. `index.html** (Kreu i Faqes)
```html
<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NORDIK IMPORT AL - Produkte për Fëmijë</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="logo">
            <h1>NORDIK IMPORT AL</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#home">Ballina</a></li>
                <li><a href="#products">Produktet</a></li>
                <li><a href="#contact">Kontakt</a></li>
            </ul>
        </nav>
    </header>

    <section id="home" class="hero">
        <h2>Produkte Premium për Fëmijë nga LIBERO</h2>
        <p>Kremra, pelena dhe ushqime të gatshme me cilësi europiane.</p>
    </section>

    <section id="products" class="products">
        <h2>Produktet Tona</h2>
        <div class="product-grid">
            <div class="product-card">
                <img src="images/kremra-libero.jpg" alt="Kremra Libero">
                <h3>Kremra Bebëlina</h3>
                <p>Për lëkurën e ndjeshme të foshnjave.</p>
            </div>
            <div class="product-card">
                <img src="images/pelena-libero.jpg" alt="Pelena Libero">
                <h3>Pelena Libero</h3>
                <p>Pelena ultra-përthithëse pa alkool.</p>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <h2>Na Kontaktoni</h2>
        <p>Email: nordicimportal@gmail.com</p>
    </section>

    <footer>
        <p>&copy; 2023 NORDIK IMPORT AL. Të gjitha të drejtat e rezervuara.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

#### **2. `style.css** (Stilizimi)
```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: #f9f9f9;
}
header {
    background: #003366;
    color: white;
    padding: 1rem;
    text-align: center;
}
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 2rem;
}
.product-card {
    background: white;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
```

#### **3. `script.js** (Interaktiviteti)
```javascript
// Shembull: Ndrysho ngjyrën e header-it kur scrollohet
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.style.backgroundColor = window.scrollY > 50 ? '#002244' : '#003366';
});
```

---

### **📌 Shënime Shtesë**
- **Fotot**: Vendosni fotot e produkteve në një folder të quajtur `images` brenda repository-t.  
- **Domain Personal**: Nëse dëshironi `nordikimport.al`, blini një domain në [Namecheap](https://www.namecheap.com/) dhe lidheni me GitHub Pages.  

Nëse keni nevojë për ndihmë në ndonjë hap, më tregoni se ku ngecni! 😊