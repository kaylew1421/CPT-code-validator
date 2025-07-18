import json
import random

# Example payers
payers = ["BlueCross", "UnitedHealth", "Aetna", "Cigna", "Humana"]

# Example rule templates
rule_templates = [
    "Prior authorization required for new patients.",
    "No prior authorization required.",
    "Requires clinical documentation before approval.",
    "Pre-approval required for outpatient procedures.",
    "Requires prior authorization for repeated procedures.",
    "No restrictions.",
    "Requires documentation of procedure.",
    "Prior authorization required only for specific patient groups.",
    "Requires prior authorization for inpatient settings.",
    "Covered under preventive services without auth."
]

def generate_rules_for_code():
    rules = {}
    # Randomly assign rules to 1-3 payers for each code
    for payer in random.sample(payers, random.randint(1, 3)):
        rules[payer] = random.choice(rule_templates)
    return rules

# Generate CPT codes: 1000 codes starting from 10000 to 10999
rules_data = {}
for i in range(10000, 11000):
    code_str = str(i)
    # Randomly decide if this code has rules (~50% chance)
    if random.random() < 0.5:
        rules_data[code_str] = generate_rules_for_code()

# Write to JSON file
with open('rules.json', 'w') as f:
    json.dump(rules_data, f, indent=2)

print(f"Generated rules.json with {len(rules_data)} CPT codes having payer rules.")
