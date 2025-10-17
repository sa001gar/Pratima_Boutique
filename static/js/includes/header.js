function toggleSearch() {
        const mobileSearch = document.getElementById('mobileSearch');
        mobileSearch.classList.toggle('hidden');
    }

    function handleSearch(event) {
        event.preventDefault();
        const query = event.target.querySelector('input').value;
        if (query.trim()) {
            window.location.href = `shop.html?search=${encodeURIComponent(query)}`;
        }
    }

    // Update cart count dynamically if needed
    function updateCartCount(count) {
        const cartCount = document.getElementById('cartCount');
        if (count > 0) {
            cartCount.textContent = count;
            cartCount.classList.remove('hidden');
        } else {
            cartCount.classList.add('hidden');
        }
    }