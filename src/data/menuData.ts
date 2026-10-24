import chickenPestoPizza from "@/assets/chicken-pesto-pizza.jpg";
import margaritaPizza from "@/assets/margarita-pizza.jpg";
import pepperoniPizza from "@/assets/pepperoni-pizza.jpg";
import baconPizza from "@/assets/bacon-cream-pizza.jpg";
import turkeybaconPizza from "@/assets/turkey-bacon-pizza.jpg";
import espresso from "@/assets/espresso.jpg";
import cappuccino from "@/assets/cappuccino.jpg";
import latte from "@/assets/latte.jpg";
import cola from "@/assets/cola.jpg";
import orangeJuice from "@/assets/orange-juice.jpg";
import smoothie from "@/assets/smoothie.jpg";
import classicBurger from "@/assets/classic-burger.jpg";
import cheeseBurger from "@/assets/cheese-burger.jpg";
import chickenBurger from "@/assets/chicken-burger.jpg";
import pizzaIcon from "@/assets/black-white-icons/pizza.png";
import coffeeIcon from "@/assets/black-white-icons/coffee.png";
import milkShakeIcon from "@/assets/black-white-icons/milkshake.png";
import starterIcon from "@/assets/black-white-icons/pasta.png";
import suchiIcon from "@/assets/black-white-icons/sushi.png";
import burgerIcon from "@/assets/black-white-icons/burger.png";
import mafiaIcon from "@/assets/black-white-icons/mafia.png";
import boardGameIcon from "@/assets/black-white-icons/board-game.png";
import appetizerIcon from "@/assets/black-white-icons/appetizer.png";
import iceCoffeeIcon from "@/assets/black-white-icons/ice-coffee.png";
import teaIcon from "@/assets/black-white-icons/tea.png";
import smoothieIcon from "@/assets/black-white-icons/smoothie.png";
import matchaIcon from "@/assets/black-white-icons/matcha.png";
import hotDrinkIcon from "@/assets/black-white-icons/hotdrink.png";
import snackIcon from "@/assets/black-white-icons/snack.png";
import sauceIcon from "@/assets/black-white-icons/sauce.png";


export interface MenuItem {
  id: string;
  name: string;
  price: number;
  image: string;
  ingredients?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  items: MenuItem[];
}

export const menuData: Category[] = [
  {
    id: "pizza",
    name: "پیــــتزا",
    icon: pizzaIcon,
    items: [
      {
        id: "chicken-pesto",
        name: "پیتزا پپرونی",
        price: 785,
        image: pepperoniPizza,
        ingredients: "سس مارینارا، پنیر پیتزا، فلفل هالوپینو، سوسیس پپرونی",
      },
      {
        id: "margarita",
        name: "پیتزا بیکن و خامه",
        price: 980,
        image: baconPizza,
        ingredients: "سس خامه، پنیر پیتزا، بیکن گوشت، قارچ، زیتون سیاه، گوجه گیلاسی، فلفل دلمه",
      },
      {
        id: "pepperoni",
        name: "پیتزا بیکن بوقلمون",
        price: 935,
        image: turkeybaconPizza,
        ingredients: "سس کف پستو، پنیر پیتزا، بیکن بوقلمون، قارچ، زیتون سبز، گوجه گیلاسی، فلفل دلمه، تاپینگ سس آلفردو",
      },
      {
        id: "chicken-pesto",
        name: "پیتزا چیکن پستو",
        price: 14.99,
        image: chickenPestoPizza,
        ingredients: "مرغ، سس پستو، پنیر موزارلا",
      },
      {
        id: "margarita",
        name: "پیتزا مارگاریتا",
        price: 12.99,
        image: margaritaPizza,
        ingredients: "سس گوجه، پنیر موزارلا، ریحان",
      },
      {
        id: "pepperoni",
        name: "پیتزا پپرونی",
        price: 13.99,
        image: pepperoniPizza,
        ingredients: "پپرونی، پنیر موزارلا، سس گوجه",
      },
      {
        id: "chicken-pesto",
        name: "پیتزا چیکن پستو",
        price: 14.99,
        image: chickenPestoPizza,
        ingredients: "مرغ، سس پستو، پنیر موزارلا",
      },
      {
        id: "margarita",
        name: "پیتزا مارگاریتا",
        price: 12.99,
        image: margaritaPizza,
        ingredients: "سس گوجه، پنیر موزارلا، ریحان",
      },
      {
        id: "pepperoni",
        name: "پیتزا پپرونی",
        price: 13.99,
        image: pepperoniPizza,
        ingredients: "پپرونی، پنیر موزارلا، سس گوجه",
      }
    ],
  },
  {
    id: "coffee",
    name: "اسپرسـو بـار",
    icon: coffeeIcon,
    items: [
      {
        id: "espresso",
        name: "اسپرسو",
        price: 90,
        image: espresso,
        ingredients: "قهوه اسپرسو",
      },
      {
        id: "cappuccino",
        name: "کاپوچینو",
        price: 4.99,
        image: cappuccino,
        ingredients: "اسپرسو، شیر بخار داده‌شده، فوم شیر",
      },
      {
        id: "latte",
        name: "کافه لاته",
        price: 5.49,
        image: latte,
        ingredients: "اسپرسو، شیر بخار داده‌شده",
      },
      {
        id: "espresso",
        name: "اسپرسو",
        price: 90,
        image: espresso,
        ingredients: "قهوه اسپرسو",
      },
      {
        id: "cappuccino",
        name: "کاپوچینو",
        price: 4.99,
        image: cappuccino,
        ingredients: "اسپرسو، شیر بخار داده‌شده، فوم شیر",
      },
      {
        id: "latte",
        name: "کافه لاته",
        price: 5.49,
        image: latte,
        ingredients: "اسپرسو، شیر بخار داده‌شده",
      },
      {
        id: "espresso",
        name: "اسپرسو",
        price: 90,
        image: espresso,
        ingredients: "قهوه اسپرسو",
      },
      {
        id: "cappuccino",
        name: "کاپوچینو",
        price: 4.99,
        image: cappuccino,
        ingredients: "اسپرسو، شیر بخار داده‌شده، فوم شیر",
      },
      {
        id: "latte",
        name: "کافه لاته",
        price: 5.49,
        image: latte,
        ingredients: "اسپرسو، شیر بخار داده‌شده",
      },
      {
        id: "espresso",
        name: "اسپرسو",
        price: 90,
        image: espresso,
        ingredients: "قهوه اسپرسو",
      },
      {
        id: "cappuccino",
        name: "کاپوچینو",
        price: 4.99,
        image: cappuccino,
        ingredients: "اسپرسو، شیر بخار داده‌شده، فوم شیر",
      },
      {
        id: "latte",
        name: "کافه لاته",
        price: 5.49,
        image: latte,
        ingredients: "اسپرسو، شیر بخار داده‌شده",
      },
      {
        id: "espresso",
        name: "اسپرسو",
        price: 90,
        image: espresso,
        ingredients: "قهوه اسپرسو",
      },
      {
        id: "cappuccino",
        name: "کاپوچینو",
        price: 4.99,
        image: cappuccino,
        ingredients: "اسپرسو، شیر بخار داده‌شده، فوم شیر",
      },
      {
        id: "latte",
        name: "کافه لاته",
        price: 5.49,
        image: latte,
        ingredients: "اسپرسو، شیر بخار داده‌شده",
      },
      {
        id: "espresso",
        name: "اسپرسو",
        price: 90,
        image: espresso,
        ingredients: "قهوه اسپرسو",
      },
      {
        id: "cappuccino",
        name: "کاپوچینو",
        price: 4.99,
        image: cappuccino,
        ingredients: "اسپرسو، شیر بخار داده‌شده، فوم شیر",
      },
      {
        id: "latte",
        name: "کافه لاته",
        price: 5.49,
        image: latte,
        ingredients: "اسپرسو، شیر بخار داده‌شده",
      },
      {
        id: "espresso",
        name: "اسپرسو",
        price: 90,
        image: espresso,
        ingredients: "قهوه اسپرسو",
      },
      {
        id: "cappuccino",
        name: "کاپوچینو",
        price: 4.99,
        image: cappuccino,
        ingredients: "اسپرسو، شیر بخار داده‌شده، فوم شیر",
      },
      {
        id: "latte",
        name: "کافه لاته",
        price: 5.49,
        image: latte,
        ingredients: "اسپرسو، شیر بخار داده‌شده",
      },
    ],
  },
    {
    id: "burger",
    name: "بــرگــر",
    icon: burgerIcon,
    items: [
      {
        id: "classic-chips-cheese",
        name: "چیپس و پنیر کلاسیک",
        price: 6.99,
        image: cheeseBurger,
        ingredients: "چیپس، پنیر، ادویه",
      },
      {
        id: "mushroom-chips-cheese",
        name: "چیپس و پنیر قارچ",
        price: 7.99,
        image: cheeseBurger,
        ingredients: "چیپس، پنیر، قارچ",
      },
      {
        id: "special-chips-cheese",
        name: "چیپس و پنیر ویژه",
        price: 8.99,
        image: chickenBurger,
        ingredients: "چیپس، پنیر، قارچ، ژامبون",
      },
    ],
  },
  {
    id: "pasta",
    name: "پاســـتا",
    icon: starterIcon,
    items: [
      {
        id: "seasoned-fries",
        name: "سیب زمینی ویژه",
        price: 4.99,
        image: classicBurger,
        ingredients: "سیب‌زمینی سرخ‌شده، ادویه مخصوص",
      },
      {
        id: "garlic-bread",
        name: "نان سیر",
        price: 3.99,
        image: margaritaPizza,
        ingredients: "نان، کره و سیر",
      },
      {
        id: "caesar-salad",
        name: "سالاد سزار",
        price: 6.99,
        image: chickenPestoPizza,
        ingredients: "مرغ گریل‌شده، کاهو، پنیر پارمزان، سس سزار",
      },
    ],
  },
  
  {
    id: "sushi",
    name: "سوشـــی",
    icon: suchiIcon,
    items: [
      {
        id: "orange-mocktail",
        name: "ماکتیل پرتقال",
        price: 4.99,
        image: orangeJuice,
        ingredients: "آب پرتقال، یخ",
      },
      {
        id: "berry-mocktail",
        name: "ماکتیل بری",
        price: 5.99,
        image: smoothie,
        ingredients: "توت‌های قرمز، یخ",
      },
      {
        id: "cola-mocktail",
        name: "ماکتیل کولا",
        price: 4.49,
        image: cola,
        ingredients: "نوشابه کولا، یخ",
      },
    ],
  },
  {
    id: "milk-shake",
    name: "میلک شیـک",
    icon: milkShakeIcon,
    items: [
      {
        id: "tea",
        name: "چای",
        price: 2.99,
        image: espresso,
        ingredients: "چای سیاه",
      },
      {
        id: "hot-chocolate",
        name: "هات چاکلت",
        price: 4.49,
        image: cappuccino,
        ingredients: "شکلات، شیر گرم",
      },
      {
        id: "masala",
        name: "چای ماسالا",
        price: 4.99,
        image: latte,
        ingredients: "چای سیاه، شیر، ادویه‌های معطر",
      },
      {
        id: "araghnana",
        name: "عرق نعنا",
        price: 110,
        image: latte,
        ingredients: "چای سیاه، شیر، ادویه‌های معطر",
      },
    ],
  },
  {
    id: "ice-coffee",
    name: "آیـس کافـــی",
    icon: iceCoffeeIcon,
    items: [
      {
        id: "fried-chicken",
        name: "مرغ سوخاری",
        price: 10.99,
        image: chickenBurger,
        ingredients: "مرغ سوخاری، آرد سوخاری، ادویه",
      },
      {
        id: "fried-strips",
        name: "فیله استریپس",
        price: 9.99,
        image: chickenBurger,
        ingredients: "فیله مرغ، آرد سوخاری، ادویه",
      },
      {
        id: "fried-wings",
        name: "بال سوخاری",
        price: 8.99,
        image: chickenBurger,
        ingredients: "بال مرغ، آرد سوخاری، ادویه",
      },
    ],
  },
  {
    id: "tea",
    name: "چایی و دمنوش",
    icon: teaIcon,
    items: [
      {
        id: "classic-sandwich",
        name: "ساندویچ کلاسیک",
        price: 8.99,
        image: classicBurger,
        ingredients: "نان ساندویچ، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "cheese-sandwich",
        name: "ساندویچ پنیر",
        price: 9.99,
        image: cheeseBurger,
        ingredients: "نان ساندویچ، پنیر، کاهو، گوجه",
      },
      {
        id: "chicken-sandwich",
        name: "ساندویچ مرغ",
        price: 10.99,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
    ],
  },
  {
    id: "smoothie",
    name: "ماکتیل و اسموتی",
    icon: smoothieIcon,
    items: [
      {
        id: "classic-sandwich",
        name: "ساندویچ کلاسیک",
        price: 8.99,
        image: classicBurger,
        ingredients: "نان ساندویچ، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "cheese-sandwich",
        name: "ساندویچ پنیر",
        price: 9.99,
        image: cheeseBurger,
        ingredients: "نان ساندویچ، پنیر، کاهو، گوجه",
      },
      {
        id: "chicken-sandwich",
        name: "ساندویچ مرغ",
        price: 10.99,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
    ],
  },
  {
    id: "matcha",
    name: "ماچــابــار",
    icon: matchaIcon,
    items: [
      {
        id: "classic-sandwich",
        name: "ساندویچ کلاسیک",
        price: 8.99,
        image: classicBurger,
        ingredients: "نان ساندویچ، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "cheese-sandwich",
        name: "ساندویچ پنیر",
        price: 9.99,
        image: cheeseBurger,
        ingredients: "نان ساندویچ، پنیر، کاهو، گوجه",
      },
      {
        id: "chicken-sandwich",
        name: "ساندویچ مرغ",
        price: 10.99,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
    ],
  },
  {
    id: "hotdrinks",
    name: "نوشیدنی گرم",
    icon: hotDrinkIcon,
    items: [
      {
        id: "classic-sandwich",
        name: "ساندویچ کلاسیک",
        price: 8.99,
        image: classicBurger,
        ingredients: "نان ساندویچ، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "cheese-sandwich",
        name: "ساندویچ پنیر",
        price: 9.99,
        image: cheeseBurger,
        ingredients: "نان ساندویچ، پنیر، کاهو، گوجه",
      },
      {
        id: "chicken-sandwich",
        name: "ساندویچ مرغ",
        price: 10.99,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
    ],
  },
  {
    id: "snack",
    name: "اسنک و چیپس پنیر",
    icon: snackIcon,
    items: [
      {
        id: "classic-sandwich",
        name: "ساندویچ کلاسیک",
        price: 8.99,
        image: classicBurger,
        ingredients: "نان ساندویچ، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "cheese-sandwich",
        name: "ساندویچ پنیر",
        price: 9.99,
        image: cheeseBurger,
        ingredients: "نان ساندویچ، پنیر، کاهو، گوجه",
      },
      {
        id: "chicken-sandwich",
        name: "ساندویچ مرغ",
        price: 10.99,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
    ],
  },
  {
    id: "appetizer",
    name: "پیــش غــذا",
    icon: appetizerIcon,
    items: [
      {
        id: "classic-sandwich",
        name: "ساندویچ کلاسیک",
        price: 8.99,
        image: classicBurger,
        ingredients: "نان ساندویچ، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "cheese-sandwich",
        name: "ساندویچ پنیر",
        price: 9.99,
        image: cheeseBurger,
        ingredients: "نان ساندویچ، پنیر، کاهو، گوجه",
      },
      {
        id: "chicken-sandwich",
        name: "ساندویچ مرغ",
        price: 10.99,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
    ],
  },
  {
    id: "sauce",
    name: "سـس اضافـه",
    icon: sauceIcon,
    items: [
      {
        id: "mafia-hourly-fee",
        name: "هزینه بازی ساعتی",
        price: 100000,
        image: mafiaIcon,
      },
    ],
  },
  {
    id: "mafia",
    name: "مافیا",
    icon: mafiaIcon,
    items: [
      {
        id: "mafia-hourly-fee",
        name: "هزینه بازی ساعتی",
        price: 100000,
        image: mafiaIcon,
      },
    ],
  },
  {
    id: "board-game",
    name: "بردگیم",
    icon: boardGameIcon,
    items: [
      {
        id: "board-game-hourly-fee",
        name: "هزینه بازی ساعتی",
        price: 100000,
        image: boardGameIcon,
      },
    ],
  },
];
