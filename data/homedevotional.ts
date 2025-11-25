export interface Devotional {
  title: string;
  verse: string;
  slug: string;
  reference: string;
}

export const devotionals: Devotional[] = [
  {
    title: "You Are His",
    verse: "Fear not, for I have redeemed you; I have called you by name, you are mine.",
    slug: "you-are-his",
    reference: "Isaiah 43:1",
  },
  {
    title: "He Cares, So Cast It",
    verse: "Cast all your anxiety on him because he cares for you.",
    slug: "he-cares-so-cast-it",
    reference: "1 Peter 5:7",
  },
  {
    title: "Strength for the Weak",
    verse: "He gives strength to the weary and increases the power of the weak.",
    slug: "strength-for-the-weak",
    reference: "Isaiah 40:29",
  },
  {
    title: "God Goes Before You",
    verse: "The Lord himself goes before you and will be with you; he will never leave you nor forsake you.",
    slug: "god-goes-before-you",
    reference: "Deuteronomy 31:8",
  },
  {
    title: "Peace in Trouble",
    verse: "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.",
    slug: "peace-in-trouble",
    reference: "John 16:33",
  },
  {
    title: "His Grace Is Sufficient",
    verse: "My grace is sufficient for you, for my power is made perfect in weakness.",
    slug: "his-grace-is-sufficient",
    reference: "2 Corinthians 12:9",
  },
];
export default devotionals;