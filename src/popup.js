/**
 * Chrome Search Bot - popup.js
 * This script allows users to enter a query and opens a new tab with Google search results.
 */

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const input = document.getElementById('search-input');

    if (form && input) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = encodeURIComponent(input.value.trim());
            if (query) {
                chrome.tabs.create({
                    url: `https://www.google.com/search?q=${query}`
                });
            }
        });
    } else {
        console.error('search-form or search-input not found in popup.html');
    }
});