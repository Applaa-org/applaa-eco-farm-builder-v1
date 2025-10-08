import { useFarm } from '@/context/FarmContext';
import { animals } from '@/data/animals';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const Animals = () => {
  const { state, dispatch } = useFarm();

  const careForAnimal = (animalId: number) => {
    const cost = 50; // Fixed care cost
    dispatch({ type: 'CARE_ANIMAL', animalId, cost });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 flex items-center"><Heart className="mr-2" /> Animal Care</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {animals.map(animal => (
          <Card key={animal.id}>
            <CardHeader>
              <img src={animal.image} alt={animal.name} className="w-full h-32 object-cover rounded-md" />
              <CardTitle>{animal.name}</CardTitle>
              <CardDescription>{animal.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Type: {animal.type}</p>
              <p>Care Needs: Feed {animal.careNeeds.feed}, Water {animal.careNeeds.water}, Health {animal.careNeeds.health}</p>
              <p>Products: {animal.products.map(p => `${p.type} (${p.yield} @ $${p.price})`).join(', ')}</p>
              <p>Sustainability: {animal.sustainabilityScore}/10</p>
              <div className="space-x-2 mt-4">
                <Button onClick={() => careForAnimal(animal.id)} size="sm" variant="outline">Care ($50)</Button>
              </div>
              {state.ownedAnimals[animal.id] && (
                <p className="text-sm text-muted-foreground mt-2">Owned: {state.ownedAnimals[animal.id].quantity}, Health: {state.ownedAnimals[animal.id].health}%</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Animals;