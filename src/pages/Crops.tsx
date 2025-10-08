import { useFarm } from '@/context/FarmContext';
import { crops } from '@/data/crops';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sprout } from 'lucide-react';

const Crops = () => {
  const { state, dispatch } = useFarm();

  const plantCrop = (cropId: number, quantity: number = 1) => {
    const crop = crops.find(c => c.id === cropId);
    if (crop) {
      const cost = crop.pricePerUnit * quantity;
      dispatch({ type: 'PLANT_CROP', cropId, quantity, cost });
    }
  };

  const harvestCrop = (cropId: number) => {
    const crop = crops.find(c => c.id === cropId);
    if (crop && state.plantedCrops[cropId]?.quantity > 0) {
      dispatch({ type: 'HARVEST_CROP', cropId, yield: crop.yield });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 flex items-center"><Sprout className="mr-2" /> Crops Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {crops.map(crop => (
          <Card key={crop.id}>
            <CardHeader>
              <img src={crop.image} alt={crop.name} className="w-full h-32 object-cover rounded-md" />
              <CardTitle>{crop.name}</CardTitle>
              <CardDescription>{crop.description}</CardDescription>
              <Badge variant={crop.season === state.season ? "default" : "secondary"}>{crop.season} Season</Badge>
            </CardHeader>
            <CardContent>
              <p>Days to Grow: {crop.growthTime}</p>
              <p>Yield: {crop.yield} units</p>
              <p>Price: ${crop.pricePerUnit}/unit</p>
              <p>Sustainability: {crop.sustainabilityScore}/10</p>
              <div className="space-x-2 mt-4">
                <Button onClick={() => plantCrop(crop.id)} size="sm" variant="outline">Plant (1)</Button>
                <Button onClick={() => harvestCrop(crop.id)} size="sm" disabled={!state.plantedCrops[crop.id]}>Harvest</Button>
              </div>
              {state.plantedCrops[crop.id] && (
                <p className="text-sm text-muted-foreground mt-2">Planted: {state.plantedCrops[crop.id].quantity} on Day {state.plantedCrops[crop.id].plantedDay}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Crops;