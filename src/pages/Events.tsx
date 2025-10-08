import { useFarm } from '@/context/FarmContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const Events = () => {
  const { state, dispatch } = useFarm();

  if (!state.currentEvent) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 flex items-center"><Calendar className="mr-2" /> Events</h1>
        <Card>
          <CardHeader>
            <CardTitle>No Active Events</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Check back later for seasonal events and challenges.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 flex items-center"><Calendar className="mr-2" /> Active Event</h1>
      <Card>
        <CardHeader>
          <CardTitle>{state.currentEvent.name}</CardTitle>
          <img src={state.currentEvent.image} alt={state.currentEvent.name} className="w-full h-48 object-cover rounded-md" />
        </CardHeader>
        <CardContent>
          <p className="mb-4">{state.currentEvent.description}</p>
          <div className="space-y-2">
            {state.currentEvent.choices.map((choice, index) => (
              <Button
                key={index}
                onClick={() => dispatch({ type: 'HANDLE_EVENT', choiceIndex: index })}
                variant="outline"
                className="w-full justify-start"
              >
                {choice.text} (Money: {choice.moneyEffect >= 0 ? '+' : ''}${choice.moneyEffect}, Sustainability: {choice.sustainabilityEffect >= 0 ? '+' : ''}{choice.sustainabilityEffect})
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Events;