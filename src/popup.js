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
    const texts = [
        "What do you want to search for?",
        "Available on GitHub!"
    ];
    const descElem = document.getElementById("typewriter-desc");
    let textIndex = 0;
    let i = 0;
    let isDeleting = false;

    function typeWriter() {
        if (!descElem) return;
        const text = texts[textIndex];
        if (!isDeleting && i < text.length) {
            descElem.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 40);
        } else if (isDeleting && i > 0) {
            descElem.textContent = text.substring(0, i - 1);
            i--;
            setTimeout(typeWriter, 30);
        } else if (!isDeleting && i === text.length) {
            setTimeout(() => {
                isDeleting = true;
                typeWriter();
            }, 1200);
        } else if (isDeleting && i === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeWriter, 500);
        }
    }

    typeWriter();
});
