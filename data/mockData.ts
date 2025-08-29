import { TrendingContent, SourcePlatform } from '../types';

export const MOCK_TRENDING_DATA: TrendingContent[] = [
  {
    id: 'yt-1',
    source: SourcePlatform.YouTube,
    title: 'Exploring the Atlas Mountains: A Complete Travel Guide',
    thumbnailUrl: 'https://placehold.co/600x400/3498db/ffffff?text=Atlas+Mountains',
    content: `(Video transcript) Welcome back to our travel channel! Today, we're taking you on an breathtaking journey through Morocco's Atlas Mountains. We start in Imlil, the gateway to Toubkal National Park. The scenery here is dramatic, with snow-capped peaks even in spring. We'll show you the best hiking trails, from easy walks to challenging climbs. We also visit a local Berber village to experience their unique culture and hospitality, sharing a traditional mint tea ceremony. We discuss the best times to visit, what to pack, and how to hire a local guide, which is highly recommended for safety and a richer experience. The video ends with a stunning drone shot of the sunset over the mountains.`,
    videoUrl: 'https://www.youtube.com/',
  },
  {
    id: 'tk-1',
    source: SourcePlatform.TikTok,
    title: 'Viral Tagine Recipe: Quick & Easy',
    thumbnailUrl: 'https://placehold.co/600x400/e74c3c/ffffff?text=Tagine+Recipe',
    content: `(TikTok video description) 🔥 You guys asked for it! Here's my super simple chicken and apricot tagine recipe that you can make in under an hour. First, brown the chicken with onions, ginger, and garlic. Add spices: cumin, coriander, turmeric, and a pinch of cinnamon. Pour in some chicken broth, add dried apricots and chickpeas. Cover and let it simmer for 30-40 minutes. Look at that! So tender. Serve with couscous. #tagine #moroccanfood #easyrecipe #foodtok #tiktokmorocco`,
    videoUrl: 'https://www.tiktok.com/',
  },
  {
    id: 'yt-2',
    source: SourcePlatform.YouTube,
    title: 'The Rise of Moroccan E-commerce Startups',
    thumbnailUrl: 'https://placehold.co/600x400/2ecc71/ffffff?text=Moroccan+Startups',
    content: `(Podcast transcript) In this episode, we're diving into the booming e-commerce scene in Morocco. We speak with the founders of three successful startups that are changing the way Moroccans shop online. They discuss the challenges they faced, from logistics and payment gateways to building consumer trust. A key theme is the importance of localization - adapting their platforms for local languages (Darija), payment preferences (cash on delivery), and cultural nuances. They also share their predictions for the future, highlighting the potential of social commerce and mobile-first strategies. It's a must-listen for any aspiring entrepreneur in the region.`,
    videoUrl: 'https://www.youtube.com/',
  },
  {
    id: 'tk-2',
    source: SourcePlatform.TikTok,
    title: 'A Day in the Life in Chefchaouen',
    thumbnailUrl: 'https://placehold.co/600x400/9b59b6/ffffff?text=Chefchaouen',
    content: `(TikTok video description) Come with me for a perfect day in the Blue Pearl of Morocco, Chefchaouen! 💙 Woke up early to explore the empty blue streets. Grabbed a delicious breakfast at a local cafe. Spent the afternoon shopping for handmade leather goods and carpets in the medina. The highlight was hiking up to the Spanish Mosque for the most incredible sunset view over the city. This place is a dream! #chefchaouen #morocco #travel #bluedream #dayinthelife`,
    videoUrl: 'https://www.tiktok.com/',
  },
];
