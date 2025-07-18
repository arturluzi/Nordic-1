// Document Ready
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            }
        });
    });
    
    // Header Scroll Effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const backToTop = document.querySelector('.back-to-top');
        
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
            backToTop.classList.add('active');
        } else {
            header.classList.remove('scrolled');
            backToTop.classList.remove('active');
        }
    });
    
    // Product Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productContainer = document.getElementById('product-container');
    
    // Sample product data (in a real app, this would come from an API or JSON file)
    const products = [
        {
            id: 1,
            name: 'Kremra Bebëlina',
            description: 'Për lëkurën e ndjeshme të foshnjave. Formulë pa parfum dhe paraben.',
            price: 2500,
            category: 'kremra',
            image: 'images/kremra-libero.jpg'
        },
        {
            id: 2,
            name: 'Pelena Libero',
            description: 'Pelena ultra-përthithëse pa alkool, me mbajtëse elastike.',
            price: 3200,
            category: 'pelena',
            image: 'images/pelena-libero.jpg'
        },
        {
            id: 3,
            name: 'Ushqim për Fëmijë',
            description: 'Ushqim organik për fëmijë mbi 6 muaj. Pa shtesa artificiale.',
            price: 1800,
            category: 'ushqim',
            image: 'images/baby-food.jpg'
        },
        {
            id: 4,
            name: 'Shampo për Fëmijë',
            description: 'Shampo me formulë delikate për fëmijë. Nuk i irriton sytë.',
            price: 2100,
            category: 'kremra',
            image: 'images/baby-shampoo.jpg'
        }
    ];
    
    // Display all products initially
    displayProducts(products);
    
    // Filter products
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            if (filter === 'all') {
                displayProducts(products);
            } else {
                const filteredProducts = products.filter(product => product.category === filter);
                displayProducts(filteredProducts);
            }
        });
    });
    
    // Function to display products
    function displayProducts(productsToDisplay) {
        productContainer.innerHTML = '';
        
        if (productsToDisplay.length === 0) {
            productContainer.innerHTML = '<p class="no-products">Nuk u gjet asnjë produkt.</p>';
            return;
        }
        
        productsToDisplay.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-price">
                        <span class="price">${product.price} Lekë</span>
                        <button class="add-to-cart" data-id="${product.id}">Shto në Shportë</button>
                    </div>
                </div>
            `;
            
            productContainer.appendChild(productCard);
        });
        
        // Add event listeners to "Add to Cart" buttons
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.dataset.id);
                addToCart(productId);
            });
        });
    }
    
    // Cart functionality
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');
    const cartModal = document.getElementById('cart-modal');
    const closeModal = document.querySelector('.close-modal');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    // Update cart count
    updateCartCount();
    
    // Add to cart function
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        
        if (!product) return;
        
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        updateCart();
        showCartNotification(product.name);
    }
    
    // Update cart
    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        renderCartItems();
    }
    
    // Update cart count
    function updateCartCount() {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
    
    // Render cart items
    function renderCartItems() {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart">Shporta juaj është bosh</p>';
            cartTotal.textContent = '0';
            return;
        }
        
        cartItemsContainer.innerHTML = '';
        let total = 0;
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <p class="cart-item-title">${item.name}</p>
                    <p class="cart-item-price">${item.price} Lekë x ${item.quantity}</p>
                </div>
                <i class="fas fa-times cart-item-remove" data-id="${item.id}"></i>
            `;
            
            cartItemsContainer.appendChild(cartItem);
            total += item.price * item.quantity;
        });
        
        cartTotal.textContent = total;
        
        // Add event listeners to remove buttons
        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.dataset.id);
                removeFromCart(productId);
            });
        });
    }
    
    // Remove from cart
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCart();
    }
    
    // Show cart notification
    function showCartNotification(productName) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <p>${productName} u shtua në shportë!</p>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
    
    // Cart modal toggle
    document.querySelector('.cart-icon a').addEventListener('click', function(e) {
        e.preventDefault();
        cartModal.style.display = 'flex';
        renderCartItems();
    });
    
    closeModal.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
    
    // Checkout button
    checkoutBtn.addEventListener('click', function() {
        alert('Faleminder