const products = [
  {
    id: 1,
    name: 'Winter Parka Jacket',
    brand: 'VLTG',
    price: 2000,
    orig: null,
    badge: 'new',
    img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80&fit=crop',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },

  {
    id: 2,
    name: 'Classic Logo T-Shirt', brand: 'VLTG',
    price: 1200,
    orig: null,
    badge: null,
    img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80&fit=crop',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },

  {
    id: 3,
    name: 'Utility Cargo Pants',
    brand: 'VLTG Studio',
    price: 1000,
    orig: null,
    badge: 'ltd',
    img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80&fit=crop',
    sizes: ['XS', 'S', 'M', 'L']
  },

  {
    id: 4,
    name: 'Essential Pullover Hoodie',
    brand: 'VLTG',
    price: 1300,
    orig: 1600,
    badge: 'sale',
    img: 'https://images.unsplash.com/photo-1726133328105-df1161d5f129?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },

  {
    id: 5,
    name: 'Meta Glasses Gen2',
    brand: 'VLTG Objects',
    price: 30000,
    orig: null,
    badge: null,
    img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80&fit=crop',
    sizes: ['One Size']
  },

  {
    id: 6,
    name: 'Quilted Puffer Vest',
    brand: 'VLTG',
    price: 3000,
    orig: null,
    badge: 'new',
    img: 'https://images.unsplash.com/photo-1636529109797-0749811c4916?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 7,
    name: 'Vintage Denim Jacket',
    brand: 'VLTG Archive',
    price: 2100,
    orig: 2500,
    badge: 'sale',
    img: 'https://images.unsplash.com/photo-1601036559620-3a83dfdead09?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    sizes: ['S', 'M', 'L', 'XL']
  },

  {
    id: 8,
    name: 'Well-Suited Suit',
    brand: 'VLTG Studio',
    price: 5500,
    orig: null,
    badge: null,
    img: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=600&q=80&fit=crop',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },

  {
    id: 9,
    name: 'Everyday Messenger Bag',
    brand: 'VLTG Objects',
    price: 1700,
    orig: null,
    badge: 'ltd',
    img: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=600&q=80&fit=crop',
    sizes: ['One Size']
  },

  {
    id: 10,
    name: 'Ribbed Mock-Neck Sweater',
    brand: 'VLTG',
    price: 1600,
    orig: null,
    badge: null,
    img: 'https://plus.unsplash.com/premium_photo-1689371956352-f420feb61e53?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 11,
    name: 'Retro Track Jacket',
    brand: 'VLTG × Archive',
    price: 1600,
    orig: null,
    badge: 'new',
    img: 'https://images.unsplash.com/photo-1618927638118-b95383b64629?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 12,
    name: 'Classic Baseball Cap',
    brand: 'VLTG',
    price: 700,
    orig: null,
    badge: null,
    img: 'https://images.unsplash.com/photo-1720534490358-bc2ad29d51d5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    sizes: ['One Size']
  },
  {
    id: 13,
    name: 'Oversized Wool Coat',
    brand: 'VLTG Studio',
    price: 3500,
    orig: null,
    badge: 'new',
    img: 'https://images.unsplash.com/photo-1740813003475-2b66acf1bc82?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 14,
    name: 'Technical Daypack',
    brand: 'VLTG Objects',
    price: 1800,
    orig: null,
    badge: null,
    img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80&fit=crop',
    sizes: ['One Size']
  },
  {
    id: 15,
    name: 'Seamless Knit Sweater',
    brand: 'VLTG',
    price: 2200,
    orig: null,
    badge: null,
    img: 'https://images.unsplash.com/photo-1631541909061-71e349d1f203?q=80&w=705&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 16,
    name: 'Lightweight Windbreaker',
    brand: 'VLTG Archive',
    price: 2500,
    orig: 3200,
    badge: 'sale',
    img: 'https://images.unsplash.com/photo-1758172071415-b7a24c093055?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 17,
    name: 'Relaxed Fit Jeans',
    brand: 'VLTG',
    price: 2800,
    orig: null,
    badge: null,
    img: 'https://plus.unsplash.com/premium_photo-1691453528148-931093490451?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    sizes: ['28', '30', '32', '34', '36']
  },
  {
    id: 18,
    name: 'Classic Leather Boots',
    brand: 'VLTG Objects',
    price: 4500,
    orig: null,
    badge: 'ltd',
    img: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600&q=80&fit=crop',
    sizes: ['8', '9', '10', '11', '12']
  },
  {
    id: 19,
    name: 'Heavy Cotton Sweatpants',
    brand: 'VLTG',
    price: 1500,
    orig: null,
    badge: null,
    img: 'https://images.unsplash.com/photo-1711175017307-bbacf7c2ca13?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 20,
    name: 'Silver Chain Necklace',
    brand: 'VLTG Objects',
    price: 90000,
    orig: null,
    badge: null,
    img: 'https://plus.unsplash.com/premium_photo-1669703777494-8ca5d1da4e04?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    sizes: ['One Size']
  }
];

(function checkLogin() {
  const isLoginPage = window.location.pathname.includes('login.html');
  const currentUser = JSON.parse(localStorage.getItem('vltg_user'));
  const skippedLogin = localStorage.getItem('vltg_skip_login');

  if (isLoginPage && currentUser) {
    window.location.href = 'index.html';
  } else if (!isLoginPage && !currentUser && !skippedLogin) {
    window.location.href = 'login.html';
  }
})();

let cart = JSON.parse(localStorage.getItem('vltg_cart')) || [];

function saveCart() {
  localStorage.setItem('vltg_cart', JSON.stringify(cart));
}

function getTotal() {
  return cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}
function getCount() {
  return cart.reduce((sum, i) => sum + i.qty, 0);
}

function renderCart() {
  const list = document.getElementById('cart-items-list');
  const empty = document.getElementById('cart-empty');
  const foot = document.getElementById('cart-foot');
  const headCount = document.getElementById('cart-head-count');
  const totalEl = document.getElementById('cart-total');
  const countEl = document.getElementById('cart-count');
  const count = getCount();

  if (headCount) headCount.textContent = `(${count})`;
  if (totalEl) totalEl.textContent = '₹' + getTotal().toLocaleString();

  if (countEl) {
    countEl.textContent = count;
    if (count > 0) {
      countEl.classList.add('visible');
    } else {
      countEl.classList.remove('visible');
    }
  }

  if (empty) empty.style.display = count > 0 ? 'none' : 'flex';
  if (foot) foot.style.display = count > 0 ? 'block' : 'none';

  if (!list) return;

  list.querySelectorAll('.cart-item').forEach(el => el.remove());

  cart.forEach((item, idx) => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <div class="cart-item-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
      </div>
      <div class="cart-item-details">
        <p class="cart-item-brand">${item.brand}</p>
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-meta">Size: ${item.size}</p>
        <div class="cart-item-row">
          <div class="qty-ctrl">
            <button class="qty-btn" data-idx="${idx}" data-dir="-1">−</button>
            <div class="qty-val">${item.qty}</div>
            <button class="qty-btn" data-idx="${idx}" data-dir="1">+</button>
          </div>
          <span class="cart-item-price">₹${(item.price * item.qty).toLocaleString()}</span>
        </div>
        <button class="cart-item-remove" data-idx="${idx}" style="margin-top:8px">Remove</button>
      </div>
    `;
    list.insertBefore(el, foot);
  });

  list.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = +btn.dataset.idx, d = +btn.dataset.dir;
      cart[i].qty = Math.max(1, cart[i].qty + d);
      saveCart();
      renderCart();
    });
  });
  list.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      cart.splice(+btn.dataset.idx, 1);
      saveCart();
      renderCart();
    });
  });
}

function addToCart(product, size, btn) {
  const currentUser = JSON.parse(localStorage.getItem('vltg_user'));
  if (!currentUser) {
    window.location.href = 'login.html?mode=signup';
    return;
  }

  btn.classList.add('adding');
  btn.textContent = '✓ Added';

  const existing = cart.find(i => i.id === product.id && i.size === size);
  if (existing) { existing.qty++; }
  else { cart.push({ ...product, size, qty: 1 }); }
  saveCart();

  const ripple = document.createElement('span');
  ripple.className = 'atc-ripple';
  ripple.style.cssText = `width:60px;height:60px;left:50%;top:50%;margin:-30px`;
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);

  setTimeout(() => {
    btn.classList.remove('adding');
    btn.textContent = 'Quick Add';
  }, 1400);

  const countEl = document.getElementById('cart-count');
  if (countEl) {
    countEl.style.animation = 'none';
    void countEl.offsetWidth;
    countEl.style.animation = 'countPop 0.35s var(--ease)';
  }

  renderCart();
  showToast(`${product.name} added to cart`);
}

let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

function openCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer) drawer.classList.add('open');
  if (overlay) overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}
const cartTrigger = document.getElementById('cart-trigger');
if (cartTrigger) {
  cartTrigger.addEventListener('click', (e) => {
    if (document.getElementById('cart-drawer')) {
      e.preventDefault();
      openCart();
    }
  });
}

const cartClose = document.getElementById('cart-close');
if (cartClose) cartClose.addEventListener('click', closeCart);

const cartOverlay = document.getElementById('cart-overlay');
if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

function renderProducts() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;
  grid.innerHTML = '';

  products.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.transitionDelay = `${i * 0.06}s`;
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      window.location.href = `product.html?id=${p.id}`;
    });

    const badgeHtml = p.badge ? `<span class="card-badge ${p.badge}">${p.badge === 'new' ? 'New' : p.badge === 'sale' ? 'Sale' : 'Ltd'}</span>` : '';
    const origHtml = p.orig ? `<span class="card-price-old">₹${p.orig}</span>` : '';
    const sizesHtml = p.sizes.map(s => `<button class="size-chip" data-size="${s}">${s}</button>`).join('');

    card.innerHTML = `
      <div class="card-img">
        ${badgeHtml}
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        <div class="card-quick-buy">
          <div class="size-row">${sizesHtml}</div>
          <button class="atc-btn">Quick Add</button>
        </div>
      </div>
      <div class="card-info">
        <p class="card-brand">${p.brand}</p>
        <p class="card-name">${p.name}</p>
        <div class="card-price-row">
          <div>
            <span class="card-price">₹${p.price}</span>${origHtml}
          </div>
          <button class="card-wishlist" aria-label="Wishlist ${p.name}">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </button>
        </div>
      </div>
    `;

    let selectedSize = p.sizes[0] || 'One Size';
    const chips = card.querySelectorAll('.size-chip');
    chips[0]?.classList.add('active');
    chips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.stopPropagation();
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        selectedSize = chip.dataset.size;
      });
    });

    const atcBtn = card.querySelector('.atc-btn');
    atcBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(p, selectedSize, atcBtn);
    });

    const wishBtn = card.querySelector('.card-wishlist');
    wishBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isFilled = wishBtn.querySelector('svg').getAttribute('fill') !== 'none';
      wishBtn.querySelector('svg').setAttribute('fill', isFilled ? 'none' : '#FF3333');
      wishBtn.querySelector('svg').setAttribute('stroke', isFilled ? 'currentColor' : '#FF3333');
      showToast(isFilled ? 'Removed from wishlist' : `${p.name} saved`);
    });

    grid.appendChild(card);
  });

  observeCards();
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

function observeCards() {
  document.querySelectorAll('.product-card').forEach(card => observer.observe(card));
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const heroBg = document.getElementById('hero-bg');
if (heroBg) {
  let ticking = false;
  function updateParallax() {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      heroBg.style.transform = `scale(1.1) translateY(${scrollY * 0.28}px)`;
    }
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(updateParallax); ticking = true; }
  });
}

window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('compact', window.scrollY > 80);
});



document.querySelectorAll('.filter-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    const group = pill.closest('.filter-pill-group');
    group.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
  });
});

const priceRange = document.getElementById('price-range');
const priceVal = document.getElementById('price-val');
if (priceRange && priceVal) {
  priceRange.addEventListener('input', () => {
    priceVal.textContent = '₹' + priceRange.value;
    const pct = ((priceRange.value - priceRange.min) / (priceRange.max - priceRange.min)) * 100;
    priceRange.style.background = `linear-gradient(to right, var(--accent) ${pct}%, var(--border) ${pct}%)`;
  });
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = +el.dataset.count;
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.round(current) + (el.closest('.stat-cell').querySelector('.stat-label').textContent.includes('%') ? '' : '+');
      if (current >= target) { clearInterval(timer); el.textContent = target + (el.closest('.stat-cell').querySelector('.stat-label').textContent.includes('%') ? '%' : '+'); }
    }, 20);
    statsObserver.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => statsObserver.observe(el));

function renderAuthStatus() {
  const authLinks = document.querySelectorAll('.auth-link');
  const currentUser = JSON.parse(localStorage.getItem('vltg_user'));

  authLinks.forEach(link => {
    if (currentUser) {
      link.removeAttribute('href');
      link.innerHTML = `
        <span class="user-greeting" style="font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text); margin-right: 12px; font-weight: 500;">${currentUser.name}</span>
        <button id="logout-btn" style="cursor: pointer; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); transition: color 0.2s;">Logout</button>
      `;
      link.style.display = 'flex';
      link.style.alignItems = 'center';
      link.style.textDecoration = 'none';
      link.classList.remove('icon-btn');

      const logoutBtn = link.querySelector('#logout-btn');
      logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('vltg_user');
        window.location.reload();
      });
    } else {
      link.setAttribute('href', 'login.html');
      link.classList.add('icon-btn');
      link.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"/>
        </svg>
      `;
    }
  });
}

function initSearch() {
  const searchOverlay = document.createElement('div');
  searchOverlay.id = 'search-overlay';
  searchOverlay.innerHTML = `
    <div class="search-container">
      <div class="search-header">
        <input type="text" id="search-input" placeholder="Search products, brands, collections..." autocomplete="off">
        <button id="search-close" aria-label="Close search">✕</button>
      </div>
      <div id="search-results" class="search-results"></div>
    </div>
  `;
  document.body.appendChild(searchOverlay);

  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const searchClose = document.getElementById('search-close');

  const searchBtns = document.querySelectorAll('button[aria-label="Search"]');
  searchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      searchOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      setTimeout(() => searchInput.focus(), 100);
      searchInput.value = '';
      searchResults.innerHTML = '';
    });
  });

  searchClose.addEventListener('click', () => {
    searchOverlay.classList.remove('open');
    document.body.style.overflow = '';
  });

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      searchResults.innerHTML = '';
      return;
    }

    const matched = products.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query)
    );

    if (matched.length === 0) {
      searchResults.innerHTML = '<p style="color:var(--muted); text-align:center; padding: 40px 0;">No results found.</p>';
      return;
    }

    searchResults.innerHTML = matched.map(p => `
      <a href="product.html?id=${p.id}" class="search-result-item">
        <img src="${p.img}" alt="${p.name}">
        <div>
          <p class="search-item-brand">${p.brand}</p>
          <p class="search-item-name">${p.name}</p>
          <p class="search-item-price">₹${p.price}</p>
        </div>
      </a>
    `).join('');
  });
}

renderProducts();
renderCart();
renderAuthStatus();
initSearch();

function initAuthPage() {
  const skipBtn = document.getElementById('skip-btn');
  if (!skipBtn) return; 

  skipBtn.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('vltg_skip_login', 'true');
    window.location.href = 'index.html';
  });

  const toggleBtns = document.querySelectorAll('.auth-toggle-btn');
  const forms = document.querySelectorAll('.auth-form');

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleBtns.forEach(b => b.classList.remove('active'));
      forms.forEach(f => f.classList.remove('active'));
      
      btn.classList.add('active');
      document.getElementById(btn.dataset.target).classList.add('active');
      
      document.getElementById('login-error').classList.remove('visible');
      document.getElementById('signup-error').classList.remove('visible');
    });
  });

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('mode') === 'signup') {
    const signupToggle = document.querySelector('.auth-toggle-btn[data-target="signup-form"]');
    if (signupToggle) signupToggle.click();
  }

  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');

  function getUsers() {
    return JSON.parse(localStorage.getItem('vltg_users')) || [];
  }

  function saveUsers(users) {
    localStorage.setItem('vltg_users', JSON.stringify(users));
  }

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('signup-name').value.trim();
      const email = document.getElementById('signup-email').value.trim();
      const password = document.getElementById('signup-password').value;
      const errorEl = document.getElementById('signup-error');
      const successEl = document.getElementById('signup-success');

      errorEl.classList.remove('visible');
      successEl.classList.remove('visible');

      const users = getUsers();

      if (users.find(u => u.email === email)) {
        errorEl.textContent = 'An account with this email already exists.';
        errorEl.classList.add('visible');
        return;
      }

      users.push({ name, email, password });
      saveUsers(users);

      localStorage.setItem('vltg_user', JSON.stringify({ name, email }));
      
      successEl.textContent = 'Account created successfully. Redirecting...';
      successEl.classList.add('visible');
      
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1200);
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value.trim();
      const password = document.getElementById('login-password').value;
      const errorEl = document.getElementById('login-error');

      errorEl.classList.remove('visible');

      const users = getUsers();
      const user = users.find(u => u.email === email);

      if (!user) {
        errorEl.textContent = 'No account found with this email.';
        errorEl.classList.add('visible');
        return;
      }

      if (user.password !== password) {
        errorEl.textContent = 'Incorrect password.';
        errorEl.classList.add('visible');
        return;
      }

      localStorage.setItem('vltg_user', JSON.stringify({ name: user.name, email: user.email }));
      window.location.href = 'index.html';
    });
  }
}

initAuthPage();