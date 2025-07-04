let cptData = [];

// Load CPT codes from JSON
fetch('cpt-codes.json')
  .then(response => response.json())
  .then(data => {
    cptData = data;
  })
  .catch(error => {
    console.error('Error loading CPT codes:', error);
  });

function validateCPT() {
  const input = document.getElementById('cptInput').value.trim();
  const resultEl = document.getElementById('result');

  // Check format (5-digit number)
  const regex = /^\d{5}$/;
  if (!regex.test(input)) {
    resultEl.textContent = "❌ Invalid CPT format. Should be 5 digits.";
    resultEl.style.color = "red";
    return;
  }

  const found = cptData.find(item => item.code === input);

  if (found) {
    resultEl.textContent = `✅ ${found.code}: ${found.description}`;
    resultEl.style.color = "green";
  } else {
    resultEl.textContent = "❌ CPT code not found.";
    resultEl.style.color = "red";
  }
}
