"""
generateProductImages.py
50 products --> 50 images 
10 images per category 

Categories:
    1. Books
    2. Electronics
    3. Clothing
    4. Games 
    5. Groceries
"""

def getProductImage(category, idx):

    bookImages = ["https://tinyurl.com/bdew8ewr", 

    "https://tinyurl.com/ycktxfjs",

    "https://tinyurl.com/4uuw7d7c",

    "https://m.media-amazon.com/images/I/61rFgbqlcrL._AC_UY436_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/71QVHBdFzAL._AC_UY436_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/71QVHBdFzAL._AC_UY436_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/61q1IqrlhyL._AC_UL640_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/71nSoeWRPNL._AC_UL640_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/710aLBwkr7L._AC_UL640_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/71BkEu-sVzL._AC_UL640_FMwebp_QL65_.jpg"]

    electronicImages = ["https://m.media-amazon.com/images/I/71hhgeQCrOL._AC_SX960_SY720_.jpg",

    "https://m.media-amazon.com/images/I/71+2H96GHZL._AC_SX960_SY720_.jpg",

    "https://m.media-amazon.com/images/I/71zRcqRQGOL._AC_SX960_SY720_.jpg",

    "https://m.media-amazon.com/images/I/81eRAX3sB6L._AC_SX960_SY720_.jpg",

    "https://m.media-amazon.com/images/I/81w3miL-DHL._AC_SX960_SY720_.jpg",

    "https://m.media-amazon.com/images/I/81suFCdoD6L._AC_SX960_SY720_.jpg",

    "https://m.media-amazon.com/images/I/61xT7CDtrwS._AC_UY436_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/51utxdpV8cS._AC_UY436_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/61Kq-Pz8d-L._AC_UY436_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/71LJJrKbezL._AC_UY436_FMwebp_QL65_.jpg"]


    clothingImages = ["https://m.media-amazon.com/images/I/91z1+DpSXIL._AC_UL640_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/71A6F+t7AoL._AC_UL640_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/81Sv3Z2suBL._AC_UL640_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/812m6InUlzL._AC_UL640_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/61s+ft92apL._AC_UL640_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/81te-8XgnlL._AC_UL640_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/61y-w4bewQL._MCnd_AC_UL640_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/81ZAKQ1jzeL._AC_UL640_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/71VQsF2tupL._AC_UL640_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/71F2tjW19JS._AC_UL640_FMwebp_QL65_.jpg"]

    gameImages = ["https://m.media-amazon.com/images/I/814IztfQ5LL._AC_UY436_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/817zvXdCgSL._AC_UY436_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/818iETWG-aL._AC_UL640_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/611sCBctXuL._AC_UY436_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/51PfIGfAutL._AC_UY436_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/71H2kx9wTqL._AC_UY436_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/71PIucvgepL._AC_UY436_QL65_.jpg",

    "https://m.media-amazon.com/images/I/71YC7GYYKAL._AC_UY436_QL65_.jpg",

    "https://m.media-amazon.com/images/I/81-FD3tzUlL._AC_UY436_QL65_.jpg",

    "https://m.media-amazon.com/images/I/61+AtsQkQ6S._AC_UY436_FMwebp_QL65_.jpg"]

    groceryImages = ["https://m.media-amazon.com/images/I/71kQY4DDlNL._AC_UL640_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/81u6mQeOSmL._AC_UL640_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/81DF9tHWcbL._AC_UL640_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/81p6f569R0L._AC_UL640_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/71luFg8EBjS._AC_UL640_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/81te0dgkN4L._AC_UL640_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/61jTpExBMAL._AC_UL640_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/81I75zgQ1-L._AC_UL640_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/817x89Wnc5S._AC_UL640_FMwebp_QL65_.jpg",

    "https://m.media-amazon.com/images/I/816flmsx1JL._AC_UL640_FMwebp_QL65_.jpg"]

    categoryMap = {"Books": bookImages, "Electronics": electronicImages, "Clothing": clothingImages, "Games": gameImages, "Groceries": groceryImages}

    return categoryMap[category][idx]