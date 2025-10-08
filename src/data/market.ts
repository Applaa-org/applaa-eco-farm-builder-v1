export interface MarketPrice {
  cropId: number;
  animalProduct: string;
  basePrice: number;
  fluctuation: number; // +/- percentage
}

export const initialMarketPrices: MarketPrice[] = [
  { cropId: 1, animalProduct: 'Wheat', basePrice: 2.5, fluctuation: 0.2 },
  { cropId: 2, animalProduct: 'Tomatoes', basePrice: 3.0, fluctuation: 0.15 },
  { cropId: 3, animalProduct: 'Apples', basePrice: 1.8, fluctuation: 0.25 },
  { cropId: 4, animalProduct: 'Kale', basePrice: 4.0, fluctuation: 0.1 },
  { cropId: 5, animalProduct: 'Corn', basePrice: 2.0, fluctuation: 0.3 },
  { cropId: 6, animalProduct: 'Carrots', basePrice: 2.2, fluctuation: 0.18 },
  { cropId: 7, animalProduct: 'Pumpkins', basePrice: 3.5, fluctuation: 0.22 },
  { cropId: 8, animalProduct: 'Lettuce', basePrice: 2.8, fluctuation: 0.12 },
  { cropId: 0, animalProduct: 'Eggs', basePrice: 0.5, fluctuation: 0.1 },
  { cropId: 0, animalProduct: 'Milk', basePrice: 1.2, fluctuation: 0.15 },
  { cropId: 0, animalProduct: 'Wool', basePrice: 3, fluctuation: 0.2 },
  { cropId: 0, animalProduct: 'Meat', basePrice: 5, fluctuation: 0.25 },
];

export function updateMarketPrices(prices: MarketPrice[]): MarketPrice[] {
  return prices.map(price => ({
    ...price,
    basePrice: price.basePrice * (1 + (Math.random() - 0.5) * price.fluctuation * 2)
  }));
}