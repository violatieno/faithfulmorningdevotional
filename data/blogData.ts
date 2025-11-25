// /data/blogData.ts

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  relatedLinks?: { title: string; slug: string }[];
  trendingLinks?: { title: string; url: string }[];
}

export const blogData: BlogPost[] = [
  {
    slug: "faith-that-moves-mountains",
    title: "Faith That Moves Mountains",
    date: "October 10, 2025",
    category: "Faith",
    excerpt:
      "Discover how unwavering faith can overcome impossible situations and bring divine breakthrough.",
    image: "/images/blog/faith-mountains.jpg",
    content: `
### Faith That Moves Mountains

When Jesus said, *“If you have faith as small as a mustard seed…”* (Matthew 17:20), He wasn’t exaggerating.  
He was teaching us that faith is not about size, but **focus**. Faith is not measured by how much we have, but by how firmly we anchor it in God’s unchanging nature.

Faith is not passive optimism—it is active trust. It looks beyond what the eyes can see and clings to what God has spoken. Mountains may symbolize impossibilities, fears, or challenges, but they are powerless before faith that is rooted in divine promise.

Even when God seems silent, faith whispers, *“He is still working.”* It refuses to surrender to despair because it knows that heaven’s timing never fails.  
When you speak faith, you give permission for miracles to manifest.

> “Truly I tell you, if you have faith as small as a mustard seed... nothing will be impossible for you.” — Matthew 17:20

The mountain before you may not move instantly, but your heart will. And sometimes, the greatest miracle is not the removal of the mountain, but the **strength to climb it**.
    `,
    relatedLinks: [
      { title: "Trusting God in the Storm", slug: "trusting-god-in-the-storm" },
      { title: "Purpose in Pain", slug: "purpose-in-pain" },
    ],
    trendingLinks: [
      {
        title: "How Faith Works — Desiring God",
        url: "https://www.desiringgod.org/articles/how-faith-works",
      },
      {
        title: "The Power of Faith — Crosswalk",
        url: "https://www.crosswalk.com/faith/",
      },
    ],
  },
  {
    slug: "the-power-of-prayer",
    title: "The Power of Prayer",
    date: "October 11, 2025",
    category: "Prayer",
    excerpt:
      "Prayer is not a ritual — it’s the heartbeat of a relationship with God. Learn how prayer transforms your life from the inside out.",
    image: "/images/blog/power-of-prayer.jpg",
    content: `
### The Power of Prayer

Prayer is heaven’s language of intimacy. It’s not a checklist—it’s communion.  
When we pray, we are not informing God; we are **inviting Him**. Prayer aligns our hearts with His will and releases His purposes on earth.

Sometimes God answers instantly. Other times, He delays—not to deny us, but to **develop us**. Each unanswered prayer trains patience, each delay grows deeper trust.  
Through prayer, we become more like Christ, who withdrew often to commune with the Father.

> “The prayer of a righteous person is powerful and effective.” — James 5:16

Prayer is not just about outcomes—it’s about **overcoming**. When you pray through pain, you are forging strength in the unseen realm.  
Every whispered prayer becomes a seed that heaven waters in its own time.

Let prayer become your first response, not your last resort. Heaven listens even to your sighs.
    `,
    relatedLinks: [
      { title: "Living in Worship", slug: "living-in-worship" },
      { title: "Faith That Moves Mountains", slug: "faith-that-moves-mountains" },
    ],
    trendingLinks: [
      {
        title: "How to Pray Powerfully — Bible Study Tools",
        url: "https://www.biblestudytools.com/bible-study/topical-studies/",
      },
      {
        title: "Prayer That Transforms — Our Daily Bread",
        url: "https://odb.org/",
      },
    ],
  },
  {
    slug: "walking-in-grace",
    title: "Walking in Grace",
    date: "October 12, 2025",
     category: "Grace",
    excerpt:
      "Grace is not permission to fall, but power to rise. Discover the transforming strength of God’s grace in your daily walk.",
    image: "/images/blog/walking-in-grace.jpg",
    content: `
### Walking in Grace

Grace is the heartbeat of redemption—it is God stooping down to lift us up.  
It doesn’t just forgive; it **transforms**. Grace empowers what guilt cannot. It teaches us to say “no” to sin and “yes” to righteousness.

Grace is not cheap—it cost heaven its greatest treasure.  
When Jesus cried *“It is finished”*, grace tore the veil, granting us access to divine fellowship. We walk in grace when we walk in constant awareness that we are accepted, not because of performance, but because of the cross.

> “My grace is sufficient for you, for my power is made perfect in weakness.” — 2 Corinthians 12:9

Grace is the soil where faith grows and the air that sustains freedom.  
When we fail, grace doesn’t point to the fall; it points to the **resurrection**.
    `,
    relatedLinks: [
      { title: "Purpose in Pain", slug: "purpose-in-pain" },
      { title: "Living in Worship", slug: "living-in-worship" },
    ],
    trendingLinks: [
      {
        title: "Understanding Grace — GotQuestions",
        url: "https://www.gotquestions.org/what-is-grace.html",
      },
      {
        title: "Living by Grace — Desiring God",
        url: "https://www.desiringgod.org/topics/grace",
      },
    ],
  },
  {
    slug: "trusting-god-in-the-storm",
    title: "Trusting God in the Storm",
    date: "October 13, 2025",
     category: "Faith",
    excerpt:
      "When life’s storms rage, faith becomes the anchor of the soul. Learn how to find peace when everything feels uncertain.",
    image: "/images/blog/trusting-god-storm.jpg",
    content: `
### Trusting God in the Storm

Faith is not proven in sunshine—it’s proven in storms.  
When winds howl and waves rise, our anchor must be in something unshakable: the faithfulness of God.

The disciples panicked when the waves beat their boat, forgetting that **the storm cannot sink a ship that carries Jesus**.  
When Christ is in your vessel, peace is not the absence of the storm—it is His **presence within it**.

> “Then He arose and rebuked the wind and the raging water; and they ceased, and there was a calm.” — Luke 8:24

Every storm refines us. It exposes idols, reveals fears, and strengthens trust. God does not allow storms to drown us but to **deepen us**.  
You may not control the wind, but you can choose your focus—look to Jesus, and peace will find you.
    `,
    relatedLinks: [
      { title: "Faith That Moves Mountains", slug: "faith-that-moves-mountains" },
      { title: "Purpose in Pain", slug: "purpose-in-pain" },
    ],
    trendingLinks: [
      {
        title: "Finding Peace in Chaos — Crosswalk",
        url: "https://www.crosswalk.com/faith/",
      },
      {
        title: "Trusting God Through Trials — Guideposts",
        url: "https://guideposts.org/",
      },
    ],
  },
  {
    slug: "purpose-in-pain",
    title: "Purpose in Pain",
    date: "October 14, 2025",
    category: "Growth",
    excerpt:
      "Pain often hides purpose. Discover how God uses broken seasons to mold, strengthen, and prepare you for destiny.",
    image: "/images/blog/purpose-in-pain.jpg",
    content: `
### Purpose in Pain

Pain can make us question God’s goodness, yet it often becomes the **classroom of character**.  
God does not waste wounds. Every tear, every disappointment, and every unanswered prayer can be redeemed for eternal purpose.

> “We know that all things work together for good to those who love God.” — Romans 8:28

Your scars may be the very places where His glory shines brightest. Pain breaks pride, builds compassion, and teaches dependence.  
It strips away illusions and leads us back to the Potter’s hands.

When you cannot trace His hand, trust His heart.  
Pain is not punishment—it’s preparation.  
Through brokenness, God builds vessels that can carry His power.
    `,
    relatedLinks: [
      { title: "Walking in Grace", slug: "walking-in-grace" },
      { title: "Trusting God in the Storm", slug: "trusting-god-in-the-storm" },
    ],
    trendingLinks: [
      {
        title: "Finding Purpose in Suffering — Desiring God",
        url: "https://www.desiringgod.org/topics/suffering",
      },
      {
        title: "God’s Purpose in Pain — Bible.org",
        url: "https://bible.org/",
      },
    ],
  },
  {
    slug: "living-in-worship",
    title: "Living in Worship",
    date: "October 15, 2025",
    category: "Worship",
    excerpt:
      "Worship is not just a song — it’s a lifestyle. Learn how to carry God’s presence in every moment of your life.",
    image: "/images/blog/living-in-worship.jpg",
    content: `
### Living in Worship

True worship is not confined to melodies—it’s expressed in **moments**.  
It begins when the heart bows, not just when the music plays. Worship is choosing God’s will over your own in everyday decisions.

> “God is Spirit, and those who worship Him must worship in spirit and truth.” — John 4:24

Worship is the fragrance of a surrendered life.  
It transforms ordinary acts—your work, your service, your silence—into holy offerings.

Living in worship means you carry God’s presence wherever you go.  
You become a living altar—radiating peace, kindness, and reverence. When your life becomes worship, even your pain sings His praise.
    `,
    relatedLinks: [
      { title: "The Power of Prayer", slug: "the-power-of-prayer" },
      { title: "Walking in Grace", slug: "walking-in-grace" },
    ],
    trendingLinks: [
      {
        title: "What Is True Worship? — GotQuestions",
        url: "https://www.gotquestions.org/true-worship.html",
      },
      {
        title: "Living a Life of Worship — Bible Study Tools",
        url: "https://www.biblestudytools.com/",
      },
    ],
  },
];
