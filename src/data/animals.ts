export interface Animal {
  id: number;
  name: string;
  type: 'chicken' | 'cow' | 'sheep' | 'goat' | 'pig' | 'duck' | 'horse' | 'rabbit';
  careNeeds: { feed: number; water: number; health: number }; // daily requirements (1-10 scale)
  products: { type: string; yield: number; price: number }[];
  sustainabilityScore: number; // 1-10
  image: string;
  description: string;
}

export const animals: Animal[] = [
  {
    id: 1,
    name: "Chicken",
    type: 'chicken',
    careNeeds: { feed: 3, water: 2, health: 4 },
    products: [{ type: 'Eggs', yield: 6, price: 0.5 }, { type: 'Meat', yield: 2, price: 5 }],
    sustainabilityScore: 8,
    image: "https://picsum.photos/200/150?random=9",
    description: "Free-range birds that provide daily eggs and promote pest control in the fields."
  },
  {
    id: 2,
    name: "Dairy Cow",
    type: 'cow',
    careNeeds: { feed: 8, water: 7, health: 6 },
    products: [{ type: 'Milk', yield: 20, price: 1.2 }],
    sustainabilityScore: 7,
    image: "https://picsum.photos/200/150?random=10",
    description: "Gentle grazers that produce milk while fertilizing pastures naturally."
  },
  {
    id: 3,
    name: "Sheep",
    type: 'sheep',
    careNeeds: { feed: 5, water: 4, health: 5 },
    products: [{ type: 'Wool', yield: 10, price: 3 }, { type: 'Meat', yield: 15, price: 6 }],
    sustainabilityScore: 9,
    image: "https://picsum.photos/200/150?random=11",
    description: "Woolly companions that maintain grasslands and offer renewable fiber."
  },
  {
    id: 4,
    name: "Goat",
    type: 'goat',
    careNeeds: { feed: 4, water: 3, health: 4 },
    products: [{ type: 'Milk', yield: 15, price: 1.5 }, { type: 'Cheese', yield: 5, price: 4 }],
    sustainabilityScore: 8,
    image: "https://picsum.photos/200/150?random=12",
    description: "Agile browsers that clear brush and provide versatile dairy products."
  },
  {
    id: 5,
    name: "Pig",
    type: 'pig',
    careNeeds: { feed: 7, water: 6, health: 5 },
    products: [{ type: 'Meat', yield: 25, price: 4 }],
    sustainabilityScore: 6,
    image: "https://picsum.photos/200/150?random=13",
    description: "Efficient foragers that turn scraps into high-value protein, but need space."
  },
  {
    id: 6,
    name: "Duck",
    type: 'duck',
    careNeeds: { feed: 3, water: 5, health: 3 },
    products: [{ type: 'Eggs', yield: 8, price: 0.6 }],
    sustainabilityScore: 7,
    image: "https://picsum.photos/200/150?random=14",
    description: "Water-loving fowl that control slugs and add variety to poultry operations."
  },
  {
    id: 7,
    name: "Horse",
    type: 'horse',
    careNeeds: { feed: 9, water: 8, health: 7 },
    products: [{ type: 'Labor', yield: 1, price: 10 }], // Represents plowing/field work
    sustainabilityScore: 9,
    image: "https://picsum.photos/200/150?random=15",
    description: "Strong workhorses that reduce machinery needs for eco-tilling."
  },
  {
    id: 8,
    name: "Rabbit",
    type: 'rabbit',
    careNeeds: { feed: 2, water: 2, health: 3 },
    products: [{ type: 'Meat', yield: 3, price: 7 }, { type: 'Fur', yield: 1, price: 5 }],
    sustainabilityScore: 8,
    image: "https://picsum.photos/200/150?random=16",
    description: "Compact breeders that multiply quickly and use minimal resources."
  }
];