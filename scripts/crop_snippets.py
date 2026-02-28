import cv2
import numpy as np
import os

def get_recipe_snippets():
    mapping = [
        {"name": "vegetable_hot_garlic_sauce", "page": 1, "top": 0, "bottom": 0.5},
        {"name": "garlic_pickle", "page": 1, "top": 0.5, "bottom": 1.0},
        {"name": "chicken_biriyani", "page": 2, "top": 0, "bottom": 1.0},
        {"name": "milk_payasam", "page": 3, "top": 0, "bottom": 1.0},
        {"name": "bitter_gourd_roast", "page": 4, "top": 0, "bottom": 1.0},
        {"name": "sambar_powder_batch_1", "page": 5, "top": 0, "bottom": 1.0},
        {"name": "rasam_powder_batch_1", "page": 6, "top": 0, "bottom": 1.0},
        {"name": "idli_bites", "page": 7, "top": 0, "bottom": 0.25},
        {"name": "fried_mushroom", "page": 7, "top": 0.25, "bottom": 0.6},
        {"name": "garam_masala", "page": 7, "top": 0.6, "bottom": 1.0},
        {"name": "paneer_podimas", "page": 8, "top": 0, "bottom": 1.0},
        # Kofta Noorjahan spans across Page 9 and the top half of Page 10
        {"name": "kofta_noorjahan_p1", "page": 9, "top": 0, "bottom": 1.0},
        {"name": "kofta_noorjahan_p2", "page": 10, "top": 0, "bottom": 0.5},
        {"name": "sambar_powder_variation_2", "page": 10, "top": 0.5, "bottom": 1.0},
        {"name": "coconut_burfi", "page": 11, "top": 0, "bottom": 0.28},
        {"name": "coconut_burfi_variation_2", "page": 11, "top": 0.28, "bottom": 0.5},
        {"name": "rava_badam_laddu", "page": 11, "top": 0.5, "bottom": 1.0},
        {"name": "pani_puri", "page": 12, "top": 0, "bottom": 1.0},
        {"name": "poli", "page": 13, "top": 0, "bottom": 0.7},
        {"name": "appam", "page": 13, "top": 0.7, "bottom": 1.0},
        {"name": "lemon_pickle", "page": 14, "top": 0, "bottom": 0.4},
        {"name": "tomato_pickle", "page": 14, "top": 0.4, "bottom": 1.0},
        {"name": "thavala_vadai", "page": 15, "top": 0, "bottom": 0.7},
        {"name": "adai", "page": 15, "top": 0.7, "bottom": 1.0},
        {"name": "sambar_powder_batch_3", "page": 16, "top": 0, "bottom": 0.35},
        {"name": "rasam_powder_batch_2", "page": 16, "top": 0.35, "bottom": 0.58},
        {"name": "kari_masala_powder", "page": 16, "top": 0.58, "bottom": 0.78},
        {"name": "masala_powder", "page": 16, "top": 0.78, "bottom": 1.0},
        {"name": "gobi_manchurian", "page": 17, "top": 0, "bottom": 1.0},
        {"name": "vegetable_mandi", "page": 18, "top": 0, "bottom": 1.0},
        {"name": "cold_cucumber_soup", "page": 19, "top": 0.35, "bottom": 0.65},
        {"name": "crunchy_cauliflower", "page": 20, "top": 0, "bottom": 1.0},
    ]
    return mapping

def crop_snippets():
    mapping = get_recipe_snippets()
    os.makedirs('assets/snippets', exist_ok=True)
    
    for item in mapping:
        img_path = f"assets/pages/page-{item['page']:02d}.jpg"
        if not os.path.exists(img_path):
            print(f"File {img_path} not found")
            continue
            
        img = cv2.imread(img_path)
        if img is None:
            print(f"Could not read {img_path}")
            continue
        h, w = img.shape[:2]
        
        top = int(item['top'] * h)
        bottom = int(item['bottom'] * h)
        
        # Add a bit of padding if not at edges
        if top > 0: top = max(0, top - 10)
        if bottom < h: bottom = min(h, bottom + 10)
        
        snippet = img[top:bottom, :]
        snippet_path = f"assets/snippets/{item['name']}.jpg"
        cv2.imwrite(snippet_path, snippet)
        print(f"Saved {snippet_path}")

if __name__ == "__main__":
    crop_snippets()
