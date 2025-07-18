let cptData = [];
let rulesData = [];

document.addEventListener("DOMContentLoaded", () => {
  const cptInput = document.getElementById("cptInput");
  const payerInput = document.getElementById("payerInput");
  const validateBtn = document.getElementById("validateBtn");
  const historyEl = document.getElementById("history");
  const clearBtn = document.getElementById("clearHistory");

  // Load saved validation history
  chrome.storage.local.get(["validationHistory"], (result) => {
    if (result.validationHistory) {
      historyEl.innerHTML = result.validationHistory;
    }
  });

  // Load CPT and rule data
  fetch("cpt-codes.json")
    .then(res => res.json())
    .then(data => { cptData = data; })
    .catch(err => console.error("Error loading CPT codes:", err));

  fetch("rules.json")
    .then(res => res.json())
    .then(data => { rulesData = data; })
    .catch(err => console.error("Error loading rules.json:", err));

  // Validate codes
  validateBtn.addEventListener("click", () => {
    const codeInput = cptInput.value.trim();
    const payer = payerInput.value.trim();

    if (!codeInput || !payer) {
      const warning = `<div class="warn">❌ Please enter CPT code(s) and select a payer.</div><hr/>`;
      historyEl.innerHTML += warning;
      chrome.storage.local.set({ validationHistory: historyEl.innerHTML });
      return;
    }

    const codes = codeInput.split(/[,\s]+/);

    codes.forEach(code => {
      const cpt = cptData.find(item => item.code === code);
      let output = "";

      if (cpt) {
        const payerRules = rulesData[code];
        const rule = payerRules && payerRules[payer]
          ? payerRules[payer]
          : "No specific rules found for this payer.";

        const isOk = rule.toLowerCase().includes("not required") || rule.toLowerCase().includes("no prior");
        const cssClass = isOk ? "ok" : "warn";

        output = `
          <div>
            ✅ <strong>${cpt.code}</strong>: ${cpt.description}<br/>
            <em>${payer}</em> → <span class="${cssClass}">${rule}</span>
          </div><hr/>
        `;
      } else {
        output = `
          <div class="warn">
            ❌ CPT code <strong>${code}</strong> not found.
          </div><hr/>
        `;
      }

      historyEl.innerHTML += output;
      chrome.storage.local.set({ validationHistory: historyEl.innerHTML });
    });
  });

  // Clear history
  clearBtn.addEventListener("click", () => {
    chrome.storage.local.remove("validationHistory", () => {
      historyEl.innerHTML = "";
    });
  });
});
