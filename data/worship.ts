// data/worship.ts
import { IconType } from "react-icons";
import {
  FaMusic,
  FaPrayingHands,
  FaBookOpen,
  FaSpa,
  FaUsers,
} from "react-icons/fa";

export type WorshipCategory = "praise" | "prayer" | "scripture" | "meditation";
export type WorshipCategoryWithAll = WorshipCategory | "all";

export interface WorshipResource {
  id: number;
  title: string;
  category: WorshipCategory;
  duration: string;
  description: string;
  image: string;
  featured: boolean;
  videoUrl?: string;
  icon: IconType;
}

export const worshipCategories: {
  id: WorshipCategoryWithAll;
  name: string;
  icon: IconType;
}[] = [
  { id: "all", name: "All", icon: FaUsers },
  { id: "praise", name: "Praise", icon: FaMusic },
  { id: "prayer", name: "Prayer", icon: FaPrayingHands },
  { id: "scripture", name: "Scripture", icon: FaBookOpen },
  { id: "meditation", name: "Meditation", icon: FaSpa },
];

export const worshipResources: WorshipResource[] = [
  {
    id: 1,
    title: "Morning Praise Session",
    category: "praise",
    duration: "15 min",
    description: "Start your day with uplifting praise and worship songs.",
    image: "/images/praise.jpg",
    featured: true,
    videoUrl: "https://www.youtube.com/embed/j2mjvI5EezM",
    icon: FaMusic,
  },
  {
    id: 2,
    title: "Evening Prayer Guide",
    category: "prayer",
    duration: "20 min",
    description: "End your day in peaceful communion with God.",
    image: "/images/prayer.webp",
    featured: true,
    videoUrl: "https://www.youtube.com/embed/Yt4vMycWvN0",
    icon: FaPrayingHands,
  },
  {
    id: 3,
    title: "Scripture Meditation",
    category: "scripture",
    duration: "10 min",
    description: "Deep meditation on God's word for spiritual growth.",
    image: "/images/scripture.avif",
    featured: true,
    videoUrl: "https://www.youtube.com/embed/BoYVRzX0xZY",
    icon: FaBookOpen,
  },
  {
    id: 4,
    title: "Worship Dance & Movement",
    category: "praise",
    duration: "12 min",
    description: "Express your joy through movement and dance.",
    image: "/images/worship1.jpg",
    featured: false,
    videoUrl: "https://www.youtube.com/embed/-YF8qZXfOuo",
    icon: FaMusic,
  },
  {
    id: 5,
    title: "Silent Contemplation",
    category: "meditation",
    duration: "25 min",
    description: "Find peace in quiet time with the Lord.",
    image: "/images/meditation.jpg",
    featured: false,
    videoUrl: "https://www.youtube.com/embed/8T6rO_bh3oM",
    icon: FaSpa,
  },
  {
    id: 6,
    title: "Community Worship",
    category: "praise",
    duration: "30 min",
    description: "Join together in corporate worship and fellowship.",
    image: "/images/worship2.jpg",
    featured: true,
    videoUrl: "https://www.youtube.com/embed/g6_BLuhr0HQ",
    icon: FaUsers,
  },
];

/** helper */
export function getResourcesByCategory(category: WorshipCategoryWithAll) {
  if (category === "all") return worshipResources;
  return worshipResources.filter((r) => r.category === category);
}
