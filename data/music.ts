export interface Song {
  id: number;
  title: string;
  artist: string;
  image: string;
  audioUrl: string;
}

export const songs: Song[] = [
  {
    id: 1,
    title: "How Great Thou Art",
    artist: "Traditional Hymn",
    image: "/images/music/how-great-thou-art.png",
    audioUrl: "https://youtu.be/EnQ1zJbG95c?si=EVjItC6pVmzsk_OU"
  },
  {
    id: 2,
    title: "Blessed Be Your Name",
    artist: "Matt Redman",
    image: "/images/music/blessed-be.jpg",
    audioUrl: "https://youtu.be/0fudMFN9M8s?si=voxbwOarAZxRavaO"
  },
  {
    id: 3,
    title: "In the Secret",
    artist: "Andy Park",
    image: "/images/music/in-the-secret.jpg",
    audioUrl: "https://youtu.be/AbCEmK7DyHY?si=xBvKfJTeGmyfOpCi"
  },
  {
    id: 4,
    title: "10,000 Reasons",
    artist: "Matt Redman",
    image: "/images/music/10000-reasons.jpeg",
    audioUrl: "https://youtu.be/DXDGE_lRI0E?si=rnXQLff7TT_caagV"
  },
  {
    id: 5,
    title: "Cornerstone",
    artist: "Hillsong",
    image: "/images/music/cornerstone.jpg",
    audioUrl: "https://youtu.be/izrk-erhDdk?si=Kba9mc7iHKHMBDcT"
  },
  {
    id: 6,
    title: "Amazing Grace",
    artist: "Traditional",
    image: "/images/music/amazing-grace.jpg",
    audioUrl: "https://youtu.be/RLfOHwI6hcw?si=4EKmFVR_P0gQ4b5m"
  }
];

export const musicText: { [key: number]: { scripture: string; reflection: string; why: string } } = {
  1: {
    scripture: "O Lord, our Lord, how majestic is your name in all the earth! - Psalm 8:1",
    reflection: "This hymn captures the wonder of God's creation...",
    why: "It reminds us of God's greatness revealed in nature..."
  },
  // Add entries for other songs...
};