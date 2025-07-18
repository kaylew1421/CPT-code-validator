# 📋 CPT + Payer Rules Validator (Chrome Extension + Web App)

A modern, easy-to-use tool to validate **CPT (Current Procedural Terminology)** codes and display **payer-specific rules** — now available as both a **Chrome Extension** and standalone web app.

🔗 Web Demo: [https://kaylew1421.github.io/CPT-code-validator/](https://kaylew1421.github.io/CPT-code-validator/)  
🧩 Chrome Extension: Load `CPT-Validator` folder in Chrome → Extensions → Load unpacked

---

## 💡 What Does It Do?

This project helps healthcare staff and developers:

- ✅ Validate CPT codes (mock dataset)
- ✅ Check payer-specific rules (e.g., Medicare, Blue Cross, United)
- ✅ Input **multiple codes at once**
- ✅ View **validation history** that persists during the session
- ✅ Use an intuitive Chrome Extension UI or standalone web version

---

## 🧩 Chrome Extension Features

| Feature                  | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| 🧾 CPT Code Lookup       | Validates whether a code exists in mock dataset and matches 5-digit format |
| 💼 Payer Rule Checks     | Returns payer-specific rules per code using `rules.json`                   |
| 📚 History Tracking      | Results persist in session and can be cleared manually                     |
| 🖼️ Popup UI              | Clean, responsive extension popup for on-the-fly validation                |
| 💾 Offline Ready         | Loads local JSON data and works without internet                           |

---

## 📂 Folder Structure

CPT-Validator/

├── manifest.json

├── popup.html

├── script.js

├── style.css

├── background.js

├── cpt-codes.json

├── rules.json

├── icon16.png

├── icon48.png

└── icon128.png


---

## 🛠️ Tech Stack

- **HTML/CSS/JavaScript (Vanilla)**
- **JSON** (for mock CPT + rule data)
- **Chrome Extension APIs**
- **Optional: Python** (used to generate mock data files)
- **Jest** (included in web project for future unit testing)

---

## ⚙️ How to Use

### 🚀 Web App

1. Open `index.html` or visit:  
   [https://kaylew1421.github.io/CPT-code-validator/](https://kaylew1421.github.io/CPT-code-validator/)

---

### 🧩 Chrome Extension

1. Open Chrome
2. Go to: `chrome://extensions`
3. Enable **Developer Mode**
4. Click **Load Unpacked**
5. Select the `CPT-Validator/` folder

✅ Done! Click the extension icon to launch the validator.

---

## ✨ Future Improvements

Integrate with CPT data APIs (once licensed)

Add FHIR/NPI validation

Dark mode UI toggle

Export validation reports

----

## 🔒 Licensing Note
This tool uses mock CPT data only and does not include licensed AMA CPT codes.
For commercial use or integration with real CPT APIs (e.g., AAPC, CMS), a proper license is required.

----

## 🧼 Quick Cleanup

To clear stored validation history in the extension:

Use the "🗑️ Clear History" button in the popup UI


**Thanks for trying this out! Healthcare tools should be clear, accessible, and fast — just like this.**

## Made with ❤️ by Kayla Lewis
