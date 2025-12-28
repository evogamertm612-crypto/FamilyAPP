// ===== App State =====
let menuData = null;
let isDevMode = false;
let isAuthenticated = false;
let activeCategory = 'all';
let currentLang = 'ar';
let currentTheme = 'light';
let isDesktopView = false;
let tvModeInterval = null;

// ===== Developer Credentials (hashed for basic security) =====
const DEV_CREDENTIALS = {
    username: 'dabburEG',
    // Simple hash of password - in production use proper backend authentication
    passwordHash: btoa('115599aA#')
};

// ===== DOM Elements =====
const elements = {
    categoryNav: document.getElementById('categoryNav'),
    menuGrid: document.getElementById('menuGrid'),
    devModeToggle: document.getElementById('devModeToggle'),
    devBanner: document.getElementById('devBanner'),
    editModal: document.getElementById('editModal'),
    addModal: document.getElementById('addModal'),
    loginModal: document.getElementById('loginModal'),
    editForm: document.getElementById('editForm'),
    addForm: document.getElementById('addForm'),
    loginForm: document.getElementById('loginForm'),
    addNewItemBtn: document.getElementById('addNewItemBtn'),
    resetDataBtn: document.getElementById('resetDataBtn'),
    logoutBtn: document.getElementById('logoutBtn'),
    closeModal: document.getElementById('closeModal'),
    closeAddModal: document.getElementById('closeAddModal'),
    closeLoginModal: document.getElementById('closeLoginModal'),
    cancelEdit: document.getElementById('cancelEdit'),
    cancelAdd: document.getElementById('cancelAdd'),
    cancelLogin: document.getElementById('cancelLogin'),
    deleteItemBtn: document.getElementById('deleteItemBtn'),
    imageUploadArea: document.getElementById('imageUploadArea'),
    imageUpload: document.getElementById('imageUpload'),
    imagePreview: document.getElementById('imagePreview'),
    addImageUploadArea: document.getElementById('addImageUploadArea'),
    addImageUpload: document.getElementById('addImageUpload'),
    addImagePreview: document.getElementById('addImagePreview'),
    addCategory: document.getElementById('addCategory'),
    loginError: document.getElementById('loginError'),
    langToggle: document.getElementById('langToggle'),
    themeToggle: document.getElementById('themeToggle'),
    tvToggle: document.getElementById('tvToggle'),
    desktopToggle: document.getElementById('desktopToggle'),
    scrollTopBtn: document.getElementById('scrollTopBtn')
};

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    loadAppState();
    loadMenuData();
    checkAuthStatus();
    setupEventListeners();
    renderCategories();
    renderMenu();
    createFloatingCallButtons();
    applyTheme();
    applyDesktopView();
    updateUIText();
});

function loadAppState() {
    currentLang = localStorage.getItem('familyLang') || 'ar';
    currentTheme = localStorage.getItem('familyTheme') || 'light';
    isDesktopView = localStorage.getItem('familyDesktopView') === 'true';
}

// ===== Authentication =====
function checkAuthStatus() {
    // Check if user was previously authenticated in this session
    const authSession = sessionStorage.getItem('devModeAuth');
    if (authSession === 'true') {
        isAuthenticated = true;
    }
}

function openLoginModal() {
    elements.loginModal.classList.add('active');
    elements.loginError.style.display = 'none';
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
    document.getElementById('loginUsername').focus();
}

function closeLoginModal() {
    elements.loginModal.classList.remove('active');
    elements.loginForm.reset();
    elements.loginError.style.display = 'none';
    // If not authenticated, uncheck the toggle
    if (!isAuthenticated) {
        elements.devModeToggle.checked = false;
    }
}

function handleLogin(e) {
    e.preventDefault();

    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;
    const passwordHash = btoa(password);

    if (username === DEV_CREDENTIALS.username && passwordHash === DEV_CREDENTIALS.passwordHash) {
        // Login successful
        isAuthenticated = true;
        sessionStorage.setItem('devModeAuth', 'true');
        closeLoginModal();
        enableDevMode();
        showNotification('تم تسجيل الدخول بنجاح! مرحباً بك في وضع المطور', 'success');
    } else {
        // Login failed
        elements.loginError.style.display = 'block';
        document.getElementById('loginPassword').value = '';
        document.getElementById('loginPassword').focus();
    }
}

function logout() {
    isAuthenticated = false;
    isDevMode = false;
    sessionStorage.removeItem('devModeAuth');
    elements.devModeToggle.checked = false;
    elements.devBanner.classList.remove('active');
    renderMenu();
    showNotification('تم تسجيل الخروج بنجاح', 'info');
}

function enableDevMode() {
    isDevMode = true;
    elements.devModeToggle.checked = true;
    elements.devBanner.classList.add('active');
    renderMenu();
}

// ===== Theme & Language =====
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('familyTheme', currentTheme);
    applyTheme();
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    elements.themeToggle.textContent = currentTheme === 'light' ? '🌙' : '☀️';
}

function toggleDesktopView() {
    isDesktopView = !isDesktopView;
    localStorage.setItem('familyDesktopView', isDesktopView);
    applyDesktopView();
}

function applyDesktopView() {
    if (isDesktopView) {
        document.body.classList.add('desktop-view');
        elements.desktopToggle.classList.add('active');
    } else {
        document.body.classList.remove('desktop-view');
        elements.desktopToggle.classList.remove('active');
    }
}

function toggleLang() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('familyLang', currentLang);
    updateUIText();
    renderCategories();
    renderMenu();
}

function updateUIText() {
    if (!menuData) return;
    const isAr = currentLang === 'ar';
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    elements.langToggle.textContent = isAr ? 'EN' : 'AR';

    // Update restaurant info from data
    const res = menuData.restaurant;
    const titleEl = document.querySelector('.restaurant-info h1');
    if (titleEl) titleEl.textContent = isAr ? res.nameAr : res.name;

    const sloganEl = document.querySelector('.restaurant-info p');
    if (sloganEl) sloganEl.textContent = res.slogan;

    const logoEl = document.getElementById('restaurantLogo');
    if (logoEl) logoEl.alt = isAr ? res.nameAr + " Logo" : res.name + " Logo";

    // Update footer info
    const footerPhone = document.querySelector('.footer-info p:first-child');
    if (footerPhone) footerPhone.textContent = `📞 ${res.phone1} | ${res.phone2}`;

    const footerNotes = document.querySelector('.footer-info p:last-child');
    if (footerNotes) footerNotes.textContent = isAr ? res.footerInfoAr : res.footerInfoEn;

    const footerBrand = document.querySelector('.footer-brand p');
    if (footerBrand) footerBrand.textContent = `© 2024 ${isAr ? res.nameAr : res.name} - ${isAr ? 'جميع الحقوق محفوظة' : 'All Rights Reserved'}`;

    // Update static translations
    const translations = {
        '.toggle-label': isAr ? 'وضع المطور' : 'Dev Mode',
        '.btn-add-item': isAr ? '➕ إضافة صنف جديد' : '➕ Add New Item',
        '.btn-reset': isAr ? '🔄 إعادة تعيين' : '🔄 Reset Data',
        '.btn-logout': isAr ? '🚪 تسجيل الخروج' : '🚪 Logout'
    };

    for (const [selector, text] of Object.entries(translations)) {
        const el = document.querySelector(selector);
        if (el) el.textContent = text;
    }
}

// ===== TV Mode =====
function toggleTVMode() {
    if (tvModeInterval) {
        stopTVMode();
    } else {
        startTVMode();
    }
}

function startTVMode() {
    elements.tvToggle.classList.add('active');
    showNotification(currentLang === 'ar' ? 'تم تفعيل وضع العرض التلقائي' : 'TV Mode Activated', 'success');

    let categories = ['all', ...menuData.categories.map(c => c.id)];
    let currentIndex = categories.indexOf(activeCategory);

    tvModeInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % categories.length;
        activeCategory = categories[currentIndex];
        renderCategories();
        renderMenu();

        // Scroll to top when changing category
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 5000); // Switch every 5 seconds
}

function stopTVMode() {
    elements.tvToggle.classList.remove('active');
    clearInterval(tvModeInterval);
    tvModeInterval = null;
    showNotification(currentLang === 'ar' ? 'تم إيقاف وضع العرض التلقائي' : 'TV Mode Deactivated', 'info');
}

// ===== Floating Call Buttons =====
function createFloatingCallButtons() {
    const floatingContainer = document.createElement('div');
    floatingContainer.className = 'floating-call-buttons';
    floatingContainer.innerHTML = `
        <a href="tel:01040484460" class="floating-btn call-btn" title="اتصل الآن">
            <span class="btn-icon">📞</span>
            <span class="btn-text">01040484460</span>
        </a>
        <a href="tel:01004195791" class="floating-btn whatsapp-btn" title="واتساب">
            <span class="btn-icon">💬</span>
            <span class="btn-text">01004195791</span>
        </a>
    `;
    document.body.appendChild(floatingContainer);

    // Add styles for floating buttons
    const floatingStyles = document.createElement('style');
    floatingStyles.textContent = `
        .floating-call-buttons {
            position: fixed;
            bottom: 2rem;
            left: 2rem;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            z-index: 999;
        }
        
        .floating-btn {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.25rem;
            border-radius: 50px;
            text-decoration: none;
            color: white;
            font-weight: 600;
            font-family: 'Cairo', sans-serif;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
            overflow: hidden;
        }
        
        .floating-btn:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4);
        }
        
        .call-btn {
            background: linear-gradient(135deg, #22c55e, #16a34a);
        }
        
        .whatsapp-btn {
            background: linear-gradient(135deg, #25d366, #128c7e);
        }
        
        .btn-icon {
            font-size: 1.25rem;
        }
        
        .btn-text {
            font-size: 0.9rem;
            direction: ltr;
        }
        
        @media (max-width: 768px) {
            .floating-call-buttons {
                bottom: 1rem;
                left: 1rem;
            }
            
            .floating-btn {
                padding: 0.6rem 1rem;
            }
            
            .btn-text {
                display: none;
            }
            
            .btn-icon {
                font-size: 1.5rem;
            }
        }
    `;
    document.head.appendChild(floatingStyles);
}

// ===== Data Management =====
function loadMenuData() {
    // Try to load from localStorage first
    const savedData = localStorage.getItem('familyBroastMenu');
    if (savedData) {
        menuData = JSON.parse(savedData);
    } else {
        // Use default data from data.js
        menuData = JSON.parse(JSON.stringify(MENU_DATA));
    }
}

function saveMenuData() {
    localStorage.setItem('familyBroastMenu', JSON.stringify(menuData));
}

function resetMenuData() {
    if (confirm('هل أنت متأكد من إعادة تعيين جميع البيانات؟ سيتم حذف جميع التعديلات.')) {
        localStorage.removeItem('familyBroastMenu');
        menuData = JSON.parse(JSON.stringify(MENU_DATA));
        renderCategories();
        renderMenu();
        showNotification('تم إعادة تعيين البيانات بنجاح', 'success');
    }
}

// ===== Event Listeners =====
function setupEventListeners() {
    // Dev Mode Toggle - Requires Authentication
    elements.devModeToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            if (isAuthenticated) {
                enableDevMode();
            } else {
                // Show login modal
                openLoginModal();
            }
        } else {
            // Turning off dev mode
            isDevMode = false;
            elements.devBanner.classList.remove('active');
            renderMenu();
        }
    });

    // Add New Item
    elements.addNewItemBtn.addEventListener('click', openAddModal);

    // Reset Data
    elements.resetDataBtn.addEventListener('click', resetMenuData);

    // Logout
    elements.logoutBtn.addEventListener('click', logout);

    // Login Modal Controls
    elements.closeLoginModal.addEventListener('click', closeLoginModal);
    elements.cancelLogin.addEventListener('click', closeLoginModal);
    elements.loginForm.addEventListener('submit', handleLogin);
    elements.loginModal.addEventListener('click', (e) => {
        if (e.target === elements.loginModal) closeLoginModal();
    });

    // Modal Controls
    elements.closeModal.addEventListener('click', closeEditModal);
    elements.closeAddModal.addEventListener('click', closeAddModal);
    elements.cancelEdit.addEventListener('click', closeEditModal);
    elements.cancelAdd.addEventListener('click', closeAddModal);

    // Forms
    elements.editForm.addEventListener('submit', handleEditSubmit);
    elements.addForm.addEventListener('submit', handleAddSubmit);

    // Delete Item
    elements.deleteItemBtn.addEventListener('click', handleDeleteItem);

    // Image Upload - Edit Modal
    elements.imageUploadArea.addEventListener('click', () => {
        elements.imageUpload.click();
    });
    elements.imageUpload.addEventListener('change', (e) => {
        handleImageUpload(e, elements.imagePreview, document.getElementById('editImage'));
    });

    // Image Upload - Add Modal
    elements.addImageUploadArea.addEventListener('click', () => {
        elements.addImageUpload.click();
    });
    elements.addImageUpload.addEventListener('change', (e) => {
        handleImageUpload(e, elements.addImagePreview, document.getElementById('addImage'));
    });

    // Close modals on outside click
    elements.editModal.addEventListener('click', (e) => {
        if (e.target === elements.editModal) closeEditModal();
    });
    elements.addModal.addEventListener('click', (e) => {
        if (e.target === elements.addModal) closeAddModal();
    });

    // Theme & Lang Toggles
    elements.themeToggle.addEventListener('click', toggleTheme);
    elements.langToggle.addEventListener('click', toggleLang);
    elements.tvToggle.addEventListener('click', toggleTVMode);
    elements.desktopToggle.addEventListener('click', toggleDesktopView);
    elements.scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Handle Scroll Top visibility
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            elements.scrollTopBtn.classList.add('active');
        } else {
            elements.scrollTopBtn.classList.remove('active');
        }
    });
}

// ===== Image Upload Handler =====
function handleImageUpload(event, previewElement, urlInput) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            previewElement.src = e.target.result;
            previewElement.style.display = 'block';
            previewElement.previousElementSibling.style.display = 'none';
            urlInput.value = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// ===== Render Categories =====
function renderCategories() {
    const tabsContainer = elements.categoryNav.querySelector('.category-tabs');

    let html = `
        <button class="category-tab ${activeCategory === 'all' ? 'active' : ''}" data-category="all">
            <span class="icon">📋</span>
            <span>الكل</span>
        </button>
    `;

    menuData.categories.forEach(category => {
        const categoryName = currentLang === 'ar' ? category.name : (category.nameEn || category.name);
        html += `
            <button class="category-tab ${activeCategory === category.id ? 'active' : ''}" data-category="${category.id}">
                <span class="icon">${category.icon}</span>
                <span>${categoryName}</span>
            </button>
        `;
    });

    tabsContainer.innerHTML = html;

    // Add click handlers
    tabsContainer.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            activeCategory = tab.dataset.category;
            renderCategories();
            renderMenu();
        });
    });

    // Populate add modal category select
    elements.addCategory.innerHTML = menuData.categories.map(cat =>
        `<option value="${cat.id}">${cat.name}</option>`
    ).join('');
}

// ===== Render Menu =====
function renderMenu() {
    let html = '';

    const categoriesToShow = activeCategory === 'all'
        ? menuData.categories
        : menuData.categories.filter(cat => cat.id === activeCategory);

    if (categoriesToShow.length === 0) {
        html = `
            <div class="empty-state">
                <div class="icon">🍽️</div>
                <h3>لا توجد أصناف</h3>
                <p>لم يتم العثور على أصناف في هذه الفئة</p>
            </div>
        `;
    } else {
        categoriesToShow.forEach(category => {
            // Category Header
            if (activeCategory === 'all') {
                const categoryName = currentLang === 'ar' ? category.name : (category.nameEn || category.name);
                html += `
                    <div class="category-header fade-in-up">
                        <h2>${category.icon} ${categoryName}</h2>
                    </div>
                `;
            }

            // Category Items
            category.items.forEach(item => {
                html += createMenuItemCard(item, category.id);
            });
        });
    }

    elements.menuGrid.innerHTML = html;

    // Add click handlers for editable items
    if (isDevMode) {
        document.querySelectorAll('.menu-item.editable').forEach(card => {
            card.addEventListener('click', () => {
                const itemId = parseInt(card.dataset.itemId);
                const categoryId = card.dataset.categoryId;
                openEditModal(categoryId, itemId);
            });
        });
    }
}

function createMenuItemCard(item, categoryId) {
    const isEn = currentLang === 'en';
    const editableClass = isDevMode ? 'editable' : '';
    const currency = isEn ? 'EGP' : 'ج.م';
    const itemName = isEn ? (item.nameEn || item.name) : item.name;
    const itemDesc = isEn ? (item.descriptionEn || item.description) : item.description;

    return `
        <article class="menu-item ${editableClass} fade-in-up" data-item-id="${item.id}" data-category-id="${categoryId}">
            <div class="item-image">
                <img src="${item.image}" alt="${itemName}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x200?text=No+Image'">
                <div class="item-price">${item.price} ${currency}</div>
            </div>
            <div class="item-content">
                <h3 class="item-name">${itemName}</h3>
                <p class="item-description">${itemDesc || ''}</p>
            </div>
        </article>
    `;
}

// ===== Edit Modal =====
function openEditModal(categoryId, itemId) {
    const category = menuData.categories.find(c => c.id === categoryId);
    const item = category.items.find(i => i.id === itemId);

    if (!item) return;

    document.getElementById('editItemId').value = itemId;
    document.getElementById('editCategoryId').value = categoryId;
    document.getElementById('editName').value = item.name;
    document.getElementById('editDescription').value = item.description || '';
    document.getElementById('editPrice').value = item.price;
    document.getElementById('editImage').value = item.image || '';

    // Reset image preview
    elements.imagePreview.src = item.image || '';
    elements.imagePreview.style.display = item.image ? 'block' : 'none';
    elements.imagePreview.previousElementSibling.style.display = item.image ? 'none' : 'flex';

    document.getElementById('modalTitle').textContent = `تعديل: ${item.name}`;
    elements.editModal.classList.add('active');
}

function closeEditModal() {
    elements.editModal.classList.remove('active');
    elements.editForm.reset();
    elements.imagePreview.style.display = 'none';
    elements.imagePreview.previousElementSibling.style.display = 'flex';
}

function handleEditSubmit(e) {
    e.preventDefault();

    const itemId = parseInt(document.getElementById('editItemId').value);
    const categoryId = document.getElementById('editCategoryId').value;
    const name = document.getElementById('editName').value.trim();
    const description = document.getElementById('editDescription').value.trim();
    const price = document.getElementById('editPrice').value.trim();
    const image = document.getElementById('editImage').value.trim();

    // Find and update the item
    const category = menuData.categories.find(c => c.id === categoryId);
    const itemIndex = category.items.findIndex(i => i.id === itemId);

    if (itemIndex !== -1) {
        category.items[itemIndex] = {
            ...category.items[itemIndex],
            name,
            description,
            price,
            image: image || category.items[itemIndex].image
        };

        saveMenuData();
        renderMenu();
        closeEditModal();
        showNotification('تم حفظ التغييرات بنجاح', 'success');
    }
}

function handleDeleteItem() {
    const itemId = parseInt(document.getElementById('editItemId').value);
    const categoryId = document.getElementById('editCategoryId').value;
    const itemName = document.getElementById('editName').value;

    if (confirm(`هل أنت متأكد من حذف "${itemName}"؟`)) {
        const category = menuData.categories.find(c => c.id === categoryId);
        category.items = category.items.filter(i => i.id !== itemId);

        saveMenuData();
        renderMenu();
        closeEditModal();
        showNotification('تم حذف الصنف بنجاح', 'success');
    }
}

// ===== Add Modal =====
function openAddModal() {
    elements.addModal.classList.add('active');
}

function closeAddModal() {
    elements.addModal.classList.remove('active');
    elements.addForm.reset();
    elements.addImagePreview.style.display = 'none';
    elements.addImagePreview.previousElementSibling.style.display = 'flex';
}

function handleAddSubmit(e) {
    e.preventDefault();

    const categoryId = document.getElementById('addCategory').value;
    const name = document.getElementById('addName').value.trim();
    const description = document.getElementById('addDescription').value.trim();
    const price = document.getElementById('addPrice').value.trim();
    const image = document.getElementById('addImage').value.trim() || 'https://via.placeholder.com/400x200?text=New+Item';

    // Generate new ID
    const allItems = menuData.categories.flatMap(c => c.items);
    const newId = allItems.length > 0 ? Math.max(...allItems.map(i => i.id)) + 1 : 1;

    // Add new item
    const category = menuData.categories.find(c => c.id === categoryId);
    category.items.push({
        id: newId,
        name,
        description,
        price,
        image
    });

    saveMenuData();

    // Switch to the category of the new item
    activeCategory = categoryId;
    renderCategories();
    renderMenu();

    closeAddModal();
    showNotification('تم إضافة الصنف بنجاح', 'success');
}

// ===== Notification =====
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        padding: 1rem 2rem;
        border-radius: 12px;
        color: white;
        font-weight: 600;
        z-index: 2000;
        animation: slideUp 0.3s ease;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        background: ${type === 'success' ? 'linear-gradient(135deg, #4ade80, #22c55e)' :
            type === 'error' ? 'linear-gradient(135deg, #f87171, #ef4444)' :
                'linear-gradient(135deg, #60a5fa, #3b82f6)'};
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add fadeOut animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(20px); }
    }
`;
document.head.appendChild(style);
