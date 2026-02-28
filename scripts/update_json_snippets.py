import json
import os

def update_json_with_snippets():
    # Map the JSON files to the snippet names generated
    file_to_snippet = {
        "vegetable_hot_garlic_sauce.json": "vegetable_hot_garlic_sauce.jpg",
        "garlic_pickle.json": "garlic_pickle.jpg",
        "chicken_biriyani.json": "chicken_biriyani.jpg",
        "milk_payasam.json": "milk_payasam.jpg",
        "bitter_gourd_roast.json": "bitter_gourd_roast.jpg",
        "idli_bites.json": "idli_bites.jpg",
        "fried_mushroom.json": "fried_mushroom.jpg",
        "garam_masala.json": "garam_masala.jpg",
        "paneer_podimas.json": "paneer_podimas.jpg",
        "kofta_noorjahan.json": "kofta_noorjahan.jpg",
        "coconut_burfi.json": "coconut_burfi.jpg",
        "rava_badam_laddu.json": "rava_badam_laddu.jpg",
        "pani_puri.json": "pani_puri.jpg",
        "poli.json": "poli.jpg",
        "appam.json": "appam.jpg",
        "lemon_pickle.json": "lemon_pickle.jpg",
        "tomato_pickle.json": "tomato_pickle.jpg",
        "thavala_vadai.json": "thavala_vadai.jpg",
        "adai.json": "adai.jpg",
        "kari_masala_powder.json": "kari_masala_powder.jpg",
        "gobi_manchurian.json": "gobi_manchurian.jpg",
        "vegetable_mandi.json": "vegetable_mandi.jpg",
        "cold_cucumber_soup.json": "cold_cucumber_soup.jpg",
        "crunchy_cauliflower.json": "crunchy_cauliflower.jpg"
    }
    
    # Special cases for consolidated recipes
    special_cases = {
        "sambar_powder_3_variations.json": [
            "sambar_powder_batch_1.jpg", 
            "sambar_powder_variation_2.jpg", 
            "sambar_powder_batch_3.jpg"
        ],
        "rasam_powder_2_variations.json": [
            "rasam_powder_batch_1.jpg", 
            "rasam_powder_batch_2.jpg"
        ]
    }

    recipes_dir = 'recipes'
    for filename in os.listdir(recipes_dir):
        if not filename.endswith('.json') or filename == 'index.json':
            continue
            
        file_path = os.path.join(recipes_dir, filename)
        with open(file_path, 'r', encoding='utf-8') as f:
            recipe = json.load(f)
            
        if filename in file_to_snippet:
            recipe['original_snippets'] = [file_to_snippet[filename]]
        elif filename in special_cases:
            recipe['original_snippets'] = special_cases[filename]
        else:
            print(f"No snippet for {filename}")
            continue
            
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(recipe, f, ensure_ascii=False, indent=2)
        print(f"Updated {filename} with snippets.")

if __name__ == "__main__":
    update_json_with_snippets()
