<!-- Robot SVG Logo -->
<p align="center">
    <svg width="160" height="160" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <style>
            .antenna { animation: pulse 2s infinite; }
            @keyframes pulse {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-4px); }
            }
            .eye { animation: blink 3s infinite; }
            @keyframes blink {
                0%, 90%, 100% { ry: 20; }
                95% { ry: 5; }
            }
            .shield {
                animation: glow 2s infinite;
                filter: drop-shadow(0 0 8px #2ecc71) drop-shadow(0 0 16px #27ae60);
                fill: #27AE60;
                transition: fill 0.2s;
            }
            @keyframes glow {
                0%, 100% { fill: #27AE60; }
                50% { fill: #2ECC71; }
            }
        </style>
        <!-- Background Circle -->
        <circle cx="256" cy="256" r="240" fill="#1C2A4A"/>
        <!-- Robot Head -->
        <rect x="176" y="160" width="160" height="120" rx="30" fill="#D5D8DC"/>
        <ellipse class="eye" cx="216" cy="220" rx="20" ry="20" fill="#1C2A4A"/>
        <ellipse class="eye" cx="296" cy="220" rx="20" ry="20" fill="#1C2A4A"/>
        <!-- Antenna -->
        <line class="antenna" x1="256" y1="160" x2="256" y2="130" stroke="#D5D8DC" stroke-width="6"/>
        <circle class="antenna" cx="256" cy="120" r="8" fill="#D5D8DC"/>
        <!-- Shield with Padlock (Animated) -->
        <g>
            <path class="shield" d="M256 300 L296 340 L256 400 L216 340 Z" />
            <rect x="246" y="330" width="20" height="30" rx="5" fill="#fff"/>
            <circle cx="256" cy="320" r="5" fill="#fff"/>
        </g>
        <!-- Animated Text -->
        <text x="50%" y="470" text-anchor="middle" font-size="48" fill="#1C2A4A" font-family="sans-serif" font-weight="bold">
            SecureBot
            <animate attributeName="fill" values="#1C2A4A;#4285f4;#27AE60;#1C2A4A" dur="2.5s" repeatCount="indefinite"/>
        </text>
    </svg>
</p>
<div align="center">

# <span style="color:#4285f4;">SecureBot</span>
### <span style="font-size:1.1em; color:#222;">A Google Search Bot for Chrome</span>

---

SecureBot is a Chrome extension that automates and enhances your Google search experience. It helps you perform efficient, secure, and customizable searches directly from your browser.

</div>

---

<div align="center">

<table>
    <tr>
        <td align="center" width="33%">
            <img src="https://img.shields.io/badge/Chrome-Extension-blue?logo=googlechrome" alt="Chrome Extension" />
        </td>
        <td align="center" width="33%">
            <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="MIT License" />
        </td>
        <td align="center" width="33%">
            <a href="https://github.com/yourusername/SecureBot">
                <img src="https://img.shields.io/badge/GitHub-Repository-black?logo=github" alt="GitHub Repo" />
            </a>
        </td>
    </tr>
</table>

</div>

---

## 🚀 Features

- **Automated Google searches:** Perform searches with a single click or keyboard shortcut.
- **Search customization:** Filter results, set safe search, and use advanced query options.
- **Privacy-focused:** No tracking or data collection; searches are performed securely.
- **Quick access:** Search from anywhere in Chrome via the extension popup or context menu.
- **Lightweight:** Minimal permissions and fast performance.

---

## 🛠️ Getting Started

1. **Install the extension:**  
   Download SecureBot from the [Chrome Web Store](https://chrome.google.com/webstore) or load it as an unpacked extension.
2. **Configure preferences:**  
   Click the SecureBot icon in your Chrome toolbar to set up search options and shortcuts.
3. **Start searching:**  
   Use the popup or context menu to perform Google searches instantly.

---

## 📦 Requirements

- Google Chrome (latest version)
- Permissions: Access to tabs for search automation

---

## 👤 Developed by

- **Your Name or Team**
- [GitHub Repository](https://github.com/gurraoptimus/SecureBot)

---

## 📄 License

Licensed under the MIT License.

---

<div align="center" style="color:#888;">
    <em>Copyright &copy; Gurraoptimus Development. All rights reserved.</em>
</div>
