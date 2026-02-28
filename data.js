const recipesData = [
  {
    "id": "1",
    "title_en": "Vegetable Hot Garlic Sauce",
    "title_ta": "வெஜிடபிற் ஹாட் கார்யின் சாஸ்",
    "category": "Main Dishes and Curries",
    "ingredients": ["Cauliflower - 50g", "Cabbage - 50g", "Carrot - 50g", "Onion - 40g", "Beans - 40g", "Green Peas - 40g", "Brinjal (Eggplant) - 60g", "Tomato - 2", "Peeled Garlic - 20g", "Chili Powder - 10g", "Salt"],
    "method": ["Pour oil into a pan and add onion, garlic, and chopped brinjal.", "Sauté them.", "Then add all the other vegetables and tomatoes.", "Add salt, chili powder, and required water and let it boil.", "Once the gravy thickens slightly, remove from heat.", "For aroma, add lemon and curry leaves and then remove."],
    "notes": ["Note: Referred to by the user as Vegetable Kurma.", "Note: This can be eaten with both Chapathi and Rice."]
  },
  {
    "id": "2",
    "title_en": "Garlic Pickle",
    "title_ta": "பூண்டு ஊறுகாய்",
    "category": "Pickles",
    "ingredients": ["Peeled Garlic - 1 kg", "Salt - 125g", "Dhaniya (Coriander seeds) - 30g", "Jaggery - 100g", "Cumin (Jeerakam) - 10g", "Turmeric Powder - 5g", "Fenugreek (Vendhayam) - 10g", "Lemon Juice - 100 ml", "Chili Powder - 100g", "Hing (Asafoetida) - 5g", "Mustard - 10g", "Gingelly Oil - 400g"],
    "method": ["Steam the peeled garlic.", "Heat the oil, add mustard seeds, and once they splutter, add the garlic and sauté.", "Add the roasted and powdered fenugreek, dhaniya, hing, and cumin.", "Then add turmeric powder, chili powder, salt, lemon juice, and jaggery one by one."],
    "notes": []
  },
  {
    "id": "3",
    "title_en": "Chicken Biriyani",
    "title_ta": "கோழி பிரியாணி",
    "category": "Rice and Tiffin",
    "ingredients": ["Rice - 4 tumblers", "Chicken - 1 kg", "Curd - 1 cup", "Oil - 1 cup", "Ghee - 1 cup", "Cardamom - 4", "Cloves - 4", "Cinnamon - 4", "Bay leaf - a little", "Chopped Onion - 2 cups", "Ginger-Garlic Paste - 2 tsp", "Tomato - 5", "Green Chili - 30 (slit)", "Chili Powder - 2 tsp", "Color Powder - a little", "Garam Masala - 1 tsp", "Coriander and Mint Leaves - as required"],
    "method": ["Wash and clean the chicken.", "Add curd, ginger-garlic paste, chili powder, color powder, and garam masala to the chicken, mix well, and let it marinate for half an hour.", "Wash the rice and let it soak for half an hour.", "Pour oil and ghee, once heated, add cinnamon, cloves, cardamom, and bay leaf and let them brown.", "Add the chopped onions and sauté.", "Once browned, add the slit green chilies and sauté.", "Then add the tomatoes and sauté.", "Add the marinated chicken and let it cook for a while.", "Then add the soaked rice and stir gently with a ladle.", "Pour in double the amount of water and close with a lid.", "Once the rice is cooked and the biriyani is ready, add mint and coriander leaves.", "Stir well and serve."],
    "notes": []
  },
  {
    "id": "4",
    "title_en": "Milk Payasam",
    "title_ta": "பால் பாயாசம்",
    "category": "Sweets and Desserts",
    "ingredients": ["Basmati rice - 200g", "Ghee", "Milk - 8 tumblers", "Sugar - 2 tumblers", "Cashew nuts - 100g", "Saffron - 0.5g", "Cardamom powder", "Pistachios"],
    "method": ["Roast rice in ghee until golden brown on low flame.", "Wash roasted rice and cook in 3/4 tumbler water until soft.", "Add milk 2 tumblers at a time, stirring until reduced.", "Continue until all 8 tumblers of milk are used and reduced to about 5 tumblers.", "Add sugar and powdered cashew nuts; cook for 5 minutes.", "Garnish with chopped pistachios, roasted cashews, saffron, and cardamom powder."],
    "notes": ["Note: This makes approximately 5 tumblers of payasam."]
  },
  {
    "id": "5",
    "title_en": "Bitter Gourd Roast",
    "title_ta": "பாகற்காய் ரோஸ்ட்",
    "category": "Snacks and Appetizers",
    "ingredients": ["Small bitter gourds - 200g", "Tamarind - 30g", "Turmeric powder - 1 spoon", "Salt - 2 spoons", "Gram flour - 6 spoons", "Chili powder - 3 spoons", "Table salt - 1.5 spoons", "Curry leaves", "Hing", "Oil for frying"],
    "method": ["Slit bitter gourds lengthwise.", "Boil in tamarind water with turmeric and salt until cooked, then drain.", "Divide into 3 batches.", "For each part, mix 2 spoons of gram flour, 1 spoon of chili powder, 1/2 spoon of table salt, a little curry leaves, and a little hing.", "Mix them without mashing the bitter gourd.", "This will be like a light powder coating on the vegetable.", "Fry each part in boiling oil like you fry pakodas.", "The bitter gourd roast will be very crunchy. It won't be bitter."],
    "notes": []
  },
  {
    "id": "sambar_powder",
    "title_en": "Sambar Powder (3 Variations)",
    "title_ta": "சாம்பார்பொடி",
    "category": "Powders and Masalas",
    "ingredients": [],
    "method": [
      "### Variation 1 (Batch 1)",
      "**Ingredients:** Toor Dal (0.5 kg), Chana Dal (0.5 kg), Dhaniya (0.75 kg), Dry Red Chilies (0.25 kg), Fenugreek (25g), Hing (50g).",
      "**Method:** Fry solid hing in oil and set aside. Roast fenugreek until golden brown, then chana dal, then toor dal, then red chilies, then dhaniya (maintain this order). Add fried hing and grind to a rava consistency.",
      "### Variation 2 (Soundravalli Sambar Powder)",
      "**Ingredients:** Dhaniya (1 padi), Cumin (3 veesampadi), Dry Red Chili (1 veesampadi), Rice (Raw & Parboiled), Dals (Chana, Toor, Urad), Turmeric Sticks (50g).",
      "**Method:** Sun-dry chilies and turmeric. Dry roast all other items individually. Grind in a mill and store.",
      "### Variation 3 (Batch 3)",
      "**Ingredients:** Red Chili (1 padi), Dals & Rice, Coriander (1/4 padi), Turmeric sticks.",
      "**Method:** Sun-dry everything and grind in a mill."
    ],
    "notes": []
  },
  {
    "id": "rasam_powder",
    "title_en": "Rasam Powder (2 Variations)",
    "title_ta": "ரசப்பொடி",
    "category": "Powders and Masalas",
    "ingredients": [],
    "method": [
      "### Variation 1 (Batch 1)",
      "**Ingredients:** Toor Dal (0.5 kg), Black Pepper (150g), Cumin (200g), Hing (100g), Dry Red Chilies (300g), Dhaniya (0.75 kg), Turmeric Powder (50g), Curry Leaves (1 handful).",
      "**Method:** Crush the solid hing and fry it in oil and take it out. Place another pan on the stove and first roast the pepper lightly. Immediately add toor dal. Once that is lightly roasted, add the pinched red chilies. Add the dhaniya. After that, add curry leaves and finally cumin and roast. Add the fried hing to the mixture. After grinding this in a mixer or a mill, mix the turmeric powder well.",
      "### Variation 2 (Batch 2)",
      "**Ingredients:** Coriander (4 cups), Chili (1.5 cups), Pepper (2 cups), Cumin (2 cups), Chana Dal, Toor Dal (10g), Hing (5g), Mustard (1 spoon), Curry Leaves (1 handful).",
      "**Method:** Grind and store."
    ],
    "notes": []
  },
  {
    "id": "8",
    "title_en": "Idli Bites",
    "title_ta": "இட்லி பைட்ஸ்",
    "category": "Snacks and Appetizers",
    "ingredients": ["Soft idlis", "Pickle masala (or mint chutney/chili thuvaiyal)", "Oil for frying"],
    "method": ["Cut idlis into four pieces.", "Place pickle masala between the cut idli pieces and fry in oil until golden brown.", "It tastes \"bale rusi\" (excellent).", "Instead of pickle masala, mint chutney or chili thuvaiyal can be used."],
    "notes": []
  },
  {
    "id": "9",
    "title_en": "Fried Mushroom",
    "title_ta": "ப்ரைடு மஷ்ரும்",
    "category": "Snacks and Appetizers",
    "ingredients": ["Mushroom - 250g", "Egg - 1", "Maida - 50g", "Breadcrumbs - 50g", "Salt - 10g", "Pepper Powder - 5g", "Oil - 75ml"],
    "method": ["Mix mushrooms, maida, egg, salt, and pepper with a little water.", "Coat each mushroom in breadcrumbs.", "Fry over medium heat."],
    "notes": ["Note: Serving this with potato chips will increase the taste further."]
  },
  {
    "id": "10",
    "title_en": "Garam Masala",
    "title_ta": "கரம் மசாலா",
    "category": "Powders and Masalas",
    "ingredients": ["Cinnamon - 25g", "Black Cardamom - 25g", "Whole Black Pepper - 25g", "Cloves - 15g"],
    "method": ["Lightly roast and grind in a mixer."],
    "notes": []
  },
  {
    "id": "11",
    "title_en": "Paneer Podimas",
    "title_ta": "பனீர் பொடிமாஸ்",
    "category": "Main Dishes and Curries",
    "ingredients": ["Milk - 2 Liters", "Vinegar - 5 tsp", "Onion - 3", "Tomato - 3", "Ginger - 5g", "Green Chili - 5", "Coriander - 0.25 bundles", "Turmeric Powder - 0.25 tsp", "Garam Masala - 0.25 tsp", "Curry Leaves", "Cumin - 1 tsp", "Salt"],
    "method": ["Boil milk and add vinegar to curdle; strain through cloth to get paneer.", "Sauté cumin and chopped onions in oil until golden.", "Add turmeric, salt, garam masala, and crushed green chilies.", "Crumble paneer and add to pan.", "Add chopped tomatoes and ginger strips; sauté well and garnish with coriander."],
    "notes": ["Note: This can also be made with store-bought paneer."]
  },
  {
    "id": "12",
    "title_en": "Kofta Noorjahan",
    "title_ta": "கோப்தா நுார்ஜஹான்",
    "category": "Main Dishes and Curries",
    "ingredients": ["Paneer - 100g", "Potato - 2 boiled", "Maida - 3 tsp", "Cashews & Raisins", "Onion - 3", "Cream - 10g", "Spices (Chili, Turmeric, Dhaniya, Cumin, Garam Masala)"],
    "method": ["Mix grated paneer, mashed potatoes, green chilies, ginger-garlic paste, maida, and coriander.", "Roll into balls with cashews and raisins inside; deep fry.", "For Gravy: Sauté onions, ginger-garlic paste, and tomatoes.", "Add spices, cashew paste, and cream; pour over fried koftas."],
    "notes": []
  },
  {
    "id": "14",
    "title_en": "Coconut Burfi",
    "title_ta": "தேங்காப்பற்பி",
    "category": "Sweets and Desserts",
    "ingredients": ["Gram Flour - 1 cup", "Grated Coconut - 1 cup", "Milk - 1 cup", "Ghee - 1 cup", "Sugar - 2 cups"],
    "method": ["Stir all ingredients in a heavy pan until thick.", "Pour into greased tray and cut."],
    "notes": []
  },
  {
    "id": "15",
    "title_en": "Rava Badam Laddu",
    "title_ta": "ரவ் பாதா சாக்",
    "category": "Sweets and Desserts",
    "ingredients": ["Fine Rava - 1 cup", "Sugar - 1 cup", "Milk - 0.5 cups", "Badam & Cashews", "Cardamom - 6", "Raisins - 10"],
    "method": ["Roast rava in ghee.", "Add milk and sugar; stir on low flame until halwa consistency.", "Form balls and decorate with cashews."],
    "notes": []
  },
  {
    "id": "16",
    "title_en": "Pani Puri",
    "title_ta": "பானி பூரி",
    "category": "Snacks and Appetizers",
    "ingredients": ["Rava - 2 cups", "Maida - 1 cup", "Mint, Ginger, Green Chilies", "Tamarind", "Jaggery - 0.5 cup", "Boiled Green Gram - 1 cup"],
    "method": ["Knead rava, maida, oil, and salt; cut circles and fry puris.", "For Pani: Blend green chilies, mint, and ginger with water; add lemon, sugar, and cumin salt.", "For Chutney: Mix tamarind extract with chili powder, cumin salt, and jaggery.", "Serve puris filled with green gram, chutney, and pani."],
    "notes": []
  },
  {
    "id": "17",
    "title_en": "Poli",
    "title_ta": "போளி",
    "category": "Sweets and Desserts",
    "ingredients": ["Maida & Wheat Flour", "Chana Dal - 2 cups", "Jaggery - 2 cups", "Coconut - 1", "Ghee"],
    "method": ["Knead soft dough with flours, oil, and kesari powder; soak for 1 hour.", "For Filling: Roast and soak chana dal; grind with coconut and cardamom.", "Cook with jaggery and ghee until thick.", "Stuff filling into dough and cook like flatbreads."],
    "notes": []
  },
  {
    "id": "18",
    "title_en": "Appam",
    "title_ta": "ஆப்பம்",
    "category": "Rice and Tiffin",
    "ingredients": ["Parboiled & Raw Rice - 1 tumbler each", "Sago - 7 tbsp", "Baking soda", "Salt"],
    "method": ["Soak and grind rice finely.", "Mix with sago and salt.", "Add baking soda in the morning and prepare appams."],
    "notes": []
  },
  {
    "id": "19",
    "title_en": "Lemon Pickle",
    "title_ta": "எலுமிச்சம்பழ ஊறுகாய்",
    "category": "Pickles",
    "ingredients": ["Lemons - 100", "Rock Salt - 0.25 padi", "Red Chili Powder - 0.5 padi", "Fenugreek & Hing", "Gingelly Oil"],
    "method": ["Soak cut lemons in salt for a month.", "Add roasted fenugreek, hing, and chili powder.", "Temper with mustard in gingelly oil."],
    "notes": []
  },
  {
    "id": "20",
    "title_en": "Tomato Pickle",
    "title_ta": "தக்காளி ஊறுகாய்",
    "category": "Pickles",
    "ingredients": ["Tomato - 1 kg", "Tamarind - 0.25 kg", "Garlic - 100g", "Gingelly Oil - 200g", "Red Chili Powder - 0.125 padi", "Salt - 0.125 padi"],
    "method": ["Sauté tomatoes and tamarind; grind once cooled.", "Temper mustard, curry leaves, and garlic in oil.", "Add tomato paste and sauté well."],
    "notes": ["Note: Don't forget to add chili powder and salt powder."]
  },
  {
    "id": "21",
    "title_en": "Thavala Vadai",
    "title_ta": "தவல வடை",
    "category": "Snacks and Appetizers",
    "ingredients": ["Rice & Dals (Toor, Chana, Urad, Moong)", "Red Chilies - 12", "Coconut pieces", "Hing & Salt"],
    "method": ["Soak rice and main dals for 1 hour; grind coarsely with chilies and salt.", "Add separately soaked moong/urad dal and coconut pieces.", "Deep fry ladles of batter until crunchy."],
    "notes": ["Amma's Note: Makes about 50 vadas. Serve with chutney."]
  },
  {
    "id": "22",
    "title_en": "Adai",
    "title_ta": "அடை",
    "category": "Rice and Tiffin",
    "ingredients": ["Raw Rice - 0.25 padi", "Toor Dal - 0.125 padi", "Onion & Coconut", "Red Chilies - 15"],
    "method": ["Grind rice, dal, chilies, and salt coarsely.", "Mix with chopped onion, coconut, and curry leaves.", "Cook on griddle with plenty of oil."],
    "notes": []
  },
  {
    "id": "25",
    "title_en": "Kari Masala Powder",
    "title_ta": "கறிமசால் பொடி",
    "category": "Powders and Masalas",
    "ingredients": ["Dry Chili - 0.5 kg", "Coriander - 300g", "Fennel - 150g", "Poppy seeds", "Cinnamon, Cloves, Cardamom"],
    "method": ["Lightly roast and grind."],
    "notes": []
  },
  {
    "id": "26",
    "title_en": "Gobi Manchurian",
    "title_ta": "கோபி மஞ்சூரியன்",
    "category": "Main Dishes and Curries",
    "ingredients": ["Cauliflower - 400g", "Carrot - 200g", "Almonds - 100g", "Capsicum & Onion", "Soy Sauce - 2 tbsp", "Vinegar - 1 tbsp", "Salt/MSG - 1 tsp"],
    "method": ["Sauté veg and ginger-garlic paste.", "Add cornflour-soy sauce slurry and boil until thick.", "Add roasted almonds."],
    "notes": []
  },
  {
    "id": "27",
    "title_en": "Vegetable Mandi",
    "title_ta": "காய்கறி மண்டி",
    "category": "Main Dishes and Curries",
    "ingredients": ["Assorted Veg", "Small Onions, Garlic, Green Chilies", "Tamarind", "Grated Coconut"],
    "method": ["Temper spices and sauté onions, garlic, and chilies.", "Add veg and water; cook until tender.", "Add tamarind extract, salt, and coconut; boil once."],
    "notes": []
  },
  {
    "id": "28",
    "title_en": "Cold Cucumber Soup",
    "title_ta": "கூல்கு குக்கும்பர் சூப்",
    "category": "Soups",
    "ingredients": ["Cucumber - 500g", "Onion - 100g", "Cream - 200ml", "Pepper - 10g", "Salt - 15g"],
    "method": ["Blend cucumber and onion with water; strain.", "Mix with cream and seasoning; serve chilled."],
    "notes": ["Note: Drinking this before a feast helps with digestion."]
  },
  {
    "id": "29",
    "title_en": "Crunchy Cauliflower",
    "title_ta": "Gobi 65",
    "category": "Snacks and Appetizers",
    "ingredients": ["Cauliflower - 1 large", "Egg - 3", "Rice Flour - 50g", "Ginger-Garlic Paste", "Chili Powder & Spices"],
    "method": ["Beat eggs and mix with spices, flour, and cauliflower.", "Deep fry in small portions."],
    "notes": []
  }
];
