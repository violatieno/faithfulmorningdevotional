export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  verse: string;
  image: string;
  description: string;
}

const product: Product[] = [
  {
    id: 1,
    name: "Faith Over Fear T-Shirt",
    category: "tshirts",
    price: 25,
    verse: "Joshua 1:9",
    image: "/images/t-shirt.png",
    description: "Comfortable cotton blend with inspiring message"
  },
  {
    id: 2,
    name: "Be Still & Know Hoodie",
    category: "hoodies",
    price: 45,
    verse: "Psalm 46:10",
    image: "/images/hoodie.jpg",
    description: "Warm fleece-lined hoodie perfect for worship"
  },
  {
    id: 3,
    name: "Grace Tote Bag",
    category: "bags",
    price: 18,
    verse: "2 Corinthians 12:9",
    image: "/images/peach-tote.png",
    description: "Stylish tote with spiritual message"
  },
  {
    id: 4,
    name: "Prayer Journal",
    category: "journals",
    price: 20,
    verse: "Philippians 4:6",
    image: "/images/journal.jpg",
    description: "Beautiful hardcover journal for your daily walk"
  },
  {
    id: 5,
    name: "Faithful Mug",
    category: "mugs",
    price: 20,
    verse: "Philippians 4:6",
    image: "/images/mug.png",
    description: "Beautiful mug for your daily coffee"
  },
{
  id: 6,
  name: "Faith Over Fear Tee",
  category: "tshirts",
  price: 22,
  verse: "2 Timothy 1:7",
  image: "/images/t-shirt1.png",
  description: "Black tee with bold 'Faith Over Fear' print"
},
{
  id: 7,
  name: "Pray Always Hoodie",
  category: "hoodies",
  price: 35,
  verse: "1 Thessalonians 5:17",
  image: "/images/hoodie1.jpg",
  description: "Soft hoodie with 'Pray Always' design"
},
{
  id: 8,
  name: "Blessed Tote Bag",
  category: "bags",
  price: 18,
  verse: "Psalm 1:1",
  image: "/images/bag1.jpg",
  description: "Canvas tote bag with 'Blessed' written in script"
},
{
  id: 9,
  name: "Gratitude Journal",
  category: "journals",
  price: 15,
  verse: "1 Chronicles 16:34",
  image: "/images/journal1.png",
  description: "A journal to count your blessings and reflect"
},
{
  id: 10,
  name: "This is the Day Mug",
  category: "mugs",
  price: 17,
  verse: "Psalm 118:24",
  image: "/images/mug1.jpg",
  description: "Encouraging mug to start your mornings right"
},
{
  id: 11,
  name: "God is Greater Tee",
  category: "tshirts",
  price: 24,
  verse: "Romans 8:28",
  image: "/images/t-shirt2.png",
  description: "Minimal design tee: God > Highs & Lows"
},
{
  id: 12,
  name: "He Walks With Me Hoodie",
  category: "hoodies",
  price: 38,
  verse: "Psalm 23:4",
  image: "/images/hoodie2.jpg",
  description: "Stylish hoodie with a scenic prayer design"
},
{
  id: 13,
  name: "Jesus Saves Tote",
  category: "bags",
  price: 16,
  verse: "John 3:16",
  image: "/images/bag2.png",
  description: "Bold faith statement in tote form"
},
{
  id: 14,
  name: "Scripture Study Journal",
  category: "journals",
  price: 19,
  verse: "Hebrews 4:12",
  image: "/images/journal2.png",
  description: "Guided journal for daily Bible study"
},
{
  id: 15,
  name: "Daily Grace Mug",
  category: "mugs",
  price: 21,
  verse: "Lamentations 3:22–23",
  image: "/images/mug3.png",
  description: "Mug that reminds you of fresh mercy every morning"
}
];

export default product;
