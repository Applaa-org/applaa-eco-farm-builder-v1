import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { crops, type Crop } from '@/data/crops';
import { animals, type Animal } from '@/data/animals';
import { initialMarketPrices, updateMarketPrices, type MarketPrice } from '@/data/market';
import { getRandomWeather, type Weather, weatherEvents } from '@/data/weather';
import { getSeasonalEvent, type Event } from '@/data/events';
import { showSuccess, showError } from '@/utils/toast';

interface FarmState {
  money: number;
  sustainability: number;
  day: number;
  season: 'spring' | 'summer' | 'fall' | 'winter';
  weather: Weather;
  currentEvent: Event | null;
  plantedCrops: { [key: number]: { id: number; plantedDay: number; quantity: number } };
  ownedAnimals: { [key: number]: { id: number; health: number; quantity: number } };
  inventory: { [key: string]: number }; // e.g., { 'wheat': 50 }
  marketPrices: MarketPrice[];
}

type FarmAction =
  | { type: 'PLANT_CROP'; cropId: number; quantity: number; cost: number }
  | { type: 'HARVEST_CROP'; cropId: number; yield: number }
  | { type: 'CARE_ANIMAL'; animalId: number; cost: number }
  | { type: 'SELL_PRODUCT'; product: string; quantity: number; price: number }
  | { type: 'HANDLE_EVENT'; choiceIndex: number }
  | { type: 'UPDATE_SIMULATION'; weather: Weather; event: Event | null; prices: MarketPrice[] }
  | { type: 'ADVANCE_DAY' };

const initialState: FarmState = {
  money: 1000,
  sustainability: 50,
  day: 1,
  season: 'spring',
  weather: getRandomWeather(),
  currentEvent: null,
  plantedCrops: {},
  ownedAnimals: {},
  inventory: {},
  marketPrices: initialMarketPrices,
};

function farmReducer(state: FarmState, action: FarmAction): FarmState {
  switch (action.type) {
    case 'PLANT_CROP':
      if (state.money >= action.cost) {
        const existing = state.plantedCrops[action.cropId] || { id: action.cropId, plantedDay: state.day, quantity: 0 };
        return {
          ...state,
          money: state.money - action.cost,
          plantedCrops: { ...state.plantedCrops, [action.cropId]: { ...existing, quantity: existing.quantity + action.quantity } },
          sustainability: Math.min(100, state.sustainability + 1),
        };
      }
      showError('Not enough money!');
      return state;

    case 'HARVEST_CROP':
      const crop = crops.find(c => c.id === action.cropId);
      if (crop) {
        const planted = state.plantedCrops[action.cropId];
        if (planted && state.day - planted.plantedDay >= crop.growthTime) {
          const harvestAmount = action.yield * (weatherEvents[state.weather].sustainabilityImpact > 0 ? 1.2 : 0.8);
          const productKey = crop.name.toLowerCase();
          return {
            ...state,
            inventory: { ...state.inventory, [productKey]: (state.inventory[productKey] || 0) + Math.floor(harvestAmount) },
            plantedCrops: { ...state.plantedCrops, [action.cropId]: { ...planted, quantity: 0 } },
            sustainability: Math.min(100, state.sustainability + crop.sustainabilityScore / 10),
            money: state.money + Math.floor(harvestAmount * state.marketPrices.find(p => p.cropId === action.cropId)?.basePrice || 0),
          };
        }
      }
      showError('Crop not ready!');
      return state;

    case 'CARE_ANIMAL':
      if (state.money >= action.cost) {
        const existingAnimal = state.ownedAnimals[action.animalId] || { id: action.animalId, health: 100, quantity: 0 };
        return {
          ...state,
          money: state.money - action.cost,
          ownedAnimals: { ...state.ownedAnimals, [action.animalId]: { ...existingAnimal, health: Math.min(100, existingAnimal.health + 10), quantity: existingAnimal.quantity || 1 } },
          sustainability: Math.min(100, state.sustainability + 2),
        };
      }
      showError('Not enough money!');
      return state;

    case 'SELL_PRODUCT':
      const currentStock = state.inventory[action.product] || 0;
      if (currentStock >= action.quantity) {
        const saleMoney = action.quantity * action.price;
        const newInventory = { ...state.inventory, [action.product]: currentStock - action.quantity };
        return {
          ...state,
          money: state.money + saleMoney,
          inventory: Object.fromEntries(Object.entries(newInventory).filter(([_, v]) => v > 0)),
          sustainability: Math.min(100, state.sustainability + 1),
        };
      }
      showError('Not enough stock!');
      return state;

    case 'HANDLE_EVENT':
      if (state.currentEvent) {
        const choice = state.currentEvent.choices[action.choiceIndex];
        return {
          ...state,
          money: state.money + choice.moneyEffect + state.currentEvent.impact.money,
          sustainability: Math.min(100, Math.max(0, state.sustainability + choice.sustainabilityEffect + state.currentEvent.impact.sustainability)),
          currentEvent: null,
        };
      }
      return state;

    case 'UPDATE_SIMULATION':
      return {
        ...state,
        weather: action.weather,
        currentEvent: action.event,
        marketPrices: action.prices,
      };

    case 'ADVANCE_DAY':
      const newDay = state.day + 1;
      const seasons = ['spring', 'summer', 'fall', 'winter'];
      const seasonIndex = Math.floor((newDay - 1) / 90) % 4; // 90 days per season
      return { ...state, day: newDay, season: seasons[seasonIndex] as FarmState['season'] };

    default:
      return state;
  }
}

const FarmContext = createContext<{
  state: FarmState;
  dispatch: React.Dispatch<FarmAction>;
  advanceDay: () => void;
} | undefined>(undefined);

export function FarmProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(farmReducer, initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: 'ADVANCE_DAY' });
      const newWeather = getRandomWeather();
      const newEvent = Math.random() < 0.1 ? getSeasonalEvent(state.season) : null; // 10% chance per day
      const newPrices = updateMarketPrices(state.marketPrices);
      dispatch({ type: 'UPDATE_SIMULATION', weather: newWeather, event: newEvent, prices: newPrices });

      if (newWeather === 'pest-infested') showError('Pests detected! Check your crops.');
      if (newEvent) showError(`New event: ${newEvent.name}`);
    }, 10000); // Update every 10 seconds for demo

    return () => clearInterval(interval);
  }, [state.season]);

  const advanceDay = () => dispatch({ type: 'ADVANCE_DAY' });

  return (
    <FarmContext.Provider value={{ state, dispatch, advanceDay }}>
      {children}
    </FarmContext.Provider>
  );
}

export const useFarm = () => {
  const context = useContext(FarmContext);
  if (context === undefined) {
    throw new Error('useFarm must be used within a FarmProvider');
  }
  return context;
};