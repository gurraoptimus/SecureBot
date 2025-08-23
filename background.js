/**
 * SecureBot/background.js
 * Background script for a secure extension that listens for messages to perform Google searches.
 * This script opens a new tab with the Google search results for a given query.
 *
 *  ____                          _           ____        _   
 * / ___|  ___  _   _ _ __   ___ | |__   ___ | __ )  ___ | |_ 
 * \___ \ / _ \| | | | '_ \ / _ \| '_ \ / _ \|  _ \ / _ \| __|
 *  ___) | (_) | |_| | |_) | (_) | | | | (_) | |_) | (_) | |_ 
 * |____/ \___/ \__,_| .__/ \___/|_| |_|\___/|____/ \___/ \__|
 *                   |_|                                      
 *                   SecureBot
 */
console.log(
    "%c ____                          _           ____        _   \n" +
    "%c/ ___|  ___  _   _ _ __   ___ | |__   ___ | __ )  ___ | |_ \n" +
    "%c\\___ \\ / _ \\| | | | '_ \\ / _ \\| '_ \\ / _ \\|  _ \\ / _ \\| __|\n" +
    "%c ___) | (_) | |_| | |_) | (_) | | | | (_) | |_) | (_) | |_ \n" +
    "%c|____/ \\___/ \\__,_| .__/ \\___/|_| |_|\\___/|____/ \\___/ \\__|\n" +
    "%c                   |_|                                      \n" +
    "%c                   SecureBot",
    "color: #4CAF50; font-weight: bold;",
    "color: #2196F3;",
    "color: #FFC107;",
    "color: #FF5722;",
    "color: #9C27B0;",
    "color: #607D8B;",
    "color: #009688; font-weight: bold;"
);
console.log(
    "%c🐣 You've found the %csecure Extension Easter Egg%c! Happy coding!",
    "color: #fff; background: #222; padding: 2px 6px; border-radius: 3px;",
    "color: #4CAF50; font-weight: bold; background: #222; padding: 2px 6px; border-radius: 3px;",
    "color: #fff; background: #222; padding: 2px 6px; border-radius: 3px;"
);

// console.log("🐣 You've found the secure Extension Easter Egg! Happy coding!");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "googleSearch" && request.query) {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(request.query)}`;
        chrome.tabs.create({ url: searchUrl });
        sendResponse({ status: "success" });
    }
});