export interface dish{
    ImgURL:string;
    name:string;
    DishType:string;
    signature?:string;
    price:number;
}

export const PadKiMao:dish={
    ImgURL: "./img/PadKiMao2.svg",
    DishType: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
    name: "Pad Ki Mao",
    signature: "./img/smallSpicy.svg",
    price:88,
}
export const GarbanzoFrito:dish={
    ImgURL: "./img/garbanzo.png",
    DishType: "Polenta fingers, veal cheek,magic chili cured lemon cream, yellow laksa",
    name: "Garbanzo Frito",
    signature:"",
    price:78,
}
export const SmokedPizza:dish={
    ImgURL: "./img/PadKiMao.svg",
    DishType: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
    name: "Smoked Pizza",
    signature: "./img/vegan.svg",
    price:98,
}
export const PadKiMao2:dish={
    ImgURL: "./img/PadKiMao.svg",
    DishType: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
    name: "Pad Ki Mao",
    signature: "",
    price:65,
}
export const taMaLaKo:dish={
    ImgURL: "./img/PadKiMao.svg",
    DishType: "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
    name: "ta Ma La Ko",
    signature: "",
    price:65,
}
export const RedFarm:dish={
    ImgURL: "./img/PadKiMao.svg",
    DishType: "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
    name: "Red Farm",
    signature: "",
    price:65,
}

export const CardDishs:dish[]=[PadKiMao,GarbanzoFrito,SmokedPizza];