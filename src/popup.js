// popup.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const input = document.getElementById('search-input');
    const button = document.getElementById('search-btn');

    function doSearch() {
        const query = encodeURIComponent(input.value.trim());
        if (query) {
            const url = `https://www.google.com/search?q=${query}`;
            chrome.tabs.create({ url });
        }
    }

    if (form && input) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            doSearch();
        });
    }

    if (button) {
        button.addEventListener('click', doSearch);
    }
});