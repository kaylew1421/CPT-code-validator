let cptData = [];
let rulesData = {};

// Load CPT codes from JSON
fetch('cpt-codes.json')
  .then(response => response.json())
  .then(data => {
    cptData = data;
  })
  .catch(error => {
    console.error('Error loading cpt-codes.json:', error);
  });

// Load payer rules from JSON
fetch('rules.json')
  .then(response => response.json())
  .then(data => {
    rulesData = data;
  })
  .catch(error => {
    console.error('Error loading rules.json:', error);
  });

function validateCPTWithPayer() {
  const cptInput = document.getElementById('cptInput').value.trim();
  const payerInput = document.getElementById('payerInput').value.trim();
  const resultEl = document.getElementById('result');
  const historyEl = document.getElementById('history');

  if (!cptInput || !payerInput) {
    resultEl.innerHTML = `<div class="warn">❌ Please enter CPT code(s) and select a payer.</div>`;
    return;
  }

  const codes = cptInput.split(/[,\s]+/);
  resultEl.innerHTML = "";

  codes.forEach(code => {
    const cptFound = cptData.find(item => item.code === code);
    let output = "";

    if (cptFound) {
      // Lookup rule for this code and payer
      const codeRules = rulesData[code];
      const rule = codeRules && codeRules[payerInput] ? codeRules[payerInput] : "No specific rules found for this payer.";

      const isOk = rule.toLowerCase().includes("not required") || rule.toLowerCase().includes("no prior");
      const cssClass = isOk ? "ok" : "warn";

      output = `
        <div>
          ✅ <strong>${cptFound.code}</strong>: ${cptFound.description} <br/>
          <em>${payerInput}</em> → <span class="${cssClass}">${rule}</span>
        </div><hr/>
      `;
    } else {
      output = `
        <div class="warn">
          ❌ CPT code <strong>${code}</strong> not found.
        </div><hr/>
      `;
    }

    resultEl.innerHTML += output;
    historyEl.innerHTML += output;
  });
}
