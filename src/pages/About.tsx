import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 flex items-center"><Info className="mr-2" /> About EcoFarm Sim</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>EcoFarm Sim is an educational simulation game that teaches sustainable farming practices. Players manage resources, respond to environmental challenges, and balance profit with ecological impact.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>Dynamic weather and seasonal events</li>
              <li>Realistic crop and animal management</li>
              <li>Fluctuating market prices</li>
              <li>Sustainability scoring system</li>
              <li>Educational content on eco-farming</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;