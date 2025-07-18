import json
import random

def generate_cpt_code():
    if random.random() < 0.2:
        prefix = random.choice(['G', 'A', 'B', 'C'])
        code = prefix + ''.join(random.choices('0123456789', k=4))
    else:
        code = ''.join(random.choices('0123456789', k=5))
    return code

def generate_description():
    verbs = ['Injection', 'Examination', 'Consultation', 'Therapy', 'Surgery', 'Imaging', 'Biopsy', 'Screening', 'Evaluation']
    adjectives = ['diagnostic', 'therapeutic', 'preventive', 'supportive', 'complex', 'simple', 'advanced', 'basic']
    nouns = ['procedure', 'treatment', 'service', 'assessment', 'test', 'care', 'intervention']

    return f"{random.choice(verbs)}, {random.choice(adjectives)} {random.choice(nouns)}"

def generate_cpt_data(num=1000):
    cpt_list = []
    codes_set = set()

    while len(cpt_list) < num:
        code = generate_cpt_code()
        if code in codes_set:
            continue
        codes_set.add(code)
        description = generate_description()
        cpt_list.append({"code": code, "description": description})

    return cpt_list

if __name__ == "__main__":
    data = generate_cpt_data()
    with open("cpt-codes.json", "w") as f:
        json.dump(data, f, indent=2)
    print(f"Generated {len(data)} CPT codes in cpt-codes.json")
