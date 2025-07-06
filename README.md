# 📋 CPT + Payer Rules Validator

A web-based tool to validate **CPT (Current Procedural Terminology)** codes and display **payer-specific rules** to assist healthcare staff with prior authorization, eligibility checks, and documentation accuracy.

---

## 🎯 What is this project?

This project helps users:
- Validate if a CPT code exists and is properly formatted (5-digit numeric).
- Enter **multiple CPT codes** at once and get results for each.
- Select a **payer** (like Medicare, Blue Cross, United) to see any payer-specific rules tied to the CPT code(s).
- See suggestions/autocomplete when typing a CPT code.
- Track validation history in the browser session.
- Learn from a clear, modern, and professional user interface.

It demonstrates my skills in:
✅ Front-end web development  
✅ Clean UI/UX design  
✅ Data validation and error handling  
✅ Working with JSON datasets  
✅ Organizing and documenting a realistic healthcare-related application

---

## 🚀 Features Explained

| Feature                         | Explanation |
|---------------------------------|-------------|
| 🔍 **CPT Validation** | Checks if entered CPT codes match any in the dataset (`cpt-codes.json`) and ensures proper 5-digit format. |
| 📋 **Payer Rules Lookup** | For each CPT code entered, shows payer-specific notes or requirements, based on `rules.json`. |
| 📝 **Batch Validation** | Users can input **multiple CPT codes** at once, separated by commas or spaces, and see all results. |
| 📖 **Validation History** | Each validation result is appended to a session history, so users can review prior queries. |
| ✨ **Autocomplete Suggestions** | While typing, suggestions from the dataset appear to help users select valid codes faster. |
| 🎨 **Modern UI** | Attractive, responsive design with clear feedback and a sidebar with inspirational content. |
| 📦 **Mock Data Generation** | Includes Python scripts to generate large, realistic datasets of CPT codes and payer rules for testing. |
| 🧪 **Test Scaffolding** | Ready for unit testing with Jest to demonstrate testable JavaScript code. |

---

## 📂 Project Structure


---

## 🛠️ Technologies Used

- **HTML5 & CSS3** — for structure & styling
- **Vanilla JavaScript (ES6+)** — for logic & DOM manipulation
- **JSON** — for mock data & rules
- **Python** — for generating realistic datasets
- **Jest** — to write & run JavaScript unit tests
- **Git & GitHub** — for version control & hosting

---

## 💻 Usage
(https://kaylew1421.github.io/CPT-code-validator/)

### 🔧 Setup
1️⃣ Clone the repo:
```bash
git clone https://github.com/kaylew1421/CPT-code-validator.git
cd CPT-code-validator

python generate_cpt_data.py
python generate_rules.py
npm install
npx jest
