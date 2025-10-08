export interface Crop {
  id: number;
  name: string;
  season: 'spring' | 'summer' | 'fall' | 'winter';
  growthTime: number; // days
  yield: number; // units per harvest
  pricePerUnit: number;
  sustainabilityScore: number; // 1-10
  image: string;
  description: string;
}

export const crops: Crop[] = [
  {
    id: 1,
    name: "Wheat",
    season: 'spring',
    growthTime: 90,
    yield: 50,
    pricePerUnit: 2.5,
    sustainabilityScore: 8,
    image: "https://picsum.photos/200/150?random=1",
    description: "Hardy spring crop that thrives in moderate climates, providing staple grains for eco-friendly farming."
  },
  {
    id: 2,
    name: "Tomatoes",
    season: 'summer',
    growthTime: 60,
    yield: 30,
    pricePerUnit: 3.0,
    sustainabilityScore: 7,
    image: "https://picsum.photos/200/150?random=2",
    description: "Vibrant summer vines that require consistent watering but yield juicy, nutrient-rich fruits."
  },
  {
    id: 3,
    name: "Apples",
    season: 'fall',
    growthTime: 120,
    yield: 40,
    pricePerUnit: 1.8,
    sustainabilityScore: 9,
    image: "https://picsum.photos/200/150?random=3",
    description: "Orchard staple for autumn harvest, promoting biodiversity with long-term tree planting."
  },
  {
    id: 4,
    name: "Kale",
    season: 'winter',
    growthTime: 45,
    yield: 25,
    pricePerUnit: 4.0,
    sustainabilityScore: 10,
    image: "https://picsum.photos/200/150?random=4",
    description: "Cold-resistant leafy green that's easy to grow year-round in sustainable rotations."
  },
  {
    id: 5,
    name: "Corn",
    season: 'summer',
    growthTime: 75,
    yield: 60,
    pricePerUnit: 2.0,
    sustainabilityScore: 6,
    image: "https://picsum.photos/200/150?random=5",
    description: "Tall summer stalks that provide versatile feed but need soil enrichment to avoid depletion."
  },
  {
    id: 6,
    name: "Carrots",
    season: 'spring',
    growthTime: 70,
    yield: 35,
    pricePerUnit: 2.2,
    sustainabilityScore: 8,
    image: "https://picsum.photos/200/150?random=6",
    description: "Root vegetable perfect for spring planting, improving soil health with deep roots."
  },
  {
    id: 7,
    name: "Pumpkins",
    season: 'fall',
    growthTime: 100,
    yield: 20,
    pricePerUnit: 3.5,
    sustainabilityScore: 7,
    image: "https://picsum.photos/200/150?random=7",
    description: "Hearty fall gourds that add variety and can be used for animal feed or market sales."
  },
  {
    id: 8,
    name: "Lettuce",
    season: 'spring',
    growthTime: 30,
    yield: 40,
    pricePerUnit: 2.8,
    sustainabilityScore: 9,
    image: "https://picsum.photos/200/150?random=8",
    description: "Quick-growing greens ideal for beginner farmers, supporting water-efficient practices."
  }
];