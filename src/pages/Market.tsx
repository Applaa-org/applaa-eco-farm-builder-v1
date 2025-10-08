import { useFarm } from '@/context/FarmContext';
import { initialMarketPrices } from '@/data/market';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

const Market = () => {
  const { state, dispatch } = useFarm();

  const sellProduct = (product: string, quantity: number = 1) => {
    const price = state.marketPrices.find(p => p.animalProduct.toLowerCase() === product.toLowerCase())?.basePrice || 1;
    dispatch({ type: 'SELL_PRODUCT', product, quantity, price });
  };

  const inventoryItems: [string, number][] = Object.entries(state.inventory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 flex items-center"><ShoppingBag className="mr-2" /> Market</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Current Prices</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {state.marketPrices.map(price => (
                <li key={price.animalProduct} className="flex justify-between">
                  <span>{price.animalProduct}</span>
                  <span>${price.basePrice.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Your Inventory</CardTitle>
          </CardHeader>
          <CardContent>
            {inventoryItems.length > 0 ? (
              <ul className="space-y-2">
                {inventoryItems.map(([product, qty]) => (
                  <li key={product} className="flex justify-between items-center">
                    <span>{product} x{qty}</span>
                    <Button onClick={() => sellProduct(product, 1)} size="sm" variant="outline">Sell 1</Button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No inventory to sell.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Market;