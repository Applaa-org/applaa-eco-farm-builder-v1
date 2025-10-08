import { useFarm } from '@/context/FarmContext';
import { MadeWithApplaa } from '@/components/made-with-applaa';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sprout, Heart, ShoppingBag, CloudSun, Calendar } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const Index = () => {
  const { state, advanceDay } = useFarm();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Money</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${state.money.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sustainability</CardTitle>
            <Sprout className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{state.sustainability}%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Day</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Day {state.day}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Season</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold capitalize">{state.season}</div>
          </CardContent>
        </Card>
      </div>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Current Weather</CardTitle>
          <CardDescription>{state.weather} - Day {state.day}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={advanceDay} variant="outline">Advance Day</Button>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/crops">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Manage Crops</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Plant and harvest seasonal crops.</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/animals">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Care for Animals</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Feed and maintain your livestock.</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/market">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Visit Market</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Sell products and check prices.</p>
            </CardContent>
          </Card>
        </Link>
      </div>
      <MadeWithApplaa />
    </div>
  );
};

export default Index;