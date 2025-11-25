export type BibleVersion = 'NIV' | 'KJV' | 'NKJV' | 'NLT' | 'MSG' | 'ESV';
export const BIBLE_VERSIONS: BibleVersion[] = ['NIV', 'KJV', 'NKJV', 'NLT', 'MSG', 'ESV'];
export interface Devotional {
  title: string;
  slug: string;
  reference: string;
  versions: { [version: string]: string };
  reflection: string;
  prayer: string;
  prompt: string;
}
const devotionals: Devotional[] = [
  {
    title: "You Are His",
    slug: "you-are-his",
    versions: {
      NIV: 'Fear not, for I have redeemed you; I have called you by name, you are mine.',
      KJV: 'Fear not: for I have redeemed thee, I have called thee by thy name; thou art mine.',
      NKJV: 'Fear not, for I have redeemed you; I have called you by your name; You are Mine.',
      NLT: 'Do not be afraid, for I have ransomed you. I have called you by name; you are mine.',
      MSG: 'Don’t be afraid, I’ve redeemed you. I’ve called your name. You’re mine.',
      ESV: 'Fear not, for I have redeemed you; I have called you by name, you are mine.'
    },
    reference: 'Isaiah 43:1',
    reflection: `Before you are anything else—a mother, a wife, a boss, a team player, a student, or even a dreamer—you are His.<br><br>The world may label you by what you do or how well you do it. But God calls you something deeper: redeemed, loved, chosen, daughter. He doesn’t need your résumé to validate you. He sees beyond your successes and shortcomings and still calls you by name.<br><br>When life feels overwhelming or work begins to define your worth, come back to this truth: your value is not in what you do, but in whose you are. You are not lost in the crowd. You are not overlooked. Your identity is not rooted in your output. It's rooted in Christ.<br><br>You were not just saved—you were personally called. God knows your name, your gifts, your fears, your dreams—and He’s calling you to walk boldly in both grace and purpose today.<br><br>Let that be your foundation as you rise this morning: You belong to Him.`,
    prayer: `Lord, thank You for calling me by name. Remind me today that I am Yours—fully known, fully loved, and never forgotten. Anchor me in that truth, no matter what today brings. Amen.`,
    prompt: `What labels have you believed that don’t align with who God says you are? Write down one truth about your identity in Christ to carry with you today.`
  },
  {
    title: "Grace Is Enough",
    slug: "grace-is-enough",
    versions: {
      NIV: 'My grace is sufficient for you, for My power is made perfect in weakness.',
      KJV: 'My grace is sufficient for thee: for my strength is made perfect in weakness.',
      NKJV: 'My grace is sufficient for you, for My strength is made perfect in weakness.',
      NLT: 'My grace is all you need. My power works best in weakness.',
      MSG: 'My grace is enough; it’s all you need. My strength comes into its own in your weakness.',
      ESV: 'My grace is sufficient for you, for My power is made perfect in weakness.'
    },
    reference: '2 Corinthians 12:9',
    reflection: `You’ve probably heard it before: “You are enough.” But some days, that phrase feels far from true. The deadlines are too close, your energy is too low, and your heart feels too tired to keep up.<br><br>Here’s the truth: You were never meant to be “enough” on your own. God didn’t create you to hustle your way into worth. His grace meets you right where your strength ends.<br><br>The world may demand perfection. But God invites you to rest—in Him. In your weakness, His strength shows up. In your doubts, His truth still stands. So when you don’t feel enough, remember: Christ in you is more than enough.<br><br>Today, you can breathe. You don’t have to prove anything. Just show up, trust Him, and let grace carry you.`,
    prayer: `Lord, there are moments when I feel like I’m falling short—when I’m trying to hold everything together but quietly breaking on the inside. Thank You for reminding me that I was never meant to be everything. You are my source, my strength, and my sufficiency. Teach me to stop measuring my worth by my productivity and to start resting in Your grace. Help me walk into today not with fear of what I lack, but with faith in what You’ve already provided. When I’m weak, show up strong. When I’m weary, carry me. And when I forget who I am, remind me that I am Yours. In Jesus’ name, amen.`,
    prompt: `Where do you feel like you’re not enough? Write a prayer inviting God’s grace into that space.`
  },
  {
    title: "Rejoice in Today",
    slug: "rejoice-in-today",
    versions: {
      NIV: 'This is the day the Lord has made; let us rejoice and be glad in it.',
      KJV: 'This is the day which the Lord hath made; we will rejoice and be glad in it.',
      NKJV: 'This is the day the Lord has made; We will rejoice and be glad in it.',
      NLT: 'This is the day the Lord has made. We will rejoice and be glad in it.',
      MSG: 'This is the very day God acted—let’s celebrate and be festive!',
      ESV: 'This is the day the Lord has made; let us rejoice and be glad in it.'
    },
    reference: 'Psalm 118:24',
    reflection: `Mornings can feel heavy before the day even starts—emails, responsibilities, and expectations lining up like soldiers at your door. But each morning isn’t just a to-do list—it’s a divine invitation.<br><br>God handcrafted this day. Not yesterday. Not tomorrow. Today. And He placed you in it on purpose.<br><br>Before you check your phone or open your laptop, pause. There is a reason you woke up. Your presence in this day matters to someone. God wants to walk it with you—not just bless your plans, but breathe purpose into them.<br><br>Wake up not to hustle, but to align. Ask God, “What would You have me see, say, or surrender today?”<br><br>That’s a faithful morning.`,
    prayer: `Father, thank You for the gift of this new day. Before the rush begins, I pause to remember that today isn’t an accident—it’s an assignment. You’ve trusted me with time, with people, and with purpose. Help me not to waste it scrolling, stressing, or striving. Instead, teach me to move with intention, listen with compassion, and serve with joy. When interruptions come, help me see them as opportunities. When doubts whisper, drown them out with Your truth. Let this morning be more than just the start of a day—let it be the beginning of something sacred with You. Amen.`,
    prompt: `What is one intentional way you can invite God into your morning routine this week?`
  },
  {
    title: "Work as Worship",
    slug: "work-as-worship",
    versions: {
      NIV: 'Whatever you do, work heartily, as for the Lord and not for men.',
      KJV: 'And whatsoever ye do, do it heartily, as to the Lord, and not unto men;',
      NKJV: 'And whatever you do, do it heartily, as to the Lord and not to men.',
      NLT: 'Work willingly at whatever you do, as though you were working for the Lord rather than for people.',
      MSG: 'Don’t just do the minimum that will get you by. Do your best. Work from the heart for your real Master, for God.',
      ESV: 'Whatever you do, work heartily, as for the Lord and not for men.'
    },
    reference: 'Colossians 3:23',
    reflection: `Work doesn't have to feel holy to be holy. Even the routine tasks—emails, reports, spreadsheets, dishes—can become an offering when done with the right heart.<br><br>You don’t need a title like “Pastor” or “Missionary” to glorify God. You just need faithfulness where you are.<br><br>That meeting? You can show up with kindness.<br>That tough client? You can respond with grace.<br>That long list? You can tackle it with integrity.<br><br>When you dedicate your work to the Lord, it transforms the ordinary into the sacred.<br><br>Let your workspace—be it a desk, kitchen, or construction site—become an altar today.`,
    prayer: `Lord, sometimes my work feels ordinary or unnoticed, but I believe You see every effort, every detail, and every decision. Today, I surrender my work to You—not just the big tasks, but the small, unseen ones too. Transform my labor into worship. Let my attitude reflect gratitude. Let my speech reflect love. Let my excellence reflect Your glory. If frustration rises, give me peace. If pride tempts me, keep me humble. If I feel unappreciated, remind me I work for You. May my hands be diligent, my heart be soft, and my mind stay fixed on You. In all I do, be glorified. In Jesus’ name, amen.`,
    prompt: `What’s one area of your work life that you want to surrender or dedicate to God today?`
  },
  {
    title: "The God Who Sees",
    slug: "the-god-who-sees",
    versions: {
      NIV: 'You are the God who sees me.',
      KJV: 'Thou God seest me.',
      NKJV: 'You-Are-the-God-Who-Sees; for she said, "Have I also here seen Him who sees me?"',
      NLT: 'You are the God who sees me.',
      MSG: 'You’re the God who sees me! “Yes! He saw me; and then I saw him!”',
      ESV: 'You are the God who sees me.'
    },
    reference: 'Genesis 16:13',
    reflection: `You may not get applause for waking up early to get things done. No one might notice how much you carry—at work, at home, in your heart. But there’s One who always sees. His name is El Roi: the God who sees me.<br><br>God saw Hagar in the wilderness. Alone. Rejected. Afraid. And He didn’t ignore her pain—He met her in it.<br><br>In the same way, He sees you. The long hours. The silent tears. The prayers you’re too tired to say out loud. He sees your faithfulness in the mundane, your fight to keep showing up when you’d rather disappear.<br><br>You are never invisible to God. Every detail of your day matters to Him. You are fully known and deeply loved—even in your uncelebrated moments.`,
    prayer: `Lord, thank You for seeing me when I feel unseen. For noticing the small things that no one else does. I invite You into every corner of my day—the messy, the quiet, the strong, and the scared. Remind me that Your eyes are always on me—not to judge, but to love. May I walk through today with the confidence that I am known, valued, and never forgotten. Amen.`,
    prompt: `Where have you felt unseen lately? What would it look like to trust that God sees you there?`
  },
  {
    title: "Fear Doesn't Own You",
    slug: "fear-doesnt-own-you",
    versions: {
      NIV: 'Do not fear, for I am with you.',
      KJV: 'Fear thou not; for I am with thee.',
      NKJV: 'Fear not, for I am with you;',
      NLT: 'Don’t be afraid, for I am with you.',
      MSG: 'Don’t panic. I’m with you.',
      ESV: 'Do not fear, for I am with you.'
    },
    reference: 'Isaiah 41:10',
    reflection: `Fear can be loud. It whispers worst-case scenarios into your ear and tries to freeze your faith. But the presence of God silences fear.<br><br>You are not walking into your challenges alone. The same God who calmed the storm, who closed the lion’s mouths, who split the sea—He’s still walking with you. Still speaking peace.<br><br>Fear may show up, but it doesn’t get to stay. Why? Because perfect love casts out fear. And God’s love for you is perfect—flawless, powerful, present.<br><br>Today, speak back to fear. You don’t belong to it. You belong to peace.`,
    prayer: `Father, fear tries to shrink me—tries to paralyze the faith in me. But I declare today that fear has no place in my life. You are my courage, my strength, my calm in the chaos. When anxiety rises, wrap me in Your peace. When doubts shout, let Your truth speak louder. Remind me that I’m not walking alone, and I never will. In Your love, fear cannot stay. Amen.`,
    prompt: `What fear are you holding onto today? Write a declaration of faith to replace it.`
  },
  {
    title: "Stillness is Strength", 
    slug: "stillness-is-strength",
    versions:{
      NIV: 'Be still, and know that I am God.',
      KJV: 'Be still, and know that I am God.',
      NKJV: 'Be still, and know that I am God;',
      NLT: 'Be still, and know that I am God!',
      MSG: 'Step out of the traffic! Take a long, loving look at me, your High God.',
      ESV: 'Be still, and know that I am God.'
    },
    reference: 'Psalm 46:10',
    reflection: `Stillness can feel counterproductive in a world that praises constant motion. But sometimes, stillness is the most powerful statement of faith. When the noise of life grows loud, when anxiety surges, when decisions loom—pause.<br><br>Stillness is not inactivity. It’s intentional surrender. It’s choosing to listen before reacting. It’s trusting that God is moving even when you are not.<br><br>Let today be a day of less hustle and more holy pause. Make space to hear His whisper.`,
    prayer: `God, in the noise of my schedule and the clutter of my thoughts, teach me to be still. To rest in Your presence without guilt. To release the urge to control and simply trust. Let Your voice be louder than the world’s. Anchor me in Your truth today. Amen.`,
    prompt: `When was the last time you truly sat still with God? Schedule 5 minutes today to simply be still and breathe.`
  },
  {
    title: "Cast It All",
    slug: "cast-it-all",
    versions: {
      NIV: 'Cast all your anxiety on him because he cares for you.',
      KJV: 'Casting all your care upon him; for he careth for you.',
      NKJV: 'Casting all your care upon Him, for He cares for you.',
      NLT: 'Give all your worries and cares to God, for he cares about you.',
      MSG: 'Live carefree before God; he is most careful with you.',
      ESV: 'Casting all your anxieties on him, because he cares for you.'
    },
    reference: '1 Peter 5:7',
    reflection: `You weren’t built to carry everything. That weight on your chest? The tightness in your shoulders? You can set it down. God is not overwhelmed by your worries. He invites them.<br><br>What would happen if you stopped trying to solve it all alone? If you handed Him the fear, the questions, the control? You don’t have to carry what grace already covered.`,
    prayer: `Lord, I lay it all down—every anxious thought, every silent fear. You didn’t ask me to fix it, just to trust You with it. So I release the outcome and lean into Your peace. Carry what I can’t, and calm what I won’t admit aloud. Amen.`,
    prompt: `What anxiety have you been carrying alone? Write it out and release it to God in prayer.`
  },
  {
    title: "Light for the Path",
    slug: "light-for-the-path",
    versions: {
      NIV: 'Your word is a lamp for my feet, a light on my path.',
      KJV: 'Thy word is a lamp unto my feet, and a light unto my path.',
      NKJV: 'Your word is a lamp to my feet And a light to my path.',
      NLT: 'Your word is a lamp to guide my feet and a light for my path.',
      MSG: 'By your words I can see where I’m going; they throw a beam of light on my dark path.',
      ESV: 'Your word is a lamp to my feet and a light to my path.'
    },
    reference: 'Psalm 119:105',
    reflection: `When you're unsure which way to go, when decisions loom and clarity feels distant—God’s Word lights the next step. Not always the full path, but enough to keep walking in trust.<br><br>Don’t wait for perfect conditions. Start with the light you’ve got. Read, trust, and move forward by faith.`,
    prayer: `God, when I feel lost or uncertain, guide me with Your Word. Let it be my compass, my comfort, and my clarity. I may not see the whole road ahead, but I trust You with my next step. Light my path today. Amen.`,
    prompt: `Open your Bible and find one verse to meditate on today. How does it guide your current season?`
  },
  {
    title: "Come and Rest",
    slug: "come-and-rest",
    versions: {
      NIV: 'Come to me, all you who are weary and burdened, and I will give you rest.',
      KJV: 'Come unto me, all ye that labour and are heavy laden, and I will give you rest.',
      NKJV: 'Come to Me, all you who labor and are heavy laden, and I will give you rest.',
      NLT: 'Come to me, all of you who are weary and carry heavy burdens, and I will give you rest.',
      MSG: 'Come to me. Get away with me and you’ll recover your life. I’ll show you how to take a real rest.',
      ESV: 'Come to me, all who labor and are heavy laden, and I will give you rest.'
    },
    reference: 'Matthew 11:28',
    reflection: `You don’t have to earn rest. You don’t have to collapse to deserve it. Jesus invites you to come—to Him. Not when you’ve finished the to-do list. Now.<br><br>He knows the weight you carry. The mental load. The invisible pressure. And He says: Come. Rest isn’t weakness—it’s worship.`,
    prayer: `Jesus, I am tired. Not just in body, but in soul. The noise, the pressure, the performance—it’s too much. Teach me how to rest in You. To step away and find peace again. To be renewed, not just relieved. I come to You now. Give me rest. Amen.`,
    prompt: `What’s one way you can accept God’s invitation to rest today?`
  },
  {
    title: "Trust Beyond Logic",
    slug: "trust-beyond-logic",
    versions: {
      NIV: 'Trust in the Lord with all your heart and lean not on your own understanding;',
      KJV: 'Trust in the Lord with all thine heart; and lean not unto thine own understanding.',
      NKJV: 'Trust in the Lord with all your heart, And lean not on your own understanding;',
      NLT: 'Trust in the Lord with all your heart; do not depend on your own understanding.',
      MSG: 'Trust God from the bottom of your heart; don’t try to figure out everything on your own.',
      ESV: 'Trust in the Lord with all your heart, and do not lean on your own understanding.'
    },
    reference: 'Proverbs 3:5',
    reflection: `Faith often means letting go of logic. Not that faith is foolish—but it moves beyond what makes sense. God’s ways aren’t our ways.<br><br>There will be seasons when you don’t understand the why, but you still know the Who. Trust doesn’t require answers—just surrender.<br><br>Lean not on your own understanding. Lean into Him.`,
    prayer: `Father, some things don’t make sense right now. But instead of forcing my way forward, I choose to trust. You see the full picture when I only see pieces. Give me peace to rest in Your wisdom when mine runs out. Amen.`,
    prompt: `Where are you relying more on understanding than on trust? What would surrender look like in that area?`
  },
  {
    title: "Not Alone in the Valley",
    slug: "not-alone-in-the-valley",
    versions: {
      NIV: 'Even though I walk through the darkest valley, I will fear no evil, for you are with me;',
      KJV: 'Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me;',
      NKJV: 'Yea, though I walk through the valley of the shadow of death, I will fear no evil; For You are with me;',
      NLT: 'Even when I walk through the darkest valley, I will not be afraid, for you are close beside me.',
      MSG: 'Even when the way goes through Death Valley, I’m not afraid when you walk at my side.',
      ESV: 'Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me;'
    },
    reference: 'Psalm 23:4',
    reflection: `Dark seasons don’t mean God has left. In fact, He’s often the closest in our valleys. He walks with us—not watching from a distance, but right beside us.<br><br>You may not feel strong. But you’re not walking alone. Your Shepherd leads you. Through grief. Through stress. Through uncertainty. He will not leave you in the valley.`,
    prayer: `Lord, some days feel dark—too heavy, too long, too hard. But even there, You are with me. Help me remember that valleys don’t last forever and that I am not walking them alone. Your rod and staff comfort me. I trust You to lead me through. Amen.`,
    prompt: `What valley are you currently walking through? Journal a reminder of God’s presence in that place.`
  },
  {
    title: "Plans for Good",
    slug: "plans-for-good",
    versions: {
      NIV: 'For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future.',
      KJV: 'For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end.',
      NKJV: 'For I know the thoughts that I think toward you, says the Lord, thoughts of peace and not of evil, to give you a future and a hope.',
      NLT: 'For I know the plans I have for you,” says the Lord. “They are plans for good and not for disaster, to give you a future and a hope.',
      MSG: 'I know what I’m doing. I have it all planned out—plans to take care of you, not abandon you, plans to give you the future you hope for.',
      ESV: 'For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.'
    },
    reference: 'Jeremiah 29:11',
    reflection: `When the future feels fuzzy, this verse is your anchor. God has a plan—even when you don’t. His plan isn’t to punish, but to prosper. Not to disappoint, but to deliver hope.<br><br>Even when doors close, or detours come, trust this: God is still directing your steps. Your future is not up for grabs—it’s already in His hands.`,
    prayer: `God, thank You that my life is not random. When I feel unsure of the road ahead, remind me that You are the Planner, the Provider, and the Promise-Keeper. Help me trust in Your purpose, even when I can’t yet see it. Give me peace as I wait. Amen.`,
    prompt: `Where in your life do you need to be reminded that God has a plan?`
  },
  {
    title: "Strength and Shield",
    slug: "strength-and-shield",
    versions: {
      NIV: 'The Lord is my strength and my shield; my heart trusts in him, and he helps me.',
      KJV: 'The Lord is my strength and my shield; my heart trusted in him, and I am helped:',
      NKJV: 'The Lord is my strength and my shield; My heart trusted in Him, and I am helped;',
      NLT: 'The Lord is my strength and shield. I trust him with all my heart. He helps me, and my heart is filled with joy.',
      MSG: 'Blessed be God—he heard me praying. He proved he’s on my side; I’ve thrown in my lot with him and now I’m jumping for joy.',
      ESV: 'The Lord is my strength and my shield; in him my heart trusts, and I am helped;'
    },
    reference: 'Psalm 28:7',
    reflection: `Your heart might be tired today. The weight of everything you’re juggling might feel too much. But the Lord is your strength—not your schedule, not your willpower.<br><br>He is also your shield—protecting, defending, covering you.<br><br>Take a breath. Rely on Him. You don’t have to do this alone.`,
    prayer: `Lord, be my strength when I feel weak. Be my shield when life feels like too much. I trust You with what I don’t understand. Fill my heart with peace and my spirit with joy today. Amen.`,
    prompt: `What’s one burden you can shift from your shoulders to God’s today?`
  },
  {
    title: "Perfect Peace of Mind",
    slug: "perfect-peace-of-mind",
    versions: {
      NIV: 'You will keep in perfect peace those whose minds are steadfast, because they trust in you.',
      KJV: 'Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee.',
      NKJV: 'You will keep him in perfect peace, Whose mind is stayed on You, Because he trusts in You.',
      NLT: 'You will keep in perfect peace all who trust in you, all whose thoughts are fixed on you!',
      MSG: 'People with their minds set on you, you keep completely whole, steady on their feet, because they keep at it and don’t quit.',
      ESV: 'You keep him in perfect peace whose mind is stayed on you, because he trusts in you.'
    },
    reference: 'Isaiah 26:3',
    reflection: `Peace isn’t found in circumstances—it’s found in focus. When your thoughts spiral into anxiety or fear, anchor them in truth. Trust redirects your mind.<br><br>Fix your focus today. Not on what’s next or what could go wrong, but on Who is with you.<br><br>Peace is possible—even in pressure.`,
    prayer: `Lord, I long for peace. But my thoughts wander, and my heart races. Still me. Steady me. Help me trust in You with all that’s unsettled. Fix my mind on Your promises and let peace guard my heart. Amen.`,
    prompt: `Where is your focus today? Ask God to help you fix your thoughts on Him.`
  },
  {
    title: "Do It All in Love",
    slug: "do-it-all-in-love",
    versions: {
      NIV: 'Let all that you do be done in love.',
      KJV: 'Let all your things be done with charity.',
      NKJV: 'Let all that you do be done with love.',
      NLT: 'And do everything with love.',
      MSG: 'Do everything with love.',
      ESV: 'Let all that you do be done in love.'
    },
    reference: '1 Corinthians 16:14',
    reflection: `It’s easy to move through life on autopilot—to do what’s required without remembering why. But love is the why. Love makes the difference between routine and worship.<br><br>Whatever you do today—at home, at work, in traffic, in conversations—do it with love.<br><br>That’s where God meets the mundane.`,
    prayer: `Father, I don’t want to go through the motions. Help me do all things today with love—with Your heart guiding my hands and words. Let every act reflect Your grace. Amen.`,
    prompt: `Think of one task today you usually rush through. How can you do it more lovingly?`
  },
  {
    title: "It Will Work Together",
    slug: "it-will-work-together",
    versions: {
      NIV: 'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.',
      KJV: 'And we know that all things work together for good to them that love God, to them who are the called according to his purpose.',
      NKJV: 'And we know that all things work together for good to those who love God, to those who are the called according to His purpose.',
      NLT: 'And we know that God causes everything to work together for the good of those who love God and are called according to his purpose for them.',
      MSG: 'That’s why we can be so sure that every detail in our lives of love for God is worked into something good.',
      ESV: 'And we know that for those who love God all things work together for good, for those who are called according to his purpose.'
    },
    reference: 'Romans 8:28',
    reflection: `Not everything feels good—but everything can be used for good. That’s the promise of Romans 8:28. It doesn’t say all things are good, but that God is working all things for your good.<br><br>Even disappointment. Even delay. Even pain. He is weaving redemption into every detail.<br><br>Today may not make sense—but it’s not wasted.`,
    prayer: `God, thank You that nothing in my life is wasted. Even when I don’t understand, I trust that You are working behind the scenes. Help me see glimpses of Your goodness, even in the hard things. Let hope rise in me again. Amen.`,
    prompt: `What’s one thing in your life you’ve doubted could be used for good? Invite God to redeem it.`
  },
  {
    title: "Sacred Stillness",
    slug: "sacred-stillness",
    versions: {
      NIV: 'Be still, and know that I am God;',
      KJV: 'Be still, and know that I am God:',
      NKJV: 'Be still, and know that I am God;',
      NLT: 'Be still, and know that I am God!',
      MSG: 'Step out of the traffic! Take a long, loving look at me, your High God.',
      ESV: 'Be still, and know that I am God.'
    },
    reference: 'Psalm 46:10',
    reflection: `Stillness is a rare gift in a loud world. We often equate busyness with productivity, noise with importance. But God calls us to the quiet.<br><br>He doesn’t need your hustle—He wants your heart.<br><br>Being still isn’t passive; it’s intentional. It’s making space for His voice over your inner critic, His presence over your to-do list. Today, take five minutes. Be still. Just breathe. Just listen. God is there.`,
    prayer: `Lord, still my heart. Quiet the chaos around me and within me. Teach me to rest in You—not just physically, but spiritually. Let my soul exhale in Your presence. Amen.`,
    prompt: `When was the last time you were truly still before God? What did He whisper?`
  },
  {
    title: "Renewed Strength",
    slug: "renewed-strength",
    versions: {
      NIV: 'But those who hope in the Lord will renew their strength.',
      KJV: 'But they that wait upon the Lord shall renew their strength;',
      NKJV: 'But those who wait on the Lord Shall renew their strength;',
      NLT: 'But those who trust in the Lord will find new strength.',
      MSG: 'But those who wait upon God get fresh strength.',
      ESV: 'But they who wait for the Lord shall renew their strength;'
    },
    reference: 'Isaiah 40:31',
    reflection: `Exhaustion doesn’t always come from doing too much—it often comes from doing too much without God.<br><br>Waiting on the Lord isn’t wasted time; it’s renewing time.<br><br>Your strength will run out. His won’t. Lean on Him today. Not your willpower. Not your schedule. Just Him.<br><br>When you do, strength returns. Hope rises. Wings grow.`,
    prayer: `God, I’m tired—physically, emotionally, spiritually. I need Your strength today. Teach me how to wait on You, how to trust the quiet places where You restore me. Remind me that my limits are where Your power begins. Amen.`,
    prompt: `What’s one area of your life where you’ve been relying on your own strength? Invite God to renew you.`
  },
  {
    title: "The Goodness of God",
    slug: "the-goodness-of-god",
    versions: {
      NIV: 'Taste and see that the Lord is good;',
      KJV: 'O taste and see that the Lord is good:',
      NKJV: 'Oh, taste and see that the Lord is good;',
      NLT: 'Taste and see that the Lord is good.',
      MSG: 'Open your mouth and taste, open your eyes and see—how good God is.',
      ESV: 'Oh, taste and see that the Lord is good!'
    },
    reference: 'Psalm 34:8',
    reflection: `God’s goodness isn’t just something to know—it’s something to experience.<br><br>He invites you to taste it—to try, to trust, to draw near.<br><br>Faith is more than belief; it’s relationship. It’s stepping closer, opening your hands, and receiving the goodness He’s offering you today.<br><br>Don’t settle for distant knowledge. Come and taste.`,
    prayer: `Lord, I want to know You—not just facts about You, but the depth of Your love and kindness. Show me again that You are good. Teach me to delight in You, to run to You first, and to trust that You are enough. Amen.`,
    prompt: `What has God done recently that reminded you He is good? Write it down and thank Him.`
  },
  {
    title: "He Heals the Broken",
    slug: "he-heals-the-broken",
    versions: {
      NIV: 'The Lord is close to the brokenhearted and saves those who are crushed in spirit.',
      KJV: 'The Lord is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.',
      NKJV: 'The Lord is near to those who have a broken heart, And saves such as have a contrite spirit.',
      NLT: 'The Lord is close to the brokenhearted; he rescues those whose spirits are crushed.',
      MSG: 'If your heart is broken, you’ll find God right there; if you’re kicked in the gut, he’ll help you catch your breath.',
      ESV: 'The Lord is near to the brokenhearted and saves the crushed in spirit.'
    },
    reference: 'Psalm 34:18',
    reflection: `Pain doesn’t scare God. He draws near to the brokenhearted—not with shame, but with healing.<br><br>If your spirit feels crushed, don’t hide it. Bring it. God is a gentle Savior, not a harsh critic.<br><br>You don’t have to fix yourself to be near Him. He comes close right where you are.`,
    prayer: `Jesus, some wounds run deep. But You are deeper still. Hold my heart today. Heal what’s broken. Sit with me in the places I don’t even know how to speak about. Thank You for drawing near. Amen.`,
    prompt: `Write a letter to God about something in your heart that still hurts. Let Him hold it with you.`
  },
  {
    title: "Start Me Over",
    slug: "start-me-over",
    versions: {
      NIV: 'Create in me a pure heart, O God, and renew a steadfast spirit within me.',
      KJV: 'Create in me a clean heart, O God; and renew a right spirit within me.',
      NKJV: 'Create in me a clean heart, O God, And renew a steadfast spirit within me.',
      NLT: 'Create in me a clean heart, O God. Renew a loyal spirit within me.',
      MSG: 'God, make a fresh start in me, shape a Genesis week from the chaos of my life.',
      ESV: 'Create in me a clean heart, O God, and renew a right spirit within me.'
    },
    reference: 'Psalm 51:10',
    reflection: `Sometimes you just need a reset. A fresh start. A clean slate.<br><br>David prayed for that—and you can too.<br><br>God is the only one who can truly cleanse your heart and renew your spirit. No self-help plan can replace His grace.<br><br>If you feel weighed down by regret or shame today, lift your prayer to Him. He’s not finished with you.`,
    prayer: `Father, I need a fresh start. Not a better mask—but a true renewal. Create in me a clean heart. Uproot bitterness. Wash away shame. Rebuild my spirit with Your truth. Thank You for mercy that never runs dry. Amen.`,
    prompt: `What part of your life needs a reset? Ask God to start something new today.`
  },
  {
    title: "Sacred Stillness", 
    slug: "sacred-stillness",
    versions: {
      NIV: 'Be still, and know that I am God;',
      KJV: 'Be still, and know that I am God:',
      NKJV: 'Be still, and know that I am God;',
      NLT: 'Be still, and know that I am God!',
      MSG: 'Step out of the traffic! Take a long, loving look at me, your High God.',
      ESV: 'Be still, and know that I am God.'
    },
    reference: 'Psalm 46:10',
    reflection: `Stillness is a rare gift in a loud world. We often equate busyness with productivity, noise with importance. But God calls us to the quiet.<br><br>He doesn’t need your hustle—He wants your heart.<br><br>Being still isn’t passive; it’s intentional. It’s making space for His voice over your inner critic, His presence over your to-do list. Today, take five minutes. Be still. Just breathe. Just listen. God is there.`,
    prayer: `Lord, still my heart. Quiet the chaos around me and within me. Teach me to rest in You—not just physically, but spiritually. Let my soul exhale in Your presence. Amen.`,
    prompt: `When was the last time you were truly still before God? What did He whisper?`
  },
  {
    title:"Renewed Strength",
    slug: "renewed-strength",
    versions: {
      NIV: 'But those who hope in the Lord will renew their strength.',
      KJV: 'But they that wait upon the Lord shall renew their strength;',
      NKJV: 'But those who wait on the Lord Shall renew their strength;',
      NLT: 'But those who trust in the Lord will find new strength.',
      MSG: 'But those who wait upon God get fresh strength.',
      ESV: 'But they who wait for the Lord shall renew their strength;'
    },
    reference: 'Isaiah 40:31',
    reflection: `Exhaustion doesn’t always come from doing too much—it often comes from doing too much without God.<br><br>Waiting on the Lord isn’t wasted time; it’s renewing time.<br><br>Your strength will run out. His won’t. Lean on Him today. Not your willpower. Not your schedule. Just Him.<br><br>When you do, strength returns. Hope rises. Wings grow.`,
    prayer: `God, I’m tired—physically, emotionally, spiritually. I need Your strength today. Teach me how to wait on You, how to trust the quiet places where You restore me. Remind me that my limits are where Your power begins. Amen.`,
    prompt: `What’s one area of your life where you’ve been relying on your own strength? Invite God to renew you.`
  },
  {
    title: "Come and Taste His Goodness",
    slug: "come-and-taste-his-goodness",
    versions: {
      NIV: 'Taste and see that the Lord is good;',
      KJV: 'O taste and see that the Lord is good:',
      NKJV: 'Oh, taste and see that the Lord is good;',
      NLT: 'Taste and see that the Lord is good.',
      MSG: 'Open your mouth and taste, open your eyes and see—how good God is.',
      ESV: 'Oh, taste and see that the Lord is good!'
    },
    reference: 'Psalm 34:8',
    reflection: `God’s goodness isn’t just something to know—it’s something to experience.<br><br>He invites you to taste it—to try, to trust, to draw near.<br><br>Faith is more than belief; it’s relationship. It’s stepping closer, opening your hands, and receiving the goodness He’s offering you today.<br><br>Don’t settle for distant knowledge. Come and taste.`,
    prayer: `Lord, I want to know You—not just facts about You, but the depth of Your love and kindness. Show me again that You are good. Teach me to delight in You, to run to You first, and to trust that You are enough. Amen.`,
    prompt: `What has God done recently that reminded you He is good? Write it down and thank Him.`
  },
  {
    title: "He Heals the Broken",
    slug: "he-heals-the-broken",
    versions: {
      NIV: 'The Lord is close to the brokenhearted and saves those who are crushed in spirit.',
      KJV: 'The Lord is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.',
      NKJV: 'The Lord is near to those who have a broken heart, And saves such as have a contrite spirit.',
      NLT: 'The Lord is close to the brokenhearted; he rescues those whose spirits are crushed.',
      MSG: 'If your heart is broken, you’ll find God right there; if you’re kicked in the gut, he’ll help you catch your breath.',
      ESV: 'The Lord is near to the brokenhearted and saves the crushed in spirit.'
    },
    reference: 'Psalm 34:18',
    reflection: `Pain doesn’t scare God. He draws near to the brokenhearted—not with shame, but with healing.<br><br>If your spirit feels crushed, don’t hide it. Bring it. God is a gentle Savior, not a harsh critic.<br><br>You don’t have to fix yourself to be near Him. He comes close right where you are.`,
    prayer: `Jesus, some wounds run deep. But You are deeper still. Hold my heart today. Heal what’s broken. Sit with me in the places I don’t even know how to speak about. Thank You for drawing near. Amen.`,
    prompt: `Write a letter to God about something in your heart that still hurts. Let Him hold it with you.`
  },
  {
    title: "Start Me Over",
    slug: "start-me-over",
    versions: {
      NIV: 'Create in me a pure heart, O God, and renew a steadfast spirit within me.',
      KJV: 'Create in me a clean heart, O God; and renew a right spirit within me.',
      NKJV: 'Create in me a clean heart, O God, And renew a steadfast spirit within me.',
      NLT: 'Create in me a clean heart, O God. Renew a loyal spirit within me.',
      MSG: 'God, make a fresh start in me, shape a Genesis week from the chaos of my life.',
      ESV: 'Create in me a clean heart, O God, and renew a right spirit within me.'
    },
    reference: 'Psalm 51:10',
    reflection: `Sometimes you just need a reset. A fresh start. A clean slate.<br><br>David prayed for that—and you can too.<br><br>God is the only one who can truly cleanse your heart and renew your spirit. No self-help plan can replace His grace.<br><br>If you feel weighed down by regret or shame today, lift your prayer to Him. He’s not finished with you.`,
    prayer: `Father, I need a fresh start. Not a better mask—but a true renewal. Create in me a clean heart. Uproot bitterness. Wash away shame. Rebuild my spirit with Your truth. Thank You for mercy that never runs dry. Amen.`,
    prompt: `What part of your life needs a reset? Ask God to start something new today.`
 },
  {
    title: "The Shepherd’s Supply",
    slug: "the-shepherds-supply",
    versions: {
      NIV: 'The Lord is my shepherd, I lack nothing.',
      KJV: 'The Lord is my shepherd; I shall not want.',
      NKJV: 'The Lord is my shepherd; I shall not want.',
      NLT: 'The Lord is my shepherd; I have all that I need.',
      MSG: 'God, my shepherd! I don’t need a thing.',
      ESV: 'The Lord is my shepherd; I shall not want.'
    },
    reference: 'Psalm 23:1',
    reflection: `Provision isn’t about abundance—it’s about assurance. When the Lord is your Shepherd, He tends to every need—emotional, spiritual, practical.<br><br>You might not have all you want, but in Him, you have all you truly need. Rest in that truth today.`,
    prayer: `Shepherd of my soul, thank You for knowing what I need—even before I do. Quiet the noise that says I lack, and help me to see how You’re providing in every moment. Lead me today with Your peace. Amen.`,
    prompt: `In what area do you feel lack? Write it down and ask God to shepherd that part of your life.`
  },
  {
    title: "He Cares, So Cast It",
    slug: "he-cares-so-cast-it",
    versions: {
      NIV: 'Cast all your anxiety on him because he cares for you.',
      KJV: 'Casting all your care upon him; for he careth for you.',
      NKJV: 'Casting all your care upon Him, for He cares for you.',
      NLT: 'Give all your worries and cares to God, for he cares about you.',
      MSG: 'Live carefree before God; he is most careful with you.',
      ESV: 'Casting all your anxieties on him, because he cares for you.'
    },
    reference: '1 Peter 5:7',
    reflection: `God doesn’t just tolerate your worries—He invites them. Your anxieties don’t scare Him, burden Him, or bother Him.<br><br>He’s not asking you to carry them. He’s asking you to give them away—to Him.<br><br>Let go today. He can handle it.`,
    prayer: `Lord, You see the weight I carry. Thank You for not asking me to fake it or fix it alone. I cast every fear, every anxious thought, every silent panic into Your hands. Help me trust that You care enough to catch them all. Amen.`,
    prompt: `What anxiety are you carrying today? Write it down, then cross it out as a symbol of giving it to God.`
  },
  {
    title: "Peace is a Person",
    slug: "peace-is-a-person",
    versions: {
      NIV: 'You will keep in perfect peace those whose minds are steadfast, because they trust in you.',
      KJV: 'Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee.',
      NKJV: 'You will keep him in perfect peace, Whose mind is stayed on You, Because he trusts in You.',
      NLT: 'You will keep in perfect peace all who trust in you, all whose thoughts are fixed on you!',
      MSG: 'People with their minds set on you, you keep completely whole, steady on their feet, because they keep at it and don’t quit.',
      ESV: 'You keep him in perfect peace whose mind is stayed on you, because he trusts in you.'
    },
    reference: 'Isaiah 26:3',
    reflection: `Peace isn’t found in a perfect schedule or quiet house. It’s found in a steady mind and a trusting heart.<br><br>When your thoughts run wild, anchor them in God. Fix your gaze, breathe deep, and let His peace settle you again.<br><br>You don’t need control—you need trust.`,
    prayer: `Prince of Peace, calm the chaos inside me. When my thoughts spiral, catch them. When my heart races, still it. Let Your perfect peace guard me today as I fix my eyes on You. Amen.`,
    prompt: `What are you fixing your mind on today? What would it look like to fix it on God instead?`
  },
  {
  title: "Faith That Speaks the Word",
  slug: "faith-that-speaks-the-word",
  versions: {
    NIV: "When Jesus heard this, he was amazed and said to those following him, 'Truly I tell you, I have not found anyone in Israel with such great faith.'",
    KJV: "When Jesus heard it, he marvelled, and said to them that followed, 'Verily I say unto you, I have not found so great faith, no, not in Israel.'",
    NKJV: "When Jesus heard it, He marveled, and said to those who followed, 'Assuredly, I say to you, I have not found such great faith, not even in Israel!'",
    NLT: "When Jesus heard this, he was amazed and said to the people following him, 'I tell you, I have not seen faith like this in all Israel!'",
    MSG: "Hearing this, Jesus was simply stunned. 'I tell you, I have never seen faith like this — not in all of Israel.'",
    ESV: "When Jesus heard this, he marveled and said to those who followed him, 'Truly, I tell you, with no one in Israel have I found such faith.'"
  },
  reference: "Matthew 8:10 (see also Luke 7:1–10)",
  reflection: `The elders thought the centurion \"deserved\" help because of his works — he had given and supported the people. But the centurion himself did not claim merit; he claimed need and trusted Jesus' authority. <br><br>
  His faith was simple and bold: Jesus' word is enough. This story gently corrects the idea that good deeds buy God's favor. Instead, works are fruit — evidence of a heart touched by grace — while healing, mercy, and salvation come by faith. <br><br>
  Let this sink in: God notices our kindness, and people may speak well of our deeds, but what moves heaven is humble, trusting faith that rests on Christ's word.`,
  prayer: `Lord Jesus, teach me the humility of the centurion. Let my life bear good fruit, but keep me reliant on Your word and not my worthiness. Where I am tempted to boast in what I have done, remind me to bow and trust Your authority. Speak Your word over my need today, and give me faith to receive. Amen.`,
  prompt: `When have you relied on your own effort instead of Jesus' word? What would it look like for you to bring your need to Jesus in simple, dependent faith today?`
},
{
  title: "The God Who Sees Me",
  slug: "the-god-who-sees-me",
  versions: {
    NIV: "She gave this name to the Lord who spoke to her: 'You are the God who sees me,' for she said, 'I have now seen the One who sees me.'",
    KJV: "And she called the name of the LORD that spake unto her, Thou God seest me: for she said, Have I also here looked after him that seeth me?",
    NKJV: "Then she called the name of the LORD who spoke to her, You-Are-the-God-Who-Sees; for she said, 'Have I also here seen Him who sees me?'",
    NLT: "Thereafter, Hagar used another name to refer to the Lord, who had spoken to her. She said, 'You are the God who sees me.' She also said, 'Have I truly seen the One who sees me?'",
    MSG: "She answered God by name, praying to the God who spoke to her, 'You’re the God who sees me! Yes! He saw me; and then I saw him!'",
    ESV: "So she called the name of the LORD who spoke to her, 'You are a God of seeing,' for she said, 'Truly here I have seen him who looks after me.'"
  },
  reference: "Genesis 16:13",
  reflection: `Hagar was alone, rejected, and running away — yet God found her in the desert. He called her by name and gave her hope for the future. <br><br>
  We sometimes feel unseen, overlooked, or forgotten, but the God who saw Hagar sees us too. His watch over us is not distant; it is personal and full of care. <br><br>
  Even in the dry places of life, God meets us, calls us by name, and reminds us: "I see you."`,
  prayer: `God who sees me, thank You that I am never invisible to You. When I feel alone or forgotten, remind me that Your eyes are always on me and Your heart is for me. Let me rest in the comfort of being fully known and deeply loved. Amen.`,
  prompt: `Where in your life do you feel unseen right now? How might knowing God sees you change the way you face it today?`
},
{
  title: "Be Still",
  slug: "be-still",
  versions: {
    NIV: "He says, 'Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.'",
    KJV: "Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.",
    NKJV: "Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth!",
    NLT: "'Be still, and know that I am God! I will be honored by every nation. I will be honored throughout the world.'",
    MSG: "Step out of the traffic! Take a long, loving look at me, your High God, above politics, above everything.",
    ESV: "'Be still, and know that I am God. I will be exalted among the nations, I will be exalted in the earth!'"
  },
  reference: "Psalm 46:10",
  reflection: `Life rarely stops moving — the noise, the demands, the constant pressures. But God calls us to pause and remember who He is. <br><br>
  Stillness is not weakness; it is surrender. It is the choice to stop striving and start trusting, to shift our focus from our problems to His power. <br><br>
  In stillness, we find perspective. In stillness, we find peace.`,
  prayer: `Lord, teach me to be still before You. Quiet my restless thoughts and anxious heart. Let me find strength not in my frantic efforts but in the calm assurance that You are in control. Amen.`,
  prompt: `When was the last time you were truly still before God? What might you need to lay down to create space for stillness today?`
},
{
  title: "Strength in Weakness",
  slug: "strength-in-weakness",
  versions: {
    NIV: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ’s power may rest on me.",
    KJV: "And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness. Most gladly therefore will I rather glory in my infirmities, that the power of Christ may rest upon me.",
    NKJV: "And He said to me, 'My grace is sufficient for you, for My strength is made perfect in weakness.' Therefore most gladly I will rather boast in my infirmities, that the power of Christ may rest upon me.",
    NLT: "Each time he said, 'My grace is all you need. My power works best in weakness.' So now I am glad to boast about my weaknesses, so that the power of Christ can work through me.",
    MSG: "My grace is enough; it’s all you need. My strength comes into its own in your weakness. Once I heard that, I was glad to let it happen.",
    ESV: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me."
  },
  reference: "2 Corinthians 12:9",
  reflection: `We often hide our weaknesses, thinking they disqualify us. But God says the opposite — our weaknesses are where His power shines brightest. <br><br>
  Paul learned to embrace his limitations because they became places where Christ's strength could rest on him. <br><br>
  You don't need to have it all together for God to use you. You simply need to bring your weakness to Him and let His grace fill the gap.`,
  prayer: `Lord, thank You that Your strength is greater than my weakness. Help me to stop pretending I have it all together and instead trust You to work through my limitations. Let Your grace and power be seen in my life. Amen.`,
  prompt: `What weakness or limitation are you facing today? How can you invite God to display His strength through it?`
},
{
  title: "Be Still",
  slug: "be-still",
  versions: {
    NIV: "He says, 'Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.'",
    KJV: "Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.",
    NKJV: "Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth!",
    NLT: "'Be still, and know that I am God! I will be honored by every nation. I will be honored throughout the world.'",
    MSG: "Step out of the traffic! Take a long, loving look at me, your High God, above politics, above everything.",
    ESV: "'Be still, and know that I am God. I will be exalted among the nations, I will be exalted in the earth!'"
  },
  reference: "Psalm 46:10",
  reflection: `Life rarely stops moving — the noise, the demands, the constant pressures. But God calls us to pause and remember who He is. <br><br>
  Stillness is not weakness; it is surrender. It is the choice to stop striving and start trusting, to shift our focus from our problems to His power. <br><br>
  In stillness, we find perspective. In stillness, we find peace.`,
  prayer: `Lord, teach me to be still before You. Quiet my restless thoughts and anxious heart. Let me find strength not in my frantic efforts but in the calm assurance that You are in control. Amen.`,
  prompt: `When was the last time you were truly still before God? What might you need to lay down to create space for stillness today?`
},
{
  title: "Strength in Weakness",
  slug: "strength-in-weakness",
  versions: {
    NIV: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ’s power may rest on me.",
    KJV: "And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness. Most gladly therefore will I rather glory in my infirmities, that the power of Christ may rest upon me.",
    NKJV: "And He said to me, 'My grace is sufficient for you, for My strength is made perfect in weakness.' Therefore most gladly I will rather boast in my infirmities, that the power of Christ may rest upon me.",
    NLT: "Each time he said, 'My grace is all you need. My power works best in weakness.' So now I am glad to boast about my weaknesses, so that the power of Christ can work through me.",
    MSG: "My grace is enough; it’s all you need. My strength comes into its own in your weakness. Once I heard that, I was glad to let it happen.",
    ESV: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me."
  },
  reference: "2 Corinthians 12:9",
  reflection: `We often hide our weaknesses, thinking they disqualify us. But God says the opposite — our weaknesses are where His power shines brightest. <br><br>
  Paul learned to embrace his limitations because they became places where Christ's strength could rest on him. <br><br>
  You don't need to have it all together for God to use you. You simply need to bring your weakness to Him and let His grace fill the gap.`,
  prayer: `Lord, thank You that Your strength is greater than my weakness. Help me to stop pretending I have it all together and instead trust You to work through my limitations. Let Your grace and power be seen in my life. Amen.`,
  prompt: `What weakness or limitation are you facing today? How can you invite God to display His strength through it?`
},
{
  title: "Light in the Darkness",
  slug: "light-in-the-darkness",
  versions: {
    NIV: "The light shines in the darkness, and the darkness has not overcome it.",
    KJV: "And the light shineth in darkness; and the darkness comprehended it not.",
    NKJV: "And the light shines in the darkness, and the darkness did not comprehend it.",
    NLT: "The light shines in the darkness, and the darkness can never extinguish it.",
    MSG: "The Life-Light blazed out of the darkness; the darkness couldn’t put it out.",
    ESV: "The light shines in the darkness, and the darkness has not overcome it."
  },
  reference: "John 1:5",
  reflection: `Darkness is loud — it shouts through fear, anxiety, and the brokenness of the world. But it cannot silence the light of Christ. <br><br>
  No matter how heavy the night feels, Jesus' presence cuts through with hope. His light is undefeated, unquenchable, and unchanging. <br><br>
  Even in your darkest season, His light is with you, guiding your next step.`,
  prayer: `Jesus, my Light, shine into the shadows of my life today. Remind me that no darkness can overpower You. Help me to walk in Your light and reflect it to others. Amen.`,
  prompt: `Where do you feel surrounded by darkness right now? How can you invite the light of Jesus into that place?`
},
{
  title: "God’s Mercies Are New",
  slug: "gods-mercies-are-new",
  versions: {
    NIV: "Because of the Lord’s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.",
    KJV: "It is of the LORD'S mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.",
    NKJV: "Through the Lord’s mercies we are not consumed, Because His compassions fail not. They are new every morning; Great is Your faithfulness.",
    NLT: "The faithful love of the Lord never ends! His mercies never cease. Great is his faithfulness; his mercies begin afresh each morning.",
    MSG: "God’s loyal love couldn’t have run out, his merciful love couldn’t have dried up. They’re created new every morning.",
    ESV: "The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness."
  },
  reference: "Lamentations 3:22–23",
  reflection: `Yesterday’s failures do not cancel today’s mercy. Every sunrise is a fresh reminder of God’s unwavering love. <br><br>
  His faithfulness is not seasonal or occasional — it is constant. When we wake up, mercy is already waiting for us. <br><br>
  You don’t have to carry yesterday’s shame into today; God’s compassion is new right now.`,
  prayer: `Lord, thank You that Your mercies are new every morning. Help me to start this day fresh in Your love, without dragging the weight of yesterday. Amen.`,
  prompt: `What burden from yesterday do you need to release so you can walk in today’s mercy?`
},
{
  title: "The Lord Is My Shepherd",
  slug: "the-lord-is-my-shepherd",
  versions: {
    NIV: "The Lord is my shepherd, I lack nothing.",
    KJV: "The LORD is my shepherd; I shall not want.",
    NKJV: "The Lord is my shepherd; I shall not want.",
    NLT: "The Lord is my shepherd; I have all that I need.",
    MSG: "God, my shepherd! I don’t need a thing.",
    ESV: "The LORD is my shepherd; I shall not want."
  },
  reference: "Psalm 23:1",
  reflection: `Sheep can’t lead themselves — they need a shepherd’s voice and care. David begins his psalm by declaring that God Himself is his guide and provider. <br><br>
  When God leads, we lack nothing essential. Even in uncertain seasons, the Shepherd knows the path, the pasture, and the protection we need. <br><br>
  You can rest because your Shepherd never sleeps.`,
  prayer: `Lord, thank You for being my Shepherd. Teach me to follow Your voice, trust Your provision, and rest in Your care. Amen.`,
  prompt: `What is one area of your life where you need to trust the Shepherd’s guidance more fully?`
},
{
  title: "Do Not Be Afraid",
  slug: "do-not-be-afraid",
  versions: {
    NIV: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
    KJV: "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.",
    NKJV: "Fear not, for I am with you; Be not dismayed, for I am your God. I will strengthen you, Yes, I will help you, I will uphold you with My righteous right hand.",
    NLT: "Don’t be afraid, for I am with you. Don’t be discouraged, for I am your God. I will strengthen you and help you. I will hold you up with my victorious right hand.",
    MSG: "Don’t panic. I’m with you. There’s no need to fear for I’m your God. I’ll give you strength. I’ll help you. I’ll hold you steady, keep a firm grip on you.",
    ESV: "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand."
  },
  reference: "Isaiah 41:10",
  reflection: `Fear loses its grip when we remember who is with us. God doesn’t just cheer us on from a distance — He strengthens, helps, and holds us with His own hand. <br><br>
  His presence is the antidote to panic. His grip is the security that steadies us. Whatever comes, we are not alone.`,
  prayer: `Lord, when fear rises, remind me of Your presence. Strengthen my faith, help my heart, and uphold me with Your hand today. Amen.`,
  prompt: `What fear is trying to control you today? How can you respond to it with God’s promise of presence and help?`
},
{
  title: "God Works for Good",
  slug: "god-works-for-good",
  versions: {
    NIV: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    KJV: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
    NKJV: "And we know that all things work together for good to those who love God, to those who are the called according to His purpose.",
    NLT: "And we know that God causes everything to work together for the good of those who love God and are called according to his purpose for them.",
    MSG: "That’s why we can be so sure that every detail in our lives of love for God is worked into something good.",
    ESV: "And we know that for those who love God all things work together for good, for those who are called according to his purpose."
  },
  reference: "Romans 8:28",
  reflection: `Not everything is good, but God works everything for good. Even pain, loss, and disappointment can be transformed by His hand. <br><br>
  His goodness is not dependent on circumstances; it’s woven into the final outcome. Trust that the threads of your life — even the dark ones — are part of a bigger picture.`,
  prayer: `Lord, help me trust You in the messy middle of my story. Remind me that You are weaving it all into something good, even when I can’t see it yet. Amen.`,
  prompt: `What is one situation you can surrender to God today, trusting Him to work it for good?`
},
{
  title: "Wait on the Lord",
  slug: "wait-on-the-lord",
  versions: {
    NIV: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
    KJV: "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.",
    NKJV: "But those who wait on the Lord Shall renew their strength; They shall mount up with wings like eagles, They shall run and not be weary, They shall walk and not faint.",
    NLT: "But those who trust in the Lord will find new strength. They will soar high on wings like eagles. They will run and not grow weary. They will walk and not faint.",
    MSG: "But those who wait upon God get fresh strength. They spread their wings and soar like eagles, They run and don’t get tired, they walk and don’t lag behind.",
    ESV: "But they who wait for the LORD shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint."
  },
  reference: "Isaiah 40:31",
  reflection: `Waiting on God is not passive; it’s an active posture of trust. While the world rushes, those who hope in the Lord find strength that keeps going. <br><br>
  Eagles rise above storms — not by flapping harder, but by catching the wind. Waiting allows God to lift us with His strength, not our own.`,
  prayer: `Lord, teach me to wait on You with hope and trust. Renew my strength today and lift me above the weight of my struggles. Amen.`,
  prompt: `What area of your life needs renewed strength through waiting on God instead of forcing your own way?`
},
{
  title: "God Is Our Refuge",
  slug: "god-is-our-refuge",
  versions: {
    NIV: "God is our refuge and strength, an ever-present help in trouble.",
    KJV: "God is our refuge and strength, a very present help in trouble.",
    NKJV: "God is our refuge and strength, A very present help in trouble.",
    NLT: "God is our refuge and strength, always ready to help in times of trouble.",
    MSG: "God is a safe place to hide, ready to help when we need him.",
    ESV: "God is our refuge and strength, a very present help in trouble."
  },
  reference: "Psalm 46:1",
  reflection: `When life shakes, we need somewhere safe to run — and God Himself is that place. He is not a distant shelter; He is present in our trouble. <br><br>
  Refuge doesn’t mean the storm stops immediately, but it does mean we are secure within His protection.`,
  prayer: `Lord, thank You for being my refuge and my strength. When trouble comes, help me run to You first and trust that I am safe in Your presence. Amen.`,
  prompt: `Where do you usually run when life feels overwhelming? How can you choose to run to God instead?`
},
{
  title: "Wait on the Lord",
  slug: "wait-on-the-lord",
  versions: {
    NIV: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
    KJV: "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.",
    NKJV: "But those who wait on the Lord Shall renew their strength; They shall mount up with wings like eagles, They shall run and not be weary, They shall walk and not faint.",
    NLT: "But those who trust in the Lord will find new strength. They will soar high on wings like eagles. They will run and not grow weary. They will walk and not faint.",
    MSG: "But those who wait upon God get fresh strength. They spread their wings and soar like eagles, They run and don’t get tired, they walk and don’t lag behind.",
    ESV: "But they who wait for the LORD shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint."
  },
  reference: "Isaiah 40:31",
  reflection: `Waiting on God is not passive; it’s an active posture of trust. While the world rushes, those who hope in the Lord find strength that keeps going. <br><br>
  Eagles rise above storms — not by flapping harder, but by catching the wind. Waiting allows God to lift us with His strength, not our own.`,
  prayer: `Lord, teach me to wait on You with hope and trust. Renew my strength today and lift me above the weight of my struggles. Amen.`,
  prompt: `What area of your life needs renewed strength through waiting on God instead of forcing your own way?`
},
{
  title: "The God of the Impossible",
  slug: "the-god-of-the-impossible",
  versions: {
    NIV: "Jesus looked at them and said, 'With man this is impossible, but with God all things are possible.'",
    KJV: "But Jesus beheld them, and said unto them, 'With men this is impossible; but with God all things are possible.'",
    NKJV: "But Jesus looked at them and said to them, 'With men this is impossible, but with God all things are possible.'",
    NLT: "Jesus looked at them intently and said, 'Humanly speaking, it is impossible. But with God everything is possible.'",
    MSG: "Then Jesus said, 'What is humanly possible is only a drop in the bucket compared to what God can do.'",
    ESV: "But Jesus looked at them and said, 'With man this is impossible, but with God all things are possible.'"
  },
  reference: "Matthew 19:26",
  reflection: `Science shows us how the world usually behaves — its patterns, limits, and regularities. But the gospel points us to a God whose creative authority is not bound by usual patterns. <br><br>
  When Jesus says, "with God all things are possible," He invites us to trust a reality beyond what our senses or calculations can prove. Miracles are not chaos; they are windows into the sovereign Designer acting in His world. <br><br>
  You may stand before a closed door that human hands cannot open. Remember: the One who flung stars into orbit is the same One who can open that door by a word.`,
  prayer: `Lord of heaven and earth, forgive my small-faith calculations. Teach me to pray big prayers that reflect Your limitless power. Where I see impossibility, give me expectancy. Amen.`,
  prompt: `What situation feels impossible right now? Will you bring it to God today and ask Him to do what only He can?`
},
{
  title: "Creator Above Creation",
  slug: "creator-above-creation",
  versions: {
    NIV: "In the beginning God created the heavens and the earth.",
    KJV: "In the beginning God created the heaven and the earth.",
    NKJV: "In the beginning God created the heavens and the earth.",
    NLT: "In the beginning God created the heavens and the earth.",
    MSG: "First this: God created the Heavens and Earth—all you see, all you don't see.",
    ESV: "In the beginning, God created the heavens and the earth."
  },
  reference: "Genesis 1:1",
  reflection: `Science explores the "how" of the world — the processes, patterns, and laws that hold creation together. But the Bible begins with a bolder claim: there is a Person behind the processes. <br><br>
  When we say God created the heavens and the earth, we remind ourselves that natural laws have an Author. This does not make science irrelevant; it gives science meaning. The laws reveal order because the Lawgiver is orderly. <br><br>
  Remember: studying creation can deepen worship, because the more we learn about the universe, the more reason we have to praise the One who made it.`,
  prayer: `Lord, thank You for the gift of your creation and for the minds to study it. Help me to see scientific discovery as a path that leads to greater worship of You, the Creator above all. Keep my curiosity humble and my wonder holy. Amen.`,
  prompt: `What part of creation has recently reminded you of God's power and wisdom? How can that discovery lead you into worship today?`
},
{
  title: "Miracles That Reveal",
  slug: "miracles-that-reveal",
  versions: {
    NIV: "This beginning of signs Jesus did in Cana of Galilee, and manifested his glory; and his disciples believed in him.",
    KJV: "This beginning of miracles did Jesus in Cana of Galilee, and manifested forth his glory; and his disciples believed on him.",
    NKJV: "This beginning of signs Jesus did in Cana of Galilee, and manifested His glory; and His disciples believed in Him.",
    NLT: "This miraculous sign at Cana in Galilee was the first time Jesus revealed his glory. And his disciples believed in him.",
    MSG: "This first sign Jesus gave revealed his glory, and his disciples began to trust him.",
    ESV: "This, the first of his signs, Jesus did at Cana in Galilee, and manifested his glory. And his disciples believed in him."
  },
  reference: "John 2:11",
  reflection: `Miracles are not merely rule-breaking events for spectacle; they are signs pointing to who God is. In turning water into wine, Jesus revealed His glory and gave the disciples reason to believe. <br><br>
  Science names patterns and predicts outcomes; miracles name purpose and reveal presence. They call us beyond explanation into encounter. When the impossible happens, faith has a place to stand — not because the unknown became known, but because the knower stepped in. <br><br>
  Let miracles remind you that God is near, not distant from your need.`,
  prayer: `Lord Jesus, thank You for signs that point to Your glory. Open my eyes to see Your hand at work — in the ordinary and in the extraordinary. Give me faith to trust You when human explanation falls short. Amen.`,
  prompt: `Where in your life do you need a sign that points to God's presence? How will you welcome God to move beyond what you understand?`
}
];
export default devotionals;
