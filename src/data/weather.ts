export type Weather = 'sunny' | 'rainy' | 'stormy' | 'drought' | 'pest-infested';

export const weatherEvents: { [key in Weather]: { description: string; effect: string; sustainabilityImpact: number } } = {
  sunny: { description: "Clear skies boost growth.", effect: "Crops grow 20% faster.", sustainabilityImpact: 1 },
  rainy: { description: "Gentle rain nourishes the soil.", effect: "Reduces watering needs.", sustainabilityImpact: 2 },
  stormy: { description: "Heavy storms damage crops.", effect: "10% crop loss risk.", sustainabilityImpact: -2 },
  drought: { description: "Dry spell stresses plants.", effect: "Increases watering costs.", sustainabilityImpact: -1 },
  'pest-infested': { description: "Pests invade the fields.", effect: "Requires treatment, potential yield loss.", sustainabilityImpact: -3 }
};

export function getRandomWeather(): Weather {
  const weathers: Weather[] = ['sunny', 'rainy', 'stormy', 'drought', 'pest-infested'];
  return weathers[Math.floor(Math.random() * weathers.length)] as Weather;
}