export interface Event {
  id: number;
  season: 'spring' | 'summer' | 'fall' | 'winter';
  name: string;
  description: string;
  impact: { money: number; sustainability: number };
  choices: Array<{ text: string; moneyEffect: number; sustainabilityEffect: number }>;
  image: string;
}

export const seasonalEvents: Event[] = [
  {
    id: 1,
    season: 'spring',
    name: "Early Frost",
    description: "An unexpected frost threatens young plants. What do you do?",
    impact: { money: -50, sustainability: -1 },
    choices: [
      { text: "Cover crops (costs $100)", moneyEffect: -100, sustainabilityEffect: 3 },
      { text: "Do nothing", moneyEffect: 0, sustainabilityEffect: -2 },
      { text: "Use organic heaters ($200)", moneyEffect: -200, sustainabilityEffect: 5 }
    ],
    image: "https://picsum.photos/400/200?random=17"
  },
  {
    id: 2,
    season: 'summer',
    name: "Heatwave",
    description: "Scorching heat wilts crops. How to respond?",
    impact: { money: -30, sustainability: -1 },
    choices: [
      { text: "Install shade nets ($150)", moneyEffect: -150, sustainabilityEffect: 2 },
      { text: "Increase irrigation", moneyEffect: -50, sustainabilityEffect: 1 },
      { text: "Switch to drought-resistant seeds ($80)", moneyEffect: -80, sustainabilityEffect: 4 }
    ],
    image: "https://picsum.photos/400/200?random=18"
  },
  {
    id: 3,
    season: 'fall',
    name: "Bountiful Harvest Festival",
    description: "Local market fair offers premium prices. Participate?",
    impact: { money: 200, sustainability: 2 },
    choices: [
      { text: "Set up a booth ($100 setup)", moneyEffect: 300, sustainabilityEffect: 3 },
      { text: "Donate produce to community", moneyEffect: 0, sustainabilityEffect: 5 },
      { text: "Skip and store for winter", moneyEffect: 100, sustainabilityEffect: 1 }
    ],
    image: "https://picsum.photos/400/200?random=19"
  },
  {
    id: 4,
    season: 'winter',
    name: "Snowstorm",
    description: "Blizzard blocks access to barns. Prepare animals?",
    impact: { money: -40, sustainability: -1 },
    choices: [
      { text: "Stock extra feed ($120)", moneyEffect: -120, sustainabilityEffect: 2 },
      { text: "Insulate shelters ($200)", moneyEffect: -200, sustainabilityEffect: 4 },
      { text: "Rely on reserves", moneyEffect: 0, sustainabilityEffect: -3 }
    ],
    image: "https://picsum.photos/400/200?random=20"
  },
  {
    id: 5,
    season: 'spring',
    name: "Pest Outbreak",
    description: "Insects swarm the fields. Treatment options?",
    impact: { money: -60, sustainability: -2 },
    choices: [
      { text: "Natural predators ($90)", moneyEffect: -90, sustainabilityEffect: 3 },
      { text: "Chemical spray ($50)", moneyEffect: -50, sustainabilityEffect: -1 },
      { text: "Crop rotation", moneyEffect: -20, sustainabilityEffect: 4 }
    ],
    image: "https://picsum.photos/400/200?random=21"
  },
  {
    id: 6,
    season: 'summer',
    name: "River Flood",
    description: "Nearby river overflows, risking erosion.",
    impact: { money: -80, sustainability: -2 },
    choices: [
      { text: "Build levees ($250)", moneyEffect: -250, sustainabilityEffect: 5 },
      { text: "Plant flood-resistant barriers ($100)", moneyEffect: -100, sustainabilityEffect: 3 },
      { text: "Evacuate livestock", moneyEffect: -30, sustainabilityEffect: 1 }
    ],
    image: "https://picsum.photos/400/200?random=22"
  },
  {
    id: 7,
    season: 'fall',
    name: "Market Boom",
    description: "Demand spikes for organic goods. Sell now?",
    impact: { money: 150, sustainability: 1 },
    choices: [
      { text: "Bulk sell ($0)", moneyEffect: 250, sustainabilityEffect: 0 },
      { text: "Certify organic ($150 fee)", moneyEffect: 100, sustainabilityEffect: 4 },
      { text: "Hold for better prices", moneyEffect: 50, sustainabilityEffect: 2 }
    ],
    image: "https://picsum.photos/400/200?random=23"
  },
  {
    id: 8,
    season: 'winter',
    name: "Eco-Grant Opportunity",
    description: "Government offers grants for sustainable upgrades.",
    impact: { money: 300, sustainability: 3 },
    choices: [
      { text: "Apply for solar panels ($0)", moneyEffect: 500, sustainabilityEffect: 5 },
      { text: "Upgrade composting ($100)", moneyEffect: 200, sustainabilityEffect: 4 },
      { text: "Decline", moneyEffect: 0, sustainabilityEffect: 0 }
    ],
    image: "https://picsum.photos/400/200?random=24"
  }
];

export function getSeasonalEvent(season: 'spring' | 'summer' | 'fall' | 'winter'): Event | null {
  const eventsForSeason = seasonalEvents.filter(e => e.season === season);
  if (eventsForSeason.length > 0) {
    return eventsForSeason[Math.floor(Math.random() * eventsForSeason.length)];
  }
  return null;
}